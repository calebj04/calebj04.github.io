import type { ReactNode } from "react";
import NavigationButtons from "./NavigationButtons";

type CardProps = {
  title?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
  extension?: ReactNode;
};

function Card({ title, body, footer, extension }: CardProps) {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="relative w-full max-w-2xl rounded-[2.5rem] p-8">
        {extension}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#121521_0%,#38476b_40%,#b6192e_80%,#ffc1ac_100%)] rounded-[2.5rem]" />

        {/* Content Wrapper */}
        <div className="relative">
          {/* Header */}
          <div className="h-43 sm:h-24 sm:flex items-start justify-between gap-4">
            {/* Title */}
            {title}
            {/* Navigation Buttons */}
            {NavigationButtons()}
          </div>

          {/* Body */}
          <div className="my-2">
            <div
              className="h-55 bg-linear-to-b from-white/10 to-black/20 backdrop-blur-xl 
            border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-3xl overflow-hidden"
            >
              {body}
            </div>
          </div>

          {/* Footer */}
          <div className="h-10 flex justify-between items-end pt-2">
            {footer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
