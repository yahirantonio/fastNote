<script>
   import { onMount, untrack } from "svelte";
   import Date from "../lib/Date.svelte";
   import Hamburguer from "../lib/Hamburguer.svelte";
   import { dataNotes, states, today } from "../stores/notes.svelte";
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
      quill.on("text-change", () => {
         nota.content = quill.getContents();
      });
   });

   let initialNote = {
      titulo: "Titulo...",
      texto: "Escribir algo....",
      etiqueta: "Personal",
      fecha: today,
      content: { ops: [{ insert: "Escribir algo....\n" }] },
      estadoID: 0,
   };

   let nota = $state(initialNote);

   $effect(() => {
      id;
      untrack(() => {
         if (id >= 0){
            nota = $dataNotes.find((note) => note.notaID == id);
            if (!nota) {
               nota = initialNote;
               replace("/note/");
            }
         }
         else nota = initialNote;
         quill.setContents(nota.content.ops);
      });
   });

   $inspect($dataNotes)

   let blockSaveButton = $derived.by(() => {
      let block = true;
      let compare = $dataNotes.find((note) => note.notaID == id);
      if (id && compare) {
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
      nota.texto = quill.getSemanticHTML();
      if (id) putNote({ ...nota });
      else {
         const notaID = postNote(nota);
         replace("/note/" + notaID);
      }
   }

   function deleteNote() {
      if (id) {
         dropNote(nota.notaID);
         replace("/");
      } else replace("/");
   }

</script>

<header class="flex justify-between w-100 pt-3">
   <div class="flex-none mr-20">
      <Hamburguer />
   </div>
   <div class="flex-none">
      <Date bind:date={nota.fecha} />
   </div>
</header>

<Navbar />

<h1 class="font-berkshire_swash text-4xl text-center my-10">Nota</h1>

<div class="grid grid-cols-3 gap-3">
   <div class="flex flex-col">
      <label for="Titulo" class="font-lato text-lg font-medium mb-3"
         >Titulo:</label
      >
      <input
         type="text"
         name="titulo"
         id="title"
         bind:value={nota.titulo}
         class="shadow-elevated_shadow rounded-lg text-xl pl-2"
      />
   </div>
   <div class="flex flex-col">
      <label for="Etiqueta" class="font-lato text-lg font-medium mb-3"
         >Etiqueta:</label
      >
      <input
         type="text"
         name="etiqueta"
         id="etiqueta"
         bind:value={nota.etiqueta}
         class="shadow-elevated_shadow rounded-lg text-xl pl-2"
      />
   </div>

   <div class="flex flex-col">
      <label for="Estado" class="font-lato text-lg font-medium mb-3"
         >Estado:</label
      >
      <select
         name="estado"
         id="estado"
         bind:value={nota.estadoID}
         class="pl-2 text-xl rounded-lg"
      >
         {#each $states as state}
            <option value={state.estadoID}>{state.estado}</option>
         {/each}
      </select>
   </div>
</div>

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
