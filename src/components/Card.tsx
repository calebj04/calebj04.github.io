function Card() {
  return (
    <div
      className="flex w-1/2 aspect-[1.618] rounded-xl
      bg-[linear-gradient(45deg,#121521,#38476b,#b6192e,#ffc1ac)]"
    >
      <div className="grid grid-cols-[0.75fr_1fr_2fr] p-2">
        <div>
          <img className="rounded-full" src="public/images/pfp.jpg"></img>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-white font-light text-2xl">Caleb Jennings</p>
          <p className="text-gray-300 font-extralight text-lg">
            Software Engineer
          </p>
        </div>
        <div className="justify-self-end h-1/5 grid grid-cols-2 grid-rows-2 gap-2">
          <button className="flex items-center justify-center bg-white opacity-80 text-black text-lg font-light p-2 rounded-xl">
            Experience
          </button>
          <button className="flex items-center justify-center bg-white opacity-80 text-black text-lg font-light p-2 rounded-xl">
            Projects
          </button>
          <button className="flex items-center justify-center bg-white opacity-80 text-black text-lg font-light p-2 rounded-xl">
            Skills
          </button>
          <button className="flex items-center justify-center bg-white opacity-80 text-black text-lg font-light p-2 rounded-xl">
            About
          </button>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Card;
