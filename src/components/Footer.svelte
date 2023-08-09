<script lang="ts">
    import {link} from 'svelte-spa-router';
</script>

<footer>
    <ul class="footer-nav">
        <li><a use:link href="/">이용약관</a></li>
        <li><a use:link href="/">이용약관</a></li>
        <li><a use:link href="/">이용약관</a></li>
        <li><a use:link href="/">이용약관</a></li>
        <li><a use:link href="/">이용약관</a></li>
    </ul>
    <div>
        <p>회사명: Develoware</p>
        <p>대표: 김원재</p>
        <p>전화: 010-6894-1916</p>
        <div>
            <p>E-mail: dev_daryu@kakao.com</p>
            <p>ⓒ Daryu-Kim. ALL rights reserved.</p>
        </div>
    </div>
</footer>


<style lang="scss">
  footer {
    background-color: var(--form-background-color);
    width: 100%;
    .footer-nav {
      background-color: var(--footer-background-color);
      list-style: none;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      padding: 1.6rem .8rem;
      > li {
        font-size: 1.2rem;
        font-weight: 500;
        text-align: center;
        border-right: .1rem solid var(--shadow-color);
        cursor: pointer;
        &:last-child {
          border: none;
        }
        &:hover {
          transform: translateY(.2rem);
        }
        > a {
          color: var(--text-color);
          text-decoration: none;
        }
      }
    }
    > div {
      background-color: var(--footer-sub-color);
      padding: 1.6rem 2.4rem;
      line-height: 2.4rem;
      p {
        font-size: 1.4rem;
      }
      > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
</style>
