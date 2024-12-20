<script>
   import { fade, fly } from "svelte/transition";
   import { dataNotes, isNavbarOpen } from "../../stores/notes.svelte";
   import { link } from "svelte-spa-router";
   function close() {
      isNavbarOpen.set(false);
   }
   let date = new Date();

   let notesToShow = $derived.by(() => $dataNotes.slice(0, 3));

   let showRecentNotes = $state(false);
</script>

{#if $isNavbarOpen}
   <aside
      class="text-white absolute left-0 top-0 h-full w-1/6 z-10 rounded-r-2xl px-4 text-lg"
      in:fly={{ x: "-100%", duration: 750, opacity: 1 }}
      out:fly={{ x: "-100%", duration: 750, opacity: 1 }}
   >
      <button onclick={close} class="w-full text-right mt-10 text-4xl">
         <span class="material-symbols-outlined"> arrow_back_ios </span>
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
         <div class="flex gap-3 items-center mb-1">
            <span class="material-symbols-outlined text-3xl"> home </span>
            <a class="hover:underline" href="/" use:link>Home</a>
         </div>
         <button
            class="flex gap-3 items-center mb-1"
            onclick={() => (showRecentNotes = !showRecentNotes)}
         >
            <span class="material-symbols-outlined text-3xl">
               description
            </span>
            <p class="hover:underline">Recent Note</p>
         </button>
         {#if showRecentNotes}
            <ul class="ml-10 text-sm" in:fade={{duration:500}} out:fade={{duration:500}}>
               {#each notesToShow as note}
                  <li class="hover:list-disc">
                     <a href="/note/{note.notaID}" use:link>{note.titulo}</a>
                  </li>
               {/each}
            </ul>
         {/if}
         <div class="flex gap-3 items-center mb-1">
            <span class="material-symbols-outlined text-3xl">
               history
            </span>
            <a class="hover:underline" href="/history" use:link>History</a>
         </div>
         <div class="flex gap-3 items-center mb-1">
            <span class="material-symbols-outlined text-3xl">
               note_add
            </span>
            <a class="hover:underline" href="/note" use:link>New Note</a>
         </div>
      </nav>
   </aside>
{/if}

<style>
   aside {
      background-color: #333;
   }
</style>
