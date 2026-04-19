import React from "react";
import { use } from "react";
import Card from "./card";

const Cards = ({ cardJson }) => {
  const cards = use(cardJson);
  return (
    <>
      <div></div>
      <div className="w-8/12 mx-auto grid grid-cols-3 gap-4 mb-20">
        {cards.map((card) => (
          <Card 
          key={card.id} 
          card={card}
          ></Card>
        ))}
      </div>
    </>
  );
};

export default Cards;
