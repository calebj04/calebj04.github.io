import type { ReactNode } from "react";
import Card from "../Card";

function Home() {
  const roles = [
    {
      image: "/images/home/web-programming.png",
      alt: "Web Programming Icon",
      title: "Full-Stack Developer",
    },
    {
      image: "/images/home/neural-net.png",
      alt: "Neural Network Icon",
      title: "Machine Learning Engineer",
    },
    {
      image: "/images/home/piano.png",
      alt: "Piano Icon",
      title: "Piano Composer",
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
