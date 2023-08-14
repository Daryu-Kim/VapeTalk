<script lang="ts">
    import SplashRoute from "./views/Splash.svelte";
    import AboutPage from "./views/About.svelte";
    import Router from "svelte-spa-router";
    import NotFound from "./views/NotFound.svelte";
    import LoginPage from "./views/Login.svelte";
    import {FlatToast, ToastContainer} from "svelte-toasts";
    import JoinPage from "./views/Join.svelte";

    export const routes = {
        '/': SplashRoute,
        '/about': AboutPage,
        '/login': LoginPage,
        '/join': JoinPage,
        '/*': NotFound,
    };
</script>

<main>
    <Router {routes}/>
    <ToastContainer id="asdf" let:data={data}>
        <FlatToast {data}/>
    </ToastContainer>
</main>

<style lang="scss">
  main {
    position: relative;
  }
</style>
