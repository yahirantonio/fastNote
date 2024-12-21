<script>
   import { onMount, untrack } from "svelte";
   import Date from "../lib/Date.svelte";
   import Hamburguer from "../lib/Hamburguer.svelte";
   import { dataNotes, states } from "../stores/notes.svelte";
   import Navbar from "./shared/Navbar.svelte";
   import Quill from "quill";
   import "quill/dist/quill.snow.css";
   import { dropNote, postNote, putNote } from "../utils/api";
   import { replace } from "svelte-spa-router";

   const { params } = $props();
   const id = $derived(params.id);

   let quill;

   onMount(() => {
      quill = new Quill("#editor", { theme: "snow" });
   });

   let date = $state("");

   let initialNote = {
      titulo: "Titulo...",
      texto: "Escribir algo....",
      etiqueta: "Personal",
      fecha: "",
      content: { ops: [{ insert: "Escribir algo....\n" }] },
      estadoID: 0,
   };

   let nota = $state(initialNote);

   $effect(() => {
      id;
      untrack(() => {
         if (id)
            nota = $dataNotes.find((note) => note.notaID == id) ?? initialNote;
         // push to #/note
         else nota = initialNote;
         quill.setContents(nota.content.ops);
      });
   });

   let blockSaveButton = $derived.by(() => {
      let block = true;
      if (id) {
         let compare;
         compare = $dataNotes.find((note) => note.notaID == id);
         block = Object.keys(nota).every((value) => {
            if (value === "content") {
               return (
                  JSON.stringify(nota.content.ops) ==
                  JSON.stringify(compare.content.ops)
               );
            } else return nota[value] == compare[value];
         });
      } else block = false;
      return block;
   });

   function saveNote() {
      if (id) putNote(nota);
      else postNote(nota);
   }

   function deleteNote() {
      if (id) {
         dropNote(nota.notaID);
         replace("/")
      } else replace("/");
   }

   // $inspect($dataNotes);
</script>

<header class="flex justify-between w-100 pt-3">
   <div class="flex-none mr-20">
      <Hamburguer />
   </div>
   <div class="flex-none">
      <Date bind:date />
   </div>
</header>

<Navbar />

<h1 class="font-berkshire_swash text-4xl text-center my-10">Nota</h1>
<input
   type="text"
   name="titulo"
   id="title"
   bind:value={nota.titulo}
   class="shadow-elevated_shadow rounded-lg text-xl"
/>
<input
   type="text"
   name="etiqueta"
   id="etiqueta"
   bind:value={nota.etiqueta}
   class="shadow-elevated_shadow rounded-lg text-xl"
/>

<select name="estado" id="estado" bind:value={nota.estadoID}>
   {#each $states as state}
      <option value={state.estadoID}>{state.estado}</option>
   {/each}
</select>

<div class="my-10"></div>

<div id="editor" class="bg-white"></div>

<div class="flex gap-6 justify-end mt-6">
   <button
      class="bg-red-600 rounded-md px-3 py-1 text-white font-montserrat text-lg"
      onclick={deleteNote}>Delete</button
   >
   <button
      class="disabled:bg-gray-600 hover:bg-green-500 bg-green-600 rounded-md px-3 py-1 text-white font-montserrat text-lg"
      disabled={blockSaveButton}
      onclick={saveNote}>Save</button
   >
</div>

<style lang="postcss">
</style>
