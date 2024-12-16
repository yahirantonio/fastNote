<script>
   import Date from "../lib/Date.svelte";
   import Hamburguer from "../lib/Hamburguer.svelte";
   import Search from "../lib/Search.svelte";
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

<h1 class="font-berkshire_swash text-4xl text-center mt-10">Home</h1>

<style lang="postcss">
</style>
