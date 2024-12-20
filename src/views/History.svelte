<script>
   import Date from "../lib/Date.svelte";
   import Hamburguer from "../lib/Hamburguer.svelte";
    import NoteCard from "../lib/NoteCard.svelte";
    import { dataNotes } from "../stores/notes.svelte";

   let date = $state("");
</script>

<header class="flex justify-between w-100 pt-3">
   <div class="flex-none mr-20">
      <Hamburguer />
   </div>
</header>

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
         <input type="checkbox" name="porhacer" id="porhacer" />
         Por Hacer
      </label>
      <label for="hecho">
         <input type="checkbox" name="hecho" id="hecho" />
         Hecho
      </label>
      <label for="haciendo">
         <input type="checkbox" name="haciendo" id="haciendo" />
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
      />
   </div>
</form>

<div class="flex flex-wrap gap-3 justify-end">
   {#each $dataNotes as note}
      <NoteCard {...note}/>
   {/each}
</div>

<style>
</style>
