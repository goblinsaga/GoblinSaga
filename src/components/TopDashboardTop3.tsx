import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import contract2ABI from '../../contracts/RewardsContract2ABI.json';
import GSAContractABI from '../../contracts/GSAContractABI.json';
import RewardPoolTopOne from "./RewardPool1";

const contractAddress = '0x495A1E16FCdB4a33972CebA05A3cd8bF335aaF64';
const gsaTokenAddress = '0xc1e2859c9d20456022ade2d03f2e48345ca177c2';

const AdminTopThree = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
  const [signer, setSigner] = useState<ethers.Signer | null>(null);
  const [contract, setContract] = useState<ethers.Contract | null>(null);
  const [rewardAmount, setRewardAmount] = useState<number>(0);
  const [addressToWhitelist, setAddressToWhitelist] = useState<string>('');
  const [addressToRemove, setAddressToRemove] = useState<string>('');
  const [depositAmount, setDepositAmount] = useState<number>(0);
  const [whitelistedAddresses, setWhitelistedAddresses] = useState<string[]>([]);

  useEffect(() => {
    if (contract) {
      fetchWhitelistedAddresses();
    }
  }, [contract]);

  const fetchWhitelistedAddresses = async () => {
    if (!contract) {
      console.error("Contract is not initialized.");
      return;
    }

    try {
      const count = await contract.whiteListCount(); // Get the total number of whitelisted addresses
      const addresses: string[] = [];

      for (let i = 0; i < count.toNumber(); i++) {
        const address = await contract.whiteListAddress(i); // Fetch each address by index
        addresses.push(address);
      }

      setWhitelistedAddresses(addresses);
    } catch (error) {
      console.error("Error fetching whitelisted addresses:", error);
    }
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const account = await signer.getAddress();
      setProvider(provider);
      setSigner(signer);
      setAccount(account);

      const contract = new ethers.Contract(contractAddress, contract2ABI, signer);
      setContract(contract);
    } else {
      alert('Metamask is not installed');
    }
  };

  const handleSetGSARewards = async () => {
    if (contract) {
      try {
        const tx = await contract.setGSARewards(ethers.utils.parseUnits(rewardAmount.toString(), 18));
        await tx.wait();
        alert('GSA Rewards set successfully');
      } catch (error) {
        console.error(error);
        alert('Error setting GSA Rewards');
      }
    }
  };

  const handleSetMATICRewards = async () => {
    if (contract) {
      try {
        const tx = await contract.setMATICRewards(ethers.utils.parseUnits(rewardAmount.toString(), 18));
        await tx.wait();
        alert('MATIC Rewards set successfully');
      } catch (error) {
        console.error(error);
        alert('Error setting MATIC Rewards');
      }
    }
  };

  const handleResetEligibility = async () => {
    if (contract) {
      try {
        const tx = await contract.resetEligibility();
        await tx.wait();
        alert('Eligibility reset successfully');
      } catch (error) {
        console.error(error);
        alert('Error resetting eligibility');
      }
    }
  };

  const handleAddToWhiteList = async () => {
    if (contract && addressToWhitelist) {
      try {
        const tx = await contract.addToWhiteList(addressToWhitelist);
        await tx.wait();
        alert('Address added to whitelist successfully');
        fetchWhitelistedAddresses(); // Refresh the list after adding
      } catch (error) {
        console.error(error);
        alert('Error adding address to whitelist');
      }
    }
  };

  const handleRemoveFromWhiteList = async () => {
    if (contract && addressToRemove) {
      try {
        const tx = await contract.removeFromWhiteList(addressToRemove);
        await tx.wait();
        alert('Address removed from whitelist successfully');
        fetchWhitelistedAddresses(); // Refresh the list after removing
      } catch (error) {
        console.error(error);
        alert('Error removing address from whitelist');
      }
    }
  };

  const handleDepositGSARewards = async () => {
    if (contract && signer) {
      try {
        const gsaTokenContract = new ethers.Contract(gsaTokenAddress, GSAContractABI, signer);

        // Approve the contract to spend the tokens
        const approvalTx = await gsaTokenContract.approve(contractAddress, ethers.utils.parseUnits(depositAmount.toString(), 18));
        await approvalTx.wait();

        // Deposit the tokens
        const depositTx = await contract.depositRewardTokens(ethers.utils.parseUnits(depositAmount.toString(), 18));
        await depositTx.wait();
        alert('GSA Rewards deposited successfully');
      } catch (error) {
        console.error(error);
        alert('Error depositing GSA Rewards');
      }
    }
  };

  const handleDepositMATICRewards = async () => {
    if (contract) {
      try {
        const tx = await contract.depositRewardMatic({
          from: account,
          value: ethers.utils.parseUnits(depositAmount.toString(), 18)
        });
        await tx.wait();
        alert('MATIC Rewards deposited successfully');
      } catch (error) {
        console.error(error);
        alert('Error depositing MATIC Rewards');
      }
    }
  };

  return (
    <section id="news">
      <div className='container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }}>
        <h3
          className="fn__maintitle big"
          data-text="Top Dashboard Top 3"
          data-align="center"
        >
          Top Dashboard Top 3
        </h3>
        <div className="blog__item">
          <div>
            {!account ? (
              <button className="metaportal_fn_buttonLW" onClick={connectWallet}>Connect Wallet</button>
            ) : (
              <div>
                <div>
                  <RewardPoolTopOne />
                </div>

                <div style={{ marginTop: "30px" }}>
                  <p>1. Manage WhiteList</p>
                  <div>
                    <input
                      type="text"
                      value={addressToWhitelist}
                      onChange={(e) => setAddressToWhitelist(e.target.value)}
                      placeholder="Add to whitelist"
                    />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "15px" }}>
                    <button className="metaportal_fn_buttonLW" onClick={handleAddToWhiteList}>Add Address</button>
                  </div>

                  <div style={{ marginTop: "30px" }}>
                    <input
                      type="text"
                      value={addressToRemove}
                      onChange={(e) => setAddressToRemove(e.target.value)}
                      placeholder="Remove from whitelist"
                    />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "15px" }}>
                    <button className="metaportal_fn_buttonLW" onClick={handleRemoveFromWhiteList}>Remove Address</button>
                  </div>
                </div>

                <div style={{ marginTop: "30px" }}>
                  <div>
                    <p>Whitelisted Addresses</p>
                    <div>
                      {whitelistedAddresses.map((address, index) => (
                        <p key={index}>{address}</p>
                      ))}
                    </div>
                  </div>
                </div>
                
                <p style={{ marginTop: "30px" }}>2. Reset</p>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "15px" }}>
                  <button className="metaportal_fn_buttonLW" onClick={handleResetEligibility}>Reset Eligibility</button>
                </div>

                <div style={{ marginTop: "30px" }}>
                  <p>3. Deposit Reward Amount</p>
                  <div>
                    <input
                      type="text"
                      value={depositAmount}
                      onChange={(e) => setDepositAmount(Number(e.target.value))}
                      placeholder="Deposit Amount"
                    />
                  </div>

                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ display: "flex" }}>
                      <button className="metaportal_fn_buttonLW" style={{ margin: "5px" }} onClick={handleDepositGSARewards}>Deposit $GSA</button>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: "30px" }}>
                  <p>4. Set Reward Amount</p>
                  <div>
                    <input
                      type="text"
                      value={rewardAmount}
                      onChange={(e) => setRewardAmount(Number(e.target.value))}
                      placeholder="Reward Amount"
                    />  
                  </div>

                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ display: "flex" }}>
                      <button className="metaportal_fn_buttonLW" style={{ margin: "5px" }} onClick={handleSetGSARewards}>Set $GSA</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminTopThree;