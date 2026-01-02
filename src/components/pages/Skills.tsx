import type { ReactNode } from "react";
import Card from "../Card";

function Skills() {
  const title: ReactNode = (
    <div className="group flex flex-col">
      <h1 className="text-4xl font-light tracking-tighter text-white drop-shadow-lg">
        Skills
      </h1>
      <div className="h-1 w-12 bg-[#ffc1ac] mt-2 rounded-full opacity-80 group-hover:opacity-100 group-hover:w-16.5 transition-all duration-500" />
    </div>
  );

  const body: ReactNode = <></>;

  const footer: ReactNode = <></>;

  return <Card title={title} body={body} footer={footer} />;
}

export default Skills;
