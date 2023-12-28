import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full bg-slate-200 text-center">
      <Link to="/">
        <img
          className="rounded-lg  w-14"
          src="https://png.pngtree.com/png-vector/20190521/ourlarge/pngtree-gallery-logo-icon-design-template-vector-png-image_1048779.jpg"
          alt="img"
        />
      </Link>
    </div>
  );
};

export default Header;
