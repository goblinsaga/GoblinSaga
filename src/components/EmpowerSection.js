import { useContract, useNFTs } from "@thirdweb-dev/react";
import React from "react";
import { BUSINESSES_CONTRACT_ADDRESS2 } from "../../consts/contracts2";
import NFTCardBox from "./NFTCard3";
import NewUsers from "./NewUsers";

const ShopSections = () => {
    const { contract: boxContract } = useContract(BUSINESSES_CONTRACT_ADDRESS2);
    const { data: box } = useNFTs(boxContract);

    return (
        <section id="roadmap">
            <div id="special-items" style={{ marginTop: "100px" }} className="container">
                <h3
                    className="fn__maintitle big"
                    data-text="Empower Your Business"
                    data-align="center"
                >
                    Empower Your Business
                </h3>

                <NewUsers />

                <div style={{ marginBottom: "100px" }} className="gridNFT">
                    {box && box.length > 0 ? (
                        box.map((boxItem) => (
                            <NFTCardBox
                                key={boxItem.metadata.id}
                                nft={boxItem}
                            />
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ShopSections;
