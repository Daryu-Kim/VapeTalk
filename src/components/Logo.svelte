<script lang="ts">
import {link} from 'svelte-spa-router';
</script>

<a use:link href="/home">
    <img src="assets/ic_logo_symbol.svg" />
    VapeTalk
</a>

<style lang="scss">
    a {
      display: flex;
      align-items: center;
      gap: .6rem;
      font-size: 1.8rem;
      font-family: 'Monomaniac One', sans-serif;
      background-image: linear-gradient(-225deg, #FF3CAC 0%, #562B7C 52%, #2B86C5 100%);
      color: transparent;
      -webkit-background-clip: text;
      animation: fluidGradient 1000ms ease-in-out infinite;
      &:hover {
        text-decoration: none;
      }

      > img {
        width: 4.2rem;
      }
    }
</style>
