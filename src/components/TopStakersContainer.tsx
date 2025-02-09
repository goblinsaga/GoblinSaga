import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import RewardsContractABI from '../../contracts/RewardsContractABI.json';
import TopStakers from './TopStakers';
import React from 'react';

const contractAddress = '0xD38bD38f9b96c9B34000A1336614506B272Fe913';
const providerUrl = 'https://polygon-mainnet.infura.io/v3/724372ddfd7b4a4197b5187a2da456d6';

const CACHE_KEY = 'topStakersData';
const CACHE_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

const TopStakersContainer: React.FC = () => {
  const [stakersData, setStakersData] = useState<{ address: string; count: number }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStakers = async () => {
      try {
        const provider = new ethers.providers.JsonRpcProvider(providerUrl); // Changed to Infura provider
        const contract = new ethers.Contract(contractAddress, RewardsContractABI, provider);

        const filter = contract.filters.TokensStaked();
        const events = await contract.queryFilter(filter);

        const stakerSet = new Set<string>();

        for (const event of events) {
          const { args } = event;
          if (args) {
            const staker = args[0] as string;
            stakerSet.add(staker);
          }
        }

        const stakerArray = Array.from(stakerSet);
        const stakerMap: { [key: string]: number } = {};

        // Function to fetch stake info with a concurrency limit
        const fetchWithConcurrencyLimit = async (addresses: string[]) => {
          const CONCURRENCY_LIMIT = 5; // Number of concurrent requests
          const results: Promise<void>[] = [];
          for (let i = 0; i < addresses.length; i += CONCURRENCY_LIMIT) {
            const batch = addresses.slice(i, i + CONCURRENCY_LIMIT);
            results.push(
              ...batch.map(async (staker) => {
                try {
                  const stakeInfo = await contract.getStakeInfo(staker);
                  stakerMap[staker] = stakeInfo[0].length; // Adjust based on actual structure of stakeInfo
                } catch (error) {
                  console.error(`Error fetching stake info for ${staker}:`, error);
                  stakerMap[staker] = 0; // Handle errors by setting count to 0
                }
              })
            );
            await Promise.all(results);
            results.length = 0; // Clear the results array
          }
        };

        await fetchWithConcurrencyLimit(stakerArray);

        const stakerData = Object.keys(stakerMap).map(address => ({
          address,
          count: stakerMap[address],
        }));
        const sortedStakers = stakerData.sort((a, b) => b.count - a.count);

        // Store in localStorage with timestamp
        localStorage.setItem(CACHE_KEY, JSON.stringify({
          timestamp: Date.now(),
          data: sortedStakers.slice(0, 20),
        }));
        setStakersData(sortedStakers.slice(0, 20));
      } catch (error) {
        console.error('Error fetching stakers:', error);
      } finally {
        setLoading(false);
      }
    };

    // Check localStorage for cached data
    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) {
      const { timestamp, data } = JSON.parse(cachedData);
      if (Date.now() - timestamp < CACHE_EXPIRY) {
        // Use cached data if it is not expired
        setStakersData(data);
        setLoading(false);
      } else {
        // Fetch fresh data if cache is expired
        fetchStakers();
      }
    } else {
      // Fetch fresh data if no cache exists
      fetchStakers();
    }
  }, []);

  return <TopStakers stakersData={stakersData} loading={loading} />;
};

export default TopStakersContainer;
