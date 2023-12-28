import React from "react";
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
  console.log(selectedCard);
  return (
    <div>
      <img src={selectedCard[0]?.download_url} alt="haha" />
    </div>
  );
};

export default CardPrev;
