import { useState, type ReactNode } from "react";
import Card from "../Card";
import experience from "../../assets/experience.json";

function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const title: ReactNode = (
    <>
      <div className="group flex flex-col">
        <h1 className="text-4xl font-light tracking-tighter text-white drop-shadow-lg">
          Experience
        </h1>
        <div className="h-1 w-12 bg-[#ffc1ac] mt-2 rounded-full opacity-80 group-hover:opacity-100 group-hover:w-37.5 transition-all duration-500" />
      </div>
    </>
  );

  const body: ReactNode = (
    <>
      <div className="flex flex-col h-full px-6 py-4 group">
        {/* Header + Year */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold tracking-tight text-white bg-clip-text drop-shadow-sm">
            {experience[currentIndex].org}
          </h2>
          <div className="max-[454px]:hidden group/tooltip px-3 py-1 bg-white/10 rounded-lg text-[10px] font-mono tracking-wider text-[#ffc1ac] border border-white/5 shadow-inner max-sm:hover:bg-white/20 max-sm:hovercursor-pointer select-none">
            <div className="max-sm:hidden">{experience[currentIndex].year}</div>
            <div className="relative sm:hidden">
              ...
              <div
                className="
  absolute bottom-full -left-2/1 z-50 mb-3 -translate-x-1/2 whitespace-nowrap
  rounded-lg bg-linear-to-b from-gray-900 to-gray-800 px-2 py-1 text-xs font-medium text-white 
  shadow-xl border border-white/10
  opacity-0 transition-all duration-200 pointer-events-none
  group-hover/tooltip:opacity-100 group-hover/tooltip:mb-2
  
"
              >
                Expand window to view year
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="overflow-scroll">
          <p className="text-sm md:text-[15px] font-light leading-relaxed text-white/90 border-l-2 border-[#ffc1ac]/50 pl-4">
            {experience[currentIndex].desc}
          </p>
        </div>
        {/* Navigation Arrows*/}
        <div className="flex absolute bottom-1 right-1 justify-end gap-3 items-center pb-1">
          <button
            onClick={
              () => {
                setCurrentIndex(
                  (prev) => (prev - 1 + experience.length) % experience.length
                );
              } // previous
            }
            className="text-white/50 hover:text-[#ffc1ac] hover:scale-105 transition-all duration-300 p-1 cursor-pointer"
            aria-label="Previous experience"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => {
              setCurrentIndex((prev) => (prev + 1) % experience.length); // next
            }}
            className="text-white/50 hover:text-[#ffc1ac] hover:scale-105 transition-all duration-300 p-1 cursor-pointer"
            aria-label="Next experience"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );

  const footer: ReactNode = (
    <>
      <div className="w-full flex justify-between items-end">
        {/* Link */}
        <div className="flex gap-1.5">
          <a
            href={experience[currentIndex].url}
            target="_blank"
            className="flex items-center gap-1 text-sm font-mono tracking-wide text-white opacity-70 hover:opacity-100 transition-opacity"
          >
            {experience[currentIndex].title}
            <img className="h-3 w-3 invert" src="/images/redirect.png" />
          </a>
        </div>

        {/* Role Information */}
        <div className="max-[454px]:hidden text-right opacity-70 hover:opacity-100 transition-opacity">
          <p className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#ffc1ac] mb-0.5">
            {experience[currentIndex].stat}
          </p>
          <p className="text-sm font-medium tracking-wide text-white drop-shadow-md">
            {experience[currentIndex].pos}
          </p>
        </div>
      </div>
    </>
  );

  return <Card title={title} body={body} footer={footer} />;
}

export default Experience;
