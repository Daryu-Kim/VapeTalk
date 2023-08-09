<script lang="ts">
    import { checkScrollPosition } from "../models/scroll";
    let scrollButton;
</script>

<button class="scroll-to-top" bind:this={scrollButton} on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
    <img src="assets/ic_arrow_up.svg"/>
</button>

<style lang="scss">
  .scroll-to-top {
    position: fixed;
    bottom: 9.6rem;
    right: 2.4rem;
    width: 4.8rem;
    height: 4.8rem;
    background: rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    border: none;
    cursor: pointer;
    z-index: 10;
    display: none;

    &.show {
      display: block;
    }

    > img {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
</style>
