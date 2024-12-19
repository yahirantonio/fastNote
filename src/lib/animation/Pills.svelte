<script>
   import { fly } from "svelte/transition";

   let duration = 1000;
</script>

<div class="mb-10 flex justify-center gap-6 text-white">
   <div class="bg-red-600 pills" in:fly={{ x: 150, duration }}>
      <p>Por hacer</p>
   </div>
   <div class="bg-green-600 pills" in:fly={{ x: 0, duration }}>
      <p>Por hacer</p>
   </div>
   <div class="bg-blue-600 pills" in:fly={{ x: -150, duration }}>
      <p>Por hacer</p>
   </div>
</div>

<style>
   .pills {
      border-radius: 20px;
      padding: 0.5rem 1rem;
      font-size: 1.25rem;
      font-weight: 600;
      box-shadow: 0px 10px 40px -5px rgba(0, 0, 0, 0.25);
   }
</style>
