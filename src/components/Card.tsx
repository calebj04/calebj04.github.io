function Card() {
  return (
    <div className="relative w-full max-w-2xl rounded-[2.5rem] overflow-hidden p-8">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#121521_0%,#38476b_40%,#b6192e_80%,#ffc1ac_100%)]" />

      {/* Content Wrapper */}
      <div className="relative">
        {/* Header */}
        <div className="h-43 sm:h-24 sm:flex items-start justify-between gap-4">
          {/* Title */}
          <div className="h-26 flex items-center gap-6"></div>

          {/* Navigation Buttons */}
          <div className="grid grid-cols-2 gap-2">
            {["Experience", "Projects", "Skills", "About"].map((text) => (
              <button
                key={text}
                className="bg-black/20 text-white/90 border border-white/10 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide hover:bg-white hover:text-[#b6192e] hover:scale-105 transition-all duration-300 shadow-sm"
              >
                {text}
              </button>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="my-2">
          <div
            className="h-55 bg-linear-to-b from-white/10 to-black/20 backdrop-blur-xl 
            border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-3xl overflow-hidden"
          ></div>
        </div>

        {/* Footer */}
        <div className="h-10 flex justify-between items-end pt-2 shrink-0"></div>
      </div>
    </div>
  );
}

export default Card;
