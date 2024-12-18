<script>
   const {
      notaID,
      titulo = "sin titulo...",
      texto = "sin texto...",
      fecha = new Date(),
      tag = "no tag",
   } = $props();

   let isSelected = $state(false);

   function limitText (text) {
      return (text.length > 250)? text.slice(0,250) + "..." : text;
   }
</script>

<div
   class="bg-white rounded-xl shadow-elevated_shadow p-4 w-80 h-80 flex flex-col transition-all duration-1000"
   id="card"
   role="button"
   tabindex="0"
   onmouseenter={() => isSelected = true}
   onmouseleave={() => isSelected = false}
   style={isSelected && 'transform: scale(1.2);'}
>
   <div>
      <h2 class="font-lato text-2xl font-bold mb-3">{titulo}</h2>
   </div>
   <div class="flex-1">
      <p class="font-montserrat text-sm mb-10">{limitText(texto)}</p>
   </div>
   <div class="flex content-between">
      <p class="font-montserrat text-sm">{fecha}</p>
      <div>
         <p class="font-montserrat text-xs">{tag}</p>
      </div>
   </div>
</div>
