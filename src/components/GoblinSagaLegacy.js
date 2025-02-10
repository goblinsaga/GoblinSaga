import React from "react";

const Legacy = () => {
    return (
        <section id="news">
            <div className="container">
                <div>
                    <h3
                        className="fn__maintitle big"
                        data-text="A Legacy of Growth"
                        data-align="center"
                    >
                        A Legacy of Growth
                    </h3>
                </div>
                <div id="legacy" className="blog__item" style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                    <div>
                        <div>
                            <p style={{ textAlign: "justify" }}>At Goblin Saga, we take pride in leading the convergence of cryptocurrencies and NFTs, creating a gamified universe that not only offers entertainment but also real economic opportunities. Our commitment to innovation is reflected in every update and improvement we implement, ensuring our community enjoys a unique and rewarding experience.</p>
                        </div>
                        <div style={{ marginTop: "20px" }}>
                            <p style={{ textAlign: "justify" }}>The security of our miners is our top priority. We have established robust security measures to ensure that every participant in our ecosystem operates in a safe and reliable environment. From audited smart contracts to advanced security protocols, we work tirelessly to protect our users and their digital assets.</p>
                        </div>
                        <div style={{ marginTop: "20px" }}>
                            <p style={{  textAlign: "justify" }}>Additionally, at Goblin Saga, we deeply value strategic collaborations. We are constantly seeking partnerships that bring added value to our community and strengthen our ecosystem. We believe that through meaningful alliances, we can expand our horizons and offer even more enriching experiences to our users.</p>
                        </div>
                        <div style={{ marginTop: "20px" }}>
                            <p style={{ textAlign: "justify" }}>Our conservative and meticulous approach allows us to move forward steadily in the dynamic world of decentralized finance. We are committed to maintaining the integrity of our project, ensuring that every initiative and collaboration aligns with our core values and benefits our community as a whole.</p>
                        </div>
                    </div>
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
        </section>
    );
};

export default Legacy;
