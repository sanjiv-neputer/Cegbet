"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "@/public/assets/sass/pages/home.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Script from "next/script";
import Headerbottom from "@/components/headerbottom/page";
import Footer from "@/components/headerbottom/footer/page";

export default function Home() {
  var settingsImage = {
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    infinite: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  var settingsVideos = {
    dots: false,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    infinite: true, // Optional: for continuous looping
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const settingsCardSlider = {
    dots: true,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 2000,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  const [activeVideoIndex, setActiveVideoIndex] = useState(null);

  const handlePlay = (index: any) => {
    setActiveVideoIndex(index);
  };

  const handlePause = () => {
    setActiveVideoIndex(null);
  };

  return (
    <>
      <Headerbottom />
      {/* banner section start here */}
      <section className="banner__section">
        <div className="container-fluid p-0">
          <div className="banner-slide_wraper">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <a href="#" className="img-wrapper">
                  <img
                    src="https://assets.cegbet.com/images/sliders/1720955240w4cH1720955240_CEG%20Slider%20Banner.jpg"
                    alt="banner-image"
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#" className="img-wrapper">
                  <img
                    src="https://assets.cegbet.com/images/sliders/1722008947BjqZ1722008947_WhatsApp%20Image%202024-07-26%20at%207.57.00%20AM.jpeg"
                    alt="slide 2"
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">
                  <img
                    src="https://assets.cegbet.com/images/sliders/1720977431VmbD1720977431_CEG%20Slider%20Banner%20(1).jpg"
                    alt="slide 3"
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">
                  <img
                    src="https://assets.cegbet.com/images/sliders/1721030154rIYz1721030154_virtual-banner.jpg"
                    alt="slide 4"
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">
                  <img
                    src="https://assets.cegbet.com/images/sliders/1702548055sxAC1702548055_ceg-banner1.jpg"
                    alt="slide 5"
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">
                  <img
                    src="https://assets.cegbet.com/images/sliders/1702816730SoXP1702816730_telegram-banner.webp"
                    alt="slide 6"
                  />
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      {/* banner section end here */}

      {/* multiple photo slider*/}
      <div className="multipleimage-section">
        <div className="container slider-container">
          <div className="slider-wraper">
            <div className="slider-container">
              <Slider {...settingsImage}>
                <div className="slider-item">
                  <a href="#" className="slider-link">
                    <img
                      src="https://assets.cegbet.com/images/provider/1695412600625581695412600_1695060375.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="slider-item">
                  <a href="#" className="slider-link">
                    <img
                      src="https://assets.cegbet.com/images/provider/1695412634246421695412634_1695060393.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="slider-item">
                  <a href="#" className="slider-link">
                    <img
                      src="https://assets.cegbet.com/images/provider/1696240073373621696240073_provider-betgamestv2.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="slider-item">
                  <a href="#" className="slider-link">
                    <img
                      src="https://assets.cegbet.com/images/provider/1696236736818881696236736_provider-tvbet.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="slider-item">
                  <a href="#" className="slider-link">
                    <img
                      src="https://assets.cegbet.com/images/provider/1696851073583011696851073_provider-xpg.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="slider-item">
                  <a href="#" className="slider-link">
                    <img
                      src="https://assets.cegbet.com/images/provider/1696240073373621696240073_provider-betgamestv2.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="slider-item">
                  <a href="#" className="slider-link">
                    <img
                      src="https://assets.cegbet.com/images/provider/1696236736818881696236736_provider-tvbet.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="slider-item">
                  <a href="#" className="slider-link">
                    <img
                      src="https://assets.cegbet.com/images/provider/1696851073583011696851073_provider-xpg.jpg"
                      alt=""
                    />
                  </a>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>

      {/* Our Casino Categories */}
      <section className="categories_section">
        <div className="container">
          <div className="row justify-center content-categories">
            <div className="col-lg-7 col-xl-7">
              <div className="content-wraper">
                <h1 className="categories-title">Our Casino Categories </h1>
                <p className="categories-text">
                  Dive into our Comprehensive Live Casino Platform with a
                  Multitude of Live Casino Categories.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row gy-4 xjustify-center">
            <div className="col-lg-4 col-xl-3 col-md-6 col-6">
              <div className="categories-item">
                <div className="categories-inner">
                  <a href="#" className="categories-link">
                    <img
                      className="link-image"
                      src="https://assets.cegbet.com/images/category/1702350356oDQw1702350356_1695407605289891695407605_casino_cat-teenpatti.webp"
                      alt=""
                    />
                  </a>
                </div>
                <div className="ball-bg"></div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 col-md-6 col-6">
              <div className="categories-item">
                <div className="categories-inner">
                  <a href="#" className="categories-link">
                    <img
                      className="link-image"
                      src="https://assets.cegbet.com/images/category/1702350422qyaV1702350422_1695409722128491695409722_casino_cat-roulette.webp"
                      alt=""
                    />
                  </a>
                </div>
                <div className="ball-bg"></div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 col-md-6 col-6">
              <div className="categories-item">
                <div className="categories-inner">
                  <a href="#" className="categories-link">
                    <img
                      className="link-image"
                      src="https://assets.cegbet.com/images/category/1702350475YJh61702350475_1695407680551501695407680_casino_cat-baccarat.webp"
                      alt=""
                    />
                  </a>
                </div>
                <div className="ball-bg"></div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 col-md-6 col-6">
              <div className="categories-item">
                <div className="categories-inner">
                  <a href="#" className="categories-link">
                    <img
                      className="link-image"
                      src="https://assets.cegbet.com/images/category/1702350542wN7B1702350542_1695407697453141695407697_casino_cat-andarbahar.webp"
                      alt=""
                    />
                  </a>
                </div>
                <div className="ball-bg"></div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 col-md-6 col-6">
              <div className="categories-item">
                <div className="categories-inner">
                  <a href="#" className="categories-link">
                    <img
                      className="link-image"
                      src="https://assets.cegbet.com/images/category/1702350615KaBX1702350615_1695407724953161695407724_casino_cat-blackjack.webp"
                      alt=""
                    />
                  </a>
                </div>
                <div className="ball-bg"></div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 col-md-6 col-6">
              <div className="categories-item">
                <div className="categories-inner">
                  <a href="#" className="categories-link">
                    <img
                      className="link-image"
                      src="https://assets.cegbet.com/images/category/17023502168IqT1702350216_1695407741691561695407741_casino_cat-dragontiger.webp"
                      alt=""
                    />
                  </a>
                </div>
                <div className="ball-bg"></div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 col-md-6 col-6">
              <div className="categories-item">
                <div className="categories-inner">
                  <a href="#" className="categories-link">
                    <img
                      className="link-image"
                      src="https://assets.cegbet.com/images/category/1702350674UBeT1702350674_169540775597701695407755_casino_cat-poker.webp"
                      alt=""
                    />
                  </a>
                </div>
                <div className="ball-bg"></div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 col-md-6 col-6">
              <div className="categories-item">
                <div className="categories-inner">
                  <a href="#" className="categories-link">
                    <img
                      className="link-image"
                      src="https://assets.cegbet.com/images/category/1702350732SbSo1702350732_1695408126704041695408126_casino_cat-newcasinogames.webp"
                      alt=""
                    />
                  </a>
                </div>
                <div className="ball-bg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Top Game section */}
      <section className="topgame_section">
        <div className="container">
          <div className="row justify-center content-categories">
            <div className="col-lg-7 col-xl-7">
              <div className="topgame-content_wraper">
                <h1 className="topgame-title">Top Awesome Games</h1>
                <p className="topgame-text">
                  Get Ready for Non-Stop Fun with our Top Awesome Games on our
                  Online Gaming Platform.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row g-2 xjustify-center">
            <div className="col-lg-4 col-xl-3 col-6 ">
              <div className="topgame-item">
                <div className="topgame-inner_part">
                  <a href="#" className="topgame-link">
                    <img
                      className="topgame-image_link"
                      src="https://assets.cegbet.com/images/provider/game/1730741443UimD1730741443_aviator.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>
                <div className="card-info">
                  <a href="#" className="cardinfo-title">
                    Aviator
                  </a>
                  <div className="price-wraper">
                    <span className="max-price">Max 200 NPR</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 col-6 ">
              <div className="topgame-item">
                <div className="topgame-inner_part">
                  <a href="#" className="topgame-link">
                    <img
                      className="topgame-image_link"
                      src="https://fungamess.games/images/games/OQWdsijmeasO4eAcxc45JFeQ96hISeidtygUEyTR.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>
                <div className="card-info">
                  <a href="#" className="cardinfo-title">
                    Aviator
                  </a>
                  <div className="price-wraper">
                    <span className="max-price">Max 200 NPR</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 col-6 ">
              <div className="topgame-item">
                <div className="topgame-inner_part">
                  <a href="#" className="topgame-link">
                    <img
                      className="topgame-image_link"
                      src="https://fungamess.games/images/games/Bwi3e4rmbx9tDAqAyqDNfHzESvHgRRW72KZQkUBa.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>
                <div className="card-info">
                  <a href="#" className="cardinfo-title">
                    Aviator
                  </a>
                  <div className="price-wraper">
                    <span className="max-price">Max 200 NPR</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 col-6 ">
              <div className="topgame-item">
                <div className="topgame-inner_part">
                  <a href="#" className="topgame-link">
                    <img
                      className="topgame-image_link"
                      src="https://fungamess.games/images/games/hGjBpVo2C2SF6XEjLdvNPzEfQaCUMhNqP3Is459A.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>
                <div className="card-info">
                  <a href="#" className="cardinfo-title">
                    Aviator
                  </a>
                  <div className="price-wraper">
                    <span className="max-price">Max 200 NPR</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-xl-3 col-6 ">
              <div className="topgame-item">
                <div className="topgame-inner_part">
                  <a href="#" className="topgame-link">
                    <img
                      className="topgame-image_link"
                      src="https://fungamess.games/images/games/KFOP1FtFdio95sdZbPFba3TcltsN3mNDi7ByqX7C.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 col-6 ">
              <div className="topgame-item">
                <div className="topgame-inner_part">
                  <a href="#" className="topgame-link">
                    <img
                      className="topgame-image_link"
                      src="https://fungamess.games/images/games/eWb2pKEKDxtvEeotyoFNmkePR28h5o8jfwq0zXBB.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 col-6 ">
              <div className="topgame-item">
                <div className="topgame-inner_part">
                  <a href="#" className="topgame-link">
                    <img
                      className="topgame-image_link"
                      src="https://fungamess.games/images/games/iLaaTRwojLy5Cq3lT2FEix9rG8eC1ap7SN0LCuno.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 col-6 ">
              <div className="topgame-item">
                <div className="topgame-inner_part">
                  <a href="#" className="topgame-link">
                    <img
                      className="topgame-image_link"
                      src="https://fungamess.games/images/games/2ZSKYJJk4QydtgF3r86CuRiuwW2HyuBYtWW5wAYI.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>
              </div>
            </div>

            <div className="col-lg-4 col-xl-3 col-6">
              <div className="topgame-item">
                <div className="topgame-inner_part">
                  <a href="#" className="topgame-link">
                    <img
                      className="topgame-image_link"
                      src="https://fungamess.games/images/games/mg0pK6pca372qVGf7ido655SYe9a3cOeb8L3XOOn.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 col-6">
              <div className="topgame-item">
                <div className="topgame-inner_part">
                  <a href="#" className="topgame-link">
                    <img
                      className="topgame-image_link"
                      src="https://fungamess.games/images/games/Ll4HBah48xMNjbUbIdmTVPBECTviebFJqij9z3tL.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 col-6">
              <div className="topgame-item">
                <div className="topgame-inner_part">
                  <a href="#" className="topgame-link">
                    <img
                      className="topgame-image_link"
                      src="https://fungamess.games/images/games/nmMPU15x7wGp8cKmqghufLa6DROYA4RCFmt5LlIf.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 col-6">
              <div className="topgame-item">
                <div className="topgame-inner_part">
                  <a href="#" className="topgame-link">
                    <img
                      className="topgame-image_link"
                      src="https://fungamess.games/images/games/nNq5yOX6O8zAuPdQLBotPiynmNK2omXQ4CbAKpbk.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>
              </div>
            </div>

            <div className="col-lg-4 col-xl-3 col-6">
              <div className="topgame-item">
                <div className="topgame-inner_part">
                  <a href="#" className="topgame-link">
                    <img
                      className="topgame-image_link"
                      src="https://fungamess.games/images/games/UJAglh63UjG99GiPaizQNwx4UNNKeLypNrrCVNYG.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 col-6">
              <div className="topgame-item">
                <div className="topgame-inner_part">
                  <a href="#" className="topgame-link">
                    <img
                      className="topgame-image_link"
                      src="https://fungamess.games/images/games/tu6F1SwiFv7uGOZ3a6egTgWQaFzhYw7KEJikF049.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 col-6">
              <div className="topgame-item">
                <div className="topgame-inner_part">
                  <a href="#" className="topgame-link">
                    <img
                      className="topgame-image_link"
                      src="https://fungamess.games/images/games/kx01DuU5GyLYtMIlfsG4usZAoj6Lsog7peU06rRV.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 col-6">
              <div className="topgame-item">
                <div className="topgame-inner_part">
                  <a href="#" className="topgame-link">
                    <img
                      className="topgame-image_link"
                      src="https://fungamess.games/images/games/c3DJ9Nwk1Epd5UnXJlTvnkf64Axv8pI6uQ77ASV6.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>
              </div>
            </div>

            <div className="col-lg-4 col-xl-3 col-6">
              <div className="topgame-item">
                <div className="topgame-inner_part">
                  <a href="#" className="topgame-link">
                    <img
                      className="topgame-image_link"
                      src="https://fungamess.games/images/games/wRwFgr4QPSihdIkNvXRKBhnR9x87Q3Ma2tym6aHy.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 col-6">
              <div className="topgame-item">
                <div className="topgame-inner_part">
                  <a href="#" className="topgame-link">
                    <img
                      className="topgame-image_link"
                      src="https://fungamess.games/images/games/bAmQtzAN7w0kPle3quuJG6jjHlyQcwPhkI1mOmFn.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 col-6 ">
              <div className="topgame-item">
                <div className="topgame-inner_part">
                  <a href="#" className="topgame-link">
                    <img
                      className="topgame-image_link"
                      src="https://fungamess.games/images/games/gPSjmX7XhPoGQgLHhgBSfzyvIaOSTtQqI5e4JS32.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 col-6">
              <div className="topgame-item">
                <div className="topgame-inner_part">
                  <a href="#" className="topgame-link">
                    <img
                      className="topgame-image_link"
                      src="https://fungamess.games/images/games/yaXbXAiSPpjWNbq3gnwCSIFguHAT5oy9mB9qCIFz.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Endorsements section*/}
      <section className="endorsements_section">
        <div className="container">
          <div className="row justify-center content-categories">
            <div className="col-lg-7 col-xl-7">
              <div className="description_wraper">
                <h1 className="title-text">Our Endorsements</h1>
                <p className="description-text">
                  Explore our Endorsements And See why our Online Gaming
                  Platform is a Top Choice.
                </p>
              </div>
            </div>
          </div>
          <div className="videoslider_wraper">
            <div className="slider-container">
              <Slider {...settingsVideos}>
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className="relative slider-item p-2 h-[420px]"
                  >
                    {activeVideoIndex !== index && (
                      <div className="absolute top-2 right-2 z-10 p-2 rounded">
                        <img
                          src="https://assets.cegbet.com/front-end/assets/images/logo.png"
                          alt="Logo"
                          className="w-12 h-12 "
                        />
                      </div>
                    )}
                    <video
                      controls
                      width="100%"
                      onPlay={() => handlePlay(index)}
                      onPause={handlePause}
                      className="w-100 h-100 object-cover object-center"
                    >
                      <source
                        src={
                          [
                            "https://media.istockphoto.com/id/2156032425/video/software-engineering-team-engaged-in-problem-solving-and-code-analysis-for-web-development-in.mp4?s=mp4-640x640-is&k=20&c=cGsQQrP9UxNzd_kOlt4UMMTqp4zG8tK0c184NcHWWuE=",
                            "https://videos.pexels.com/video-files/1625973/1625973-hd_1920_1080_25fps.mp4",
                            "https://videos.pexels.com/video-files/856064/856064-hd_1920_1080_30fps.mp4",
                            "https://videos.pexels.com/video-files/854071/854071-hd_1920_1080_25fps.mp4",
                            "https://videos.pexels.com/video-files/3159483/3159483-hd_1920_1080_30fps.mp4",
                          ][index]
                        }
                        type="video/mp4"
                      />
                    </video>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      {/* Most Played Games section */}
      <section className="populargame_section">
        <div className="container">
          <div className="row justify-center content-categories">
            <div className="col-lg-7 col-xl-7">
              <div className="populargame-content_wraper">
                <h1 className="popular-title">Most Played Games </h1>
                <p className="text-description">
                  Dive into the Excitement of our Most Played Games Today on our
                  Platform.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="slider-container">
            <Slider {...settingsCardSlider}>
              <div>
                <div className="popular-card-item" style={{ margin: "0 8px" }}>
                  <div className="popular-card_inner">
                    <a href="#" className="popular-card_link">
                      <img
                        className="popular-card_image"
                        src="https://fungamess.games/images/games/lRdzJbsDPttSrDh4r1mbpOXVSrctvVaCMToTTjQ9.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="popular-card_ball"></div>
                </div>
              </div>

              <div>
                <div className="popular-card-item" style={{ margin: "0 8px" }}>
                  <div className="popular-card_inner">
                    <a href="#" className="popular-card_link">
                      <img
                        className="popular-card_image"
                        src="https://assets.cegbet.com/images/provider/game/1730741443UimD1730741443_aviator.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="popular-card_ball"></div>
                  <div className="popular-card_info">
                    <a href="#" className="cardinfo-title">
                      Aviator
                    </a>
                    <div className="cardprice-wraper">
                      <span className="max_price">Max 200 NPR</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="popular-card-item" style={{ margin: "0 8px" }}>
                  <div className="popular-card_inner">
                    <a href="#" className="popular-card_link">
                      <img
                        className="popular-card_image"
                        src="https://fungamess.games/images/games/Bwi3e4rmbx9tDAqAyqDNfHzESvHgRRW72KZQkUBa.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="popular-card_ball"></div>
                  <div className="popular-card_info">
                    <a href="#" className="cardinfo-title">
                      Aviator
                    </a>
                    <div className="cardprice-wraper">
                      <span className="max_price">Max 200 NPR</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="popular-card-item" style={{ margin: "0 8px" }}>
                  <div className="popular-card_inner">
                    <a href="#" className="popular-card_link">
                      <img
                        className="popular-card_image"
                        src="https://fungamess.games/images/games/7rtejEHCx05K2xmr2eojlIJIB5VtqHSmLLVkh3lI.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="popular-card_ball"></div>
                  <div className="popular-card_info">
                    <a href="#" className="cardinfo-title">
                      Aviator
                    </a>
                    <div className="cardprice-wraper">
                      <span className="max_price">Max 200 NPR</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="popular-card-item" style={{ margin: "0 8px" }}>
                  <div className="popular-card_inner">
                    <a href="#" className="popular-card_link">
                      <img
                        className="popular-card_image"
                        src="https://fungamess.games/images/games/o1Ai9WlZ0PoXsfHMjhZ3wYcJOY3BAUeoqu9rSnio.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="popular-card_ball"></div>
                </div>
              </div>

              <div>
                <div className="popular-card-item" style={{ margin: "0 8px" }}>
                  <div className="popular-card_inner">
                    <a href="#" className="popular-card_link">
                      <img
                        className="popular-card_image"
                        src="https://fungamess.games/images/games/07z7RKrNUzNuw9CK9B7GeP0KYjj1TVuTFqGxiOyy.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="popular-card_ball"></div>
                </div>
              </div>

              <div>
                <div className="popular-card-item" style={{ margin: "0 8px" }}>
                  <div className="popular-card_inner">
                    <a href="#" className="popular-card_link">
                      <img
                        className="popular-card_image"
                        src="https://fungamess.games/images/games/KFOP1FtFdio95sdZbPFba3TcltsN3mNDi7ByqX7C.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="popular-card_ball"></div>
                </div>
              </div>

              <div>
                <div className="popular-card-item" style={{ margin: "0 8px" }}>
                  <div className="popular-card_inner">
                    <a href="#" className="popular-card_link">
                      <img
                        className="popular-card_image"
                        src="https://fungamess.games/images/games/au2YCAz0n2QvWpTdU5CsBDHtH0QOTtq7JXLzFhqc.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="popular-card_ball"></div>
                </div>
              </div>

              <div>
                <div className="popular-card-item" style={{ margin: "0 8px" }}>
                  <div className="popular-card_inner">
                    <a href="#" className="popular-card_link">
                      <img
                        className="popular-card_image"
                        src="https://fungamess.games/images/games/QCiZ8D0zXKMXCa2exvrvWxCiqrOpnoVXsua4TTUr.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="popular-card_ball"></div>
                </div>
              </div>

              <div>
                <div className="popular-card-item" style={{ margin: "0 8px" }}>
                  <div className="popular-card_inner">
                    <a href="#" className="popular-card_link">
                      <img
                        className="popular-card_image"
                        src="https://fungamess.games/images/games/yaXbXAiSPpjWNbq3gnwCSIFguHAT5oy9mB9qCIFz.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="popular-card_ball"></div>
                </div>
              </div>

              <div>
                <div className="popular-card-item" style={{ margin: "0 8px" }}>
                  <div className="popular-card_inner">
                    <a href="#" className="popular-card_link">
                      <img
                        className="popular-card_image"
                        src="https://fungamess.games/images/games/lNLWwfJS2lQMxN3AtRTUgrNV2R3NaORaR0sYkk7v.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="popular-card_ball"></div>
                </div>
              </div>

              <div>
                <div className="popular-card-item" style={{ margin: "0 8px" }}>
                  <div className="popular-card_inner">
                    <a href="#" className="popular-card_link">
                      <img
                        className="popular-card_image"
                        src="https://fungamess.games/images/games/beFagUwQhQFcmqQp5S7mMj1oZB6cjsN0BptRknR6.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="popular-card_ball"></div>
                </div>
              </div>

              <div>
                <div className="popular-card-item" style={{ margin: "0 8px" }}>
                  <div className="popular-card_inner">
                    <a href="#" className="popular-card_link">
                      <img
                        className="popular-card_image"
                        src="https://fungamess.games/images/games/KFOP1FtFdio95sdZbPFba3TcltsN3mNDi7ByqX7C.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="popular-card_ball"></div>
                </div>
              </div>

              <div>
                <div className="popular-card-item" style={{ margin: "0 8px" }}>
                  <div className="popular-card_inner">
                    <a href="#" className="popular-card_link">
                      <img
                        className="popular-card_image"
                        src="https://fungamess.games/images/games/EE0MkIjftV47w8CSCXT0ozunoBNrypEMmssSbBNK.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="popular-card_ball"></div>
                </div>
              </div>

              <div>
                <div className="popular-card-item" style={{ margin: "0 8px" }}>
                  <div className="popular-card_inner">
                    <a href="#" className="popular-card_link">
                      <img
                        className="popular-card_image"
                        src="https://fungamess.games/images/games/1rpSogeKs73L5beNsyIJlWt3xZiVLxF012Io0KzP.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="popular-card_ball"></div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/*Tutorials section  */}
      <section className="tutorials_section">
        <div className="container">
          <h3 className="title-section">Tutorials</h3>
          <div className="button-model-wraper">
            <div className="button-item-wraper">
              <div className="button-item">
                {/* <!-- Button trigger modal --> */}
                <button
                  type="button"
                  className="btn fademodel-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  How To Register ID
                </button>

                {/* <!-- Modal --> */}
                <div
                  className="modal fade"
                  id="staticBackdrop"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabIndex={-1}
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content model-content-body_wraper">
                      <div className="modal-header">
                        <h1
                          className="modal-title fs-5 content-title"
                          id="staticBackdropLabel"
                        >
                          How to Register ID
                        </h1>
                        <button
                          type="button"
                          className="btn-close cancelbutton-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          <svg
                            className="cancelbutton-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="#fff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="relative w-full max-w-3xl mx-auto">
                          {/* Video Section */}
                          <video
                            className="w-full video-container   object-cover object-center rounded"
                            controls
                          >
                            <source
                              src="https://videos.pexels.com/video-files/856064/856064-hd_1920_1080_30fps.mp4"
                              type="video/mp4"
                            />
                          </video>

                          {/* Logo Section */}
                          <div className="absolute top-2 left-2">
                            <img
                              src="https://assets.cegbet.com/front-end/assets/images/logo.png"
                              alt="Logo"
                              className="w-20 h-20 object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="button-item">
                {/* <!-- Button trigger modal --> */}
                <button
                  type="button"
                  className="btn fademodel-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  How To Deposit?
                </button>

                {/* <!-- Modal --> */}
                <div
                  className="modal fade"
                  id="staticBackdrop"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabIndex={-1}
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1
                          className="modal-title fs-5"
                          id="staticBackdropLabel"
                        >
                          Modal title
                        </h1>

                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">...</div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="button-item">
                {/* <!-- Button trigger modal --> */}
                <button
                  type="button"
                  className="btn fademodel-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  How To Withdrow?
                </button>

                {/* <!-- Modal --> */}
                <div
                  className="modal fade"
                  id="staticBackdrop"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabIndex={-1}
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1
                          className="modal-title fs-5"
                          id="staticBackdropLabel"
                        >
                          Modal title
                        </h1>

                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">...</div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="game-provider-lgo_wraper">
          <div className="container-fluid">
            <h3 className="gaming-title">Gaming Providers</h3>
            <div
              className="game-provider-logo sm-text_content"
              id="game-provider-logo-block"
            >
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/1696503557292201696503557_ezugi-premium.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/1696503557292201696503557_ezugi-premium.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/1696847296407561696847296_xpg.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/169650304524041696503045_7mojos.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/1696503143833661696503143_tv-bet-2.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/1696503936441921696503936_pragmatic-play.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/1695247905938481695247905_32.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/1695247706972041695247706_19.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/1695247706972041695247706_19.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/1695247834557871695247834_26.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/1696505978286391696505978_mrslotty.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/1696506159866881696506159_hacksaw.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/1696506295791981696506295_pggames.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/1696506219649691696506219_spinthone.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/1696506460957171696506460_mascotgaming.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/1695247952242901695247952_35.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/1696506656550931696506656_leap.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/16965066799501696506679_12gaming.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/1696507449719711696507449_spribe-logo.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/1696502418806061696502418_coolgame.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/1696589988198031696589988_apollo-games.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/1696504982889101696504982_ct-gaming.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/1696504798281111696504798_onlyplay.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/1696506159866881696506159_hacksaw.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/1696503557292201696503557_ezugi-premium.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/1696503557292201696503557_ezugi-premium.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/1696847296407561696847296_xpg.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/169650304524041696503045_7mojos.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/1696503143833661696503143_tv-bet-2.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/1696503936441921696503936_pragmatic-play.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/1695247905938481695247905_32.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/1695247706972041695247706_19.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/1695247706972041695247706_19.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/1695247834557871695247834_26.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/1696505978286391696505978_mrslotty.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/1696506159866881696506159_hacksaw.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/1696506295791981696506295_pggames.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/1696506219649691696506219_spinthone.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/1696506460957171696506460_mascotgaming.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/1695247952242901695247952_35.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/1696506656550931696506656_leap.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/16965066799501696506679_12gaming.png"
                  alt=""
                />
              </a>
              <a href="#" className="provider-logo_link">
                <img
                  className="image-wraper"
                  src="https://assets.cegbet.com/images/brands/1696507449719711696507449_spribe-logo.png"
                  alt=""
                />
              </a>
            </div>
            <button className="sm-toggle_btn">
              Read more{" "}
              <span className="toggle-icocn_wraper">
                <Icon icon="uil:angle-down"></Icon>
              </span>
            </button>
          </div>
        </div>
        <div className="container">
          <div className="companypayment-section">
            <div className="company-block">
              <span className="title-company">Company License</span>
              <div className="img-block_wraper">
                <img
                  src="https://assets.cegbet.com/front-end/assets/images/license-logo.png"
                  alt="compant"
                />
              </div>
            </div>
            <div className="payment-block">
              <span className="payment-title">Payment Accept</span>
              <div className="img-block-payment">
                <img
                  className="payment-image"
                  src="https://assets.cegbet.com/images/payment-channels/1695247269947201695247269_esewa.png"
                  alt="esewa"
                />
                <img
                  className="payment-image"
                  src="https://assets.cegbet.com/images/payment-channels/1695247450725171695247450_khalti.png"
                  alt="khalti"
                />
                <img
                  className="payment-image"
                  src="https://assets.cegbet.com/images/payment-channels/1694522536185271694522536_ips-logo.png"
                  alt="ips"
                />
                <img
                  className="payment-image"
                  src="https://assets.cegbet.com/images/payment-channels/1698999068714321698999068_paytm.png"
                  alt="paytm"
                />
                <img
                  className="payment-image"
                  src="https://assets.cegbet.com/images/payment-channels/1698999563720731698999563_mastercard.png"
                  alt="mastercard"
                />
                <img
                  className="payment-image"
                  src="https://assets.cegbet.com/images/payment-channels/1698999590804101698999590_visa.png"
                  alt="visacard"
                />
                <img
                  className="payment-image"
                  src="https://assets.cegbet.com/images/payment-channels/1698998861442211698998861_paypal.png"
                  alt="paypal"
                />
                <img
                  className="payment-image"
                  src="https://assets.cegbet.com/images/payment-channels/1698998824806381698998824_bitcoin.png"
                  alt="bticoin"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer section */}
      <footer className="footer-section">
        <div className="footer-top">
          <div className="container">
            <div className="footer-top_wraper">
              <div className="footer-logo">
                <a href="#" className="footer-logo_link">
                  <img
                    src="https://assets.cegbet.com/front-end/assets/images/logo.png"
                    alt="footer-logo"
                  />
                </a>
                <span className="res-gambling">
                  "Responsible Gambling"
                  <img
                    src="https://assets.cegbet.com/front-end/assets/images/icon-18.png"
                    alt="logo"
                  />
                </span>
              </div>
              <ul className="footer-top_link_wraper">
                <li className="top-link_items">
                  <a href="#" className="top_link">
                    Offers
                  </a>
                </li>
                <li className="top-link_items">
                  <a href="#" className="top_link">
                    Terms & Conditions
                  </a>
                </li>
                <li className="top-link_items">
                  <a href="#" className="top_link">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bootm_wraper">
              <p className="copyright-text">
                Copyright @ 2024, CEG Bet (Complete E-Gaming Bet). All Rights
                Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
  <Footer/>
      <Script src="./assets/js/home.js" strategy="worker" />
    </>
  );
}
