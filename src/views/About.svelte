<script lang="ts">
    function onClickButton() {
        console.log("Clicked!");
    }
</script>

<main>
    <h1>About Page</h1>
    <button on:click={onClickButton}></button>
</main>

<style lang="scss">
  h1 {
    background-color: red;
  }
</style>
