import { useState, type ReactNode } from "react";
import Card from "../Card";
import experience from "../../assets/experience.json";

function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const title: ReactNode = (
    <div className="group flex flex-col">
      <h1 className="text-4xl font-light tracking-tighter text-white drop-shadow-lg">
        Experience
      </h1>
      <div className="h-1 w-12 bg-[#ffc1ac] mt-2 rounded-full opacity-80 group-hover:opacity-100 group-hover:w-37.5 transition-all duration-500" />
    </div>
  );

  const body: ReactNode = (
    <div className="flex flex-col h-full justify-center px-6 py-4 group">
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#ffc1ac]/10 blur-[50px] rounded-full pointer-events-none" />

      {/* Header + Year */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold tracking-tight text-white bg-clip-text drop-shadow-sm">
          {experience[currentIndex].org}
        </h2>
        <span className="px-3 py-1 bg-white/10 rounded-lg text-[10px] font-mono tracking-wider text-[#ffc1ac] border border-white/5 shadow-inner">
          {experience[currentIndex].year}
        </span>
      </div>

      {/* Description */}
      <div>
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
          className="text-white/50 hover:text-[#ffc1ac] transition-colors p-1"
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
          className="text-white/50 hover:text-[#ffc1ac] transition-colors p-1"
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
  );

  const footer: ReactNode = (
    <div className="w-full flex justify-between items-end">
      {/* Link */}
      <div className="flex gap-1.5 pb-1">
        <a
          href={experience[currentIndex].url}
          target="_blank"
          className="flex items-center gap-1 text-sm font-mono tracking-wide text-white opacity-70 hover:opacity-100 transition-opacity"
        >
          {experience[currentIndex].title}
          <img className="h-3 w-3 invert" src="public/images/redirect.png" />
        </a>
      </div>

      {/* Role Information */}
      <div className="text-right opacity-70 hover:opacity-100 transition-opacity">
        <p className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#ffc1ac] mb-0.5">
          {experience[currentIndex].stat}
        </p>
        <p className="text-sm font-medium tracking-wide text-white drop-shadow-md">
          {experience[currentIndex].pos}
        </p>
      </div>
    </div>
  );

  return <Card title={title} body={body} footer={footer} />;
}

export default Experience;
