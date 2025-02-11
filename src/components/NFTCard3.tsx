import { MediaRenderer, useAddress, useClaimConditions, useContract, ConnectWallet, lightTheme } from "@thirdweb-dev/react";
import { NFT, toEther } from "@thirdweb-dev/sdk";
import { BUSINESSES_CONTRACT_ADDRESS2, STAKING_CONTRACT_ADDRESS, TOKEN_CONTRACT_ADDRESS } from "../../consts/contracts2";
import { useState, useEffect, useRef } from "react";
import ErrorMessagePopup from './popups/ErrorMessagePopup';
import SuccessMessagePopup from './popups/SuccessMessagePopup';
import { BigNumber } from "ethers";
import React from "react";

type Props = {
    nft: NFT;
};

export default function NFTCardBox({ nft }: Props) {
    const address = useAddress();
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [claimableRewards, setClaimableRewards] = useState<BigNumber>();
    const { contract: stakingContract } = useContract(STAKING_CONTRACT_ADDRESS);
    const { contract: tokenContract } = useContract(TOKEN_CONTRACT_ADDRESS, "token");

    const [quantity, setQuantity] = useState(1); // Estado compartido para compra y minado
    const [claimState, setClaimState] = useState<"init" | "nftClaim" | "staking">("init");
    const [isBuying, setIsBuying] = useState(true); // Para alternar entre compra y minado

    const nftIdRef = useRef(nft.metadata.id);

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
        if (!stakingContract) return; // Solo necesitas el stakingContract para cargar los rewards

        async function loadClaimableRewards() {
            try {
                if (stakingContract) {
                    const stakeInfo = await stakingContract.call("getRewardsPerUnitTime", [nftIdRef.current]);
                    setClaimableRewards(stakeInfo);
                }
            } catch (error) {
                console.error("Failed to load claimable rewards:", error);
            }
        }

        loadClaimableRewards();

        const intervalId = setInterval(loadClaimableRewards, 1000);

        return () => clearInterval(intervalId);
    }, [stakingContract]); // Elimina la dependencia de `address`

    const truncateRevenue = (revenue: BigNumber) => {
        const convertToEther = toEther(revenue);
        const truncateValue = convertToEther.toString().slice(0, 6);
        return truncateValue;
    };

    const { contract: boxContract } = useContract(BUSINESSES_CONTRACT_ADDRESS2, "edition-drop");
    const { data: claimCondition } = useClaimConditions(boxContract, nft.metadata.id);

    const handleClaim = async () => {
        if (!address) {
            return;
        }

        setClaimState("nftClaim");
        try {
            await boxContract?.erc1155.claim(nft.metadata.id, quantity); // Utiliza la cantidad seleccionada
            console.log("NFT claimed");

            setSuccessMessage('Mine Claimed');
        } catch (error) {
            console.error(error);
            setErrorMessage('Error: Transaction rejected or insufficient funds.');
        } finally {
            setClaimState("init");
        }
    };

    const handleStake = async () => {
        try {
            if (!address) {
                setErrorMessage('Error: Wallet not connected.'); // Mensaje si la billetera no está conectada
                return; // Salir de la función si no hay dirección
            }

            // Solicitar aprobación antes del staking
            const isApproved = await boxContract?.isApproved(address, STAKING_CONTRACT_ADDRESS);

            if (!isApproved) {
                console.log("Solicitando aprobación para staking...");
                await boxContract?.setApprovalForAll(STAKING_CONTRACT_ADDRESS, true); // Aprobar todos los NFTs
                console.log("Aprobación completada.");
            }

            // Realizar staking después de la aprobación
            await stakingContract?.call("stake", [nft.metadata.id, quantity]); // Utiliza la cantidad seleccionada
            setSuccessMessage('Mine Claimed Successfully');
        } catch (error) {
            console.error(error);
            setErrorMessage('Error: Not enough NFTs to Mine or Transaction rejected');
        }
    };

    const updateQuantity = (type: string) => {
        if (type === "+" && quantity < 5) {
            setQuantity(quantity + 1);
        } else if (type === "-" && quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleActionButtonClick = () => {
        if (isBuying) {
            handleClaim();
        } else {
            handleStake();
        }
    };

    return (
        <div>
            <MediaRenderer
                src={nft.metadata.image}
                style={{ borderRadius: "10px", marginTop: "50px" }}
            />
            <div style={{ padding: "10px" }}>
                <p style={{ textAlign: "justify" }}>Type: {nft.metadata.name}</p>
                {claimCondition && claimCondition.length > 0 && (
                    claimCondition.map((condition, index) => (
                        <div key={index}>
                            <p style={{ textAlign: "justify" }}>Cost: {toEther(condition.price)}<img src="/img/polygon.webp" alt="$GSA" style={{ width: "20px", height: "20px", margin: "0px 5px" }} /></p>
                            {claimableRewards && (
                                <p style={{ textAlign: "justify" }}>
                                    Earns: <b>{truncateRevenue(claimableRewards)}</b>
                                    <img src="/img/LOGOS-xGS-32x32.png" alt="$GSA" style={{ width: "20px", height: "20px", margin: "0px 5px" }} />
                                    <b style={{ fontSize: "12px" }}>24h</b>
                                </p>
                            )}
                            <p style={{ textAlign: "justify" }}>Claimable: 10</p>
                        </div>
                    ))
                )}
            </div>
            {successMessage && <SuccessMessagePopup message={successMessage} onClose={() => setSuccessMessage('')} />}
            {errorMessage && <ErrorMessagePopup message={errorMessage} onClose={() => setErrorMessage('')} />}

            {/* Control de cantidad para Buy y Mine */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", textAlign: "center" }}>
                <p style={{ margin: 0, fontSize: "11px", marginTop: "10px" }}>{isBuying ? "Amount to buy ↓" : "Amount to mine ↓"}</p>
            </div>
            <div className="qnt" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px" }}>
                <span className="decrease" onClick={() => updateQuantity("-")} style={{ cursor: "pointer", margin: "0 10px" }}>-</span>
                <span className="summ">{quantity}</span>
                <span className="increase" onClick={() => updateQuantity("+")} style={{ cursor: "pointer", margin: "0 10px" }}>+</span>
            </div>

            <div style={{ marginTop: "15px" }} className="containerGrid">
                {/* Si no hay cuenta conectada, muestra el botón ConnectWallet */}
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
                            width: "200px",
                            height: "45px",
                            backgroundColor: "transparent",
                            border: "3px solid transparent",
                            borderRadius: "5px",
                            background:
                                "linear-gradient(45deg, #1b1221, #4A0B67) padding-box, linear-gradient(45deg, var(--mc1), var(--mc2)) border-box",
                            backgroundClip: "padding-box, border-box",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "15px"
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
                            subtitle: "Conquer the DeFi world through NFTs, mining, and rewards in an innovative universe on Polygon 💎",
                            img: {
                                src: "/img/LogoGS.png",
                                width: 320,
                            },
                        }}
                    />
                ) : (
                    <button
                        onClick={handleActionButtonClick}
                        disabled={claimState !== "init" || quantity <= 0}
                        className="metaportal_fn_buttonLW"
                    >
                        {isBuying
                            ? (claimState === "nftClaim" ? "Purchasing..." : "Buy Now")
                            : (claimState === "staking" ? "Mining..." : "Mine Now")}
                    </button>
                )}
            </div>
        </div>
    );
}
