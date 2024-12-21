<script>
   import { push } from "svelte-spa-router";

   const {
      notaID,
      titulo = "sin titulo...",
      texto = "sin texto...",
      fecha = new Date(),
      etiqueta = "no tag",
      estadoID = 0,
   } = $props();

   let isSelected = $state(false);

   function limitText(text) {
      return text.length > 250 ? text.slice(0, 250) + "..." : text;
   }

   function goToNote() {
      push("/note/" + notaID);
   }
</script>

<div
   class="bg-white rounded-xl shadow-{estadoID} p-4 w-80 h-80 flex flex-col transition-all duration-1000"
   id="card"
   role="button"
   tabindex="0"
   onmouseenter={() => (isSelected = true)}
   onmouseleave={() => (isSelected = false)}
   style={isSelected && "transform: scale(1.2);"}
   onclick={goToNote}
   onkeydown={(e) => e.key === "Enter" && goToNote()}
>
   <div>
      <h2 class="font-lato text-2xl font-bold mb-3">{titulo}</h2>
   </div>
   <div class="flex-1">
      <p class="font-montserrat text-sm mb-10">{limitText(texto)}</p>
   </div>
   <div class="flex justify-between">
      <p class="font-montserrat text-sm">{fecha}</p>
      <div>
         <p class="font-montserrat text-xs">{etiqueta}</p>
      </div>
   </div>
</div>

<style>
   .shadow-0 {
      box-shadow: 0px 10px 40px -5px rgba(153, 253, 255, 0.5);
   }

   .shadow-1 {
      box-shadow: 0px 10px 40px -5px rgba(184, 255, 153, 0.5);
   }

   .shadow-2 {
      box-shadow: 0px 10px 40px -5px rgba(255, 153, 153, 0.5);
   }
</style>
