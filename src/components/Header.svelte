<script lang="ts">
    import {link} from 'svelte-spa-router';
    import {Hamburger} from "svelte-hamburgers";
    import HeaderMenu from "./HeaderMenu.svelte";

    let open;
</script>

<div>
    <header>
        <a use:link href="/home">
            <img class="header-logo" src="assets/ic_logo_text.svg">
        </a>
        {#if window.matchMedia('(min-width: 1024px)').matches}
            <HeaderMenu />
        {:else}
            <Hamburger bind:open />
        {/if}
    </header>
    <HeaderMenu bind:open />
</div>


<style lang="scss">
  header {
    background-color: var(--footer-background-color);
    height: 4.8rem;
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.6rem 2.4rem;
    z-index: 5;
  }

  .header-logo {
    width: 7.2rem;
  }
</style>
