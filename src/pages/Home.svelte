<script lang="ts">
    import { link } from 'svelte-spa-router';
    let name: string = "";
    let foods = ["Food 1", "Food 2", "Food 3"];

    function onceClickEvent() {
        console.log(`Once: ${name}`);
    }

    function repeatClickEvent() {
        console.log(`Repeat: ${name}`);
    }

    function foodButtonClickEvent(message) {
        console.log(message);
    }
</script>

<main>
    <h1>Home Page</h1>
    <input bind:value={name}/>
    <button on:click|once={onceClickEvent}>Once Submit</button>
    <button on:click={repeatClickEvent}>Repeat Submit</button>
    <a use:link href="/about"><button>About Page</button></a>

    {#if name === ""}
        <h2>입력값 없음</h2>
    {:else }
        <h2>{name}</h2>
    {/if}
    {#each foods as food}
        <button class="food-btn" on:click={() => foodButtonClickEvent(food)}>{food}</button>
    {/each}

    <picture>
        <img src="assets/ic_google.svg"  alt="Google Icon" />
    </picture>
</main>

<style lang="scss">
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;

    button {
        background-color: #ff3e00;
        color: #f4f4f4;
        font-weight: bold;
        border-radius: 100rem;
        padding: 0.8rem 1.6rem;
        cursor: pointer;
        transition: all 100ms ease-in-out;
    }

    button:hover {
        opacity: 0.75;
    }

    button:active {
        background-color: #ff3e00;
        opacity: 0.5;
    }

    }

    h2 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 3em;
        font-weight: 500;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
