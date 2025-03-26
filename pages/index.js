import { useLayoutEffect, useEffect, useRef } from "react";
import About from "../src/components/About";
import Collection from "../src/components/Collection";
import FunFacts from "../src/components/FunFacts";
import SectionDivider from "../src/components/SectionDivider";
import Layout from "../src/layout/Layout";
import Faq from "../src/components/Faq";
import SeenOn from "../src/components/AsSeenOn";
import Apps from "../src/components/Apps";
import Partners from "../src/components/partners";
import Legacy from "../src/components/GoblinSagaLegacy";
import { heroSlider2 } from "../src/utilits";
import NewUsersTwo from "../src/components/NewUsers2";
import TokenPrice from "../src/components/TokenPrice";

const Index = () => {
  const sectionRefs = useRef([]);
  
  useLayoutEffect(() => {
    heroSlider2();
  }, []);

  useEffect(() => {
    const addToRefs = (el) => {
      if (el && !sectionRefs.current.includes(el)) {
        sectionRefs.current.push(el);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      sectionRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const addSectionRef = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <Layout pageTitle={"Home #3"}>
      {/* Home Section #2 */}
      <section id="home2">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src="/img/LogoGS.png" style={{ width: "25%" }} />
          </div>

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
            <a href="/mint" className="metaportal_fn_button" style={{ width: "150px" }}>
              <span>Mint Now</span>
            </a>
            <a href="https://docs.goblinsaga.xyz/" target="_blank" className="metaportal_fn_button" style={{ width: "150px" }}>
              <span>Docs</span>
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

      {/* Other Sections with Scroll Animation */}
      <FunFacts />

      <div ref={addSectionRef} className="scroll-section">
        <TokenPrice />
      </div>

      <div ref={addSectionRef} className="scroll-section">
        <NewUsersTwo />
      </div>
      
      <div ref={addSectionRef} className="scroll-section">
        <About />
      </div>

      <div ref={addSectionRef} className="scroll-section">
        <Partners />
      </div>

      <div ref={addSectionRef} className="scroll-section">
        <Apps />
      </div>

      <div ref={addSectionRef} className="scroll-section">
        <SectionDivider />
      </div>

      <div ref={addSectionRef} className="scroll-section">
        <Collection />
      </div>

      <div ref={addSectionRef} className="scroll-section">
        <SeenOn />
      </div>

      <div ref={addSectionRef} className="scroll-section">
        <SectionDivider />
      </div>

      <div ref={addSectionRef} className="scroll-section">
        <Legacy />
      </div>

      <div ref={addSectionRef} className="scroll-section">
        <SectionDivider />
      </div>

      <div ref={addSectionRef} className="scroll-section">
        <Faq />
      </div>

      <style jsx global>{`
        /* Scroll Animation Styles */
        .scroll-section {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .scroll-section.section-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Add delay for each section */
        .scroll-section:nth-child(1) { transition-delay: 0.1s; }
        .scroll-section:nth-child(2) { transition-delay: 0.2s; }
        .scroll-section:nth-child(3) { transition-delay: 0.3s; }
        .scroll-section:nth-child(4) { transition-delay: 0.4s; }
        .scroll-section:nth-child(5) { transition-delay: 0.5s; }
        .scroll-section:nth-child(6) { transition-delay: 0.6s; }
        .scroll-section:nth-child(7) { transition-delay: 0.7s; }
        .scroll-section:nth-child(8) { transition-delay: 0.8s; }
        .scroll-section:nth-child(9) { transition-delay: 0.9s; }
        .scroll-section:nth-child(10) { transition-delay: 1.0s; }
        .scroll-section:nth-child(11) { transition-delay: 1.1s; }
        .scroll-section:nth-child(12) { transition-delay: 1.2s; }
      `}</style>
    </Layout>
  );
};

export default Index;
