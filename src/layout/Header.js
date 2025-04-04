import Link from "next/link";
import { useEffect } from "react";
import { connect } from "react-redux";
import { navigationToggle, walletToggle } from "../redux/actions/siteSettings";
import { stickyNav } from "../utilits";

const Header = ({ walletToggle, navigationToggle }) => {
  useEffect(() => {
    stickyNav();
  }, []);

  return (
    <header id="header">
      <div className="header">
        <div className="header_in">
          <div className="trigger_logo">

            <div className="logo">
              <Link href="/">
                <a>
                  <img style={{ height: "50px" }} src="/img/Logo_type2.png" alt="" />
                </a>
              </Link>
            </div>
          </div>
          <div className="nav" style={{ opacity: 1 }}>
            <ul>
              <li>
                <Link href="/#home">
                  <a className="creative_link">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/#about">
                  <a className="creative_link">About</a>
                </Link>
              </li>
              <li>
                <Link href="https://app.goblinsaga.xyz/task-center">
                  <a className="creative_link">Task Center</a>
                </Link>
              </li>
              <li>
                <Link href="/#apps">
                  <a className="creative_link">Apps</a>
                </Link>
              </li>
              <li>
                <Link href="/#roadmap">
                  <a className="creative_link">Step Map</a>
                </Link>
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
          <div className="wallet">
            <a
              href="https://app.goblinsaga.xyz"
              className="metaportal_fn_button wallet_opener"
            >
              <span>Mining App</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { walletToggle, navigationToggle })(
  Header
);
