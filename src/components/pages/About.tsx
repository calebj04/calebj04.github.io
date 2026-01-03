import { useState, type ReactNode } from "react";
import Card from "../Card";
import about from "../../assets/about.json";

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const title: ReactNode = (
    <>
      <div className="group flex flex-col">
        <h1 className="text-4xl font-light tracking-tighter text-white drop-shadow-lg">
          About
        </h1>
        <div className="h-1 w-12 bg-[#ffc1ac] mt-2 rounded-full opacity-80 group-hover:opacity-100 group-hover:w-21 transition-all duration-500" />
      </div>
    </>
  );

  const body: ReactNode = (
    <>
      <div className="flex flex-col h-full px-6 py-4 group">
        <div className="flex justify-center items-center mb-4">
          <img
            src={about[currentIndex].src}
            alt={about[currentIndex].desc}
            className="rounded-lg shadow-lg w-48 h-48 object-cover"
          />
        </div>
        {/* Navigation Arrows*/}
        <div className="flex absolute bottom-1 right-1 justify-end gap-3 items-center pb-1">
          <button
            onClick={
              () => {
                setCurrentIndex(
                  (prev) => (prev - 1 + about.length) % about.length
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
              setCurrentIndex((prev) => (prev + 1) % about.length); // next
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
        <div className="flex gap-1.5 pb-1">
          <p className="flex items-center gap-1 text-sm font-mono tracking-wide text-white opacity-70 hover:opacity-100 transition-opacity">
            {about[currentIndex].date}
          </p>
        </div>

        {/* Role Information */}
        <div className="text-right opacity-70 hover:opacity-100 transition-opacity">
          <p className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#ffc1ac] mb-0.5">
            Description
          </p>
          <p className="text-sm font-medium tracking-wide text-white drop-shadow-md">
            {about[currentIndex].desc}
          </p>
        </div>
      </div>
    </>
  );

  return <Card title={title} body={body} footer={footer} />;
}

export default About;
