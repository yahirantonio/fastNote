<script>
   import Fuse from "fuse.js";
   import Date from "../lib/Date.svelte";
   import Hamburguer from "../lib/Hamburguer.svelte";
   import NoteCard from "../lib/NoteCard.svelte";
   import { dataNotes } from "../stores/notes.svelte";
   import Navbar from "./shared/Navbar.svelte";

   const fuseOptions = {
      keys: ["titulo", "etiqueta"],
   };

   let date = $state("");
   let titulo = $state("");
   let etiqueta = $state("");
   let stages = $state([]);

   let notesToShow = $derived.by(() => {
      let notes = $dataNotes;
      if (date.length) notes = notes.filter((note) => note.fecha == date);
      
      if (stages.length > 0) {
         notes = notes.filter((note) => stages.includes(note.estadoID));
      }
      
      if (titulo.length == 0 && etiqueta.length == 0) return notes;
      let query = { $and: [] };

      if (etiqueta.length > 0) {
         query.$and.push({
            $path: ["etiqueta"],
            $val: etiqueta,
         });
      }

      if (titulo.length > 0) {
         query.$and.push({
            $path: ["titulo"],
            $val: titulo,
         });
      }

      const fuse = new Fuse(notes, fuseOptions);
      let resultado = fuse.search(query);

      return resultado.map((value) => value.item);
   });
</script>

<header class="flex justify-between w-100 pt-3">
   <div class="flex-none mr-20">
      <Hamburguer />
   </div>
</header>

<Navbar />

<h1 class="font-berkshire_swash text-4xl text-center my-10">History</h1>

<form action="none" class="w-2/12 float-left">
   <div class="flex flex-col mb-6">
      <label for="titulo" class="font-lato text-lg font-medium mb-3"
         >Titulo:</label
      >
      <input
         type="text"
         name="titulo"
         id="title"
         bind:value={titulo}
         class="shadow-elevated_shadow rounded-lg text-xl"
      />
   </div>

   <div class="flex flex-col mb-6">
      <label for="fecha" class="font-lato text-lg font-medium mb-3"
         >Fecha:</label
      >
      <Date bind:date />
   </div>

   <div class="flex flex-col mb-6 items-start">
      <label for="estado" class="font-lato text-lg font-medium mb-3"
         >Estado:</label
      >
      <label for="porhacer">
         <input
            type="checkbox"
            name="porhacer"
            id="porhacer"
            bind:group={stages}
            value={2}
         />
         Por Hacer
      </label>
      <label for="hecho">
         <input
            type="checkbox"
            name="hecho"
            id="hecho"
            bind:group={stages}
            value={1}
         />
         Hecho
      </label>
      <label for="haciendo">
         <input
            type="checkbox"
            name="haciendo"
            id="haciendo"
            bind:group={stages}
            value={0}
         />
         Haciendo
      </label>
   </div>

   <div class="flex flex-col mb-6">
      <label for="fecha" class="font-lato text-lg font-medium mb-3"
         >Etiqueta:</label
      >
      <input
         type="text"
         name="etiqueta"
         id="etiqueta"
         class="text-xl bg-transparent border-b-2 border-zinc-300"
         bind:value={etiqueta}
      />
   </div>
</form>

<div class="flex flex-wrap gap-3 justify-end pb-10">
   {#each notesToShow as note}
      <NoteCard {...note} />
   {/each}
</div>

<style>
</style>
