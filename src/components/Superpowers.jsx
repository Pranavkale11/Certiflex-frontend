import certiflexLogo from "../assets/logo.svg.jpeg";

export default function Superpowers() {
  return (
    <section
      id="superpowers"
      data-theme="dark"
      className="relative bg-black text-white min-h-screen py-40 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-black"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        
        {/* LEFT */}
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            CertiFLEX Uses Smart <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              AI Superpowers
            </span>{" "}
            To Guide You Forward
          </h2>

          <p className="mt-8 text-gray-300 max-w-md text-lg">
            CertiFLEX removes confusion, validates your self-learning,
            and builds a structured roadmap so your effort turns into
            real, recognized progress.
          </p>

          <ul className="mt-10 space-y-4 text-gray-300 text-base">
            <li>✔ Personalized, goal-driven learning paths</li>
            <li>✔ Cuts noise and random content overload</li>
            <li>✔ Converts informal learning into verified skills</li>
          </ul>

          <a
            href="https://microsoftedge.microsoft.com/addons/detail/certiflex/cndhogomgeaepnaglpkmihnkeabdebee"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 bg-white text-black px-7 py-4 rounded-full font-semibold hover:scale-105 transition"
          >
            🚀 Download Extension – It’s Free
          </a>
        </div>

        {/* RIGHT (LOGO / AI CARD) */}
        <div className="flex justify-center">
          <div
            className="relative w-80 h-[460px] rounded-3xl
            bg-gradient-to-b from-[#0f0f14] to-black
            backdrop-blur-xl border border-white/10
            shadow-[0_0_90px_rgba(139,92,246,0.35)]
            flex items-center justify-center"
          >
            {/* glow */}
            <div className="absolute inset-0 rounded-3xl 
              bg-gradient-to-tr from-purple-600/20 to-pink-600/20 blur-2xl"></div>

            {/* LOGO */}
            <img
              src={certiflexLogo}
              alt="CertiFLEX AI"
              className="relative z-10 w-44 h-44 object-contain"
            />

            {/* caption */}
            <span className="absolute bottom-6 text-xs text-gray-400 tracking-wide">
              CertiFLEX AI Companion
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
