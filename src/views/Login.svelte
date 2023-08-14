<script lang="ts">
    import Header from "../components/Header.svelte";
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import Footer from "../components/Footer.svelte";
    import ScrollButton from "../components/ScrollButton.svelte";
    import BottomNavigationBar from "../components/BottomNavigationBar.svelte";
    import {link} from 'svelte-spa-router';

    let userID, userPW, isAutoLogged;

    function onClickLoginBtn() {
        console.log(userID.value, userPW.value, isAutoLogged.checked);
    }
</script>

<main>
    <Header />
    <div class="content">
        <div class="parent">
            <div class="title-box">
                <img src="assets/ic_login.svg" />
                <p>Login</p>
            </div>
            <div class="login-box">
                <div class="form-box">
                    <div class="input-box">
                        <div class="id-box">
                            <label for="idInput">아이디</label>
                            <input id="idInput" type="text" maxlength="12" bind:this={userID}>
                        </div>
                        <div class="pw-box">
                            <label for="pwInput">비밀번호</label>
                            <input id="pwInput" type="password" maxlength="16" bind:this={userPW}>
                        </div>
                        <div class="check-box">
                            <input id="autoLogin" type="checkbox" bind:this={isAutoLogged}>
                            <label for="autoLogin">자동 로그인</label>
                        </div>
                    </div>
                    <button type="submit" on:click={onClickLoginBtn}>로그인</button>
                </div>
            </div>

            <div class="func-box">
                <div class="social-box">
                    <p>소셜 로그인</p>
                    <div class="btn-box">
                        <button><img src="assets/ic_kakao_login.svg" /></button>
                        <button><img src="assets/ic_naver_login.svg" /></button>
                        <button><img src="assets/ic_google_login.svg" /></button>
                        <button><img src="assets/ic_apple_login.svg" /></button>
                    </div>
                </div>
                <div class="account-box">
                    <a use:link href="/find-pw"><button>비밀번호 찾기</button></a>
                    <a use:link href="/join"><button>회원가입</button></a>
                </div>
            </div>

        </div>
        <Footer />
    </div>
    <BottomNavigationBar />
    <ScrollButton />
</main>

<style lang="scss">
  .content {
    margin-top: 4.8rem;
    height: calc(100vh - 4.8rem - 4.8rem);
    overflow-y: scroll;

    > .parent {
      padding: 4.8rem 2.4rem;
      min-height: calc(100vh - 4.8rem - 4.8rem - 17.75rem);

      > .title-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: .8rem;

        > img {
          width: 4.8rem;
          height: 4.8rem;
        }

        > p {
          font-size: 2.4rem;
          font-weight: 700;
        }
      }

      > .login-box {
        margin-top: 2.4rem;
        > .form-box {
          > .input-box {
            > .id-box, .pw-box {

              > label {
                font-size: 1.4rem;
                font-weight: 500;
              }

              > input {
                width: 100%;
                height: 4.2rem;
                margin-top: .8rem;
                border-color: var(--divider-color);
                border-radius: .8rem;
                background-color: var(--form-background-color);
                padding: 0 1.2rem;
                font-weight: 500;
                font-size: 1.2rem;

                &:focus {
                  outline: none;
                }
              }
            }
            > .pw-box {
              margin-top: 1.6rem;
            }
            > .check-box {
              margin-top: 1.6rem;
              display: flex;
              align-items: center;
              gap: .8rem;

              > label {
                font-size: 1.2rem;
              }

              > input {
                width: 1.6rem;
                height: 1.6rem;
              }
            }
          }
          > button {
            width: 100%;
            height: 4.2rem;
            border-radius: .8rem;
            margin-top: 2.4rem;
            border: none;
            background-color: var(--gradient-full-color);
            transition: all 200ms ease-in-out;
            color: white;
            font-weight: 500;
            font-size: 1.4rem;
            cursor: pointer;
          }
        }
      }

      > .func-box {
        padding: 1.6rem 2.4rem;
        margin-top: 4.8rem;
        background-color: #2B86C533;
        border-radius: .8rem;

        > .social-box {

          > p {
            text-align: center;
            font-size: 1.4rem;
            font-weight: 500;
          }

          > .btn-box {
            margin-top: 1.6rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1.2rem;

            > button {
              background: none;
              border: none;

              > img {
                width: 4.2rem;
                height: 4.2rem;
              }
            }
          }
        }

        > .account-box {
          margin-top: 2.4rem;
          display: flex;
          flex-direction: column;
          gap: .8rem;
          button {
            border: none;
            width: 100%;
            height: 4.2rem;
            background-color: #2B86C599;
            border-radius: .8rem;
            font-size: 1.4rem;
            color: white;
            font-weight: 500;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .content {
      height: calc(100vh - 4.8rem);

      > .parent {
        min-height: calc(100vh - 4.8rem - 17.75rem);
      }
    }
  }
</style>
