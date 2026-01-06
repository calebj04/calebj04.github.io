import { useEffect, useState, type ReactNode } from "react";
import Card from "../Card";
import projects from "../../assets/projects.json";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showImage, setShowImage] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClose = () => setIsClosed(true);

  const handleMinimize = () => {
    if (isExpanded) {
      setIsExpanded(!isExpanded);
    } else {
      setIsMinimized(!isMinimized);
    }
  };

  const handleExpand = () => {
    if (isMinimized) {
      setIsMinimized(!isMinimized);
    } else {
      setIsExpanded(!isExpanded);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const title: ReactNode = (
    <>
      <div className="group flex flex-col">
        <h1 className="text-4xl font-light tracking-tighter text-white drop-shadow-lg">
          Projects
        </h1>
        <div className="h-1 w-12 bg-[#ffc1ac] mt-2 rounded-full opacity-80 group-hover:opacity-100 group-hover:w-27 transition-all duration-500" />
      </div>
    </>
  );

  const body: ReactNode = (
    <>
      <div className="flex flex-col h-full px-6 py-4 group">
        {/* Header + Year */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold tracking-tight text-white bg-clip-text drop-shadow-sm">
            {projects[currentIndex].org}
          </h2>
          <span className="px-3 py-1 bg-white/10 rounded-lg text-[10px] font-mono tracking-wider text-[#ffc1ac] border border-white/5 shadow-inner">
            {projects[currentIndex].year}
          </span>
        </div>

        {/* Description */}
        <div>
          <p className="text-sm md:text-[15px] font-light leading-relaxed text-white/90 border-l-2 border-[#ffc1ac]/50 pl-4">
            {projects[currentIndex].desc}
          </p>
        </div>
        {/* Navigation Arrows*/}
        <div className="flex absolute bottom-1 right-1 justify-end gap-3 items-center pb-1">
          <button
            onClick={
              () => {
                setCurrentIndex(
                  (prev) => (prev - 1 + projects.length) % projects.length
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
              setCurrentIndex((prev) => (prev + 1) % projects.length); // next
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
          <a
            href={projects[currentIndex].url}
            target="_blank"
            className="flex items-center gap-1 text-sm font-mono tracking-wide text-white opacity-70 hover:opacity-100 transition-opacity"
          >
            {projects[currentIndex].title}
            <img className="h-3 w-3 invert" src="/images/redirect.png" />
          </a>
        </div>

        {/* Role Information */}
        <div className="text-right opacity-70 hover:opacity-100 transition-opacity">
          <p className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#ffc1ac] mb-0.5">
            {projects[currentIndex].stat}
          </p>
          <p className="text-sm font-medium tracking-wide text-white drop-shadow-md">
            {projects[currentIndex].pos}
          </p>
        </div>
      </div>
    </>
  );

  const extension: ReactNode = (
    <>
      <style>
        {`
    @keyframes drawAndErase {
      0% { 
        stroke-dashoffset: 400; 
      }
      100% { 
        stroke-dashoffset: -400; 
      }
    }
    .animate-path {
      stroke-dasharray: 400;
      animation: drawAndErase 3s ease-in-out forwards; 
    }
  `}
      </style>
      {/* Project Preview */}
      <div
        className={`block absolute w-55 -left-64 -top-12 transition-all duration-500 ease-in-out ${
          isClosed ? "hidden" : ""
        }
          ${isExpanded ? "w-110 -left-96 z-10" : "w-55 -left-64 z-0"}`}
      >
        {/* Image Window */}
        <div
          className={`relative bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transform transition-all duration-700 hover:scale-[1.02] hover:-rotate-1 ${
            showImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="group h-6 bg-gray-100 border-b flex items-center px-3 gap-1.5">
            <div
              className="w-2.5 h-2.5 rounded-full bg-red-400/80 group-hover:bg-red-500"
              onClick={handleClose}
            ></div>
            <div
              className="w-2.5 h-2.5 rounded-full bg-yellow-400/80 group-hover:bg-yellow-500"
              onClick={handleMinimize}
            ></div>
            <div
              className="w-2.5 h-2.5 rounded-full bg-green-400/80 group-hover:bg-green-500"
              onClick={handleExpand}
            ></div>
          </div>
          <div
            className={`w-full bg-gray-50 relative group transition-all duration-500 ease-in-out
              ${
                isMinimized
                  ? "h-0 opacity-0"
                  : isExpanded
                  ? "h-full opacity-100"
                  : "h-[137.5px] opacity-100" //weird pixel value because h-full doesn't allow for smooth transitions
              }
            `}
          >
            <img
              src={projects[currentIndex].img}
              alt="Project Preview"
              className="w-full h-full object-cover group-hover:opacity-100 transition-opacity"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent pointer-events-none" />
          </div>
        </div>
        {/* Animated Line */}
        <div className="absolute -bottom-25 -right-13 w-35 h-40 pointer-events-none -z-10">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 140 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 130 140 C 120 80, 30 100, 30 10"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              className="drop-shadow-[0_0_3px_rgba(255,255,255,0.5)] animate-path"
            />
          </svg>
        </div>
      </div>
    </>
  );

  return (
    <Card title={title} body={body} footer={footer} extension={extension} />
  );
}

export default Projects;
