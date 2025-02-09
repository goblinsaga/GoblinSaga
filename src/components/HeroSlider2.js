import { Swiper, SwiperSlide } from "swiper/react";
import { Hero4Slider } from "./sliderProps";
const HeroSlider2 = () => {
    return (
        <section id="hero4">
            <div
                className="fn_cs_hero_slider ripple"
                data-ratio="1.33"
                id="ripple"
            >
                <div className="left_part">
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                        }}
                    >
                        <h3 className="fn__maintitle big" data-text="Goblin Saga">
                            Goblin Saga
                        </h3>
                    </div>

                    <p style={{ textAlign: "center" }}>
                        Conquer the DeFi world through NFTs, mining, and rewards in an innovative universe on Polygon.
                    </p>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            gap: "10px"
                        }}
                    >
                        <a
                            href="/mint"
                            className="metaportal_fn_button"
                        >
                            <span>Mint Now</span>
                        </a>
                        <a
                            href="https://de.fi/scanner/contract/0x4ac03107603f37ad24a36c32bec98b22af46abbf?chainId=plg"
                            target="_blank"
                            className="metaportal_fn_button"
                        >
                            <span>DeFi Scan</span>
                        </a>
                    </div>
                </div>
                <div className="slider_part">
                    <Swiper {...Hero4Slider} className="swiper-container">
                        <div className="swiper-wrapper">
                            <SwiperSlide className="swiper-slide">
                                <div className="item">
                                    <div className="img_holder">
                                        <div
                                            className="abs_img"
                                            data-bg-img="/img/slider/1.png"
                                        />
                                        <img src="/img/1x1.jpg" alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="swiper-slide">
                                <div className="item">
                                    <div className="img_holder">
                                        <div
                                            className="abs_img"
                                            data-bg-img="/img/slider/2.png"
                                        />
                                        <img src="/img/1x1.jpg" alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="swiper-slide">
                                <div className="item">
                                    <div className="img_holder">
                                        <div
                                            className="abs_img"
                                            data-bg-img="/img/slider/3.png"
                                        />
                                        <img src="/img/1x1.jpg" alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="swiper-slide">
                                <div className="item">
                                    <div className="img_holder">
                                        <div
                                            className="abs_img"
                                            data-bg-img="/img/slider/4.png"
                                        />
                                        <img src="/img/1x1.jpg" alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="swiper-slide">
                                <div className="item">
                                    <div className="img_holder">
                                        <div
                                            className="abs_img"
                                            data-bg-img="/img/slider/5.png"
                                        />
                                        <img src="/img/1x1.jpg" alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="swiper-slide">
                                <div className="item">
                                    <div className="img_holder">
                                        <div
                                            className="abs_img"
                                            data-bg-img="/img/slider/6.png"
                                        />
                                        <img src="/img/1x1.jpg" alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="swiper-slide">
                                <div className="item">
                                    <div className="img_holder">
                                        <div
                                            className="abs_img"
                                            data-bg-img="/img/slider/7.png"
                                        />
                                        <img src="/img/1x1.jpg" alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};
export default HeroSlider2;
