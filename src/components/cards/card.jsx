import { React} from "react";
import Features from "./features";

const Card = ({ card, buyCard, setBuyCard, setTotalDoller }) => {
  const isBuied = buyCard.some((bc) => Number(bc.id) === Number(card.id));

  const handleAddToCart = (card) => {
    setBuyCard((prev) => [...prev, card]);
    setTotalDoller((prevTotal) => prevTotal + card.price);
  };
  return (
    <div className="hover-3d">
      <div className="card w-96 h-full bg-base-200 shadow-sm hover-3d">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <img src={card.icon} alt="" />
            <div
              className={`badge badge-xs 
                ${card.tag === "Best Seller" && "badge-warning"}
                ${card.tag === "Popular" && "badge-secondary"}
                ${card.tag === "New" && "badge-primary"}`}
            >
              {card.tag}
            </div>
          </div>

          <div className="space-y-3 mt-4">
            <h2 className="text-3xl font-bold">{card.name}</h2>
            <p className="text-gray-500">{card.description}</p>
            <span className="text-xl">${card.price}/mo</span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            {card.features.map((feature, index) => (
              <Features key={index} feature={feature}></Features>
            ))}
          </ul>
          <div className="mt-6 hover-3d">
            <button
              type="button"
              disabled = {isBuied}
              onClick={() => handleAddToCart(card)}
              className={`btn rounded-3xl text-white bg-linear-to-bl from-violet-500 to-fuchsia-500 ${isBuied === true ? 'btn-disabled':''}`}
            >
              {isBuied? "Alredy Added" : "Buy Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
