import type { ReactNode } from "react";
import Card from "../Card";

function Experience() {
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

      {/* Organization + Year */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold tracking-tight text-white bg-clip-text drop-shadow-sm">
          Hack4Impact
        </h2>
        <span className="px-3 py-1 bg-white/10 rounded-lg text-[10px] font-mono tracking-wider text-[#ffc1ac] border border-white/5 shadow-inner">
          2025
        </span>
      </div>

      {/* Description */}
      <div>
        <p className="text-sm md:text-[15px] font-light leading-relaxed text-white/90 border-l-2 border-[#ffc1ac]/50 pl-4">
          Developed full-stack features for Odyssey Family Counseling Center’s
          internal HR employee management platform.
          <span className="block mt-2 opacity-80 text-xs md:text-sm leading-relaxed">
            Collaborated with an 8-person engineering team on system design and
            user-driven iteration across 12 sprints to implement complex
            dashboard requirements for this mission-driven nonprofit.
          </span>
        </p>
      </div>
    </div>
  );

  const footer: ReactNode = (
    <div className="w-full flex justify-between items-end">
      <div className="flex gap-1.5 pb-1">
        <a
          href="https://github.com/Emory-Hack4Impact/Odyssey"
          target="_blank"
          className="flex items-center gap-1 text-sm font-mono tracking-wide text-white opacity-70 hover:opacity-100 transition-opacity"
        >
          Odyssey
          <img
            className="h-3 w-3 invert"
            src="public/images/redirect.png"
          />
        </a>
      </div>

      {/* Role Metadata */}
      <div className="text-right opacity-70 hover:opacity-100 transition-opacity">
        <p className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#ffc1ac] mb-0.5">
          Current Role
        </p>
        <p className="text-sm font-medium tracking-wide text-white drop-shadow-md">
          Project Engineer
        </p>
      </div>
    </div>
  );

  return <Card title={title} body={body} footer={footer} />;
}

export default Experience;
