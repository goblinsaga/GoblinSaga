import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Counter from './Counter'; 

interface MintCounterProps {
  contractAddress: string;
}

const GoblinsMinted: React.FC<MintCounterProps> = ({ contractAddress }) => {
  const [mintCount, setMintCount] = useState<number | null>(null);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const fetchMintCount = async () => {
      try {
        const provider = new ethers.providers.JsonRpcProvider('https://polygon-mainnet.g.alchemy.com/v2/xE8v6mApJllCIQ6aAxio-yb5ClJQkJQu');

        const abi = [
          {
            inputs: [],
            name: 'totalMinted',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
          },
        ];

        // Crea una instancia del contrato inteligente
        const contract = new ethers.Contract(contractAddress, abi, provider);

        // Obtiene el total de mintings del contrato inteligente
        const count = await fetchMintCountFromContract(contract);
        setMintCount(count);
      } catch (error) {
        console.error('Error fetching mint count:', error);
      }
    };

    fetchMintCount();

    intervalId = setInterval(fetchMintCount, 15000);

    return () => clearInterval(intervalId);
  }, [contractAddress]);

  const fetchMintCountFromContract = async (contract: ethers.Contract): Promise<number> => {
    try {
      const count = await contract.totalMinted();
      return count.toNumber();
    } catch (error) {
      console.error('Error fetching mint count from contract:', error);
      return 0;
    }
  };

  return (
    <div>
      {mintCount !== null ? (
        <Counter end={mintCount} decimals={0} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GoblinsMinted;
