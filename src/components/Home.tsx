function Home() {
  const roles = [
    {
      image: "public/images/home/web-programming.png",
      alt: "Web Programming Icon",
      title: "Full-Stack Developer",
    },
    {
      image: "public/images/home/neural-net.png",
      alt: "Neural Network Icon",
      title: "Machine Learning Engineer",
    },
    {
      image: "public/images/home/piano.png",
      alt: "Piano Icon",
      title: "Piano Composer",
    },
  ];

  return (
    <div
      className="group relative flex flex-col w-full max-w-2xl rounded-[2.5rem] overflow-hidden p-8 
      bg-[#121521] text-white shadow-2xl ring-1 ring-white/10 transition-all duration-500"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#121521_0%,#38476b_40%,#b6192e_80%,#ffc1ac_100%)] opacity-90" />
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#38476b]/30 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        {/* Header Section - Added shrink-0 to prevent it from getting squished */}
        <div className="flex items-start justify-between gap-4 shrink-0">
          <div className="flex items-center gap-6">
            {/* Profile Pic with Glow */}
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl ring-4 ring-white/5">
                <img
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700 ease-out"
                  src="public/images/home/pfp.jpg"
                  alt="Caleb"
                />
              </div>
              <div className="absolute bottom-1 right-1 w-5 h-5 bg-[#ffc1ac] border-4 border-[#38476b] rounded-full"></div>
            </div>

            {/* Name and Title */}
            <div className="flex flex-col space-y-1">
              <h1 className="text-4xl font-light leading-none tracking-tighter drop-shadow-md">
                Caleb Jennings
              </h1>
              <p className="text-sm font-mono tracking-widest text-[#ffc1ac] uppercase opacity-90">
                Software Engineer
              </p>
            </div>
          </div>

          {/* Navigation Buttons - Adjusted grid and sizing to fit sm screen */}
          <div className="hidden sm:grid grid-cols-2 gap-2">
            {["Experience", "Projects", "Skills", "About"].map((text) => (
              <button
                key={text}
                className="bg-black/20 backdrop-blur-md text-white/90 border border-white/10 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide hover:bg-white hover:text-[#b6192e] hover:scale-105 transition-all duration-300 shadow-sm whitespace-nowrap"
              >
                {text}
              </button>
            ))}
          </div>
        </div>

        {/* Center Featured Box (Roles) */}
        {/* min-h-0 allows this flex child to shrink if needed so it doesn't push footer out */}
        {/* Changed my-6 to my-2 to save vertical space */}
        <div className="flex-1 min-h-0 flex items-center justify-center my-2">
          <div
            className="w-full bg-linear-to-b from-white/10 to-black/20 backdrop-blur-xl 
            border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-3xl p-1 overflow-hidden"
          >
            <div className="flex flex-col">
              {roles.map((role, index) => (
                <div
                  key={index}
                  // Reduced padding from p-4 to p-3 to save height
                  className={`group/item flex items-center gap-4 p-3 transition-all duration-300 hover:bg-white/5 cursor-default
                    ${
                      index !== roles.length - 1
                        ? "border-b border-white/5"
                        : ""
                    }
                  `}
                >
                  {/* Icon Container */}
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-linear-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center group-hover/item:scale-110 group-hover/item:border-[#ffc1ac]/50 transition-all duration-300">
                    <img
                      className="h-6 w-6 invert opacity-80 group-hover/item:opacity-100"
                      src={role.image}
                      alt={role.alt}
                    />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col min-w-0">
                    <p className="text-lg font-medium text-white/90 group-hover/item:text-white group-hover/item:translate-x-1 transition-all truncate">
                      {role.title}
                    </p>
                  </div>

                  {/* Arrow Indicator on Hover */}
                  <div className="ml-auto opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all duration-300 text-[#ffc1ac]">
                    →
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Socials - Added shrink-0 to force it to stay visible */}
        <div className="flex justify-between items-end pt-4 shrink-0">
          <span className="text-xs text-white/40 font-light">Atlanta, GA</span>

          <div className="flex gap-4">
            {["github", "linkedin", "email", "resume"].map((icon) => (
              <div key={icon} className="group/icon relative">
                <div className="absolute -inset-2 bg-white/20 blur-lg rounded-full opacity-0 group-hover/icon:opacity-100 transition-opacity" />
                <img
                  className="relative h-6 w-6 invert opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
                  src={`public/images/home/${icon}.png`}
                  alt={icon}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
