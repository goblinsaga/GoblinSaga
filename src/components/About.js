import RoadMapSlider from "./RoadMapStep";
const About = () => {
  return (
    <section id="about">
      {/* About Shortcode */}
      <div className="fn_cs_about">
        <div className="left_part">
          <div className="img">
            <div className="img_in" data-bg-img="/img/goblin-saga-genesis-nft.gif">
              <img src="/img/1x1.jpg" alt="" />
            </div>
          </div>
          <div className="bg_overlay">
            <div className="bg_color" />
            <div className="bg_image" data-bg-img="/img/goblin-saga-genesis-nft.gif" />
          </div>
        </div>
        <div className="right_part">
          <div className="right_in">
            <h3 className="fn__maintitle" data-text="About Goblin Saga">
              About Goblin Saga
            </h3>
            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>
            <div className="desc">
              <p style={{ textAlign: "justify" }}>
                Goblin Saga is a strategic DeFi ecosystem on Polygon, where Goblin NFTs are more than collectibles—they're powerful assets that unlock unique financial opportunities.
              </p>
              <p style={{ textAlign: "justify" }}>
                Each Goblin NFT is a key to:
              </p>
              <ul>
                <li>⚒️ Mining $GSA – Stake your Goblins & earn passive rewards.</li>
                <li>💰 DeFi Utility – Use Goblins to access exclusive staking pools.</li>
                <li>🔥 Exclusive Perks – Boost earnings & unlock rare benefits.</li>
              </ul>
              <p style={{ textAlign: "justify" }}>With only 4,444 handcrafted pixel-art Goblins, every NFT is a rare digital warrior in the Goblin Saga universe.</p>
              <p style={{ textAlign: "justify" }}>
                🔹 Stake, Earn & Conquer the DeFi world with your Goblins! 🚀
              </p>
            </div>
            <div
              style={{
                display: "flex",
                gap: "10px"
              }}
            >
              <a href="/mint" className="metaportal_fn_button" style={{ width: "150px" }}>
                <span>Mint Now</span>
              </a>
              <a href="https://docs.goblinsaga.xyz/" target="_blank" className="metaportal_fn_button" style={{ width: "150px" }}>
                <span>Learn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <RoadMapSlider />
      </div>
    </section>
  );
};
export default About;
