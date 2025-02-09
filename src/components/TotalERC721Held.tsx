import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import ERC721ABI from '../../contracts/ERC721ABI.json';

const SmartContractAddress = '0xD38bD38f9b96c9B34000A1336614506B272Fe913';
const ERC721Address = '0x4Ac03107603F37AD24a36c32bEC98b22AF46ABbf';
const alchemyUrl = 'https://polygon-mainnet.g.alchemy.com/v2/m9IpEH_WVW-eDmp9Rc4xIwKR3_bhE1CR';

const useTotalERC721Held = () => {
  const [totalHeld, setTotalHeld] = useState<number | null>(null);

  useEffect(() => {
    const provider = new ethers.providers.JsonRpcProvider(alchemyUrl);
    const erc721Contract = new ethers.Contract(ERC721Address, ERC721ABI, provider);

    const fetchTokenCount = async () => {
      try {
        const balance = await erc721Contract.balanceOf(SmartContractAddress);
        setTotalHeld(balance.toNumber());
      } catch (error) {
        console.error('Error fetching token count:', error);
      }
    };

    fetchTokenCount();
  }, []);

  return totalHeld;
};

export default useTotalERC721Held;
