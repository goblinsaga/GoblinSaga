import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import RewardsContractABI from '../../contracts/RewardsContractABI.json';
import React from 'react';

declare global {
  interface Window {
    ethereum?: any; // Declara ethereum como propiedad opcional
  }
}

const contractAddress = '0x4206bC9dB80a366D6B5356A82646c07EeA123958';

const ClaimRewardsButton = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
  const [signer, setSigner] = useState<ethers.Signer | null>(null);
  const [contract, setContract] = useState<ethers.Contract | null>(null);
  const [claiming, setClaiming] = useState<boolean>(false);
  const [connecting, setConnecting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const connectWallet = async () => {
    setConnecting(true); // Estado de "Connecting..."
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send('eth_requestAccounts', []); // Solicitar acceso a la cuenta de MetaMask
        const signer = provider.getSigner();
        const account = await signer.getAddress();
        setProvider(provider);
        setSigner(signer);
        setAccount(account);

        // Inicializar el contrato con el signer
        const contract = new ethers.Contract(contractAddress, RewardsContractABI, signer);
        setContract(contract);
      } else {
        alert('Metamask is not installed');
      }
    } catch (error) {
      console.error('Error connecting to wallet:', error);
    } finally {
      setConnecting(false); // Apagar el estado de "Connecting..."
    }
  };

  const handleClaimRewards = async () => {
    if (contract) {
      try {
        setClaiming(true);
        const tx = await contract.claimRewards();
        await tx.wait();
        setSuccessMessage('Rewards claimed successfully');
      } catch (error) {
        console.error(error);
        setErrorMessage('Transaction rejected or Reward Claimed.');
      } finally {
        setClaiming(false);
      }
    }
  };

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage('');
      }, 4000); // Close the error message after 4 seconds
    
      return () => clearTimeout(timer); // Clear the timer when the component unmounts or the error message changes
    }
  }, [errorMessage]);

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
      }, 4000); // Close the success message after 4 seconds
    
      return () => clearTimeout(timer); // Clear the timer when the component unmounts or the success message changes
    }
  }, [successMessage]);

  return (
    <div>
      {!account ? (
        <button className="metaportal_fn_buttonLW " onClick={connectWallet} disabled={connecting} >
          {connecting ? 'Connecting...' : 'Connect'}
        </button>
      ) : (
        <button className="metaportal_fn_buttonLW" onClick={handleClaimRewards} disabled={claiming}>
          {claiming ? 'Claiming...' : 'Claim'}
        </button>
      )}
    </div>
  );
};

export default ClaimRewardsButton;
