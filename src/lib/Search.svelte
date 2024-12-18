<script>
   let {title = $bindable()} = $props()
   let mouseEnter = $state(false);
   // let title = $state("");
   let expand = $derived(title.length || mouseEnter ? true : false);
</script>

<div
   class="cursor-pointer flex justify-content-center w-fit"
   role="button"
   tabindex="0"
   onmouseenter={() => (mouseEnter = true)}
   onmouseleave={() => (mouseEnter = false)}
>
   <span class="material-symbols-outlined text-4xl absolute"> search </span>
   <input
      type="text"
      name="title"
      id="title"
      class="bg-white shadow-elevated_shadow text-2xl rounded-lg ps-9 transition-all ease-in-out duration-1000 p-1"
      style="width: {expand ? '100%' : '20%'}"
      bind:value={title}
   />
</div>

<style></style>
