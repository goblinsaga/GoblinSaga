import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Layout from "../src/layout/Layout";
import { lightTheme, useAddress, useDisconnect, useSDK, ConnectWallet } from "@thirdweb-dev/react";
import { getNfts, getSingleNft } from "../src/redux/actions/nfts";
import { ethers } from 'ethers';
import MintCounter from "../src/components/TotalMinted";
import SectionDivider from "../src/components/SectionDivider";
import MintPackButton1 from "../src/components/NFTPacks/MintPackButton1";
import SuccessMessagePopup from "../src/components/popups/SuccessMessagePopup";
import ErrorMessagePopup from "../src/components/popups/ErrorMessagePopup";
import MintPackButton2 from "../src/components/NFTPacks/MintPackButton2";
import MintPackButton3 from "../src/components/NFTPacks/MintPackButton3";
import Rarities from "../src/components/RaritiesTraits";

const Nft = ({ getSingleNft, nft, getNfts, nfts }) => {
  const router = useRouter();
  const { id } = router.query;
  const [similarItem, setSimilarItem] = useState([]);
  const [quantity, setQuantity] = useState(1); // Cantidad inicial
  const pricePerNft = 0.0015; // Precio por NFT
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const address = useAddress();
  const disconnect = useDisconnect();
  const [maticBalance, setMaticBalance] = useState(null);
  const sdk = useSDK();
  const [isMinting, setIsMinting] = useState(false);

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage('');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  useEffect(() => {
    if (id) {
      getSingleNft(id);
      getNfts();
    }
  }, [id]);

  useEffect(() => {
    if (nfts && nft) {
      setSimilarItem(
        nfts.filter(
          (nft_) =>
            nft_.type === nft.type ||
            nft.special === nft_.special ||
            nft.clothing === nft_.clothing
        )
      );
    }
  }, [nfts, nft]);

  const updateQuantity = (type) => {
    setQuantity((prev) => {
      if (type === "+") {
        return prev + 1;
      } else if (type === "-" && prev > 1) {
        return prev - 1;
      }
      return prev;
    });
  };

  const totalPrice = (quantity * pricePerNft).toFixed(1);

  const formatAddress = (addr) => {
    if (!addr) return "";
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  const getBalance = async (walletAddress) => {
    if (!sdk || !walletAddress) return;

    const provider = sdk.getProvider(); // Obtener el provider de ethers.js
    const balance = await provider.getBalance(walletAddress); // Obtener balance en Wei
    const balanceInMatic = ethers.utils.formatEther(balance); // Convertir a MATIC
    setMaticBalance(balanceInMatic);
  };

  useEffect(() => {
    if (address) {
      getBalance(address);
    }
  }, [address]);

  const handleMint = async () => {
    if (!address) {
      setErrorMessage("Please connect your wallet to mint.");
      return;
    }

    setIsMinting(true);

    try {
      const contract = await sdk.getContract("0x4Ac03107603F37AD24a36c32bEC98b22AF46ABbf");
      await contract.erc721.claim(quantity);
      setSuccessMessage(`Successfully minted ${quantity} NFT(s)!`);
    } catch (error) {
      const errorName = error?.errorName || "Unknown error";

      if (
        errorName.includes("missing revert data") ||
        error.message.includes("missing revert data")
      ) {
        setErrorMessage(
          `Minting failed: Insufficient funds. Mint price 9.0 POL.`
        );
      } else {
        setErrorMessage(`Minting failed: ${errorName}`);
      }
    } finally {
      setIsMinting(false);  // Finaliza el proceso de minting (sin importar éxito o error)
    }
  };

  return (
    <Layout pageTitle={"Minting"}>
      <div className="metaportal_fn_mintpage">
        <div className="container small">
          {/* Mint Top */}
          <div className="metaportal_fn_mint_top">
            <div className="mint_left">
              <div className="img">
                <div className="img_in" style={{ backgroundImage: `url(${nft?.image || '/img/goblin-saga-genesis-nft.gif'})` }}>
                  <img src={nft?.image || '/img/goblin-saga-genesis-nft.gif'} alt={nft?.title || 'NFT Image'} />
                </div>
              </div>
            </div>
            <div className="mint_right">
              <div className="metaportal_fn_share">
                <h5 className="label">Follow Us</h5>
                <ul>
                  {["twitter"].map((platform) => (
                    <li key={platform}>
                      <a href="https://x.com/goblinsaga_xyz" target="_blank" rel="noopener noreferrer">
                        <img src={`/svg/social/${platform}-1.svg`} alt="" className="fn__svg" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="metaportal_fn_breadcrumbs">
                <p>
                  <Link href="/">Home</Link>
                  <span className="separator">/</span>
                  <Link href="https://market.goblinsaga.xyz/">Marketplace</Link>
                </p>
              </div>
              <h3 className="fn__maintitle" data-text={nft && nft.title} data-align="left">
                {nft && nft.title} Goblin Saga NFTs
              </h3>
              <div className="desc">
                <p style={{ textAlign: "justify" }}>
                  Conquer the DeFi world through NFTs, mining, and rewards in an innovative universe on Polygon.
                </p>
                <p style={{ textAlign: "justify" }}>
                  Goblin Saga is an exclusive collection of 4,444 hand-crafted pixel art NFTs, each one unique and designed to immerse you in a captivating world. These NFTs are not just digital collectibles—they are also your gateway to earning $xGSA Tokens, offering a new way to engage and grow your digital assets.
                </p>
                <p>Mint, Mine, Earn & Trade NOW!</p>
              </div>
              <div className="view_on">
                <ul>
                  <li>
                    <span>View On:</span>
                  </li>
                  <li>
                    <a href="https://rarible.com/goblin-saga/items" target="_blank" rel="noopener noreferrer">
                      <img src="/svg/rarible.svg" alt="" className="fn__svg" />
                    </a>
                  </li>
                  <li>
                    <a href="https://magiceden.io/collections/polygon/0x4ac03107603f37ad24a36c32bec98b22af46abbf" target="_blank" rel="noopener noreferrer">
                      <img src="/svg/magiceden.svg" alt="" className="fn__svg" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* !Mint Top */}
          {/* Mint Box */}
          <div className="metaportal_fn_mintbox">
            <div className="mint_left">
              <div className="mint_title">
                <span>Mint Phase 3</span>
              </div>
              <div className="mint_list">
                <ul>
                  <li>
                    <div className="item">
                      <h4>Price</h4>
                      <h3>{pricePerNft} POL</h3>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <h4>Minted</h4>
                      <h3><MintCounter contractAddress="0x4Ac03107603F37AD24a36c32bEC98b22AF46ABbf" /></h3>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <h4>Quantity</h4>
                      <div className="qnt">
                        <span className="decrease" onClick={() => updateQuantity("-")}>-</span>
                        <span className="summ">{quantity}</span>
                        <span className="increase" onClick={() => updateQuantity("+")}>+</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <h4>Total Price</h4>
                      <h3>
                        <span className="total_price">
                          {totalPrice} POL + GAS
                        </span>
                      </h3>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mint_desc">
                {successMessage && <SuccessMessagePopup message={successMessage} onClose={() => setSuccessMessage('')} />}
                {errorMessage && <ErrorMessagePopup message={errorMessage} onClose={() => setErrorMessage('')} />}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                    alignItems: "center",
                    marginTop: "-10px"
                  }}
                >
                  <div style={{ width: "200px", height: "45px" }}>
                    {!address ? (
                      <ConnectWallet
                        termsOfServiceUrl="https://goblinsaga.xyz/terms-conditions"
                        privacyPolicyUrl="https://goblinsaga.xyz/policy"
                        theme={lightTheme({
                          colors: {
                            modalBg: "#150024",
                            borderColor: "#150024",
                            separatorLine: "#150024",
                            secondaryText: "#c4c4c4",
                            primaryText: "#ffffff",
                            connectedButtonBg: "transparent",
                            primaryButtonBg: "transparent",
                            primaryButtonText: "#ffffff",
                            secondaryButtonHoverBg: "#000b42",
                            connectedButtonBgHover: "transparent",
                            walletSelectorButtonHoverBg: "#000b42",
                            secondaryButtonText: "#ffffff",
                            secondaryButtonBg: "#000b42",
                          },
                        })}
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "transparent",
                          border: "3px solid transparent",
                          borderRadius: "5px",
                          background:
                            "linear-gradient(45deg, #1b1221, #4A0B67) padding-box, linear-gradient(45deg, var(--mc1), var(--mc2)) border-box",
                          backgroundClip: "padding-box, border-box",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        hideBuyButton={true}
                        hideSendButton={true}
                        hideReceiveButton={true}
                        modalTitle={"Goblin Saga"}
                        switchToActiveChain={true}
                        modalSize={"compact"}
                        showThirdwebBranding={false}
                        modalTitleIconUrl={"/img/favicon.ico"}
                        welcomeScreen={{
                          title: "The Definitive NFT Mining App",
                          subtitle:
                            "Conquer the DeFi world through NFTs, mining, and rewards in an innovative universe on Polygon 💎",
                          img: {
                            src: "/img/LogoGS.png",
                            width: 320,
                          },
                        }}
                      />
                    ) : (
                      <button
                        onClick={handleMint}
                        className="metaportal_fn_buttonLW"
                        style={{ cursor: "pointer" }}
                      >
                        {isMinting ? "Minting..." : "Mint Goblin(s)"}
                      </button>
                    )}
                  </div>

                  <div style={{ width: "200px", height: "45px" }}>
                    <a
                      href="/mint#support-packs"
                      style={{
                        textDecoration: "none",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      className="metaportal_fn_buttonLW"
                    >
                      Support packs
                    </a>
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                  <div>
                    {address && (
                      <p style={{ marginTop: '10px' }}>
                        Wallet: {address && <span>{formatAddress(address)}</span>}<span onClick={disconnect} style={{ cursor: "pointer", marginLeft: "8px" }}>⛔</span>
                      </p>
                    )}
                  </div>
                  <div>
                    {maticBalance && (
                      <span style={{ fontSize: "12px" }}>
                        Balance: {parseFloat(maticBalance).toFixed(4)} POL
                      </span>
                    )}
                  </div>
                </div>

                <p style={{ paddingTop: "2rem" }}>
                  By clicking “MINT GOBLIN(S)” button, you agree to our{" "}
                  <a href="/terms-conditions">Terms of Service</a> and our{" "}
                  <a href="/policy">Privacy Policy</a>.
                </p>
              </div>

              <div style={{ marginTop: "50px" }}>
                <p style={{ textAlign: "center" }}>Mint on Goblin Saga App and claim <span style={{ color: "yellow" }}>1,000,000</span> $GSA.</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "200px",
                      height: "45px",
                    }}
                  >
                    <a
                      href="https://app.goblinsaga.xyz/#task-center"
                      style={{
                        textDecoration: "none",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      className="metaportal_fn_buttonLW"
                    >
                      Go
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mint_right">
              <div className="mright">
                <div className="mint_time">
                  <h4>About Mint Phases</h4>
                </div>
                <div className="mint_checked">
                  <p>
                    <span className="text">Phase 1:</span>
                    <span className="status">Sold out - 5 POL <span className="icon"><img src="/svg/checked.svg" alt="" className="fn__svg" /></span></span>
                  </p>
                  <p>
                    <span className="text">Phase 2:</span>
                    <span className="status">Sold out - 7 POL <span className="icon"><img src="/svg/checked.svg" alt="" className="fn__svg" /></span></span>
                  </p>
                  <p>
                    <span className="text">Phase 3:</span>
                    <span className="status">Live Mint - 9 POL <span className="icon"></span></span>
                  </p>
                  <p>
                    <span className="text">Phase 4:</span>
                    <span className="status">Upcoming - 10 POL </span>
                  </p>
                  <p style={{ fontSize: "10px", paddingTop: "1rem" }}>All phases are divided by 1,111 NFTs</p>
                </div>
                <div className="mint_info">
                  <div className="mint_time">
                    <h4>Goblin Mining Rate</h4>
                  </div>
                  <div className="mint_checked">
                    <p>
                      <span className="text">1 Goblin:</span>
                      <p className="status">$1000 <img src="/img/LOGOS-xGS-32x32.png" style={{ width: "23px", height: "23px", marginLeft: "3px", marginRight: "5px" }} /> - 24H</p>
                    </p>
                  </div>
                  <div className="mint_checked">
                    <a href="https://docs.goblinsaga.xyz/ecosystem-overview/token-types" target="_blank" style={{ textDecoration: "none" }}>
                      <button className="metaportal_fn_buttonLW" style={{ cursor: 'pointer' }}>
                        $xGSA Token
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* !Mint Box */}
        </div>
        {/* !Section Divider */}
        <SectionDivider />
        {/* !Section Divider */}
        <div className="container">
          <h3
            className="fn__maintitle big"
            data-text="Notable Traits"
            data-align="center"
            style={{ marginTop: "100px" }}
          >
            Notable Traits
          </h3>

          <div style={{ paddingBottom: "10rem" }}>
            <Rarities />
          </div>
        </div>
        {/* !Section Divider */}
        <SectionDivider />
        {/* !Section Divider */}
        <div className="container">
          <h3
            className="fn__maintitle big"
            data-text="Support Packs"
            data-align="center"
            style={{ marginTop: "100px" }}
          >
            Support Packs
          </h3>

          <div id="support-packs" style={{ marginTop: "50px" }}>
            <div>
              <MintPackButton1 />
            </div>
            <div style={{ marginTop: "50px" }}>
              <MintPackButton2 />
            </div>
            <div style={{ marginTop: "50px", marginBottom: "50px" }}>
              <MintPackButton3 />
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: "5rem" }}>
          <a href="https://discord.com/channels/1216389419096084562/1229279637826179072/1291104543697928213" target="blank" style={{ textDecoration: 'none' }}>
            <button className="metaportal_fn_buttonLW" style={{ cursor: 'pointer' }}>
              How to mine Items
            </button>
          </a>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  nft: state.nfts.nft,
  nfts: state.nfts.data,
});

export default connect(mapStateToProps, { getSingleNft, getNfts })(Nft);