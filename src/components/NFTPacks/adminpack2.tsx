import React, { useState, useEffect } from 'react';
import styles from "../../styles/Home.module.css";
import { ethers } from 'ethers';

const CONTRACT_ADDRESS = '0x8f8a0208e532f3e91595eDd539ea3A277a1f5549';
const CONTRACT_ABI = [
  "function depositERC721(uint256 _tokenId) external",
  "function depositERC1155(uint256 _tokenId, uint256 _quantity) external",
  "function setPackPrice(uint256 _packPrice) external",
];

const NFTManager2: React.FC = () => {
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
  const [contract, setContract] = useState<ethers.Contract | null>(null);
  const [signer, setSigner] = useState<ethers.Signer | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [erc721Ids, setErc721Ids] = useState<string>('');
  const [erc1155Id, setErc1155Id] = useState<string>('');
  const [erc1155Quantity, setErc1155Quantity] = useState<string>('');
  const [packPrice, setPackPrice] = useState<string>('');

  useEffect(() => {
    const initializeEthereum = async () => {
      if (window.ethereum) {
        try {
          const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = web3Provider.getSigner();
          const contractInstance = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

          setProvider(web3Provider);
          setContract(contractInstance);
          setSigner(signer);
          setIsConnected(true);
        } catch (error) {
          console.error('Failed to initialize Ethereum:', error);
          setIsConnected(false);
        }
      } else {
        console.error('No Ethereum provider found');
        setIsConnected(false);
      }
    };

    initializeEthereum();
  }, []);

  const approveERC721 = async (tokenContractAddress: string) => {
    if (!signer) return;

    try {
      const tokenContract = new ethers.Contract(tokenContractAddress, ["function setApprovalForAll(address operator, bool approved) external"], signer);
      const tx = await tokenContract.setApprovalForAll(CONTRACT_ADDRESS, true);
      await tx.wait();
      console.log('ERC-721 tokens approved successfully.');
    } catch (error) {
      console.error('Error approving ERC-721 tokens:', error);
    }
  };

  const approveERC1155 = async (tokenContractAddress: string) => {
    if (!signer) return;
  
    try {
      const tokenContract = new ethers.Contract(tokenContractAddress, [
        "function setApprovalForAll(address operator, bool approved) external",
      ], signer);
      const tx = await tokenContract.setApprovalForAll(CONTRACT_ADDRESS, true);
      await tx.wait();
      console.log('ERC-1155 tokens approved successfully.');
    } catch (error) {
      console.error('Error approving ERC-1155 tokens:', error);
    }
  };
  
  const handleDepositERC721 = async () => {
    if (!contract || !erc721Ids) return;

    const ids = erc721Ids.split(',').map(id => id.trim());

    try {
      const erc721ContractAddress = '0x4Ac03107603F37AD24a36c32bEC98b22AF46ABbf'; // Sustituir con la dirección real del contrato ERC-721

      // Aprobar todos los ERC-721 solo una vez
      await approveERC721(erc721ContractAddress);

      for (const id of ids) {
        const tx = await contract.depositERC721(id);
        await tx.wait();
      }
      alert('ERC-721 NFTs deposited successfully');
    } catch (error) {
      console.error('Error depositing ERC-721:', error);
      alert('Failed to deposit ERC-721 NFTs');
    }
  };

  const handleDepositERC1155 = async () => {
    if (!contract || !erc1155Id || !erc1155Quantity) return;
  
    try {
      const erc1155ContractAddress = '0xE62b57bA772DFf6Aa044407D79B4B12fA28a4942'; // Dirección del contrato ERC-1155
  
      // Aprobar todos los ERC-1155 solo una vez
      await approveERC1155(erc1155ContractAddress);
  
      const tx = await contract.depositERC1155(erc1155Id, erc1155Quantity);
      await tx.wait();
  
      alert('ERC-1155 NFTs deposited successfully');
    } catch (error) {
      console.error('Error depositing ERC-1155:', error);
      alert('Failed to deposit ERC-1155 NFTs');
    }
  };

  const handleSetPackPrice = async () => {
    if (!contract || !packPrice) return;

    try {
      const priceInWei = ethers.utils.parseEther(packPrice);
      const tx = await contract.setPackPrice(priceInWei);
      await tx.wait();
      alert('Pack price set successfully');
    } catch (error) {
      console.error('Error setting pack price:', error);
      alert('Failed to set pack price');
    }
  };

  return (
    <div>
      <div>
        <div className={styles.ecosystemBox}>
          <div>
            <p className={styles.textStyle1}>Enhanced Support Pack</p>
          </div>

          <div>
            <p>Deposit ERC-721 NFTs</p>
          </div>
          <div>
            <input
              className={styles.textInputSP}
              type="text"
              placeholder="IDs Ex: 1, 2, 3"
              value={erc721Ids}
              onChange={(e) => setErc721Ids(e.target.value)}
            />
          </div>
          <div>
            <button className={styles.button} onClick={handleDepositERC721} disabled={!isConnected}>
                Deposit ERC-721
            </button>
          </div>

          <div>
            <p>Deposit ERC-1155 NFTs</p>
          </div>
          <div>
            <input
              className={styles.textInputSP}
              type="text"
              placeholder="Token ID"
              value={erc1155Id}
              onChange={(e) => setErc1155Id(e.target.value)}
            />
          </div>
          <div style={{ marginTop: "10px" }}>
            <input
              className={styles.textInputSP}
              type="text"
              placeholder="Quantity"
              value={erc1155Quantity}
              onChange={(e) => setErc1155Quantity(e.target.value)}
            />
          </div>
          <div>
            <button className={styles.button} onClick={handleDepositERC1155} disabled={!isConnected}>
                Deposit ERC-1155
            </button>
          </div>

          <div>
            <p>Set Pack Price</p>
          </div>
          <div>
            <input
              className={styles.textInputSP}
              type="text"
              placeholder="Price (MATIC)"
              value={packPrice}
              onChange={(e) => setPackPrice(e.target.value)}
            />
          </div>
          <div>
            <button className={styles.button} onClick={handleSetPackPrice} disabled={!isConnected}>
                Set Price
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTManager2;
