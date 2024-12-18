<script>
   import Date from "../lib/Date.svelte";
   import Hamburguer from "../lib/Hamburguer.svelte";
   import Search from "../lib/Search.svelte";
   import Note from "../lib/Note.svelte";
   import { dataNotes } from "../stores/notes.svelte";

   let notesShow = $dataNotes.slice(0, 5);

   let noteSelected = $state(null);

   let peakSequence = $derived.by(() => {
      let length = notesShow.length;
      let half = Math.round(notesShow.length / 2);
      let rest = length - half;
      let sequence = Array.from({ length: length }, (_, i) =>
         i < half ? i + 1 : rest--,
      );
      return sequence;
   });
</script>

<header class="flex justify-between w-100 pt-3">
   <div class="flex-none mr-20">
      <Hamburguer />
   </div>
   <div class="flex-1">
      <Search />
   </div>
   <div class="flex-none">
      <Date />
   </div>
</header>

<h1 class="font-berkshire_swash text-4xl text-center my-10">Home</h1>

<div class="flex justify-center">
   {#each notesShow as notes, i}
      <div
         style:margin-left={i == 0 ? "0px" : "-150px"}
         style:z-index={i == noteSelected ? 99 : peakSequence[i]}
         role="button"
         tabindex="0"
         onmouseenter={() => (noteSelected = i)}
         onmouseleave={() => (noteSelected = null)}
         
      >
         <Note {...notes} />
      </div>
   {/each}
</div>