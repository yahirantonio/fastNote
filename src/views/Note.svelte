<script>
   import Date from "../lib/Date.svelte";
   import Hamburguer from "../lib/Hamburguer.svelte";
    import { dataNotes } from "../stores/notes.svelte";

   const { params } = $props();
   const id = $derived(params.id)
   let date = $state("");

   let nota = $state({
      "titulo": "Titulo...",
      "texto": "Escribir algo....",
      "etiqueta": "Personal",
      "fecha": date,
      "content": { ops: [{ insert: 'Escribir algo....\n' }] },
      "estadoID": 0
   })

   let titulo = {
      get value() {
         return $dataNotes.find(note => note.notaID == id)?.titulo ?? nota.titulo
      },
      set value(v) {
         nota.titulo = v
      }
   }

   $inspect(nota)
</script>

<header class="flex justify-between w-100 pt-3">
   <div class="flex-none mr-20">
      <Hamburguer />
   </div>
   <div class="flex-none">
      <Date bind:date />
   </div>
</header>

<h1 class="font-berkshire_swash text-4xl text-center my-10">Nota</h1>
<input
   type="text"
   name="titulo"
   id="title"
   bind:value={titulo.value}
   class="shadow-elevated_shadow rounded-lg text-xl"
/>

<style lang="postcss">
</style>
