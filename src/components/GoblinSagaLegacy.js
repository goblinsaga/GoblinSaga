import React from "react";

const Legacy = () => {
    return (
        <section id="news">
            <div className="container">
                <div id="legacy" className="blog__item" style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                    <div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "30px" }}>
                            <img style={{ width: "40%" }} src="/img/Logo_type2.png" alt="Goblin Saga Genesis NFT" />
                        </div>
                        <div>
                            <p style={{ textAlign: "justify" }}>At Goblin Saga, we take pride in leading the fusion of DeFi, NFTs, and gamification, creating a universe that offers both entertainment and real economic opportunities. Our commitment to innovation is reflected in every update, ensuring an engaging and rewarding experience for our community.</p>
                        </div>
                        <ul>
                            <li>Security First – We prioritize the safety of our miners, implementing audited smart contracts and advanced security protocols to create a secure and reliable environment.</li>
                            <li>Strategic Partnerships – We actively pursue valuable alliances to strengthen our ecosystem, expand opportunities, and enhance benefits for users.</li>
                            <li>Sustainable Growth – Our conservative and meticulous approach allows us to navigate the dynamic world of DeFi while maintaining the integrity and long-term vision of the project.</li>
                        </ul>
                        <div style={{ marginTop: "20px" }}>
                            <p style={{ textAlign: "justify" }}>The security of our miners is our top priority. We have established robust security measures to ensure that every participant in our ecosystem operates in a safe and reliable environment. From audited smart contracts to advanced security protocols, we work tirelessly to protect our users and their digital assets.</p>
                        </div>
                        <div style={{ marginTop: "20px" }}>
                            <p style={{ textAlign: "justify" }}>With every step, Goblin Saga evolves, bringing new opportunities and innovations to our growing community. 🚀</p>
                        </div>

                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "40px" }}>
                            <p style={{ textAlign: "center" }}>We Invite you to know more about us, learn about us!</p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                            <a href="https://docs.goblinsaga.xyz" target="_blank" className="metaportal_fn_button" style={{ marginTop: "20px", paddingBottom: "2rem" }}>
                                White Paper
                            </a>
                            <a href="/#roadmap" className="metaportal_fn_button" style={{ marginTop: "20px", paddingBottom: "2rem" }}>
                                The Step Map
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Legacy;
