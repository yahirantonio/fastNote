<script>
   import flatpickr from "flatpickr";
   import { onMount } from "svelte";
   import "flatpickr/dist/themes/dark.css";

   let date;
   onMount(() => {
      flatpickr(date, {
         wrap: true,
         defaultDate: new Date()
      });
   });
</script>

<div class="flatpickr w-fit flex flex-direction-center relative h-full" bind:this={date}>
   <span class="material-symbols-outlined absolute text-white text-4xl left-2 top-1"> calendar_today </span>
   <input type="text" name="" id="" data-input class="bg-black rounded-md cursor-pointer text-white ps-16 p-1 text-xl h-full w-60"/>
   <span class="material-symbols-outlined absolute text-white right-2 top-1 text-4xl"> keyboard_arrow_up </span>
</div>
