import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

const contractAddresses = [
    '0xe088d4349E1Fe17072A743b87FB2d511C4772449',
    '0xD38bD38f9b96c9B34000A1336614506B272Fe913',
    '0x997C6fb85EE4E54Fe099A1C83Cd9f53b1BceF65C'
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
        const fetchTotalTokensClaimed = async () => {
            try {
                const provider = new ethers.providers.JsonRpcProvider('https://137.rpc.thirdweb.com');
                
                const totalPromises = contractAddresses.map(async (address) => {
                    const contract = new ethers.Contract(address, abi, provider);
                    const filter = contract.filters.RewardsClaimed();
                    const events = await contract.queryFilter(filter);
                    
                    return events.reduce((acc: number, event: ethers.Event) => {
                        const rewardAmount = event.args?.rewardAmount;
                        return acc + (rewardAmount ? parseFloat(ethers.utils.formatUnits(rewardAmount, 18)) : 0);
                    }, 0);
                });

                const totals = await Promise.all(totalPromises);
                const total = totals.reduce((acc, curr) => acc + curr, 0);

                setTotalTokensClaimed(total);
            } catch (error) {
                console.error('Error fetching total tokens claimed:', error);
                setTotalTokensClaimed(null);
            }
        };

        fetchTotalTokensClaimed();
    }, []);

    return totalTokensClaimed;
};

export default useTotalTokensClaimed;
