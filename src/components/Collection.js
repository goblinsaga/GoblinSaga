import Link from "next/link";
import { useEffect } from "react";
import RaribleX from "./RaribleMarketplace";

const Collection = () => {
  useEffect(() => {
    const collection = document.querySelector(".fn_cs_collection");
    var items = collection.querySelectorAll(".item");
    var itemsLength = items.length;
    setInterval(function () {
      var numberOne = Math.floor(Math.random() * itemsLength);
      var numberTwo = Math.floor(Math.random() * itemsLength);

      while (numberTwo === numberOne) {
        numberTwo = Math.floor(Math.random() * itemsLength);
      }
      var firstDiv = items[numberOne];
      var secondDiv = items[numberTwo];
      var firstImage = firstDiv.querySelector("input").value;
      var secondImage = secondDiv.querySelector("input").value;
      firstDiv.classList.add("ready");
      secondDiv.classList.add("ready");
      // console.log(firstDiv.querySelector("input").value == firstDiv);
      setTimeout(function () {
        // console.log(secondDiv.querySelector("input").value == firstDiv);
        // firstDiv.querySelector("input").value == secondImage;
        // firstDiv.querySelector(".abs_img").style.backgroundImage =
        //   "url(" + secondImage + ")";
        // // secondDiv.querySelector("input").val(firstImage);
        // secondDiv.querySelector("input").value == firstDiv;
        // console.log(secondDiv.querySelector("input").value);
        // secondDiv.querySelector(".abs_img").style.backgroundImage =
        //   "url(" + firstImage + ")";

        firstDiv.classList.remove("ready");
        secondDiv.classList.remove("ready");
      }, 500);
    }, 2000);
  }, []);

  return (
    <section id="collection">
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text="Collection"
          data-align="center"
        >
          Collection
        </h3>
        <div className="fn_cs_collection">
          <div className="collection_top">
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/collection/1.png"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/1.png" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/collection/2.png"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/2.png" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/collection/3.png"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/3.png" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/collection/4.png"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/4.png" />
            </div>
          </div>
          <div className="collection_bottom">
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/collection/5.png"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/5.png" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/collection/6.png"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/6.png" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/collection/7.png"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/7.png" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/collection/8.png"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/8.png" />
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "-50px" }}>
        <RaribleX />
      </div>

      {/* Estilos para ajustar en pantallas pequeñas */}
      <style jsx>{`
        @media (max-width: 768px) {
          .item {
            margin-left: 10px;	
            flex: 0 0 calc(50% - 20px); /* 2 imágenes por fila en pantallas pequeñas */
            max-width: calc(50% - 20px);
          }
        }

        @media (max-width: 480px) {
          .item {
            margin-left: 10px;	
            flex: 0 0 calc(50% - 20px); /* 2 imágenes por fila en pantallas pequeñas */
            max-width: calc(50% - 20px);
          }
        }
      `}</style>
    </section>
  );
};

export default Collection;
