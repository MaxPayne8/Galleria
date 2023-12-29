import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateCard } from "../utils/cardSlice";

const UpdateCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cards } = useSelector((store) => store.card);

  const cardSelected = cards.filter((card) => card.id == id);
  const { author, download_url, description } = cardSelected[0];

  const [error, setError] = useState(false);

  const [name, setName] = useState(author);
  const [image, setImage] = useState();
  const [desc, setDesc] = useState(description);
  const getIndex = useSelector((store) => store.card.index);

  const pic = useRef(download_url);
  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      dispatch(
        updateCard({
          index: getIndex,
          id: id,
          author: name,
          download_url: image ? URL.createObjectURL(image) : download_url,
          description: desc,
        })
      );
      navigate("/");
    } else {
      setError(true);
    }
  };

  return (
    <div className="flex justify-center items-center text-slate-200 font font-semibold  h-screen ">
      <form
        className="w-96 bg-violet-600 rounded-lg "
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex flex-col p-2 my-4">
          <label className="p-2 m-2">Enter your name*</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="text-slate-900 p-2 m-2 rounded-lg"
          />
          {error && (
            <label className="text-red-700 ml-4 font-semibold">
              Name is required!!
            </label>
          )}
        </div>
        <div className="flex flex-col p-2 my-4">
          <label className="p-2 m-2">Description</label>
          <input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            className="text-slate-900 p-2 m-2 rounded-lg"
          />
        </div>
        <div className="flex-felx-col p-2 my-4">
          <label className="p-2 m-2">Select an image</label>

          <input
            ref={pic}
            className="p-2 m-2 "
            type="file"
            onChange={(e) => handleImage(e)}
          />
        </div>

        <button className="p-2 flex mx-auto bg-slate-700 text-white rounded-lg mb-2">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateCard;
