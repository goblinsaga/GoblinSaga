import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import Link from 'next/link';

const GSAStaked = () => {
    const [tokenBalance, setTokenBalance] = useState(null);

    useEffect(() => {
        const fetchTokenBalance = async () => {
            try {
                // Configurar el provider de Polygon
                const provider = new ethers.providers.JsonRpcProvider('https://polygon-rpc.com/');

                // ABI del contrato del token ERC-20 (solo necesitamos la función balanceOf)
                const tokenAbi = [
                    "function balanceOf(address owner) view returns (uint256)"
                ];

                // Dirección del contrato del token
                const tokenAddress = '0xc1e2859c9d20456022ade2d03f2e48345ca177c2';

                // Dirección del contrato inteligente que tiene los tokens staked
                const stakingContractAddress = '0x675d4244fa9fB9D57Ef22A556c8ce5B85839Abe4';

                // Crear una instancia del contrato del token
                const tokenContract = new ethers.Contract(tokenAddress, tokenAbi, provider);

                // Obtener el balance del contrato de staking
                const balance = await tokenContract.balanceOf(stakingContractAddress);

                // Convertir el balance a un número legible (asumiendo 18 decimales)
                const formattedBalance = ethers.utils.formatUnits(balance, 18);

                // Actualizar el estado con el balance formateado
                setTokenBalance(formattedBalance);
            } catch (error) {
                console.error('Error al obtener el balance del token:', error.message);
            }
        };

        fetchTokenBalance();
        const interval = setInterval(fetchTokenBalance, 1000 * 60 * 60); // Actualizar cada hora
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="news"
            style={{
                backgroundImage: 'url(/img/gd1.png)',
                backgroundSize: '50%',  // Mantener el tamaño original
                backgroundPosition: 'right',  // Alineado a la derecha y centrado verticalmente
                backgroundRepeat: 'no-repeat',  // No repetir la imagen
            }}
        >
            <div id="token-price" className="container">
                <h3
                    className="fn__maintitle big"
                    data-text="Ecosystem Token"
                    data-align="center"
                >
                    Ecosystem Token
                </h3>
                {/* News Shotcode */}
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "-40px", marginBottom: "10px" }}>
                    <a href='https://memecoinseason.net/p/goblin-saga' target='_blank' rel='noreferrer'>
                        <img 
                            src='/img/MemeCoinSeason.svg' 
                            style={{ width: "130px", transition: "transform 0.3s ease-in-out", cursor: "pointer" }} 
                            onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.2)"} 
                            onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"} 
                        />
                    </a>
                </div>
                <div className="fn_cs_news">
                    <div className="news_part">
                        <div className="left_items"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                margin: "0 auto", // Centrar horizontalmente
                            }}>
                            <div className="blog__item">
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    {/* Logo */}
                                    <div
                                        className="counter"
                                        style={{
                                            marginRight: "10px",
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <span className="cc">
                                            <img
                                                style={{
                                                    marginTop: "-3px",
                                                }}
                                                src="/img/favicon.ico"
                                                alt="Logo"
                                            />
                                        </span>
                                    </div>

                                    {/* Contenedor del texto */}
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        {/* Título principal */}
                                        <div className="meta">
                                            <p
                                                style={{
                                                    margin: "0",
                                                }}
                                            >
                                                Goblin Saga
                                            </p>
                                        </div>
                                        {/* Subtítulo */}
                                        <div className="title">
                                            <p
                                                style={{
                                                    fontSize: "14px",
                                                    color: "#4c9aff", // Azul similar
                                                    margin: "0",
                                                }}
                                            >
                                                $GSA Staked
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 style={{ margin: "0" }}>
                                        {tokenBalance ? `${parseFloat(tokenBalance).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : 'Loading...'}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* !News Shotcode */}
                <div style={{
                    display: "flex",
                    justifyContent: "center", 
                    alignItems: "center", 
                    gap: "10px",
                }}>
                    <a
                        href="/token"
                        className="metaportal_fn_button"
                        rel="noreferrer"
                    >
                        <span>Mint Tokens</span>
                    </a>
                    <a
                        href="https://skynet.certik.com/tools/token-scan/polygon/0xc1e2859c9d20456022ade2d03f2e48345ca177c2"
                        className="metaportal_fn_button"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span>CertiK Scan</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default GSAStaked;
