<script lang="ts">
    import {location} from 'svelte-spa-router';
    import {onDestroy} from "svelte";
    import {FontAwesomeIcon} from "@fortawesome/svelte-fontawesome";
    import {faUser} from "@fortawesome/free-regular-svg-icons";

    let currentPath = "";
    let isSelectedHome = false, isSelectedSearch = false, isSelectedDevice = false, isSelectedLiquid = false, isSelectedAccount = false;

    const navItems = [
        {icon: "assets/ic_home.svg", title: "Home", check: isSelectedHome},
        {icon: "assets/ic_search.svg", title: "Search", check: isSelectedSearch},
        {icon: "assets/ic_device.svg", title: "Device", check: isSelectedDevice},
        {icon: "assets/ic_liquid.svg", title: "Liquid", check: isSelectedLiquid},
        {icon: "assets/ic_account.svg", title: "Account", check: isSelectedAccount},
    ];

    const unsubscribe = location.subscribe(($location) => {
        currentPath = $location;
    });
    onDestroy(unsubscribe);

    $ : if (currentPath.includes('home')) {
        isSelectedHome = true;
    } else if (currentPath.includes('search')) {
        isSelectedSearch = true;
    } else {
        console.log("404")
    }
</script>

<nav>
    {#each navItems as {icon, title, check}}
        <div class="{currentPath.includes('home')? 'active' : ''}" on:click={() => console.log(check)}>
            <FontAwesomeIcon class="asdf" style="font-size: 1.6rem; color: #562B7C; fill: #562B7C" icon={faUser} />
            <p>{title}</p>
        </div>
    {/each}
</nav>

<style lang="scss">
    nav {
      display: none;
      grid-template-columns: repeat(5, 1fr);
      width: 100%;
      height: 4.8rem;
      background-color: var(--footer-background-color);
      padding: 0 2.4rem;

      > div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: .4rem;

        &.active {
          > svg > path {
            fill: var(--gradient-full-color);
          }
        }

        > .asdf::before {
          width: 2.4rem;
          height: 2.4rem;
        }
      }
    }

    @media screen and (max-width: 1024px) {
      // 모바일 & 태블릿 환경일 때
      nav {
        display: grid;
      }
    }
</style>
