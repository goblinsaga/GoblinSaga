import Link from "next/link";
import TaskCenterApp from "./TaskCenter";
import TopMinersRewards from "./TopMinerRewards";
const Apps = () => {
  return (
    <section id="news">
      <h3
        className="fn__maintitle big"
        data-text="Our Apps"
        data-align="center"
      >
        Our Apps
      </h3>
      <div id="apps" className="container">
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
          <Link href="https://app.goblinsaga.xyz">
            <div
              style={{
                width: "260px",
                flex: "1 1 auto",
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              }}
              className="blog__item"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0px 4px 10px rgba(128, 0, 128, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="title">
                <img src="/img/LOGOS-xGS-32x32.png" />
              </div>
              <div className="meta">
                <p style={{ textAlign: "center" }}>Mining App</p>
              </div>
            </div>
          </Link>

          <Link href="https://app.goblinsaga.xyz/defi#simple-earn-v3">
            <div
              style={{
                width: "260px",
                flex: "1 1 auto",
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              }}
              className="blog__item"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0px 4px 10px rgba(128, 0, 128, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="title">
                <img src="/img/pol-staking.png" />
              </div>
              <div className="meta">
                <p style={{ textAlign: "center" }}>POL/GSA Staking</p>
              </div>
            </div>
          </Link>
          
          <Link href="https://app.goblinsaga.xyz/defi#token-swap">
            <div
              style={{
                width: "260px",
                flex: "1 1 auto",
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              }}
              className="blog__item"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0px 4px 10px rgba(128, 0, 128, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="title">
                <img src="/img/token-swap.png" />
              </div>
              <div className="meta">
                <p style={{ textAlign: "center" }}>Token Swap</p>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <TaskCenterApp />
        </div>
        <div style={{ marginTop: "-150px" }}>
          <TopMinersRewards />
        </div>
        {/* !News Shotcode */}
      </div>
    </section>
  );
};
export default Apps;