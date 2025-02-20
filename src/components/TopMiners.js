import TopStakersContainer from "./TopStakersContainer";
import RewardPool from "./RewardPool";
import ClaimRewardsButton from "./ClaimRewardsButton";
import RewardPoolFourToTen from "./RewardPool4to10";
import ClaimRewardsButtonFourToTen from "./ClaimRewardsButton4to10";

const TopMiners = () => {
  return (
    <section id="about">
      <div id="top" className="container">
        <h3
          className="fn__maintitle big"
          data-text="Top Miners"
          data-align="center"
          style={{ marginBottom: "100px" }}
        >
          Top Miners
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            paddingBottom: "2rem",
            flexWrap: "wrap", // Para asegurar que los elementos se ajusten bien en pantalla pequeña.
          }}
        >
          <div
            style={{
              width: "260px",
              flex: "1 1 auto", // Permite que los elementos se adapten.
            }}
            className="blog__item"
          >
            <div className="meta">
              <p style={{ textAlign: "center" }}>Top 1 to 3 Rewards</p>
              <RewardPool />
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <ClaimRewardsButton />
            </div>
          </div>

          <div
            style={{
              width: "260px",
              flex: "1 1 auto",
            }}
            className="blog__item"
          >
            <div className="meta">
              <p style={{ textAlign: "center" }}>Top 4 to 10 Rewards</p>
              <RewardPoolFourToTen />
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <ClaimRewardsButtonFourToTen />
            </div>
          </div>
        </div>
        <div>
          <TopStakersContainer />
        </div>
      </div>
    </section>
  );
};

export default TopMiners;
