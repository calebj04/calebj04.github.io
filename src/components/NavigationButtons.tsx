import { Link, useLocation } from "react-router-dom";

function NavigationButtons() {
  const pages = [
    { label: "Home", path: "/" },
    { label: "Experience", path: "/experience" },
    { label: "Projects", path: "/projects" },
    { label: "Skills", path: "/skills" },
  ];

  const location = useLocation();

  const currentPath = location.pathname;

  return (
    <div className="grid grid-cols-2 gap-2">
      {pages.map((page) => (
        <Link
          key={page.path}
          to={page.path}
          className={`border border-white/10 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide hover:bg-white hover:text-[#b6192e] hover:scale-105 transition-all duration-300 shadow-sm flex items-center justify-center ${
            page.path === currentPath
              ? "bg-white text-[#b6192e]"
              : "bg-black/20 text-white/90"
          }`}
        >
          {page.label}
        </Link>
      ))}
    </div>
  );
}

export default NavigationButtons;
