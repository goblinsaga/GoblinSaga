import { useState } from "react";

const SeenOn = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="faq">
      <div style={{ marginTop: "-150px" }} className="container">
        <h3
          className="fn__maintitle big"
          data-text="Community Hub"
          data-align="center"
        >
          Community Hub
        </h3>

        <div style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
          <div className="image-container">
            {[
              { src: "/img/community/Discord.png", alt: "Goblin Saga", href: "https://discord.gg/RSyZuSJN5z" },
              { src: "/img/community/Telegram.png", alt: "Goblin Saga", href: "https://t.me/goblinsaga_xyz" },
              { src: "/img/community/Intract.png", alt: "Goblin Saga", href: "https://www.intract.io/project/goblin-saga" },
              { src: "/img/community/Phaver.png", alt: "Goblin Saga", href: "https://app.phaver.com/Wj2YxPZxFnXnPKVZ9" },
              { src: "/img/community/QuestN.png", alt: "Goblin Saga", href: "https://app.questn.com/goblinsaga" },
              { src: "/img/community/MetaHub.png", alt: "Goblin Saga", href: "https://dac.metahub.finance/communities/goblinsaga" },
              { src: "/img/community/TaskOn.png", alt: "Goblin Saga", href: "https://rewards.taskon.xyz/GoblinSaga" },
              { src: "/img/community/MagicSquare.png", alt: "Goblin Saga", href: "https://magicsquare.io/store/app/goblin-saga" },
            ].map((item, index) => (
              <a
                className="blog__item"
                href={item.href}
                target="blank"
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  style={{
                    width: "100%",
                    opacity: hoveredIndex === index ? 1 : 0.5,
                    transition: "opacity 0.3s ease",
                  }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* CSS para ajustar en pantallas pequeñas */}
      <style jsx>{`
        .image-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }

        .blog__item {
          flex: 0 0 30%;
          max-width: 250px;
          width: 100%;
        }

        @media (max-width: 768px) {
          .blog__item {
            flex: 0 0 100%; /* En pantallas pequeñas ocupa el 100% */
            max-width: 100%;
          }

          .image-container {
            flex-direction: column; /* Cambia la dirección a columna en móviles */
          }
        }
      `}</style>
    </section>
  );
};

export default SeenOn;
