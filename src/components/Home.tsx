import { Link } from "react-router-dom";

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
    <div className="relative w-full max-w-2xl rounded-[2.5rem] overflow-hidden p-8">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#121521_0%,#38476b_40%,#b6192e_80%,#ffc1ac_100%)]" />

      {/* Content Wrapper */}
      <div className="relative">
        {/* Header */}
        <div className="h-43 sm:h-24 sm:flex items-start justify-between gap-4">
          {/* Title */}
          <div className="h-26 flex items-center gap-6">
            <div className="max-sm:mb-2 w-24 h-24 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl">
              <img
                className="h-full w-full object-cover transform hover:scale-110 transition-transform duration-700 ease-out"
                src="public/images/home/pfp.jpg"
                alt="Caleb"
              />
            </div>

            <div className="space-y-1">
              <h1 className="text-4xl font-light leading-none tracking-tighter drop-shadow-md whitespace-nowrap">
                Caleb Jennings
              </h1>
              <p className="text-sm font-mono tracking-widest text-[#ffc1ac] uppercase opacity-90">
                Software Engineer
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="grid grid-cols-2 gap-2">
            {["Experience", "Projects", "Skills", "About"].map((text) => (
              <Link
                key={text}
                to={`/${text.toLowerCase()}`}
                className="bg-black/20 text-white/90 border border-white/10 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide hover:bg-white hover:text-[#b6192e] hover:scale-105 transition-all duration-300 shadow-sm flex items-center justify-center"
              >
                {text}
              </Link>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="my-2">
          <div
            className="h-55 bg-linear-to-b from-white/10 to-black/20 backdrop-blur-xl 
            border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-3xl overflow-hidden"
          >
            <div className="flex flex-col">
              {roles.map((role, index) => (
                <div
                  key={index}
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

        {/* Footer */}
        <div className="h-10 flex justify-between items-end pt-2 shrink-0">
          <span className="text-xs text-white/40 font-light">Atlanta, GA</span>

          <div className="flex gap-4">
            {["github", "linkedin", "email", "resume"].map((icon) => (
              <div key={icon} className="group/icon">
                <img
                  className="h-8 w-8 invert opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
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
