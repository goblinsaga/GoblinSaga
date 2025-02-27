import dynamic from "next/dynamic";
import React from 'react';
import useTotalERC721Held from "../components/TotalERC721Held"; 
import useTotalTokensClaimed from "../components/TotalTokensClaimed";
import GoblinsMinted from "./GoblinsMinted";

const Counter = dynamic(() => import("./Counter"), {
  ssr: false,
});

const FunFacts = () => {
  const totalHeld = useTotalERC721Held(); 
  const totalTokensClaimed = useTotalTokensClaimed(); 

  // Formatear totalTokensClaimed
  const formattedTokensClaimed = totalTokensClaimed ? (totalTokensClaimed / 1e6).toFixed(1) : 0; // Dividir entre 1 millón y redondear a 1 decimal

  return (
    <section id="fun_facts">
      <div className="container">
        <div className="centered-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFacts;
