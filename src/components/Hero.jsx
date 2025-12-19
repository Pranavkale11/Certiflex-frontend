import heroBg from "../assets/hero-bg.jpg";
import { useEffect, useState } from "react";

const EDGE_LINK =
  "https://microsoftedge.microsoft.com/addons/detail/certiflex/cndhogomgeaepnaglpkmihnkeabdebee";

export default function Hero() {
  // 🔹 typing text
  const text = "Validate What You Learn";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  // 🔹 typing effect logic
  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 60);

      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <section
      id="home"
      data-theme="light"
      className="relative pt-32 pb-28 flex flex-col items-center text-center px-6"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* white overlay */}
      <div className="absolute inset-0 bg-white/70"></div>

      {/* content */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          {displayText}
          <span className="animate-pulse">|</span>
          <br />
          <span className="text-indigo-600 opacity-0 animate-fadeIn">
            Prove What You Know
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-gray-600 text-lg mx-auto opacity-0 animate-fadeIn delay-300">
          CertiFLEX transforms informal learning into verified, credible
          achievements using genuine engagement validation.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-8 flex gap-4 justify-center opacity-0 animate-fadeIn delay-500">
          {/* GET STARTED */}
          <a
            href={EDGE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-black text-white rounded-full text-lg hover:scale-105 transition"
          >
            Get Started — It’s Free
          </a>

          {/* REQUEST DEMO */}
          <a
            href={EDGE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border rounded-full text-lg bg-white hover:bg-gray-100 transition"
          >
            Request Demo
          </a>
        </div>
      </div>
    </section>
  );
}
