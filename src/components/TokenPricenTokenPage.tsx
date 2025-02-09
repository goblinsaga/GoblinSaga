import { useEffect, useState } from 'react';
import axios from 'axios';
const TokenPriceMint = () => {
    const [tokenPriceUSD, setTokenPriceUSD] = useState(null);

    useEffect(() => {
        const fetchTokenPrice = async () => {
            try {
                const response = await axios.get(
                    'https://api.geckoterminal.com/api/v2/networks/polygon_pos/pools/0xf307d80857f08becc90404fca6be332395169ea7'
                );
                setTokenPriceUSD(response.data.data.attributes.base_token_price_usd);
            } catch (error) {
                console.error('Error al obtener el precio del token:', error.message);
            }
        };

        fetchTokenPrice();
        const interval = setInterval(fetchTokenPrice, 1000 * 60 * 60);
        return () => clearInterval(interval);
    }, []);

    const formatPrice = (price) => {
        if (!price) return 'Loading...';

        // Convertir el precio a string con 11 decimales
        const priceStr = parseFloat(price).toFixed(10).toString();

        // Separar la parte entera de la decimal
        const [integerPart, decimalPart] = priceStr.split('.');

        // Contar los ceros consecutivos al inicio de la parte decimal
        const zeros = decimalPart.match(/^0+/);
        const zerosCount = zeros ? zeros[0].length : 0;

        // Resto de los números después de los ceros
        const remainingNumbers = decimalPart.slice(zerosCount);

        // Construir el formato: cantidad de ceros en pequeño alineado correctamente y desplazado 5px hacia abajo
        return `${integerPart}.0<span style="font-size: 0.7em; line-height: 1; display: inline-block; position: relative; top: 5px;">${zerosCount}</span>${remainingNumbers}`;
    };

    return (
        <section>
            <div>
                {/* News Shotcode */}
                <div>
                    <div>
                        <div
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
                                                GSA/USD
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 style={{ margin: "0" }}>
                                        $
                                        {tokenPriceUSD !== null ? (
                                            <span dangerouslySetInnerHTML={{ __html: formatPrice(tokenPriceUSD) }} />
                                        ) : (
                                            'Loading...'
                                        )}{' '}
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
                    marginTop: "25px",
                }}>
                    <a
                        href="/token#token-mint"
                        className="metaportal_fn_button"
                        rel="noreferrer"
                    >
                        <span>Mint Tokens</span>
                    </a>

                    <a
                        href="https://skynet.certik.com/tools/token-scan/polygon/0xc1e2859c9d20456022ade2d03f2e48345ca177c2"
                        target='_blank'
                        className="metaportal_fn_button"
                        rel="noreferrer"
                    >
                        <span>CertiK Scan</span>
                    </a>
                </div>
            </div>
        </section>
    );
};
export default TokenPriceMint;