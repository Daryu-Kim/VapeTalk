<script lang="ts">
    import HomePage from "./pages/Home.svelte";
    import AboutPage from "./pages/About/index.svelte";
    import Router from "svelte-spa-router";
    import NotFound from "./pages/NotFound.svelte";

    export const routes = {
        '/': HomePage,
        '/about': AboutPage,
        '/*': NotFound,
    };
</script>

<main>
    <Router {routes} />
</main>

<style></style>
