import Apps from "./Apps";
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
                Goblin Saga introduces a groundbreaking fusion of cryptocurrencies and NFTs within a pixel-art-inspired gamified universe. More than just a marketplace, it offers a dynamic mining ecosystem where players engage in a richly designed world teeming with interactive opportunities.
              </p>
              <p style={{ textAlign: "justify" }}>
                At the heart of Goblin Saga are NFTs representing goblins, mining operations, refineries, and distinctive pixel-art items. Players can mine resources, collect NFTs, and participate in mining to unlock rewards, fostering an engaging experience that encourages consistent activity and community involvement.
              </p>
              <p style={{ textAlign: "justify" }}>
                Goblin Saga is constantly evolving, combining innovation and continuous improvements to deliver a unique experience to its community. With each update, we introduce new features, optimize performance, and expand the possibilities within the ecosystem.
              </p>
            </div>
            <a
              href="/mint"
              className="metaportal_fn_button"
              rel="noreferrer"
            >
              <span>Mint Now</span>
            </a>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "-150px" }}>
        <Apps />
      </div>
    </section>
  );
};
export default About;