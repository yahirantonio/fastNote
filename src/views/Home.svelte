<script>
   import Date from "../lib/Date.svelte";
   import Hamburguer from "../lib/Hamburguer.svelte";
   import Search from "../lib/Search.svelte";
   import NoteCard from "../lib/NoteCard.svelte";
   import { dataNotes, today } from "../stores/notes.svelte";
   import Fuse from "fuse.js";
    import Pills from "../lib/animation/Pills.svelte";
    import Navbar from "./shared/Navbar.svelte";

   const fuseOptions = {
      keys: ["titulo"],
   };

   let title = $state("");
   let date = $state(today);

   let notesShow = $derived.by(() => {
      let notes;
      if(date.length) notes = $dataNotes.filter(note => note.fecha == date)
      notes = notes.slice(0, 5);

      const fuse = new Fuse(notes, fuseOptions);
      return title.length
         ? fuse.search(title).map((values) => values.item)
         : notes;
   });

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
      <Search bind:title />
   </div>
   <div class="flex-none">
      <Date bind:date />
   </div>
</header>

<Navbar />

<h1 class="font-berkshire_swash text-4xl text-center my-10">Home</h1>

<Pills />

<div class="flex justify-evenly">
   {#each notesShow as notes, i}
      <div
         style:margin-left={notesShow.length > 3 && i > 0 ? '-150px' : "0px" }
         style:z-index={i == noteSelected ? 99 : peakSequence[i]}
         role="button"
         tabindex="0"
         onmouseenter={() => (noteSelected = i)}
         onmouseleave={() => (noteSelected = null)}
      >
         <NoteCard {...notes} />
      </div>
   {/each}
</div>
