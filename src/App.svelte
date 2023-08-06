<script lang="ts">
    import SplashRoute from "./routes/Splash/index.svelte";
    import AboutPage from "./routes/About/index.svelte";
    import Router from "svelte-spa-router";
    import NotFound from "./routes/NotFound.svelte";

    export const routes = {
        '/': SplashRoute,
        '/about': AboutPage,
        '/*': NotFound,
    };
</script>

<main>
    <Router {routes} />
</main>

<style></style>
