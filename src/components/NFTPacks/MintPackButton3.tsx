import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import SuccessMessagePopup from '../popups/SuccessMessagePopup';
import ErrorMessagePopup from "../popups/ErrorMessagePopup";

const CONTRACT_ADDRESS = '0x577407851103A3ca16D7B1C87c89970506fDf28F';
const CONTRACT_ABI = [
    "function mintPack() external payable",
    "function packPrice() external view returns (uint256)"
];

const MintPackButton3: React.FC = () => {
    const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
    const [contract, setContract] = useState<ethers.Contract | null>(null);
    const [isConnected, setIsConnected] = useState<boolean>(false);
    const [packPrice, setPackPrice] = useState<ethers.BigNumber | null>(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

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
        const initializeEthereum = async () => {
            if (window.ethereum) {
                try {
                    const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
                    const signer = web3Provider.getSigner();
                    const contractInstance = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
                    
                    setProvider(web3Provider);
                    setContract(contractInstance);

                    const price = await contractInstance.packPrice();
                    setPackPrice(price);
                    
                    const accounts = await web3Provider.listAccounts();
                    setIsConnected(accounts.length > 0);
                } catch (error) {
                    console.error('Ethereum initialization failed:', error);
                    setIsConnected(false);
                }
            } else {
                console.error('Ethereum provider not found');
                setIsConnected(false);
            }
        };

        initializeEthereum();
    }, []);

    const handleConnectWallet = async () => {
        if (window.ethereum) {
            try {
                const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
                await web3Provider.send("eth_requestAccounts", []);
                const accounts = await web3Provider.listAccounts();
                setIsConnected(accounts.length > 0);
                const signer = web3Provider.getSigner();
                const contractInstance = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
                setContract(contractInstance);
                
                const price = await contractInstance.packPrice();
                setPackPrice(price);
            } catch (error) {
                console.error('Error connecting wallet:', error);
                setIsConnected(false);
            }
        } else if (isMobile()) {
            // Redirect to MetaMask app if on mobile
            window.open('https://metamask.app.link/dapp/' + window.location.hostname, '_blank');
        } else {
            alert('Please install MetaMask!');
        }
    };

    const isMobile = () => {
        return /Mobi|Android/i.test(navigator.userAgent);
    };

    const handleMintPack = async () => {
        if (contract && packPrice) {
            try {
                const tx = await contract.mintPack({ value: packPrice });
                await tx.wait();
                setSuccessMessage('Pack minted successfully!');
            } catch (error) {
                console.error('Error minting pack:', error);
                setErrorMessage('Error: Insufficient packs or insufficient funds.');
            }
        } else {
            setErrorMessage('Ethereum provider is not initialized or pack price is not available');
        }
    };

    return (
        <div className="metaportal_fn_mintbox">
            <div>
                <div className="img">
                    <div className="img_in">
                        <img src='/img/packs/Pack3.png'/>
                    </div>
                </div>
            </div>

            <div className="mint_right">
                <h3 className="fn__maintitle" data-align="left">
                    Empower Pack
                </h3>
                <div className="desc">
                    <p style={{ textAlign: "justify", marginTop: "20px" }}>
                        Contains:
                    </p>
                    <ul>
                        <li>
                            x1 Goblin NFT
                        </li>
                        <li>
                            x3 Normal Token Box
                        </li>
                    </ul>
                    <p style={{ textAlign: "justify" }}>
                        Revenue:
                    </p>
                    <ul>
                        <li>
                            7,500 $xGSA/24H
                        </li>
                    </ul>
                </div>

                <div style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}>
                    {successMessage && <SuccessMessagePopup message={successMessage} onClose={() => setSuccessMessage('')} />}
                    {errorMessage && <ErrorMessagePopup message={errorMessage} onClose={() => setErrorMessage('')} />}

                    {!isConnected ? (
                        <button
                            className="metaportal_fn_buttonLW"
                            onClick={handleConnectWallet}
                        >
                            Connect Wallet
                        </button>
                    ) : (
                        <button
                            className="metaportal_fn_buttonLW"
                            onClick={handleMintPack}
                            disabled={!packPrice}
                        >
                            Mint Now
                        </button>
                    )}
                </div>
                <div style={{ textAlign: "center", marginTop: "15px" }}>
                    Price: {packPrice ? `${ethers.utils.formatEther(packPrice)} POL` : 'Loading...'}
                </div>
            </div>
        </div>
    );
};

export default MintPackButton3;
