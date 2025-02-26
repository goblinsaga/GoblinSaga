import {
  useAddress,
  useContract,
  useTokenSupply,
  Web3Button,
  lightTheme,
} from "@thirdweb-dev/react";
import { BigNumber, utils } from "ethers";
import { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import Layout from "../src/layout/Layout";
import { getNfts, getSingleNft } from "../src/redux/actions/nfts";
import SuccessMessagePopup from "../src/components/popups/SuccessMessagePopup";
import ErrorMessagePopup from "../src/components/popups/ErrorMessagePopup";
import AddTokenButton from "../src/components/CAddToMM";
import { ethers } from "ethers";
import { Input, Button, HStack } from "@chakra-ui/react";

const Nft = ({ getSingleNft, nft, getNfts, nfts }) => {
  const router = useRouter();
  const { id } = router.query;
  const [similarItem, setSimilarItem] = useState([]);
  const [quantity, setQuantity] = useState(1000000);
  const pricePerNft = 0.000003;
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [totalSupplyFormatted, setTotalSupplyFormatted] = useState("");
  const [loading, setLoading] = useState(true);

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
    const getTotalSupply = async () => {
      const provider = new ethers.providers.JsonRpcProvider(ALCHEMY_URL); // Usamos el proveedor de Alchemy
      const contract = new ethers.Contract(tokenAddress, [
        "function totalSupply() view returns (uint256)", // ABI para obtener el total supply
      ], provider);

      try {
        const totalSupply = await contract.totalSupply();
        const totalSupplyFormatted = formatNumber(totalSupply);
        setTotalSupplyFormatted(totalSupplyFormatted);
      } catch (error) {
        console.error("Error fetching total supply:", error);
      } finally {
        setLoading(false); // Cambiar el estado de carga a false cuando termine
      }
    };

    getTotalSupply();
  }, []);

  // Función para formatear el número
  const formatNumber = (num) => {
    const formatted = utils.formatUnits(num, 18); // Convertimos el número a unidades legibles
    const parts = formatted.split(".");
    const integerPart = parts[0];
    const decimalPart = parts[1] ? parts[1].slice(0, 2) : "00"; // Solo mostramos 2 decimales

    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Agregamos comas

    return `${formattedIntegerPart}`;
  };

  const updateTotalSupply = async () => {
    setLoading(true); // Mostramos el loading mientras actualizamos
    const provider = new ethers.providers.JsonRpcProvider(ALCHEMY_URL);
    const contract = new ethers.Contract(tokenAddress, [
      "function totalSupply() view returns (uint256)",
    ], provider);

    try {
      const totalSupply = await contract.totalSupply();
      const totalSupplyFormatted = formatNumber(totalSupply);
      setTotalSupplyFormatted(totalSupplyFormatted);
    } catch (error) {
      console.error("Error fetching total supply:", error);
    } finally {
      setLoading(false); // Desactivamos el loading después de la actualización
    }
  };

  const tokenAddress = "0xC3882D10e49Ac4E9888D0C594DB723fC9cE95468";
  const ALCHEMY_URL = "https://polygon-mainnet.g.alchemy.com/v2/1LBbYhQTe0JI9CY6L_zQmmDHv9usXC14"; // URL Alchemy
  const { contract } = useContract(tokenAddress, "token-drop");
  const address = useAddress();

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
        return prev + 2000000; // Aumentar de 1000 en 1000
      } else if (type === "-" && prev > 1000000) {
        return prev - 2000000; // Disminuir de 1000 en 1000, pero no bajar de 2000
      }
      return prev;
    });
  };

  const handleInputChange = (event) => {
    const value = event.target.value;

    // Solo permite números (elimina cualquier letra o caracter no numérico)
    if (/^\d*$/.test(value)) {
      setQuantity(value);
    }
  };

  const handleInputBlur = () => {
    if (!quantity || parseInt(quantity, 10) < 1000000) {
      setQuantity(1000000); // Corrige el valor si es menor a 1,000,000
    }
  };

  // Cálculo del precio total
  const totalPrice = (quantity * pricePerNft).toFixed(2);

  return (
    <Layout pageTitle={"Minting"}>
      <div className="metaportal_fn_mintpage">
        <div className="container small">
          {/* Mint Top */}
          <div className="metaportal_fn_mint_top">
            <div className="mint_left">
              <div className="img">
                <div className="img_in" style={{ backgroundImage: `url(${nft?.image || '/img/TokenGSA.png'})` }}>
                  <img src={nft?.image || '/img/TokenGSA.png'} alt={nft?.title || 'NFT Image'} />
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
                  <span className="current">{nft && nft.title}</span>
                </p>
              </div>
              <h3 className="fn__maintitle" data-text={nft && nft.title} data-align="left">
                {nft && nft.title} Token Sale
              </h3>
              <p style={{ textAlign: "justify" }}>The GSA token distribution and liquidity strategies are designed to ensure sustainable growth, a fair distribution of rewards, and a strong market presence. By leveraging mining rewards, airdrops, and strategic liquidity management, we aim to create a robust ecosystem for the Goblin Saga community, fostering long-term engagement and value appreciation.</p>
              <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                marginTop: "25px",
              }}>
                <a
                  href="/token#token-mint"
                  className="metaportal_fn_button"
                  rel="noreferrer"
                >
                  <span>Mint Tokens</span>
                </a>

                <a
                  href="https://skynet.certik.com/tools/token-scan/polygon/0xC3882D10e49Ac4E9888D0C594DB723fC9cE95468"
                  target='_blank'
                  className="metaportal_fn_button"
                  rel="noreferrer"
                >
                  <span>CertiK Scan</span>
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "1rem" }}>
                <AddTokenButton />
              </div>
            </div>
          </div>
          {/* !Mint Top */}
          {/* Mint Box */}
          <div id="token-mint" className="metaportal_fn_mintbox">
            <div className="mint_left">
              <div className="mint_title">
                <span>Presale Phase 2</span>
              </div>
              <div className="mint_list">
                <ul>
                  <li>
                    <div className="item">
                      <h4>Price per token</h4>
                      <h3>0.000003 <img src="/img/USDC.png" style={{ width: "20px", marginTop: "-4px", marginLeft: "-5px" }} /> <span style={{ fontSize: "11px" }}>(polygon)</span></h3>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <h4>Circulating Supply</h4>
                      {loading ? (
                        <h3>Loading...</h3> // Mostrar "Loading..." mientras se obtiene el total supply
                      ) : (
                        <h3>{totalSupplyFormatted}</h3> // Mostrar el total supply formateado
                      )}
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <h4>Quantity</h4>
                      <HStack spacing={2}>
                        <span
                          onClick={() => updateQuantity("-")}
                          variant="outline"
                          style={{ cursor: "pointer" }}
                        >
                          -
                        </span>
                        <div style={{ width: "150px" }}>
                          <input
                            value={quantity}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                            inputMode="numeric"
                            style={{
                              fontFamily: "Pexico-Regular",
                              color: "white",
                              textAlign: "center",
                              fontSize: "25px",
                              width: "150px",
                              border: "none",
                              backgroundColor: "transparent",
                              outline: "none",
                              boxShadow: "none",
                            }}
                          />
                        </div>
                        <span
                          onClick={() => updateQuantity("+")}
                          variant="outline"
                          style={{ cursor: "pointer" }}
                        >
                          +
                        </span>
                      </HStack>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <h4>Total Price</h4>
                      <h3>
                        <span className="total_price">
                          {totalPrice} <img src="/img/USDC.png" style={{ width: "20px", marginTop: "-4px", marginLeft: "-5px" }} /> <span style={{ fontSize: "11px" }}>(+ approve)</span>
                        </span>
                      </h3>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mint_desc">
                {successMessage && <SuccessMessagePopup message={successMessage} onClose={() => setSuccessMessage('')} />}
                {errorMessage && <ErrorMessagePopup message={errorMessage} onClose={() => setErrorMessage('')} />}

                <div style={{ position: "relative", width: "210px", height: "45px" }}>
                  <Web3Button
                    connectWallet={{
                      welcomeScreen: {
                        title: "The Definitive NFT Mining App",
                        subtitle: "Conquer the DeFi world through NFTs, mining, and rewards in an innovative universe on Polygon 💎",
                        img: {
                          src: "/img/LogoGS.png",
                          width: 320,
                        },
                      },
                      btnTitle: "CONNECT WALLET",
                      modalTitle: "Goblin Saga",
                      modalSize: "compact",
                      modalTitleIconUrl: "/img/favicon.ico",
                      showThirdwebBranding: false,
                      termsOfServiceUrl: "https://goblinsaga.xyz/terms-conditions",
                      privacyPolicyUrl: "https://goblinsaga.xyz/policy",
                    }}
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
                      pointerEvents: "auto",
                      backgroundColor: "transparent",
                      border: "none",
                      borderRadius: "5px",
                      border: "3px solid transparent",
                      background: "linear-gradient(45deg, #1b1221, #4A0B67) padding-box, linear-gradient(45deg, var(--mc1), var(--mc2)) border-box",
                      backgroundClip: "padding-box, border-box",
                    }}
                    contractAddress={tokenAddress}
                    action={(contract) => contract.erc20.claim(quantity)}
                    onError={(error) => setErrorMessage('An error occurred during minting. Please try again.')}
                    onSuccess={() => {
                      setSuccessMessage('Mint successful!');
                      updateTotalSupply();
                    }}
                  >
                    MINT TOKENS
                  </Web3Button>
                </div>
                <p>
                  By clicking “MINT TOKENS” button, you agree to our{" "}
                  <a href="#">Terms of Service</a> and our{" "}
                  <a href="#">Privacy Policy</a>.
                </p>
              </div>
            </div>
            <div className="mint_right">
              <div className="mright">
                <div className="mint_time">
                  <h4>$GSA Token Distribution</h4>
                </div>
                <div className="mint_checked">
                  <p>
                    <span className="text">Airdrops</span>
                    <span className="status">750,000,000 $GSA</span>
                  </p>
                  <p>
                    <span className="text">Mining Rewards</span>
                    <span className="status">3,750,000,000 $GSA</span>
                  </p>
                  <p>
                    <span className="text">DEX/CEX</span>
                    <span className="status">6,000,000,000 $GSA</span>
                  </p>
                </div>
                <div className="mint_info">
                  <div className="mint_time">
                    <h4>Sale Details</h4>
                  </div>
                  <div className="mint_checked">
                    <p>
                      <span className="text">Token Sale</span>
                      <span className="status">6,000,000,000 $GSA</span>
                    </p>
                    <p style={{ marginTop: "10px" }}>
                      <span className="text">Additional Supply</span>
                      <span className="status">4,500,000,000 $GSA</span>
                    </p>
                    <p style={{ marginTop: "10px" }}>
                      <span className="text">Total Supply</span>
                      <span className="status">21,000,000,000 $GSA</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Mint Bottom */}
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
