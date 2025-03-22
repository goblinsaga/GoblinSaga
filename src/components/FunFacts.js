import dynamic from "next/dynamic";
import React from 'react';
import useTotalERC721Held from "../components/TotalERC721Held";
import useTotalTokensClaimed from "../components/TotalTokensClaimed";
import useTokenBalance from "../components/TokenBalanceComponent";
import GoblinsMinted from "./GoblinsMinted";

const Counter = dynamic(() => import("./Counter"), {
  ssr: false,
});

const FunFacts = () => {
  const totalHeld = useTotalERC721Held();
  const totalTokensClaimed = useTotalTokensClaimed();
  const totalTokensStaked = useTokenBalance();

  // Formatear totalTokensClaimed sin decimales
  const formattedTokensClaimed = totalTokensClaimed ? Math.round(totalTokensClaimed / 1e6) : 0; // Dividir entre 1 millón y redondear

  return (
    <section id="fun_facts">
      <div className="container">
        <div className="fn_cs_counter_list">
          <ul>
            <li>
              <div className="item">
                <h3 className="fn__gradient_title">
                  <span className="prefix" />
                  <Counter end={4444} />
                  <span className="suffix" />
                </h3>
                <p>Total Items</p>
                <div className="divider" />
              </div>
            </li>
            <li>
              <div className="item">
                <h3 className="fn__gradient_title">
                  <span className="prefix" />
                  <GoblinsMinted contractAddress="0x4Ac03107603F37AD24a36c32bEC98b22AF46ABbf" /> {/* Usa el componente aquí */}
                  <span className="suffix" />
                </h3>
                <p>Goblins Minted</p>
                <div className="divider" />
              </div>
            </li>
            <li>
              <div className="item">
                <h3 className="fn__gradient_title">
                  <span className="prefix" />
                  <Counter end={formattedTokensClaimed} /> {/* Utiliza el valor formateado sin decimales */}
                  <span className="suffix">M</span>
                </h3>
                <p>$GSA Mined</p>
                <div className="divider" />
              </div>
            </li>
            <li>
              <div className="item">
                <h3 className="fn__gradient_title">
                  <span className="prefix" />
                  <Counter end={totalTokensStaked || 0} /> {/* Usa el valor formateado sin decimales */}
                  <span className="suffix">
                    {totalTokensStaked >= 1_000_000 ? "M" : totalTokensStaked >= 1_000 ? "M" : ""}
                  </span>
                </h3>
                <p>$GSA Staked</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FunFacts;
