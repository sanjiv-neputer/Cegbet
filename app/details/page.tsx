
"use client"
import '@/public/assets/sass/pages/details.css'
import Slider from "react-slick";
import { Icon } from '@iconify/react/dist/iconify.js';



export default function Details() {
  var settingsImage = {
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 1000,
    // autoplaySpeed: 1000,
    // infinite: true, 
    responsive: [

      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }  
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }  
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }  
      }
    ]
  };
  return (
    <>
      <section className="header-bottom">
        <div className="container costom-container">
          <div className="header-bottom_container">
            <div className="theme-wraper">
              <div className="theme-item">
                <a href="#" className="card-item">
                  <span className="image-wraper">
                    <img src="https://assets.cegbet.com/images/menus/1697629970880531697629970_offer-speaker.png" alt="" />
                  </span>
                  <span className="card-content">Promotion</span>
                </a>
              </div>
              <div className="theme-item">
                <a href="#" className="card-item">
                  <span className="image-wraper">
                    <img src="https://assets.cegbet.com/images/menus/1694510266891321694510266_icon-live-casino.png" alt="" />
                  </span>
                  <span className="card-content">Live Casino</span>
                </a>
              </div>
              <div className="theme-item">
                <a href="#" className="card-item">
                  <span className="image-wraper">
                    <img src="https://assets.cegbet.com/images/menus/1694510407905221694510407_icon-teen-pati.png" alt="" />
                  </span>
                  <span className="Teen Pati">Teen Pati</span>
                </a>
              </div>
              <div className="theme-item">
                <a href="#" className="card-item">
                  <span className="image-wraper">
                    <img src="https://assets.cegbet.com/images/menus/1694510236255431694510236_icon-baccrate.png" alt="" />
                  </span>
                  <span className="card-content">Baccrate</span>
                </a>
              </div>
              <div className="theme-item">
                <a href="#" className="card-item">
                  <span className="image-wraper">
                    <img src="https://assets.cegbet.com/images/menus/1694510202119681694510202_icon-roullet.png" alt="" />
                  </span>
                  <span className="card-content">Roullet</span>
                </a>
              </div>
              <div className="theme-item">
                <a href="#" className="card-item">
                  <span className="image-wraper">
                    <img src="https://assets.cegbet.com/images/menus/1696099943359231696099943_pokercard.png" alt="" />
                  </span>
                  <span className="card-content">Pokercard</span>
                </a>
              </div>

              <div className="theme-item">
                <a href="#" className="card-item">
                  <span className="image-wraper">
                    <img src="https://assets.cegbet.com/images/menus/1694510295290041694510295_icon-slot-game.png" alt="" />
                  </span>
                  <span className="card-content">Slot Games</span>
                </a>
              </div>
              <div className="theme-item">
                <a href="#" className="card-item">
                  <span className="image-wraper">
                    <img src="https://assets.cegbet.com/images/menus/1694510378777681694510378_icon-virtual-games.png" alt="" />
                  </span>
                  <span className="card-content">Virtual Games</span>
                </a>
              </div>
              <div className="theme-item">
                <a href="#" className="card-item">
                  <span className="image-wraper">
                    <img src="https://assets.cegbet.com/images/menus/1694509623900381694509623_icon-football.png" alt="" />
                  </span>
                  <span className="card-content">Football</span>
                </a>
              </div>
              <div className="theme-item">
                <a href="#" className="card-item">
                  <span className="image-wraper">
                    <img src="https://assets.cegbet.com/images/menus/1694509725271721694509725_icon-criket.png" alt="" />
                  </span>
                  <span className="card-content">Cricket</span>
                </a>
              </div>
              <div className="theme-item">
                <a href="#" className="card-item">
                  <span className="image-wraper">
                    <img src="https://assets.cegbet.com/images/menus/1694509785292471694509785_icon-volleyball.png" alt="" />
                  </span>
                  <span className="card-content">Volleyball</span>
                </a>
              </div>
              <div className="theme-item">
                <a href="#" className="card-item">
                  <span className="image-wraper">
                    <img src="https://assets.cegbet.com/images/menus/1694510041363911694510041_icon-boxing.png" alt="" />
                  </span>
                  <span className="card-content">Boxing/UFC</span>
                </a>
              </div>
              <div className="theme-item">
                <a href="#" className="card-item">
                  <span className="image-wraper">
                    <img src="https://assets.cegbet.com/images/menus/1694510019518371694510019_icon-rugby.png" alt="" />
                  </span>
                  <span className="card-content">Rugby</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="heading-text_wraper">
        <div className="container">
          <div className="row justify-center">
            <div className="col-lg-12 col-xl-12 text-center">
              <ul className="heading-container">
                <li className="heading-item">
                  <a className="heading-item_link" href="#">Sport Book</a>
                </li>
                <li className="heading-item">
                  <a className="heading-item_link" href="#">Live Casinos</a>
                </li>
                <li className="heading-item">
                  <a className="heading-item_link" href="#">Slot Games</a>
                </li>
                <li className="heading-item">
                  <a className="heading-item_link" href="#">Virtual Games</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* multiple photo slider and categories, sorting section*/}
      <div className='multipleimage-section'>
        <div className="container slider-container">
          <div className='slider-wraper'>
            <div className="slider-container">
              <Slider {...settingsImage}>
                <div className='slider-item'>
                  <a href="#" className='slider-link'>
                    <img src="https://assets.cegbet.com/images/provider/1695411648385951695411648_evolution.png" alt="" />
                  </a>
                </div>
                <div className='slider-item'>
                  <a href="#" className='slider-link'>
                    <img src="https://assets.cegbet.com/images/provider/1695411617208291695411617_25.png" alt="" />
                  </a>
                </div>
                <div className='slider-item'>
                  <a href="#" className='slider-link'>
                    <img src="https://assets.cegbet.com/images/provider/1695419116360811695419116_pragmatic-play.png" alt="" />
                  </a>
                </div>
                <div className='slider-item'>
                  <a href="#" className='slider-link'>
                    <img src="https://assets.cegbet.com/images/provider/1696847964436081696847964_xpg.png" alt="" />
                  </a>
                </div>
                <div className='slider-item'>
                  <a href="#" className='slider-link'>
                    <img src="https://assets.cegbet.com/images/provider/1696189332545051696189332_betgamestv.png" alt="" />
                  </a>
                </div>
                <div className='slider-item'>
                  <a href="#" className='slider-link'>
                    <img src="https://assets.cegbet.com/images/provider/1696236480271111696236480_tv-bet-2.png" alt="" />
                  </a>
                </div>
                <div className='slider-item'>
                  <a href="#" className='slider-link'>
                    <img src="https://assets.cegbet.com/images/provider/1695411842486391695411842_7mojos.png" alt="" />
                  </a>
                </div >
                <div className='slider-item'>
                  <a href="#" className='slider-link'>
                    <img src="https://assets.cegbet.com/images/provider/1695411648385951695411648_evolution.png" alt="" />
                  </a>
                </div>
              </Slider>
            </div>
          </div>
        </div>
          {/*categories section  */}
          <div className='container'>
          <div className="detail-categories_wraper">
            <div className="row justify-center ">
              <div className="col-lg-12 col-xl-12 text-center">
                <ul className='categories-container'>
                  <li className='categories-item'>
                    <a className='categories-item_link' href="#">Teen Patti</a>
                  </li>
                  <li className='categories-item'>
                    <a className='categories-item_link' href="#">Roulette</a>
                  </li>
                  <li className='categories-item'>
                    <a className='categories-item_link' href="#">Baccrate</a>
                  </li>
                  <li className='categories-item'>
                    <a className='categories-item_link' href="#">in and out</a>
                  </li>
                  <li className='categories-item'>
                    <a className='categories-item_link' href="#">Black Jack</a>
                  </li>
                  <li className='categories-item'>
                    <a className='categories-item_link' href="#">Dragon Tiger</a>
                  </li>
                  <li className='categories-item'>
                    <a className='categories-item_link' href="#">Poker</a>
                  </li>
                  <li className='categories-item'>
                    <a className='categories-item_link' href="#">New Live Casino</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sorting Games */}
          <div className="sorting-game_wraper">
            <div className="search-box">
              <form className='search-from' action="#">
                <input id='search-input' type="text" className='form-control' placeholder='Search Games...' />
              </form>
              <span className='game-count-section'>
                Showing 134 games
              </span>
            </div>
            <div className="shorting-box">
              <span className='shorting-title'>Sort By:</span>
              <div className="button-block_btn">
                <a href="#" className='shorting-btn_link'>
                  <Icon icon="material-symbols-light:star-outline-rounded" width="20" height="20" />
                  Newest
                </a>
                <a href="#" className='shorting-btn_link'>
                  <Icon icon="material-symbols-light:star-outline-rounded" width="20" height="20" />
                  Newest
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Top Game section */}
      <section className='topgame_section'>
        <div className="container-fluid">
          <div className="row g-2 xjustify-center">
          <div className='col-5th col-lg-3 col-md-4 col-6 '>
              <div className='topgame-item'>
                <div className='topgame-inner_part'>
                  <a href="#" className='topgame-link'>
                    <img className='topgame-image_link' src="https://fungamess.games/images/games/7s9Ip8y1HfzI9JYKV1FnF65KhapjotU1Vc5NCMRq.png" alt="" />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>
              </div>
            </div>
            <div className='col-5th col-lg-3 col-md-4 col-6 '>
              <div className='topgame-item'>
                <div className='topgame-inner_part'>
                  <a href="#" className='topgame-link'>
                    <img className='topgame-image_link' src="https://fungamess.games/images/games/VVAfdcVJ8C5HL1eDF5UVpKyI1lP3WWO5BEr6CBTX.png" alt="" />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>

              </div>
            </div>
            <div className='col-5th col-lg-3 col-md-4 col-6 '>
              <div className='topgame-item'>
                <div className='topgame-inner_part'>
                  <a href="#" className='topgame-link'>
                    <img className='topgame-image_link' src="https://fungamess.games/images/games/Ugd7qEtglIMjTs2mkcLauvpnK8F1qigGKLo23RIJ.png" alt="" />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>

              </div>
            </div>
            <div className='col-5th col-lg-3 col-md-4 col-6 '>
              <div className='topgame-item'>
                <div className='topgame-inner_part'>
                  <a href="#" className='topgame-link'>
                    <img className='topgame-image_link' src="https://fungamess.games/images/games/kVPnx46PASqHe6uChaxT5Tyvxc56oJC7u6ORRmto.png" alt="" />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>

              </div>
            </div>

            <div className='col-5th col-lg-3 col-md-4 col-6 '>
              <div className='topgame-item'>
                <div className='topgame-inner_part'>
                  <a href="#" className='topgame-link'>
                    <img className='topgame-image_link' src="https://fungamess.games/images/games/KFOP1FtFdio95sdZbPFba3TcltsN3mNDi7ByqX7C.png" alt="" />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>
              </div>
            </div>
            <div className='col-5th col-lg-3 col-md-4 col-6 '>
              <div className='topgame-item'>
                <div className='topgame-inner_part'>
                  <a href="#" className='topgame-link'>
                    <img className='topgame-image_link' src="https://fungamess.games/images/games/eWb2pKEKDxtvEeotyoFNmkePR28h5o8jfwq0zXBB.png" alt="" />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>

              </div>
            </div>
            <div className='col-5th col-lg-3 col-md-4 col-6 '>
              <div className='topgame-item'>
                <div className='topgame-inner_part'>
                  <a href="#" className='topgame-link'>
                    <img className='topgame-image_link' src="https://fungamess.games/images/games/iLaaTRwojLy5Cq3lT2FEix9rG8eC1ap7SN0LCuno.png" alt="" />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>

              </div>
            </div>
            <div className='col-5th col-lg-3 col-md-4 col-6 '>
              <div className='topgame-item'>
                <div className='topgame-inner_part'>
                  <a href="#" className='topgame-link'>
                    <img className='topgame-image_link' src="https://fungamess.games/images/games/2ZSKYJJk4QydtgF3r86CuRiuwW2HyuBYtWW5wAYI.png" alt="" />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>

              </div>
            </div>

            <div className='col-5th col-lg-3 col-md-4 col-6 '>
              <div className='topgame-item'>
                <div className='topgame-inner_part'>
                  <a href="#" className='topgame-link'>
                    <img className='topgame-image_link' src="https://fungamess.games/images/games/mg0pK6pca372qVGf7ido655SYe9a3cOeb8L3XOOn.png" alt="" />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>
              </div>
            </div>
            <div className='col-5th col-lg-3 col-md-4 col-6 '>
              <div className='topgame-item'>
                <div className='topgame-inner_part'>
                  <a href="#" className='topgame-link'>
                    <img className='topgame-image_link' src="https://fungamess.games/images/games/Ll4HBah48xMNjbUbIdmTVPBECTviebFJqij9z3tL.png" alt="" />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>

              </div>
            </div>
            <div className='col-5th col-lg-3 col-md-4 col-6 '>
              <div className='topgame-item'>
                <div className='topgame-inner_part'>
                  <a href="#" className='topgame-link'>
                    <img className='topgame-image_link' src="https://fungamess.games/images/games/nmMPU15x7wGp8cKmqghufLa6DROYA4RCFmt5LlIf.png" alt="" />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>

              </div>
            </div>
            <div className='col-5th col-lg-3 col-md-4 col-6 '>
              <div className='topgame-item'>
                <div className='topgame-inner_part'>
                  <a href="#" className='topgame-link'>
                    <img className='topgame-image_link' src="https://fungamess.games/images/games/nNq5yOX6O8zAuPdQLBotPiynmNK2omXQ4CbAKpbk.png" alt="" />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>

              </div>
            </div>

            <div className='col-5th col-lg-3 col-md-4 col-6 '>
              <div className='topgame-item'>
                <div className='topgame-inner_part'>
                  <a href="#" className='topgame-link'>
                    <img className='topgame-image_link' src="https://fungamess.games/images/games/UJAglh63UjG99GiPaizQNwx4UNNKeLypNrrCVNYG.png" alt="" />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>
              </div>
            </div>
            <div className='col-5th col-lg-3 col-md-4 col-6 '>
              <div className='topgame-item'>
                <div className='topgame-inner_part'>
                  <a href="#" className='topgame-link'>
                    <img className='topgame-image_link' src="https://fungamess.games/images/games/tu6F1SwiFv7uGOZ3a6egTgWQaFzhYw7KEJikF049.png" alt="" />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>

              </div>
            </div>
            <div className='col-5th col-lg-3 col-md-4 col-6 '>
              <div className='topgame-item'>
                <div className='topgame-inner_part'>
                  <a href="#" className='topgame-link'>
                    <img className='topgame-image_link' src="https://fungamess.games/images/games/kx01DuU5GyLYtMIlfsG4usZAoj6Lsog7peU06rRV.png" alt="" />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>

              </div>
            </div>
            <div className='col-5th col-lg-3 col-md-4 col-6 '>
              <div className='topgame-item'>
                <div className='topgame-inner_part'>
                  <a href="#" className='topgame-link'>
                    <img className='topgame-image_link' src="https://fungamess.games/images/games/c3DJ9Nwk1Epd5UnXJlTvnkf64Axv8pI6uQ77ASV6.png" alt="" />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>

              </div>
            </div>

            <div className='col-5th col-lg-3 col-md-4 col-6 '>
              <div className='topgame-item'>
                <div className='topgame-inner_part'>
                  <a href="#" className='topgame-link'>
                    <img className='topgame-image_link' src="https://fungamess.games/images/games/wRwFgr4QPSihdIkNvXRKBhnR9x87Q3Ma2tym6aHy.png" alt="" />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>
              </div>
            </div>
            <div className='col-5th col-lg-3 col-md-4 col-6 '>
              <div className='topgame-item'>
                <div className='topgame-inner_part'>
                  <a href="#" className='topgame-link'>
                    <img className='topgame-image_link' src="https://fungamess.games/images/games/bAmQtzAN7w0kPle3quuJG6jjHlyQcwPhkI1mOmFn.png" alt="" />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>

              </div>
            </div>
            <div className='col-5th col-lg-3 col-md-4 col-6  '>
              <div className='topgame-item'>
                <div className='topgame-inner_part'>
                  <a href="#" className='topgame-link'>
                    <img className='topgame-image_link' src="https://fungamess.games/images/games/gPSjmX7XhPoGQgLHhgBSfzyvIaOSTtQqI5e4JS32.png" alt="" />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>

              </div>
            </div>
            <div className='col-5th col-lg-3 col-md-4 col-6 '>
              <div className='topgame-item'>
                <div className='topgame-inner_part'>
                  <a href="#" className='topgame-link'>
                    <img className='topgame-image_link' src="https://fungamess.games/images/games/yaXbXAiSPpjWNbq3gnwCSIFguHAT5oy9mB9qCIFz.png" alt="" />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>

              </div>
            </div>
            <div className='col-5th col-lg-3 col-md-4 col-6 '>
              <div className='topgame-item'>
                <div className='topgame-inner_part'>
                  <a href="#" className='topgame-link'>
                    <img className='topgame-image_link' src="https://fungamess.games/images/games/iLaaTRwojLy5Cq3lT2FEix9rG8eC1ap7SN0LCuno.png" alt="" />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>

              </div>
            </div>
            <div className='col-5th col-lg-3 col-md-4 col-6 '>
              <div className='topgame-item'>
                <div className='topgame-inner_part'>
                  <a href="#" className='topgame-link'>
                    <img className='topgame-image_link' src="https://fungamess.games/images/games/2ZSKYJJk4QydtgF3r86CuRiuwW2HyuBYtWW5wAYI.png" alt="" />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>

              </div>
            </div>

            <div className='col-5th col-lg-3 col-md-4 col-6 '>
              <div className='topgame-item'>
                <div className='topgame-inner_part'>
                  <a href="#" className='topgame-link'>
                    <img className='topgame-image_link' src="https://fungamess.games/images/games/mg0pK6pca372qVGf7ido655SYe9a3cOeb8L3XOOn.png" alt="" />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>
              </div>
            </div>
            <div className='col-5th col-lg-3 col-md-4 col-6 '>
              <div className='topgame-item'>
                <div className='topgame-inner_part'>
                  <a href="#" className='topgame-link'>
                    <img className='topgame-image_link' src="https://fungamess.games/images/games/Ll4HBah48xMNjbUbIdmTVPBECTviebFJqij9z3tL.png" alt="" />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>

              </div>
            </div>
            <div className='col-5th col-lg-3 col-md-4 col-6 '>
              <div className='topgame-item'>
                <div className='topgame-inner_part'>
                  <a href="#" className='topgame-link'>
                    <img className='topgame-image_link' src="https://fungamess.games/images/games/nmMPU15x7wGp8cKmqghufLa6DROYA4RCFmt5LlIf.png" alt="" />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>

              </div>
            </div>
            <div className='col-5th col-lg-3 col-md-4 col-6 '>
              <div className='topgame-item'>
                <div className='topgame-inner_part'>
                  <a href="#" className='topgame-link'>
                    <img className='topgame-image_link' src="https://fungamess.games/images/games/nNq5yOX6O8zAuPdQLBotPiynmNK2omXQ4CbAKpbk.png" alt="" />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>

              </div>
            </div>

            <div className='col-5th col-lg-3 col-md-4 col-6 '>
              <div className='topgame-item'>
                <div className='topgame-inner_part'>
                  <a href="#" className='topgame-link'>
                    <img className='topgame-image_link' src="https://fungamess.games/images/games/UJAglh63UjG99GiPaizQNwx4UNNKeLypNrrCVNYG.png" alt="" />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>
              </div>
            </div>
            <div className='col-5th col-lg-3 col-md-4 col-6 '>
              <div className='topgame-item'>
                <div className='topgame-inner_part'>
                  <a href="#" className='topgame-link'>
                    <img className='topgame-image_link' src="https://fungamess.games/images/games/tu6F1SwiFv7uGOZ3a6egTgWQaFzhYw7KEJikF049.png" alt="" />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>

              </div>
            </div>
            <div className='col-5th col-lg-3 col-md-4 col-6 '>
              <div className='topgame-item'>
                <div className='topgame-inner_part'>
                  <a href="#" className='topgame-link'>
                    <img className='topgame-image_link' src="https://fungamess.games/images/games/kx01DuU5GyLYtMIlfsG4usZAoj6Lsog7peU06rRV.png" alt="" />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>

              </div>
            </div>
            <div className='col-5th col-lg-3 col-md-4 col-6 '>
              <div className='topgame-item'>
                <div className='topgame-inner_part'>
                  <a href="#" className='topgame-link'>
                    <img className='topgame-image_link' src="https://fungamess.games/images/games/c3DJ9Nwk1Epd5UnXJlTvnkf64Axv8pI6uQ77ASV6.png" alt="" />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>

              </div>
            </div>

            <div className='col-5th col-lg-3 col-md-4 col-6 '>
              <div className='topgame-item'>
                <div className='topgame-inner_part'>
                  <a href="#" className='topgame-link'>
                    <img className='topgame-image_link' src="https://fungamess.games/images/games/wRwFgr4QPSihdIkNvXRKBhnR9x87Q3Ma2tym6aHy.png" alt="" />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>
              </div>
            </div>
            <div className='col-5th col-lg-3 col-md-4 col-6 '>
              <div className='topgame-item'>
                <div className='topgame-inner_part'>
                  <a href="#" className='topgame-link'>
                    <img className='topgame-image_link' src="https://fungamess.games/images/games/bAmQtzAN7w0kPle3quuJG6jjHlyQcwPhkI1mOmFn.png" alt="" />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>

              </div>
            </div>
            <div className='col-5th col-lg-3 col-md-4 col-6  '>
              <div className='topgame-item'>
                <div className='topgame-inner_part'>
                  <a href="#" className='topgame-link'>
                    <img className='topgame-image_link' src="https://fungamess.games/images/games/gPSjmX7XhPoGQgLHhgBSfzyvIaOSTtQqI5e4JS32.png" alt="" />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>

              </div>
            </div>
            <div className='col-5th col-lg-3 col-md-4 col-6 '>
              <div className='topgame-item'>
                <div className='topgame-inner_part'>
                  <a href="#" className='topgame-link'>
                    <img className='topgame-image_link' src="https://fungamess.games/images/games/yaXbXAiSPpjWNbq3gnwCSIFguHAT5oy9mB9qCIFz.png" alt="" />
                  </a>
                </div>
                <div className="topgame-bg_container"></div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}