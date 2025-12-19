export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 pt-10 pb-4 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* LOGO / BRAND */}
          <div className="text-white text-xl font-bold">
            CertiFLEX
          </div>

          {/* FOOTER NAV LINKS */}
          <div className="flex gap-6 text-sm">
            <a href="#home" className="hover:text-white transition">
              Home
            </a>
            <a href="#paths" className="hover:text-white transition">
              Features
            </a>
            <a href="#pricing" className="hover:text-white transition">
              Pricing
            </a>
            <a href="#faq" className="hover:text-white transition">
              FAQ
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-3">

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/thecertiflex/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <span className="text-white text-sm">in</span>
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <span className="text-white text-sm">X</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <span className="text-white text-sm">IG</span>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <span className="text-white text-sm">f</span>
            </a>

          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-6 flex justify-between items-center text-xs">
          <span>© 2025 CertiFLEX</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              T & C
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
