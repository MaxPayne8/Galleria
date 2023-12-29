import React, { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CardPrev = () => {
  const { id } = useParams();
  console.log(id);
  const { apiCards, cards } = useSelector((store) => store.card);
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
      {selectedCard[0]?.description && (
        <h1 className="text-center font-semibold text-slate-700  mt-2">
          Description : {selectedCard[0]?.description}
        </h1>
      )}
      <div className="flex justify-center ">
        <img src={selectedCard[0]?.download_url} className="mt-16" alt="haha" />
      </div>
    </div>
  );
};

export default CardPrev;
