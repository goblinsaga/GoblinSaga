import { useLayoutEffect } from "react";
import About from "../src/components/About";
import Collection from "../src/components/Collection";
import FunFacts from "../src/components/FunFacts";
import SectionDivider from "../src/components/SectionDivider";
import Layout from "../src/layout/Layout";
import TopMiners from "../src/components/TopMiners";
import Faq from "../src/components/Faq";
import SeenOn from "../src/components/AsSeenOn";
import TokenPrice from "../src/components/TokenPrice";
import RoadMapSlider from "../src/components/RoadMapStep";
import Partners from "../src/components/partners";
import Legacy from "../src/components/GoblinSagaLegacy";
import { heroSlider2 } from "../src/utilits";

const Index = () => {
  useLayoutEffect(() => {
    heroSlider2();
  }, []);

  return (
    <Layout pageTitle={"Home #3"}>
      {/* Home Section #2 */}
      <section id="home2">
        <div className="container">
          <h3 className="fn__maintitle big" data-text="Goblin Saga" data-align="center">
            Goblin Saga
          </h3>
          <div style={{ paddingTop: "1rem" }} className="fn_cs_desc">
            <p>Conquer the DeFi world through NFTs, mining, and rewards in an innovative universe on Polygon.</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              gap: "10px"
            }}
          >
            <a href="/mint" className="metaportal_fn_button">
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
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
            <a href="https://nftcalendar.io/event/goblin-saga-nft-mi-1/" target="_blank">
              <img src="/img/NFTCalendar.png" 
                style={{ 
                  width: "50px", 
                  height: "auto", 
                  transition: "transform 0.3s ease-in-out", 
                  cursor: "pointer"
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.2)"} 
                onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"} 
              />
            </a>
          </div>
        </div>

        {/* Card Slider */}
        <div className="frenify_cards_gallery" data-initial-width={540} data-ratio="0.925">
          <ul>
            <li>
              <div className="img_holder">
                <div className="item_in">
                  <div className="o_img" data-bg-img="/img/slider/1.png" />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
            </li>
            <li>
              <div className="img_holder">
                <div className="item_in">
                  <div className="o_img" data-bg-img="/img/slider/2.png" />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
            </li>
            <li>
              <div className="img_holder">
                <div className="item_in">
                  <div className="o_img" data-bg-img="/img/slider/3.png" />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
            </li>
            <li>
              <div className="img_holder">
                <div className="item_in">
                  <div className="o_img" data-bg-img="/img/slider/4.png" />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
            </li>
            <li>
              <div className="img_holder">
                <div className="item_in">
                  <div className="o_img" data-bg-img="/img/slider/5.png" />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
            </li>
            <li>
              <div className="img_holder">
                <div className="item_in">
                  <div className="o_img" data-bg-img="/img/slider/6.png" />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
            </li>
            <li>
              <div className="img_holder">
                <div className="item_in">
                  <div className="o_img" data-bg-img="/img/slider/7.png" />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
            </li>
            <li>
              <div className="img_holder">
                <div className="item_in">
                  <div className="o_img" data-bg-img="/img/slider/28.png" />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
            </li>
            <li>
              <div className="img_holder">
                <div className="item_in">
                  <div className="o_img" data-bg-img="/img/slider/104.png" />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Other Sections */}
      <FunFacts />

      <TokenPrice />

      <Partners />
      
      <About />

      <RoadMapSlider />

      <Collection />

      <SeenOn />

      <SectionDivider />

      <Legacy />

      <SectionDivider />

      <TopMiners />

      <SectionDivider />

      <Faq />
    </Layout>
  );
};

export default Index;
