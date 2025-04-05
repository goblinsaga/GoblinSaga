import React from "react";

interface Staker {
    address: string;
    count: number;
}

interface TopMinersRewardsProps {
    stakersData: Staker[];
    loading: boolean;
}

const TopMinersRewards: React.FC<TopMinersRewardsProps> = ({ stakersData, loading }) => {
    if (loading) {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center", // Centra horizontalmente
                    alignItems: "center", // Centra verticalmente
                }}
            >
                Loading Top Miners...
            </div>
        );
    }

    return (
        <section>
            <div id="top-miners">
                <div className="tasks-list">
                    {stakersData.map((staker, index) => {
                        const polyScanLink = `https://polygonscan.com/address/${staker.address}`;
                        const formattedAddress = `${staker.address.substring(0, 5)}...${staker.address.substring(staker.address.length - 5)}`;

                        return (
                            <div className="blog__item" key={staker.address}>
                                <div className="task-icon">
                                    #{index + 1}
                                </div>
                                <div className="task-content">
                                    <p className="task-title">
                                        <a
                                            href={polyScanLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ color: "inherit", textDecoration: "none" }}
                                        >
                                            {formattedAddress}
                                        </a>
                                    </p>
                                </div>
                                <div className="task-count">
                                    {staker.count}
                                    <img
                                        src="img/Fawkes.png"
                                        alt="ERC-721 Token"
                                        style={{
                                            width: "25px",
                                            height: "auto",
                                            marginLeft: "5px",
                                            verticalAlign: "middle"
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Estilos CSS */}
            <style jsx>{`
                .tasks-list {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .blog__item {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background: transparent;
                    padding: 15px 20px;
                    height: 70px; /* Altura reducida para mejor alineación */
                }

                .task-icon {
                    width: 50px; /* Ancho reducido */
                    height: 50px; /* Alto reducido */
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 18px;
                    font-weight: bold;
                    background-color: transparent; /* Fondo para el ícono */
                    border-radius: 10px;
                    margin-right: 15px; /* Espacio entre el ícono y el contenido */
                }

                .task-content {
                    flex: 1;
                    text-align: left;
                }

                .task-title {
                    font-size: 16px;
                    margin: 0; /* Elimina el margen para mejor alineación */
                }

                .task-title a:hover {
                    text-decoration: underline; /* Subrayado al pasar el mouse */
                }

                .task-count {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    width: 150px; /* Ancho fijo para el contador */
                    font-size: 16px;
                }

                @media screen and (max-width: 768px) {
                    .blog__item {
                        padding: 10px; /* Reducir el padding en móviles */
                        height: 60px; /* Altura reducida para móviles */
                    }

                    .task-icon {
                        width: 40px; /* Ancho reducido para móviles */
                        height: 40px; /* Alto reducido para móviles */
                        font-size: 16px; /* Tamaño de fuente reducido */
                        margin-right: 10px; /* Espacio reducido */
                    }

                    .task-content {
                        flex: 1;
                    }

                    .task-title {
                        font-size: 16px; /* Tamaño de fuente reducido */
                    }

                    .task-count {
                        width: 120px; /* Ancho reducido para móviles */
                        font-size: 16px; /* Tamaño de fuente reducido */
                    }
                }

                @media screen and (max-width: 480px) {
                    .blog__item {
                        padding: 8px; /* Padding aún más reducido para pantallas muy pequeñas */
                        height: 50px; /* Altura más reducida */
                    }

                    .task-icon {
                        width: 30px; /* Ancho más reducido */
                        height: 30px; /* Alto más reducido */
                        font-size: 14px; /* Tamaño de fuente más reducido */
                        margin-right: 8px; /* Espacio más reducido */
                    }

                    .task-title {
                        font-size: 16px; /* Tamaño de fuente más reducido */
                    }

                    .task-count {
                        width: 100px; /* Ancho más reducido */
                        font-size: 16px; /* Tamaño de fuente más reducido */
                    }
                }
            `}</style>
        </section>
    );
};

export default TopMinersRewards;
