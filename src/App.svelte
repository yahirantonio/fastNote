<script>
  import Router from "svelte-spa-router";
  import routes from "./routes/routes";
</script>

<div id="body" class="min-h-screen min-w-full px-20">
  <Router {routes} />
</div>

<style>
  #body {
    background: linear-gradient(
      to bottom right,
      #fff,
      #E5E5E5
    );
  }
</style>
