import { useEffect, useState } from "react";
import { ethers } from "ethers";
import TokenABI from '../../contracts/GSAContractABI.json'; // Asegúrate de tener el ABI correcto

const TokenContractAddress = '0xC1e2859c9D20456022ADe2d03f2E48345cA177C2'; // Dirección del contrato del token minteable
const alchemyUrl = 'https://polygon-mainnet.infura.io/v3/724372ddfd7b4a4197b5187a2da456d6';
const pricePerToken = 0.00000085; // Precio fijo del token en MATIC

const TokenSaleInsights = () => {
  const [claims, setClaims] = useState([]); // Para almacenar los últimos 10 claims
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchLatestClaims = async () => {
      try {
        setLoading(true);

        // Crear proveedor de Alchemy para interactuar con la blockchain
        const provider = new ethers.providers.JsonRpcProvider(alchemyUrl);
        const contract = new ethers.Contract(TokenContractAddress, TokenABI, provider);

        // Filtro de eventos para el método 'TokensClaimed'
        const claimFilter = contract.filters.TokensClaimed();
        const events = await contract.queryFilter(claimFilter);

        // Tomamos solo los últimos 10 eventos y los invertimos para mostrar el más reciente primero
        const last10Claims = events.slice(-10).reverse();

        const claimsData = last10Claims.map(event => {
          const [claimConditionIndex, claimer, receiver, startTokenId, quantityClaimed] = event.args;

          // Convertir quantityClaimed a un valor numérico
          const quantityClaimedFormatted = Number(ethers.utils.formatUnits(quantityClaimed, 18)).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          });

          // Calcular el costo total en MATIC
          const totalCostInMATIC = (Number(ethers.utils.formatUnits(quantityClaimed, 18)) * pricePerToken).toFixed(3);

          // Truncar la dirección del claimer
          const truncatedClaimer = `${claimer.slice(0, 6)}...${claimer.slice(-4)}`;

          return {
            claimConditionIndex: claimConditionIndex.toString(),
            claimer: truncatedClaimer,
            receiver,
            startTokenId: startTokenId.toString(),
            quantityClaimed: quantityClaimedFormatted,
            totalCostInMATIC,
          };
        });

        setClaims(claimsData);
      } catch (error) {
        console.error(error);
        setErrorMessage("Error fetching the latest claim data.");
      } finally {
        setLoading(false);
      }
    };

    fetchLatestClaims();

    // Crear proveedor de Alchemy para escuchar eventos en tiempo real
    const provider = new ethers.providers.JsonRpcProvider(alchemyUrl);
    const contract = new ethers.Contract(TokenContractAddress, TokenABI, provider);

    contract.on('TokensClaimed', (claimConditionIndex, claimer, receiver, startTokenId, quantityClaimed) => {
      // Convertir quantityClaimed a un número
      const quantityClaimedAsNumber = Number(ethers.utils.formatUnits(quantityClaimed, 18));

      // Formatear el número usando Intl.NumberFormat
      const formattedQuantity = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(quantityClaimedAsNumber);

      // Calcular el costo total en MATIC
      const totalCostInMATIC = (quantityClaimedAsNumber * pricePerToken).toFixed(3);

      // Truncar la dirección del claimer
      const truncatedClaimer = `${claimer.slice(0, 6)}...${claimer.slice(-4)}`;

      // Actualizar el estado con el nuevo claim
      setClaims(prevClaims => [
        {
          claimConditionIndex: claimConditionIndex.toString(),
          claimer: truncatedClaimer,
          receiver,
          startTokenId: startTokenId.toString(),
          quantityClaimed: formattedQuantity,
          totalCostInMATIC,
        },
        ...prevClaims.slice(0, 9), // Mantener solo los últimos 10 claims
      ]);
    });

    return () => {
      contract.removeAllListeners('TokensClaimed');
      setClaims([]);
    };
  }, []);

  return (
    <div id="news">
      <h3
        className="fn__maintitle big"
        data-text="Last Claims"
        data-align="center"
      >
        Last Claims
      </h3>
      <div>
        {loading && <p style={{ textAlign: "center" }}>Loading latest claims...</p>}
        {errorMessage && <p style={{ textAlign: "center", color: "red" }}>{errorMessage}</p>}
        <ul>
          {claims.map((claim, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                paddingBottom: "2rem",
                flexWrap: "wrap",
                marginTop: index === 0 ? "0" : "10px",
                textAlign: "center",
              }}
              className="blog__item"
            >
              <div style={{ flex: "1 1 auto" }}>
                <div className="meta">
                  <p>Claimer</p>
                </div>
                <div className="title">
                  <h3>{claim.claimer}</h3>
                </div>
              </div>

              <div style={{ flex: "1 1 auto" }}>
                <div className="meta">
                  <p>GSA Claimed</p>
                </div>
                <div className="title">
                  <h3>{claim.quantityClaimed}</h3>
                </div>
              </div>

              <div style={{ flex: "1 1 auto" }}>
                <div className="meta">
                  <p>Claimed for</p>
                </div>
                <div className="title">
                  <h3>{claim.totalCostInMATIC} POL</h3>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TokenSaleInsights;
