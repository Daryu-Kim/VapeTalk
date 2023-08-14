<script lang="ts">
    import Header from "../components/Header.svelte";
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import Footer from "../components/Footer.svelte";
    import ScrollButton from "../components/ScrollButton.svelte";
    import BottomNavigationBar from "../components/BottomNavigationBar.svelte";
    import {privacyText, termsText} from "../models/terms";
    import {showErrorToast} from "../models/toast";

    let userID, userPW, userPWR, userName, userEmail, userPostalCode, userAddress, userDetailAddress, userPhoneNumber;
    let isCheckedTerms, isCheckedPrivacy;

    function onClickJoinBtn() {
        try {
            if (userID.value.length === 0 || userPW.value.length === 0 || userPWR.value.length === 0 || userName.value.length === 0 || userEmail.value.length === 0) {
                showErrorToast("오류", "필수 정보를 모두 입력해주세요!", ()=>{}, ()=>{});
            }
        } catch (e) {

        }
    }
</script>

<main>
    <Header/>
    <div class="content">
        <div class="parent">
            <div class="title-box">
                <img src="assets/ic_join.svg"/>
                <p>Join</p>
            </div>
            <div class="join-box">
                <div class="input-box">
                    <p class="inp-title">
                        필수정보
                    </p>
                    <div class="inp-box">
                        <label for="idInput">아이디</label>
                        <input id="idInput" type="text" maxlength="12" bind:this={userID}>
                    </div>
                    <div class="inp-box">
                        <label for="pwInput">비밀번호</label>
                        <input id="pwInput" type="password" maxlength="16" bind:this={userPW}>
                    </div>
                    <div class="inp-box">
                        <label for="pwrInput">비밀번호 확인</label>
                        <input id="pwrInput" type="password" maxlength="16" bind:this={userPWR}>
                    </div>
                    <div class="inp-box">
                        <label for="nameInput">이름</label>
                        <input id="nameInput" type="text" maxlength="8" bind:this={userName}>
                    </div>
                    <div class="inp-box">
                        <label for="emailInput">이메일</label>
                        <input id="emailInput" type="email" maxlength="32" bind:this={userEmail}>
                    </div>
                </div>
                <div class="input-box">
                    <p class="inp-title">
                        부가정보
                    </p>
                    <div class="inp-box">
                        <label for="postalCodeInput">우편번호</label>
                        <input id="postalCodeInput" type="tel" maxlength="5" bind:this={userPostalCode}>
                    </div>
                    <div class="inp-box">
                        <label for="addressInput">주소</label>
                        <input id="addressInput" type="text" bind:this={userAddress}>
                    </div>
                    <div class="inp-box">
                        <label for="detailAddressInput">상세주소</label>
                        <input id="detailAddressInput" type="text" bind:this={userDetailAddress}>
                    </div>
                    <div class="inp-box">
                        <label for="phoneNumberInput">전화번호</label>
                        <input id="phoneNumberInput" type="tel" maxlength="11" bind:this={userPhoneNumber}>
                    </div>
                </div>
                <div class="input-box">
                    <p class="inp-title">
                        이용약관
                    </p>
                    <div class="terms-box">
                        {termsText}
                    </div>
                    <div class="check-box">
                        <input type="checkbox" id="checkTerms" bind:this={isCheckedTerms}/>
                        <label for="checkTerms">이용약관에 동의합니다.</label>
                    </div>
                </div>
                <div class="input-box">
                    <p class="inp-title">
                        개인정보처리방침
                    </p>
                    <div class="terms-box">
                        {privacyText}
                    </div>
                    <div class="check-box">
                        <input type="checkbox" id="checkPrivacy" bind:this={isCheckedPrivacy}/>
                        <label for="checkPrivacy">개인정보처리방침에 동의합니다.</label>
                    </div>
                </div>
            </div>
            <button type="submit" on:click={onClickJoinBtn}>회원가입</button>
        </div>
        <Footer/>
    </div>
    <BottomNavigationBar/>
    <ScrollButton/>
</main>

<style lang="scss">
  .content {
    margin-top: 4.8rem;
    height: calc(100vh - 4.8rem - 4.8rem);
    overflow-y: scroll;

    > .parent {
      padding: 4.8rem 2.4rem;
      min-height: calc(100vh - 4.8rem - 4.8rem - 17.75rem);
      max-width: 72rem;
      width: 100%;
      margin: 0 auto;

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

      > .join-box {
        margin-top: 2.4rem;

        > .input-box {
          margin-top: 4.8rem;

          &:nth-child(1) {
            margin-top: 0;
          }

          > .inp-title {
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--gradient-full-color);
          }

          > .inp-box {
            margin-top: 1.6rem;

            &:nth-child(2) {
              margin-top: 2.4rem;
            }

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
                border-color: var(--gradient-full-color);
              }
            }
          }

          > .terms-box {
            padding: 1.6rem 2.4rem;
            margin-top: 1.6rem;
            background-color: #2B86C533;
            border-radius: .8rem;
            height: 24rem;
            overflow-y: scroll;
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

        > p {
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--gradient-full-color);
        }
      }

      > button {
        width: 100%;
        height: 4.2rem;
        border-radius: .8rem;
        margin-top: 4.8rem;
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

  @media screen and (min-width: 1024px) {
    .content {
      height: calc(100vh - 4.8rem);

      > .parent {
        min-height: calc(100vh - 4.8rem - 17.75rem);
      }
    }
  }
</style>
