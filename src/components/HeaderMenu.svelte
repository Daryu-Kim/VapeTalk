<script lang="ts">
    import {link} from "svelte-spa-router";
    import {fly, scale} from 'svelte/transition';
    import {quadOut} from "svelte/easing";

    export let open;
</script>

{#if open}
    <ul>
        {#each ['Home', 'About'] as menu, i}
            <li transition:fly><a use:link href='/home'>{menu}</a></li>
        {/each}
    </ul>

    <hr transition:scale={{ duration: 350, easing: quadOut, opacity: 1 }} />
{/if}

<style lang="scss">
  ul {
    background-color: var(--footer-sub-color);
    margin-top: 4.8rem;
    list-style: none;

    > li {
      > a {
        color: var(--text-color);
        font-size: 1.4rem;

        &:hover {
          text-decoration: none;
          background: linear-gradient(-225deg, #FF3CAC 0%, #562B7C 52%, #2B86C5 100%);
          color: #FFFFFF33;
          -webkit-background-clip: text;
        }
      }
    }
  }
</style>
