<script>
   import flatpickr from "flatpickr";
   import { onMount } from "svelte";
   import "flatpickr/dist/themes/dark.css";

   let date;
   onMount(() => {
      flatpickr(date, {
         wrap: true
      });
   });
</script>

<div class="flatpickr w-fit flex flex-direction-center" bind:this={date}>
   <span class="material-symbols-outlined absolute text-white"> calendar_today </span>
   <input type="text" name="" id="" data-input class="bg-black rounded-md cursor-pointer text-white ps-8"/>
   <span class="material-symbols-outlined relative text-white right-7"> keyboard_arrow_up </span>
</div>
