function Card() {
  return (
    <div
      className="flex flex-col w-1/2 min-w-100 aspect-[1.618] rounded-xl
      bg-[linear-gradient(45deg,#121521,#38476b,#b6192e,#ffc1ac_85%)]"
    >
      <div className="grid grid-cols-[0.75fr_1fr_2fr] p-1 -mb-4 z-10">
        <div>
          <img className="rounded-full" src="public/images/home/pfp.jpg"></img>
        </div>
        <div className="flex flex-col items-center whitespace-nowrap">
          <p className="text-white font-extralight text-[clamp(1rem,2cqw,1.5rem)] leading-none">
            Caleb Jennings
          </p>
          <p className="text-gray-300 font-extralight text-[clamp(0.75rem,1.5cqw,1.125rem)] leading-tight">
            Software Engineer
          </p>
        </div>
        <div className="justify-self-end h-1/2 grid grid-cols-2 grid-rows-2 gap-1">
          <button className="flex items-center justify-center bg-white opacity-90 text-black text-lg font-extralight p-2 rounded-xl">
            <span className="hidden lg:inline">Experience</span>
            <span className="inline lg:hidden">Exp</span>
          </button>
          <button className="flex items-center justify-center bg-white opacity-90 text-black text-lg font-extralight p-2 rounded-xl">
            <span className="hidden lg:inline">Projects</span>
            <span className="inline lg:hidden">Prj</span>
          </button>
          <button className="flex items-center justify-center bg-white opacity-90 text-black text-lg font-extralight p-2 rounded-xl">
            <span className="hidden lg:inline">Skills</span>
            <span className="inline lg:hidden">Skl</span>
          </button>
          <button className="flex items-center justify-center bg-white opacity-90 text-black text-lg font-extralight p-2 rounded-xl">
            <span className="hidden lg:inline">About</span>
            <span className="inline lg:hidden">Abt</span>
          </button>
        </div>
      </div>
      <div className="flex justify-center h-3/5 -mb-2">
        <div
          className="w-7/8 bg-[radial-gradient(circle_at_0%_0%,#121521,#38476b,#b6192e,#ffc1ac)]
 shadow-[0_0_0_6px_rgba(0,0,0,0.25)] rounded-xl"
        >
          <div className="flex flex-col justify-between h-full p-6 text-[clamp(0.75rem,1.5cqw,1.125rem)]">
            <div className="flex items-center h-1/4 gap-4">
              <img
                className="h-full invert"
                src="public/images/home/web-programming.png"
              ></img>
              <p>Full-Stack Developer</p>
            </div>
            <div className="flex items-center h-1/4 gap-4">
              <img
                className="h-full invert"
                src="public/images/home/neural-net.png"
              ></img>
              <p>Machine Learning Engineer</p>
            </div>
            <div className="flex items-center h-1/4 gap-4">
              <img
                className="h-full invert"
                src="public/images/home/piano.png"
              ></img>
              <p>Piano Composer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-2 p-1 h-1/8">
        <img
          className="h-full invert"
          src="public/images/home/github.png"
        ></img>
        <img
          className="h-full invert"
          src="public/images/home/linkedin.png"
        ></img>
        <img className="h-full invert" src="public/images/home/email.png"></img>
        <img
          className="h-full invert"
          src="public/images/home/resume.png"
        ></img>
      </div>
    </div>
  );
}

export default Card;
