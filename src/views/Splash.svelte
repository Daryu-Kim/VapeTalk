<script lang="ts">
    import {getCurrentUsers} from "../models/firebase";
    import {onMount, beforeUpdate} from "svelte";
    import {push} from "svelte-spa-router";
    import {showErrorToast, showInfoToast, showSuccessToast, showWarningToast} from "../models/toast";

    onMount( () => {
        try {
            setTimeout(async () => {
                const user = await getCurrentUsers();
                if (user != null) {
                    await push('/home');
                } else {
                    await push('/login');
                }
            }, 5000)
        } catch (e) {
            showErrorToast("오류", e, ()=>{}, ()=>{});
        }
    });
</script>

<main>
    <div></div>
    <img class="splashLogo" src="assets/ic_logo.svg" />
    <p class="splashDeveloperText">Developed by Daryu-Kim.</p>
</main>

<style lang="scss">
  main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    padding: 1.6rem 2.4rem;
  }

  .splashLogo {
    width: 20rem;
    animation-name: fadeIn;
    animation-delay: 1000ms;
    animation-duration: 1000ms;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    opacity: 0;
  }

  .splashDeveloperText {
    text-align: center;
    font-size: 1.2rem;
    background: linear-gradient(-225deg, #FF3CAC 0%, #562B7C 52%, #2B86C5 100%);
    color: #FFFFFF66;
    -webkit-background-clip: text;
    animation-name: fadeIn;
    animation-delay: 2000ms;
    animation-duration: 1000ms;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    opacity: 0;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
