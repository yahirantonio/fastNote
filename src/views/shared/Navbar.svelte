<script>
   import { fly } from "svelte/transition";
   import { isNavbarOpen } from "../../stores/notes.svelte";
   function close(){
      isNavbarOpen.set(false)
   }
   let date = new Date();
</script>

{#if $isNavbarOpen}
   <aside
      class="text-white absolute left-0 top-0 h-full w-1/6 z-10 rounded-r-2xl px-4 text-lg"
      in:fly={{ x: '-100%', duration: 750, opacity:1 }}
      out:fly={{ x: '-100%', duration: 750, opacity: 1 }}
   >
   <button onclick={close} class="w-full text-right mt-10 text-4xl">
      <span class="material-symbols-outlined">
         arrow_back_ios
      </span>
   </button>
      <div class="flex justify-between items-end">
         <img
            src="https://picsum.photos/60/60"
            alt="user"
            class="rounded-full"
         />
         <p class="">Juan Alvarado</p>
      </div>
      <div
         class="flex my-6 justify-between items-center border-y-2 px-3 py-1 border-cyan-400 font-lato"
      >
         <p>{date.toLocaleString("default", { month: "long" })}</p>
         <p>{date.getDate()}</p>
         <p>{date.getFullYear()}</p>
      </div>
      <nav class="font-montserrat">
         <div class="flex gap-3 items-center">
            <span class="material-symbols-outlined text-3xl mb-2"> home </span>
            <p>Home</p>
         </div>
         <div class="flex gap-3">
            <span class="material-symbols-outlined text-3xl mb-2">
               description
            </span>
            <p>Recent Note</p>
         </div>
         <div class="flex gap-3">
            <span class="material-symbols-outlined text-3xl mb-2">
               history
            </span>
            <p>History</p>
         </div>
         <div class="flex gap-3">
            <span class="material-symbols-outlined text-3xl mb-2">
               note_add
            </span>
            <p>New Note</p>
         </div>
      </nav>
   </aside>
{/if}

<style>
   aside {
      background-color: #333;
   }
</style>
