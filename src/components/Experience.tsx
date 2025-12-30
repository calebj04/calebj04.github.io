function Experience() {
  return (
    <div className="group relative flex flex-col w-full max-w-2xl sm:aspect-[1.618] rounded-[2.5rem] overflow-hidden p-8 
      bg-[#121521] transition-all duration-500 shadow-2xl ring-1 ring-white/10">
      
      {/* Background Gradient & Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#121521_0%,#38476b_40%,#b6192e_80%,#ffc1ac_100%)] opacity-90 transition-opacity" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full pointer-events-none mix-blend-overlay" />

      {/* Content Container (z-index to sit above background) */}
      <div className="relative z-10 flex flex-col h-full">
        
        {/* Header Section */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-4xl font-light tracking-tighter text-white drop-shadow-lg">
              Experience
            </h1>
            <div className="h-1 w-12 bg-[#ffc1ac] mt-2 rounded-full opacity-80" />
          </div>

          {/* Navigation Buttons (Glass Pill Style) */}
          <div className="grid grid-cols-2 gap-2">
            {["Experience", "Projects", "Skills", "About"].map((text, idx) => (
              <button
                key={text}
                className={`
                  px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-300
                  border border-white/10 backdrop-blur-md shadow-lg
                  ${idx === 0 
                    ? "bg-white text-[#b6192e] shadow-white/10 scale-105" 
                    : "bg-black/20 text-white/80 hover:bg-white/20 hover:text-white hover:scale-105"}
                `}
              >
                {text}
              </button>
            ))}
          </div>
        </div>

        {/* Center Featured Box */}
        <div className="flex-1 flex items-center justify-center my-2">
          <div className="
            relative w-full bg-gradient-to-br from-white/10 to-black/30 
            backdrop-blur-xl border border-white/20 rounded-3xl p-8 
            shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] 
            transition-all duration-500 hover:border-white/40 group-hover:shadow-[0_8px_40px_0_rgba(0,0,0,0.45)]
          ">
            {/* Inner Glow Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

            <div className="relative">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
                  Hack4Impact
                </h2>
                {/* Year or Status Badge */}
                <span className="px-3 py-1 bg-white/10 rounded-lg text-[10px] font-mono tracking-wider text-[#ffc1ac] border border-white/5">
                  2024
                </span>
              </div>
              
              <p className="text-sm md:text-[15px] font-light leading-relaxed text-white/90 border-l-2 border-[#ffc1ac]/50 pl-4">
                Developed full-stack features for <span className="font-medium text-white">Odyssey Family Counseling Center’s</span> internal HR employee management platform. 
                <span className="block mt-2 opacity-80 text-xs md:text-sm">
                  Collaborated with an 8-person engineering team on system design and user-driven iteration across 12 sprints to implement complex dashboard requirements for this mission-driven nonprofit.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Socials / Role */}
        <div className="flex justify-between items-end mt-2 opacity-60 group-hover:opacity-100 transition-opacity">
           {/* Decorative dots */}
           <div className="flex gap-1">
             <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
           </div>
           
           <div className="text-right">
              <p className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#ffc1ac]">Current Role</p>
              <p className="text-sm font-medium tracking-wide text-white">Project Engineer</p>
           </div>
        </div>

      </div>
    </div>
  );
}

export default Experience;