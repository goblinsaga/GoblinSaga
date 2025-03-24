import Link from "next/link";
import { Fragment, useState } from "react";
import { connect } from "react-redux";
import { navigationToggle, walletToggle } from "../redux/actions/siteSettings";
const MobileNavigation = ({ walletToggle, navigationToggle }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <div className="metaportal_fn_mobnav">
        <div className="mob_top">
          <div className="social_trigger">
            <div className="social">
              <ul>
                <li>
                  <a
                    href="https://www.x.com/goblinsaga_xyz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    X (Twitter).
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="wallet">
            <a
              href="https://app.goblinsaga.xyz"
              className="metaportal_fn_button wallet_opener"
            >
              <span>Mining App</span>
            </a>
          </div>
        </div>
        <div className="mob_mid">
          <div className="logo">
            <Link href="/">
              <a>
                <img style={{ height: "70px" }} src="/img/Logo_type2.png" alt="" />
              </a>
            </Link>
          </div>
          <div
            className={`trigger ${toggle ? "active" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            <span />
          </div>
        </div>
        <div className="mob_bot" style={{ display: toggle ? "block" : "none" }}>
          <ul>
            <li>
              <a className="creative_link" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="creative_link" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="creative_link" href="https://app.goblinsaga.xyz/task-center">
                Task Center
              </a>
            </li>
            <li>
              <a className="creative_link" href="#apps">
                Apps
              </a>
            </li>
            <li>
              <Link href="/mint">
                <a className="creative_link">NFT Mint</a>
              </Link>
            </li>
            <li>
              <Link href="/token">
                <a className="creative_link">Token Sale</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  navigation: state.site.navigation,
});

export default connect(mapStateToProps, { walletToggle, navigationToggle })(
  MobileNavigation
);
