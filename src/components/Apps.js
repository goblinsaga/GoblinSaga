import Link from "next/link";

const Apps = () => {
  return (
    <section id="news">
      <h3
        className="fn__maintitle big"
        data-text="DeFi Apps"
        data-align="center"
      >
        DeFi Apps
      </h3>
      <div id="apps" className="container">
        <div
          style={{
            marginTop: "-80px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            paddingBottom: "2rem",
            flexWrap: "wrap",
          }}
        >
          {/* App 1 */}
          <Link href="https://app.goblinsaga.xyz">
            <div
              className="blog__item"
              style={{
                width: "260px",
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              }}
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
                <img src="/img/GSAV2.png" alt="Mining App" />
              </div>
              <div className="meta">
                <p style={{ textAlign: "center", fontSize: "14px" }}>NFTs Mining App</p>
              </div>
            </div>
          </Link>

          {/* App 2 */}
          <Link href="https://app.goblinsaga.xyz/defi#stake">
            <div
              className="blog__item"
              style={{
                width: "260px",
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              }}
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
                <img src="/img/POL-GSA2.png" alt="POL/GSA Staking" />
              </div>
              <div className="meta">
                <p style={{ textAlign: "center", fontSize: "14px" }}>POL/GSA Stake</p>
              </div>
            </div>
          </Link>

          {/* App 3 */}
          <Link href="https://app.goblinsaga.xyz/defi#stake">
            <div
              className="blog__item"
              style={{
                width: "260px",
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              }}
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
                <img src="/img/GSA-WGSA.png" alt="GSA/WGSA Staking" />
              </div>
              <div className="meta">
                <p style={{ textAlign: "center", fontSize: "14px" }}>GSA/WGSA Stake</p>
              </div>
            </div>
          </Link>

          {/* App 4 */}
          <Link href="https://app.goblinsaga.xyz/defi#stake">
            <div
              className="blog__item"
              style={{
                width: "260px",
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              }}
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
                <img src="/img/USDC-WGSA.png" alt="USDC/WGSA Stake" />
              </div>
              <div className="meta">
                <p style={{ textAlign: "center", fontSize: "14px" }}>USDC/WGSA Stake</p>
              </div>
            </div>
          </Link>

          {/* App 5 */}
          <Link href="https://app.goblinsaga.xyz/defi#restake">
            <div
              className="blog__item"
              style={{
                width: "260px",
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              }}
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
                <img src="/img/ankrPOL-WGSA.png" alt="ankrPOL/WGSA Stake" />
              </div>
              <div className="meta">
                <p style={{ textAlign: "center", fontSize: "14px" }}>ankrPOL/WGSA Stake</p>
              </div>
            </div>
          </Link>

          {/* App 6 */}
          <Link href="https://app.goblinsaga.xyz/defi#restake">
            <div
              className="blog__item"
              style={{
                width: "260px",
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              }}
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
                <img src="/img/aPOL-WGSA.png" alt="aPolWMATIC/WGSA Stake" />
              </div>
              <div className="meta">
                <p style={{ textAlign: "center", fontSize: "14px" }}>aPol/WGSA Stake</p>
              </div>
            </div>
          </Link>

          {/* App 7 */}
          <Link href="https://app.goblinsaga.xyz/defi#restake">
            <div
              className="blog__item"
              style={{
                width: "260px",
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              }}
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
                <img src="/img/MATICX-WGSA.png" alt="Token Swap" />
              </div>
              <div className="meta">
                <p style={{ textAlign: "center", fontSize: "14px" }}>MATICX/WGSA Stake</p>
              </div>
            </div>
          </Link>

          {/* App 8 */}
          <Link href="https://app.goblinsaga.xyz/task-center">
            <div
              className="blog__item"
              style={{
                width: "260px",
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              }}
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
                <img src="/img/token-swap2.png" alt="Token Swap" />
              </div>
              <div className="meta">
                <p style={{ textAlign: "center", fontSize: "14px" }}>WGSA/GSA Token Swap</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text="DeFi Protocols"
          data-align="center"
          style={{ fontSize: "25px", marginTop: "30px" }}
        >
          DeFi Protocols
        </h3>

        <div
          style={{
            marginTop: "-100px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            paddingBottom: "2rem",
            flexWrap: "wrap",
          }}
        >
          {/* App 1 */}
          <Link href="https://app.aave.com/?marketName=proto_polygon_v3" target="_blank">
            <div
              className="blog__item"
              style={{
                width: "250px",
                height: "120px",
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0px 4px 10px rgba(128, 0, 128, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <img
                src="/img/aave-logo.png"
                alt="Mining App"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </Link>

          {/* App 2 */}
          <Link href="https://www.ankr.com/staking/stake/pol/polygon/" target="_blank">
            <div
              className="blog__item"
              style={{
                width: "250px",
                height: "120px",
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0px 4px 10px rgba(128, 0, 128, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <img
                src="/img/ankr-logo.png"
                alt="Mining App"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </Link>

          {/* App 3 */}
          <Link href="https://www.staderlabs.com/polygon/stake/" target="_blank">
            <div
              className="blog__item"
              style={{
                width: "250px",
                height: "120px",
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0px 4px 10px rgba(128, 0, 128, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <img
                src="/img/stader-logo.png"
                alt="Mining App"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </Link>
        </div>
      </div>

      {/* Estilos para móviles */}
      <style jsx>{`
        @media (max-width: 768px) {
          #apps .blog__item {
            flex: 1 1 calc(50% - 10px); /* Ajuste para mostrar 2 en 2 */
            max-width: calc(50% - 10px); /* Limita el ancho máximo */
            margin-bottom: 20px; /* Espacio entre filas */
          }
        }

        @media (min-width: 769px) {
          #apps .blog__item {
            flex: 1 1 auto; /* Mantén el diseño original en pantallas grandes */
            max-width: 260px; /* Ancho fijo para pantallas grandes */
          }
        }
      `}</style>
    </section>
  );
};

export default Apps;
