<script>
   import { fly } from "svelte/transition";

   let duration = 1000;
</script>

<div class="mb-10 flex justify-center gap-6 text-white">
   <div class="shadow-2 pills" in:fly={{ x: 150, duration }}>
      <p>Por Hacer</p>
   </div>
   <div class="shadow-1 pills" in:fly={{ x: 0, duration }}>
      <p>Hecho</p>
   </div>
   <div class="shadow-0 pills" in:fly={{ x: -150, duration }}>
      <p>En Progreso</p>
   </div>
</div>

<style>
   .pills {
      border-radius: 20px;
      padding: 0.5rem 1rem;
      font-size: 1.25rem;
      font-weight: 600;
      box-shadow: 0px 10px 40px -5px rgba(0, 0, 0, 0.25);
      min-width: 120px;
      text-align: center;
   }

   .shadow-0 {
      background-color: #28C9CC;
   }

   .shadow-1 {
      background-color: #52CF1B;
   }

   .shadow-2 {
      background-color: #DE4C4C;
   }
</style>
