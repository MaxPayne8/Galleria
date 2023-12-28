import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { showMyCards, showSampleCard } from "../utils/cardSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-full bg-slate-200 text-center flex">
      <Link to="/">
        <img
          className="rounded-lg  w-14"
          src="https://png.pngtree.com/png-vector/20190521/ourlarge/pngtree-gallery-logo-icon-design-template-vector-png-image_1048779.jpg"
          alt="img"
          onClick={() => {
            dispatch(showMyCards(true));
            dispatch(showSampleCard(true));
          }}
        />
      </Link>
      <div className="flex justify-evenly w-full items-center text-sm  md:text-base font-semibold">
        <Link to="/">
          <button
            onClick={() => {
              dispatch(showMyCards(false));
              dispatch(showSampleCard(true));
            }}
            className="hover:text-blue-700"
          >
            My Cards
          </button>
        </Link>
        <Link to="/">
          <button
            onClick={() => {
              dispatch(showMyCards(true));
              dispatch(showSampleCard(true));
            }}
            className="hover:text-blue-700"
          >
            All Cards
          </button>
        </Link>
        <Link to="/">
          <button
            onClick={() => {
              dispatch(showSampleCard(false));
              dispatch(showMyCards(true));
            }}
            className="hover:text-blue-700"
          >
            Sample Cards{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
