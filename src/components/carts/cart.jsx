import React from "react";

const Cart = ({setBuyCard, parBuyCard, setTotalDoller }) => {
  const handleRemove = (parBuyCard) => {

    setBuyCard((prev) =>
      prev.filter((card) => Number(card.id !== Number(parBuyCard.id))),
    );
    setTotalDoller((prevTotal) => prevTotal-parBuyCard.price)
  };
  return (
    <>
      <div className="pt-5 hover-3d flex">
        <div className="navbar bg-base-100 shadow-sm rounded-2xl">
          <div className="flex-1">
            <div className="p-5">
              <a className="text-xl font-bold">{parBuyCard.name}</a>
              <p>{parBuyCard.description}</p>
              <div
                className={`badge badge-xs 
                ${parBuyCard.tag === "Best Seller" && "badge-warning"}
                ${parBuyCard.tag === "Popular" && "badge-secondary"}
                ${parBuyCard.tag === "New" && "badge-primary"}`}
              >
                {parBuyCard.tag}
              </div>
              <div
                onClick={() => handleRemove(parBuyCard)}
                className="flex gap-5 mt-5 mb-2"
              >
                <p>${parBuyCard.price}</p>
                <div className="divider divider-horizontal"></div>
                <p className="text-red-600 cursor-pointer">Remove</p>
              </div>
            </div>
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="divider divider-horizontal"></div>
          <div className="w-15">
            <img
              alt="Tailwind CSS Navbar component"
              src={parBuyCard.icon}
              className="rounded-full w-10"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
