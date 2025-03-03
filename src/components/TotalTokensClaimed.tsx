import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

const contractAddresses = [
    '0x7bBF62c83d3d00eCFDA3Ea98355B2895A453d786',
    '0x4c501f493aE00a866A8cB2De4fc31f19e5d676f0',
    '0x48A3a50b925CA2c2e92fCF77883BD0df111E9c51'
];

const abi = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "staker",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "rewardAmount",
                "type": "uint256"
            }
        ],
        "name": "RewardsClaimed",
        "type": "event"
    },
    // ... other parts of the ABI
];

const formatNumber = (num) => {
    if (num >= 1_000_000) {
        return `${(num / 1_000_000).toFixed(1)}M+`; // Para millones
    }
    if (num >= 1_000) {
        return `${(num / 1_000).toFixed(1)}K+`; // Para miles
    }
    return num.toString(); // Para números menores a mil
};

const useTotalTokensClaimed = () => {
    const [totalTokensClaimed, setTotalTokensClaimed] = useState<number | null>(null);

    useEffect(() => {
        const provider = new ethers.providers.JsonRpcProvider('https://137.rpc.thirdweb.com');

        const fetchAndListen = async () => {
            try {
                // Obtener el total inicial
                const totalPromises = contractAddresses.map(async (address) => {
                    const contract = new ethers.Contract(address, abi, provider);
                    const filter = contract.filters.RewardsClaimed();
                    const events = await contract.queryFilter(filter);

                    return events.reduce((acc, event) => {
                        const rewardAmount = event.args?.rewardAmount;
                        return acc + (rewardAmount ? parseFloat(ethers.utils.formatUnits(rewardAmount, 18)) : 0);
                    }, 0);
                });

                const totals = await Promise.all(totalPromises);
                const totalFromEvents = totals.reduce((acc, curr) => acc + curr, 0);

                // Sumar el valor fijo
                const fixedAdditionalTokens = 1_406_000_000;
                const total = totalFromEvents + fixedAdditionalTokens;

                setTotalTokensClaimed(total);

                // Escuchar eventos en tiempo real
                contractAddresses.forEach((address) => {
                    const contract = new ethers.Contract(address, abi, provider);
                    contract.on('RewardsClaimed', (staker, rewardAmount) => {
                        setTotalTokensClaimed((prevTotal) => {
                            const newClaim = parseFloat(ethers.utils.formatUnits(rewardAmount, 18));
                            return prevTotal + newClaim;
                        });
                    });
                });
            } catch (error) {
                console.error('Error fetching total tokens claimed:', error);
                setTotalTokensClaimed(null);
            }
        };

        fetchAndListen();

        // Limpiar listeners al desmontar el componente
        return () => {
            contractAddresses.forEach((address) => {
                const contract = new ethers.Contract(address, abi, provider);
                contract.removeAllListeners('RewardsClaimed');
            });
        };
    }, []);

    return totalTokensClaimed;
};

export default useTotalTokensClaimed;
