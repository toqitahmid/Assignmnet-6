import React from "react";
import { use, useState } from "react";
import Card from "./card";
import Cart from "../carts/cart";

const Cards = ({ cardJson }) => {
  const [button, setButton] = useState("products");
  const cards = use(cardJson);
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
          Cart (2)
        </button>
      </div>
      

      <div className="w-8/12 mx-auto grid grid-cols-3 gap-4 mb-10">
        {button === "products" && 
        cards.map((card) => (
          <Card key={card.id} card={card}></Card>
        ))
        }
      </div>

      <div className="w-8/12 mx-auto">
        {button === "cart" && (
          <Cart></Cart>
        )}
      </div>
    </>
  );
};

export default Cards;
