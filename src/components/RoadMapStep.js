import { Swiper, SwiperSlide } from "swiper/react";
import { roadMapProps } from "../sliderProps"; // Asegúrate de que esta importación esté correctamente configurada

const RoadMapSlider = () => {
  return (
    <section id="roadmap" style={{ marginTop: "-150px" }}>
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text="Step Map"
          data-align="center"
        >
          Step Map
        </h3>
        <div className="fn_cs_roadmap">
          <div className="step_holder">
            <div className="step_in" />
          </div>
          <div className="slider_holder">
            <Swiper
              {...roadMapProps}
              className="swiper-container"
              breakpoints={{

                320: {
                  slidesPerView: 1, 
                  spaceBetween: 10,  
                },

                576: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },

                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },

                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Step 01</span>
                    <div className="item_in">
                      <h3 className="title">Goblin Saga NFT Launch</h3>
                      <p className="desc">
                        Launch of a unique collection of 4,444 hand-crafted pixel art NFTs. These NFTs will be minted under the ERC-721 standard and hosted on the eco-friendly Polygon network.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Step 02</span>
                    <div className="item_in">
                      <h3 className="title">xGSA/GSA Token Launch</h3>
                      <p className="desc">
                        Introduce the launch $GSA token, designed to power the mining process within the Goblin Saga app. This token will incentivize holders to actively participate in ecosystem.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Step 03</span>
                    <div className="item_in">
                      <h3 className="title">Launch of Mining App</h3>
                      <p className="desc">
                        Launch of idle game-themed mining app, where holders will have the opportunity to purchase items. These items will help increase their earnings within a fully gamified environment.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Step 04</span>
                    <div className="item_in">
                      <h3 className="title">NFT Collection Sold Out</h3>
                      <p className="desc">
                        Collection has reached its sold-out status, paving the way for the launch of the Secret Phase. 1,111 exclusive additional NFTs will be made available. These NFTs can be minted only with $GSA.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Step 05</span>
                    <div className="item_in">
                      <h3 className="title">Sold Out of GSA Token</h3>
                      <p className="desc">
                        The presale of token has successfully sold out, with a total supply of 6,000,000,000 tokens allocated for sale. This achievement is aimed at securing enhanced liquidity for the token launch.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Step 06</span>
                    <div className="item_in">
                      <h3 className="title">Token LP</h3>
                      <p className="desc">
                        With sold-out status of NFT collection and the allocated supply from the token presale, the total liquidity will be increased by 100% of the token sale proceeds and 20% of the NFT sale proceeds.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Step 07</span>
                    <div className="item_in">
                      <h3 className="title">Mining Season 2</h3>
                      <p className="desc">
                        Once the GSA token is listed on the most popular DEXs, a new wave of mining will be launched within the app. 1,000,000,000 GSA tokens will be allocated to this step.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Step 08</span>
                    <div className="item_in">
                      <h3 className="title">Goblin Saga Season 2</h3>
                      <p className="desc">
                        Users who acquired Token Boxes within the mining app will receive mutation runes, allowing them to claim their 2D Goblins for free. This season will introduce innovative strategies in ecosystem.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <p style={{ textAlign: "center" }}>More Info About Project and Ecosystem</p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <a
              href="https://docs.goblinsaga.xyz"
              className="metaportal_fn_button"
              target="_blank"
              rel="noreferrer"
            >
              <span>White Paper</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadMapSlider;
