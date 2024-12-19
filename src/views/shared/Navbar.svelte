<script>
   let date = new Date();
</script>

<aside
   class="text-white absolute left-0 top-0 h-full w-1/6 z-10 rounded-r-2xl px-4 text-lg"
>
   <span class="material-symbols-outlined w-full text-right mt-10 text-4xl">
      arrow_back_ios
   </span>
   <div class="flex justify-between items-end">
      <img src="https://picsum.photos/60/60" alt="user" class="rounded-full" />
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
         <span class="material-symbols-outlined text-3xl mb-2"> description </span>
         <p>Recent Note</p>
      </div>
      <div class="flex gap-3">
         <span class="material-symbols-outlined text-3xl mb-2"> history </span>
         <p>History</p>
      </div>
      <div class="flex gap-3">
         <span class="material-symbols-outlined text-3xl mb-2"> note_add </span>
         <p>New Note</p>
      </div>
   </nav>
</aside>

<style>
   aside {
      background-color: #333;
   }
</style>
