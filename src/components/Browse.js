import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCards, addIndex, deleteCard } from "../utils/cardSlice";
import CardTile from "./CardTile";
import { Link } from "react-router-dom";

const Browse = () => {
  const dispatch = useDispatch();

  const getCards = async () => {
    const data = await fetch("https://picsum.photos/v2/list?page=1&limit=6");
    const json = await data.json();

    dispatch(addCards(json));
  };

  const { apiCards } = useSelector((store) => store.card);
  const { cards } = useSelector((store) => store.card);

  const handleDelete = (id) => {
    dispatch(deleteCard(id));
    setSure(false);
  };

  const [sure, setSure] = useState(false);
  const { myCards, sampleCards } = useSelector((store) => store.card);
  useEffect(() => {
    getCards();
  }, []);

  return (
    <div className="w-full flex bg-slate-100">
      <nav className="w-56   bg-slate-300">
        <Link to="/addcard">
          <div className=" tranform hover:scale-110 transition mt-20 py-10">
            <h1 className="text-center font-semibold p-2 ">
              Create a new Card
            </h1>
            <img
              className="w-[60%] mx-auto rounded-lg"
              src="https://www.shutterstock.com/image-vector/add-new-card-icon-260nw-1335378674.jpg"
              alt="add-card"
            />
          </div>
        </Link>
      </nav>

      <div className="flex justify-around flex-wrap">
        {myCards &&
          cards.map((card, index) => (
            <div className="group relative">
              <Link to={"/cardpreview/" + card.id}>
                <CardTile
                  author={card.author}
                  image={card.download_url}
                  id={card.id}
                  key={card.id}
                />
              </Link>

              {!sure && (
                <div>
                  <Link to={"/edit/" + card.id}>
                    <button
                      className="bg-gray-700 absolute rounded-lg text-white p-2 top-12 left-4  group-hover:opacity-70 opacity-0  hover:!bg-blue-700 hover:!opacity-90 "
                      onClick={() => {
                        dispatch(addIndex(index));
                      }}
                    >
                      Edit
                    </button>
                  </Link>

                  <button
                    className="bg-gray-700 rounded-lg z-20  text-white p-2 top-12 right-4   opacity-0 group-hover:opacity-70 absolute  hover:!bg-red-700 hover:!opacity-90 "
                    onClick={() => setSure(true)}
                  >
                    Delete
                  </button>
                </div>
              )}

              {sure && (
                <div>
                  <label className=" text-white bg-gradient-to-b from-black top-14 left-[110px] opacity-0 group-hover:opacity-70 absolute font-semibold">
                    Are you sure?
                  </label>
                  <button
                    className="bg-gray-700 rounded-lg z-20  text-white p-2 top-24 left-20   opacity-0 group-hover:opacity-80 absolute  hover:!bg-blue-700 hover:!opacity-90 "
                    onClick={() => setSure(false)}
                  >
                    ❌
                  </button>
                  <button
                    className="bg-gray-700 rounded-lg z-20  text-white p-2 top-24 right-20  opacity-0 group-hover:opacity-80 absolute  hover:!bg-red-700 hover:!opacity-90 "
                    onClick={() => handleDelete(card.id)}
                  >
                    ✅
                  </button>
                </div>
              )}
            </div>
          ))}

        {sampleCards &&
          apiCards.map((card) => (
            <Link to={"/cardpreview/" + card.id}>
              <CardTile
                author={card.author}
                image={card.download_url}
                id={card.id}
                key={card.id}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Browse;
