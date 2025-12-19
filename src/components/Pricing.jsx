export default function Pricing() {
  return (
    <section
  id="pricing"
  data-theme="dark"
  className="relative bg-black text-white py-32"
>


      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-black"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* ===== HEADING ===== */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Expertise of World’s Best Mentors. <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              At a Price Close to Nothing
            </span>
          </h2>
        </div>

        {/* ===== PRICING CARDS ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* ===== FREE PLAN ===== */}
          <div className="rounded-3xl border border-white/10 p-10 bg-white/5 backdrop-blur">
            <p className="text-gray-400 mb-4">
              For your casual learning phase
            </p>

            <div className="flex items-center justify-between mb-8">
              <span className="text-3xl font-bold">FREE</span>
              <span className="text-sm text-gray-400">(Limited)</span>
            </div>

            <ul className="space-y-5 text-gray-300">
              <li>✔ 10 Messages Per Day</li>
              <li>✔ Youtube & Leetcode Active Learning</li>
              <li>✔ Base Learning Model</li>
              <li>✔ Learning Validation (Basic)</li>
            </ul>

            <a
              href="https://microsoftedge.microsoft.com/addons/detail/certiflex/cndhogomgeaepnaglpkmihnkeabdebee"
              target="_blank"
              rel="noreferrer"
              className="
                block text-center mt-10 px-6 py-4 rounded-full
                border border-purple-400 text-purple-400 font-semibold
                hover:bg-purple-400 hover:text-black transition
              "
            >
              Install Free Extension
            </a>
          </div>

          {/* ===== PRO PLAN ===== */}
          <div className="rounded-3xl p-10 bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-400 shadow-xl">
            <p className="text-gray-300 mb-4">
              For serious & fast career growth
            </p>

            <div className="flex items-center justify-between mb-8">
              <span className="text-3xl font-bold">₹499 / month</span>
              <span className="text-sm text-gray-300">(Unlimited)</span>
            </div>

            <ul className="space-y-5 text-gray-200">
              <li>✔ Unlimited Messages</li>
              <li>✔ Youtube, Blogs & Leetcode Learning</li>
              <li>✔ Advanced AI Learning Model</li>
              <li>✔ Interview Practice Mode</li>
              <li>✔ Career Roadmaps & Memory</li>
              <li>✔ Learning Validation (Advanced)</li>
            </ul>

            <button
              className="
                w-full mt-10 px-6 py-4 rounded-full
                bg-gradient-to-r from-purple-500 to-pink-500
                text-black font-bold hover:scale-105 transition
              "
            >
              Upgrade to CertiFLEX Pro
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
