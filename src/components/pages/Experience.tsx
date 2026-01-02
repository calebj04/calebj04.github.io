import type { ReactNode } from "react";
import Card from "../Card";

function Experience() {
  // Matches the "Experience" header in the top left
  const title: ReactNode = (
    <h1 className="text-4xl sm:text-5xl font-light text-white tracking-wide">
      Experience
    </h1>
  );

  // Matches the internal content of the glassmorphic card
  const body: ReactNode = (
    <div className="flex flex-col h-full p-6 text-white">
      {/* Role/Company Title */}
      <h2 className="text-2xl font-normal tracking-wide mb-2">
        Hack4Impact
      </h2>

      {/* The white divider line */}
      <div className="w-full border-t border-white/80 mb-4" />

      {/* Description Text */}
      <p className="text-sm sm:text-base font-light leading-relaxed text-white/90">
        Developed full-stack features for Odyssey Family Counseling Center’s
        internal HR employee management platform. Developed software for
        mission-driven nonprofit, working with Odyssey to implement dashboard
        requirements. Worked with an 8-person engineering team on system design
        and user-driven iteration across 12 sprints
      </p>
    </div>
  );

  // Matches the "Project Engineer" text at the bottom
  const footer: ReactNode = (
    <div className="w-full text-center text-white/80 text-lg font-light tracking-wide">
      Project Engineer
    </div>
  );

  return <Card title={title} body={body} footer={footer} />;
}

export default Experience;
