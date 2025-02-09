import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import GSAContractABI from '../../contracts/GSAContractABI.json';
import React from 'react';

const gsaTokenAddress = '0xc1e2859c9d20456022ade2d03f2e48345ca177c2';
const contractAddress = '0xE7895410cf5863bbF52C6fD0880c3AeB7960b88A';
const alchemyUrl = 'https://polygon-mainnet.g.alchemy.com/v2/ugUWILtewItsIxlAIaUxDd15GgsePNkT';

const RewardPoolTopOne = () => {
    const [provider, setProvider] = useState<ethers.providers.JsonRpcProvider | null>(null);
    const [gsaBalance, setGsaBalance] = useState<string>('0');
    const [maticBalance, setMaticBalance] = useState<string>('0');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const provider = new ethers.providers.JsonRpcProvider(alchemyUrl);
        setProvider(provider);

        const fetchBalances = async () => {
            if (provider) {
                try {
                    // Fetch GSA token balance
                    const gsaTokenContract = new ethers.Contract(gsaTokenAddress, GSAContractABI, provider);
                    const gsaBalanceBig = await gsaTokenContract.balanceOf(contractAddress);
                    setGsaBalance(ethers.utils.formatUnits(gsaBalanceBig, 18));

                    // Fetch MATIC balance
                    const maticBalanceBig = await provider.getBalance(contractAddress);
                    setMaticBalance(ethers.utils.formatUnits(maticBalanceBig, 18));
                } catch (error) {
                    console.error(error);
                    alert('Error fetching balances');
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchBalances();
    }, []);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <p>Top 1</p>
            </div>
            <div className="containerTM4">
                <div className="balanceContainer">
                    <p style={{ width: "150px" }} className="metaportal_fn_buttonLW">
                        {loading ? 'Loading...' : gsaBalance}
                        <img src="img/favicon.ico" alt="$GSA" style={{ width: "18px", height: "18px", marginTop: "-4px", marginLeft: "3px" }} />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RewardPoolTopOne;