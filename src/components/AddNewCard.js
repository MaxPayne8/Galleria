import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../utils/cardSlice";
import { useNavigate } from "react-router-dom";

const AddNewCard = () => {
  const name = useRef(null);

  const dispatch = useDispatch();
  const { cards } = useSelector((store) => store.card);
  const dummyImg = useRef(null);
  const [image, setImage] = useState();
  const navigate = useNavigate();

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };
  const [error, showError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.current.value) {
      dispatch(
        addCard({
          author: name.current.value,
          download_url: image
            ? URL.createObjectURL(image)
            : "https://wingandaprayerdotlive.files.wordpress.com/2018/07/no-image-available.jpg",
          id: cards.length,
        })
      );
      navigate("/");
      
    } else showError(true);
  };

  return (
    <div className="flex justify-center items-center  text-slate-200 font font-semibold mt-36 ">
      <form
        className="w-96 bg-blue-500 rounded-lg "
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex flex-col p-2 my-4">
          <label className="p-2 m-2">Enter your name*</label>
          <input ref={name} type="text" className="text-slate-900 p-2 m-2" />
          {error && (
            <label className="text-red-700 ml-4 font-semibold">
              Name is required!!
            </label>
          )}
        </div>
        <div className="flex-felx-col p-2 my-4">
          <label className="p-2 m-2">Select an image</label>
          <input
            ref={dummyImg}
            className="p-2 m-2"
            type="file"
            onChange={(e) => handleImage(e)}
          />
        </div>
        <button className="p-2 flex mx-auto bg-slate-700 text-white rounded-lg mb-2">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddNewCard;
