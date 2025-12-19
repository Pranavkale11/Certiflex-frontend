import { useEffect, useState } from "react";
import logo from "../assets/thecertiflex_logo.jpeg";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Paths", id: "paths" },
  { label: "Opportunities", id: "opportunities" },
  { label: "Pricing", id: "pricing" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll("section[id][data-theme]")
    );

    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;

      let closestSection = null;
      let minDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - sectionCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestSection = section;
        }
      });

      if (closestSection) {
        setActive(closestSection.id);
        setTheme(closestSection.dataset.theme || "light");
      }
    };

    handleScroll(); // ✅ initial run
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = theme === "dark";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${isDark ? "bg-black/85 text-white" : "bg-white/90 text-black"}
        backdrop-blur-md border-b`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <a href="#home" className="flex items-center gap-2 font-bold text-lg">
          <img src={logo} className="w-8 h-8" alt="CertiFLEX" />
          CertiFLEX
        </a>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`group relative text-sm font-medium transition
                ${active === item.id ? "opacity-100" : "opacity-70 hover:opacity-100"}
              `}
            >
              {item.label}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-red-500 transition-all duration-300
                  ${active === item.id ? "w-full" : "w-0 group-hover:w-full"}
                `}
              />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#home"
            className={`hidden md:inline-flex px-4 py-2 rounded-full border text-sm transition
              ${isDark ? "border-white/30 text-white" : "border-black/20 text-black"}
            `}
          >
            Go to Dashboard
          </a>

          <a
            href="https://microsoftedge.microsoft.com/addons/detail/certiflex/cndhogomgeaepnaglpkmihnkeabdebee"
            target="_blank"
            rel="noreferrer"
            className={`px-4 py-2 rounded-full text-sm font-medium transition
              ${isDark ? "bg-white text-black" : "bg-black text-white"}
            `}
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
