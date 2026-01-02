function Home() {
  const roles = [
    {
      image: "public/images/home/web-programming.png",
      alt: "Web Programming Icon",
      title: "Full-Stack Developer",
    },
    {
      image: "public/images/home/neural-net.png",
      alt: "Neural Network Icon",
      title: "Machine Learning Engineer",
    },
    {
      image: "public/images/home/piano.png",
      alt: "Piano Icon",
      title: "Piano Composer",
    },
  ];
  return (
    <div
      className="flex flex-col w-full max-w-2xl sm:aspect-[1.618] rounded-[2.5rem] overflow-hidden p-8
      bg-[linear-gradient(45deg,#121521,#38476b,#b6192e,#ffc1ac_85%)] text-white shadow-2xl"
    >
      {/* Header Section */}
      <div className="grid grid-cols-[auto_1fr_auto] gap-4 items-start -mb-8 z-10">
        {/* Profile Pic */}
        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white/20 shadow-lg">
          <img
            className="w-full h-full object-cover"
            src="public/images/home/pfp.jpg"
            alt="Caleb"
          />
        </div>

        {/* Name and Title */}
        <div className="flex flex-col pt-2">
          <h1 className="text-2xl font-light leading-none tracking-tight">
            Caleb Jennings
          </h1>
          <p className="text-lg text-gray-300 font-extralight">
            Software Engineer
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="grid grid-cols-2 gap-2">
          {["Experience", "Projects", "Skills", "About"].map((text) => (
            <button
              key={text}
              className="bg-white/90 text-black px-4 py-1.5 rounded-xl text-sm font-medium hover:scale-110 transition-transform cursor-pointer shadow-sm"
            >
              {text}
            </button>
          ))}
        </div>
      </div>

      {/* Center Featured Box */}

      <div className="mt-auto mb-4 flex justify-center">
        <div
          className="w-[92%] bg-linear-to-br from-black/40 to-transparent backdrop-blur-sm 
    border border-white/10 shadow-2xl rounded-3xl p-8"
        >
          <div className="flex flex-col gap-6">
            {roles.map((role, index) => (
              <div key={index} className="flex items-center gap-5">
                <img className="h-10 invert" src={role.image} alt={role.alt} />
                <p className="text-xl font-light">{role.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Socials */}
      <div className="flex justify-end gap-4 items-center -mt-8">
        {["github", "linkedin", "email", "resume"].map((icon) => (
          <img
            key={icon}
            className="h-10 invert opacity-90 hover:opacity-100 hover:scale-110 transition-all cursor-pointer"
            src={`public/images/home/${icon}.png`}
            alt={icon}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;