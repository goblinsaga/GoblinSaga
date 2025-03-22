import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import AddTokenButton from './CAddToMM';

const TokenPrice = () => {
    const [tokenPriceUSD, setTokenPriceUSD] = useState(null);

    useEffect(() => {
        const fetchTokenPrice = async () => {
            try {
                const response = await axios.get(
                    'https://api.geckoterminal.com/api/v2/networks/polygon_pos/pools/0x7a0a68b0ed31ac71aef3c3251cbbedb73df3beffc2566a3545b3d457504ba152'
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
        const priceStr = parseFloat(price).toFixed(8).toString();

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
                {/* News Shotcode */}
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "-40px", marginBottom: "10px" }}>
                    <a href='https://bitcourier.co.uk/news/goblin-saga-interview' target='_blank' rel='noreferrer'>
                        <img
                            src='/img/bitcourier.png'
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
                                        <span className="cc" style={{ marginTop: "-11px" }}>
                                            <img
                                                style={{
                                                    marginTop: "-3px",
                                                }}
                                                src="/img/GSAV2.png"
                                                alt="Logo"
                                            />
                                        </span>
                                    </div>

                                    {/* Contenedor del texto */}
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        {/* Título principal */}
                                        <div className="meta" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                            <p
                                                style={{
                                                    margin: "0",
                                                }}
                                            >
                                                Goblin Saga Token
                                            </p>
                                            <div>
                                                <AddTokenButton />
                                            </div>
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
                                                GSA/USDC
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Contenedor flexible para precio y botón */}
                                <div style={{
                                    display: "flex",
                                    justifyContent: "space-between", // Alinear precio a la izquierda y botón a la derecha
                                    alignItems: "center",
                                    width: "100%", // Ocupar todo el ancho disponible
                                    marginTop: "10px", // Espacio superior
                                }}>
                                    {/* Precio */}
                                    <div>
                                        <h3 style={{ margin: "0", color: "greenyellow", marginLeft: "5px" }}>
                                            $
                                            {tokenPriceUSD !== null ? (
                                                <span dangerouslySetInnerHTML={{ __html: formatPrice(tokenPriceUSD) }} />
                                            ) : (
                                                'Loading...'
                                            )}{' '}
                                        </h3>
                                    </div>
                                    {/* Botón Mint Tokens */}
                                    <div>
                                        <a
                                            href="/token"
                                            className="metaportal_fn_button"
                                            rel="noreferrer"
                                        >
                                            <span>Mint Tokens</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* !News Shotcode */}
            </div>
        </section>
    );
};

export default TokenPrice;
