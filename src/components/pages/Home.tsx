import { useState, type ReactNode } from "react";
import Card from "../Card";

function Home() {
  const [activeRole, setActiveRole] = useState<number | null>(null);

  const handleRoleClick = (index: number) => {
    setActiveRole(activeRole === index ? null : index);
  };

  const roles = [
    {
      image: "/images/home/web-programming.png",
      alt: "Web Programming Icon",
      title: "Full-Stack Developer",
      text: "Worked for Project Emory",
    },
    {
      image: "/images/home/neural-net.png",
      alt: "Neural Network Icon",
      title: "Machine Learning Engineer",
      text: "Completed Machine Learning, Deep Learning, & Data Mining",
    },
    {
      image: "/images/home/piano.png",
      alt: "Piano Icon",
      title: "Piano Composer",
      text: "Listen to me on Spotify",
    },
  ];

  const title: ReactNode = (
    <>
      <div className="h-26 flex items-center gap-6">
        <div className="max-sm:mb-2 w-24 h-24 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl">
          <img
            className="h-full w-full object-cover transform hover:scale-110 transition-transform duration-700 ease-out"
            src="/images/home/pfp.jpg"
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
    </>
  );

  const body: ReactNode = (
    <>
      <div className="flex flex-col rounded-3xl overflow-hidden">
        {roles.map((role, index) => (
          <div
            key={index}
            onClick={() => handleRoleClick(index)}
            className={`group/item relative flex items-center gap-4 p-3 transition-all duration-300 hover:bg-white/5 cursor-pointer
                    ${
                      index !== roles.length - 1
                        ? "border-b border-white/5"
                        : ""
                    }
                  `}
          >
            {/*Swipe Left For More Info*/}
            <div
              className={`absolute w-0 rounded-2xl -right-18 top-0 bottom-0 bg-[linear-gradient(45deg,#121521_0%,#38476b_40%,#b6192e_80%,#ffc1ac_100%)] z-20 transition-all duration-500 ${
                activeRole === index ? "w-full" : ""
              }`}
            >
              <div className="h-full flex items-center p-1 text-lg font-medium whitespace-nowrap">
                {role.text}
              </div>
            </div>
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
            <div
              className={`
    ml-auto transition-all duration-500 
    ${
      activeRole === index
        ? "opacity-0 -translate-x-130 text-[#ffc1ac]"
        : "opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:text-[#ffc1ac]"
    }
  `}
            >
              →
            </div>
          </div>
        ))}
      </div>
    </>
  );

  const footer: ReactNode = (
    <>
      <span className="text-xs text-white/40 font-light">Atlanta, GA</span>

      <div className="flex gap-4">
        {["github", "linkedin", "email", "resume"].map((icon) => (
          <div key={icon} className="group/icon">
            <img
              className="h-8 w-8 invert opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
              src={`/images/home/${icon}.png`}
              alt={icon}
            />
          </div>
        ))}
      </div>
    </>
  );

  return <Card title={title} body={body} footer={footer} />;
}

export default Home;
