<script lang="ts">
    import Header from "../components/Header.svelte";
    import {Swiper, SwiperSlide} from 'swiper/svelte';
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import {Autoplay, Navigation, Pagination} from "swiper";
    import Footer from "../components/Footer.svelte";
    import ScrollButton from "../components/ScrollButton.svelte";
    import BottomNavigationBar from "../components/BottomNavigationBar.svelte";
</script>

<main>
    <Header />
    <div class="content">
        <img src="assets/ic_error.svg" />
        <p class="error-title">요청하신 페이지를 찾을 수 없습니다.</p>
        <p class="error-desc">신상 기기와 액상에 대한 리뷰를 살펴보십시오.</p>
        <div class="space"></div>
        <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                breakpoints={{
                    768: {slidesPerView: 2},
                    1024: {slidesPerView: 3},
                    1440: {slidesPerView: 4},
                }}
                class="container"
        >
            <SwiperSlide><div class="slide">Slide 1</div></SwiperSlide>
            <SwiperSlide><div class="slide">Slide 2</div></SwiperSlide>
            <SwiperSlide><div class="slide">Slide 3</div></SwiperSlide>
            <SwiperSlide><div class="slide">Slide 4</div></SwiperSlide>
        </Swiper>
    </div>

    {#if window.matchMedia('(max-width: 1024px)').matches}
        <BottomNavigationBar />
    {:else}
        <Footer />
    {/if}
    <ScrollButton />
</main>

<style lang="scss">
  .content {
    margin-top: 4.8rem;
    padding: 1.6rem 2.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 4.8rem - 4.8rem);
    > img {
      width: 7.2rem;
      fill: var(--error-color);
    }
    > .error-title {
      font-weight: 700;
      font-size: 2rem;
      text-align: center;
      word-break: keep-all;
      margin-top: 2.4rem;
    }
    > .error-desc {
      font-weight: 500;
      font-size: 1.2rem;
      text-align: center;
      word-break: keep-all;
      margin-top: .8rem;
    }
    .space {
      height: 2.4rem;
    }
    .slide {
      background-color: var(--divider-color);
      padding: 1.6rem 2.4rem;
      height: 24rem;
    }
  }

  @media screen and (min-width: 1024px) {
    .content {
      min-height: calc(100vh - 4.8rem - 17.75rem);
    }
  }
</style>
