const CardTile = ({ author, image }) => {
  return (
    <div
      className={` m-2 p-2 mt-10 relative h-50  font-semibold group hover:bg-slate-200 rounded-lg `}
    >
      <img
        className="w-72 h-56 rounded-lg 0 tranform hover:scale-110 md:hover:scale-125 transition  "
        src={image}
        alt="pic"
      />
      <h1 className="  right-2 absolute z-10 bottom-2 group-hover:opacity-0   p-2 text-slate-200 bg-gradient-to-b from-black ">
        {author}
      </h1>
    </div>
  );
};

export default CardTile;
