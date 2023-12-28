import React, { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CardTile from "./CardTile";

const CardPrev = () => {
  const { id } = useParams();
  console.log(id);
  const { apiCards, cards } = useSelector((store) => store.card);
  console.log(apiCards);
  console.log(cards);
  const selectedCard = apiCards.filter((card) => card.id == id).length
    ? apiCards.filter((card) => card.id == id)
    : cards.filter((card) => card.id == id);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <h1 className="text-center text-2xl font-semibold mt-10">
        Uploaded by -{" "}
        <span className="text-blue-600">{selectedCard[0].author}</span>
      </h1>
      <div className="flex justify-center ">
        <img src={selectedCard[0]?.download_url} className="mt-16" alt="haha" />
      </div>
    </div>
  );
};

export default CardPrev;
