<script lang="ts">
    import {onMount} from "svelte";
    import {checkScrollPosition} from "../models/scroll";

    onMount(() => {
        window.addEventListener('scroll', checkScrollPosition);
        return () => window.removeEventListener('scroll', checkScrollPosition);
    })
</script>

<slot />
