import { ethers } from "ethers";
import React, { useState } from "react";
import SuccessMessagePopup from "./popups/SuccessMessagePopup";
import ErrorMessagePopup from "./popups/ErrorMessagePopup";

const AddTokenButton = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const tokenAddress = "0xC3882D10e49Ac4E9888D0C594DB723fC9cE95468"; // Dirección del token
    const tokenSymbol = "GSA"; // Símbolo del token
    const tokenDecimals = 18; // Decimales del token
    const tokenImage = "https://i.ibb.co/twRCxg02/GSAV2.png"; // URL opcional de la imagen del token

    const addTokenToWallet = async () => {
        if (typeof window.ethereum === "undefined") {
            setErrorMessage("MetaMask is not available. Please install MetaMask!");
            return;
        }

        try {
            // Crear un proveedor ethers.js con MetaMask
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            // Conectar la billetera si no está conectada
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts", // Solicita que el usuario conecte su billetera
            });

            // Validar si el token existe (ejemplo: balance del signer)
            const erc20Contract = new ethers.Contract(
                tokenAddress,
                [
                    "function balanceOf(address owner) view returns (uint256)",
                    "function decimals() view returns (uint8)",
                    "function symbol() view returns (string)",
                ],
                signer
            );

            const decimals = await erc20Contract.decimals();
            const symbol = await erc20Contract.symbol();

            if (symbol !== tokenSymbol || decimals !== tokenDecimals) {
                setErrorMessage("Token information mismatch. Please verify the details.");
                return;
            }

            // Cambiar a la red Polygon si no está seleccionada
            const polygonChainId = "0x89"; // Chain ID de Polygon Mainnet
            const currentChainId = await window.ethereum.request({ method: "eth_chainId" });

            if (currentChainId !== polygonChainId) {
                await window.ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: polygonChainId }],
                });
            }

            // Añadir el token a MetaMask
            const wasAdded = await window.ethereum.request({
                method: "wallet_watchAsset",
                params: {
                    type: "ERC20",
                    options: {
                        address: tokenAddress,
                        symbol: tokenSymbol,
                        decimals: tokenDecimals,
                        image: tokenImage,
                    },
                },
            });

            if (wasAdded) {
                setSuccessMessage("Token added to MetaMask!");
            } else {
                setErrorMessage("Token addition was declined.");
            }
        } catch (error) {
            console.error("Error adding token to MetaMask:", error);
            setErrorMessage("An error occurred while adding the token.");
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(tokenAddress);
        setSuccessMessage("Token address copied to clipboard!");
    };

    return (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {successMessage && <SuccessMessagePopup message={successMessage} onClose={() => setSuccessMessage('')} />}
            {errorMessage && <ErrorMessagePopup message={errorMessage} onClose={() => setErrorMessage('')} />}
            <div style={{ border: "1px solid grey", borderRadius: "5px", boxShadow: "0px 0px 8px rgba(128, 0, 128, 0.5)" }}>
                <p
                    onClick={copyToClipboard}
                    style={{
                        cursor: "pointer",
                        margin: 0,
                        userSelect: "none",
                        padding: "3px",
                        marginLeft: "3px",
                    }}
                    title="Click to copy address"
                >
                    {`${tokenAddress.slice(0, 6)}...${tokenAddress.slice(-6)}`}
                    <img
                        src="/img/copy-icon.png" // Ruta de tu imagen personalizada para el ícono de copiar
                        alt="Copy"
                        onClick={copyToClipboard}
                        style={{ cursor: "pointer", width: "20px", height: "20px", marginLeft: "5px" }} // Ajusta el tamaño según sea necesario
                    />
                </p>
            </div>
            <img
                src="/img/MetaMask_Fox.png" // Ruta de tu imagen personalizada
                alt="Add Token"
                onClick={addTokenToWallet}
                style={{ cursor: "pointer", width: "32px", height: "auto" }} // Ajusta el estilo según sea necesario
            />
        </div>
    );
};

export default AddTokenButton;
