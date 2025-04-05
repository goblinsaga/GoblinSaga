import TopStakersContainer from "./TopStakersContainer";

const TopMiners = () => {
  const targetDate = new Date('2025-03-02T11:00:00');
  return (
    <section id="top-miners">
      <div id="top" className="container">
        <h3
          className="fn__maintitle big"
          data-text="Hall of Fame"
          data-align="center"
          style={{ marginBottom: "50px" }}
        >
          Hall of Fame
        </h3>
        <p style={{ textAlign: "center",  }}>Top Miners</p>
        <div>
          <TopStakersContainer />
        </div>
      </div>
    </section>
  );
};

export default TopMiners;
