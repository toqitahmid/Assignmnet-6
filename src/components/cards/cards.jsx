import React from "react";
import { useEffect, useState } from "react";
import Card from "./card";
import Cart from "../carts/cart";

const Cards = ({ buyCard, setBuyCard, totalDoller, setTotalDoller }) => {
  const [button, setButton] = useState("products");
  const [cards, setCards] = useState([]);

  const handleProceed = () => {
    setBuyCard([]);
    setTotalDoller(0);
  }

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((json) => setCards(json));
  }, []);
  return (
    <>
      <div className="w-8/12 mx-auto flex justify-center mt-20 mb-30">
        <button
          onClick={() => {
            setButton("products");
          }}
          className={`btn w-35 h-12 rounded-l-3xl
        ${button === "products" ? "bg-linear-to-bl from-violet-500 to-fuchsia-500" : "btn"}`}
        >
          Products
        </button>
        <button
          onClick={() => {
            setButton("cart");
          }}
          className={`btn w-35 h-12 rounded-r-3xl
        ${button === "cart" ? "bg-linear-to-bl from-violet-500 to-fuchsia-500" : "btn"}`}
        >
          Cart ({buyCard.length})
        </button>
      </div>

      <div className="w-8/12 mx-auto grid grid-cols-3 gap-4 mb-10">
        {button === "products" &&
          cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              buyCard={buyCard}
              setBuyCard={setBuyCard}
              setTotalDoller={setTotalDoller}
            ></Card>
          ))}
      </div>

      <div className="w-8/12 mx-auto">
        <div className="bg-base-200 p-5 rounded-2xl mb-10">
          <div className="">
            {button === "cart" && (
              <h1 className="text-3xl font-bold mb-5">Your Cart</h1>
            )}

            {button === "cart" &&
              buyCard.map((parBuyCard, index) => (
                <Cart
                  key={index}
                  parBuyCard={parBuyCard}
                  totalDoller={totalDoller}
                  setTotalDoller={setTotalDoller}
                  buyCard = {buyCard}
                  setBuyCard = {setBuyCard}
                ></Cart>
              ))}

            {button === "cart" && (
              <>
                  <div className={buyCard.length === 0 && "p-5 text-center text-3xl font-bold"}>
                    {buyCard.length === 0 && "No Product here"}
                  </div>
                <div className="flex gap-2 font-bold mb-5 mt-5">
                  <p>Total:</p>
                  <p>{totalDoller}$</p>
                </div>
                <div>

                  <button
                    onClick={handleProceed}
                    className="btn btn-block bg-linear-to-bl from-violet-500 to-fuchsia-500 text-white h-10 rounded-3xl"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
