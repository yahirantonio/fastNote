<script>
   import {isNavbarOpen} from '../stores/notes.svelte'
   function open(){
      isNavbarOpen.set(true)
   }
</script>

<button onclick={open}>
   <span class="material-symbols-outlined expand"> menu </span>
</button>

<style>
   .expand {
      font-size: 2.5rem;
   }
</style>
