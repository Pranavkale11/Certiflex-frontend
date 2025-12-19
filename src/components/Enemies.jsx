// ✅ IMPORT IMAGES (EXACT PATH + CASE)
import DistractionImg from "../assets/Enemies/Distraction.png";
import ConfusionImg from "../assets/Enemies/Confusion.png";
import DemotivationImg from "../assets/Enemies/Demotivation.png";

export default function Enemies() {
  const enemies = [
    {
      title: "Distraction",
      image: DistractionImg,
      text:
        "I keep putting in effort but it’s hard to tell if I’m making real progress or just staying busy.",
      name: "Rolly Sonker",
      role: "Engineering Manager",
    },
    {
      title: "Confusion",
      image: ConfusionImg,
      text:
        "I start with motivation, but things get complex and I end up leaving problems unfinished.",
      name: "Tan Vo",
      role: "Aspiring Developer",
    },
    {
      title: "Demotivation",
      image: DemotivationImg,
      text:
        "I feel completely lost and don’t know what to study next or how to move forward.",
      name: "Deepesh",
      role: "Data Scientist",
    },
  ];

  return (
    <section id="opportunities" data-theme="light"  className="pt-24 pb-8 bg-white">
      {/* ===== HEADING ===== */}
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-600 mb-5">
          WHICH ENEMY TROUBLES YOU THE MOST?
        </span>

        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">
          <span className="block">
            CertiFLEX Knows You Have Big
          </span>

          <span className="block mt-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Enemies Stopping You
          </span>
        </h2>
      </div>

      {/* ===== CARDS ===== */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
        {enemies.map((e, i) => (
          <div key={i} className="text-center">
            <h3 className="text-xl font-semibold mb-6">{e.title}</h3>

            <div className="bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <img
                src={e.image}
                alt={e.title}
                className="w-full h-72 object-cover"
              />

              <div className="p-6 text-left">
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  “{e.text}”
                </p>

                <div className="text-sm font-semibold text-gray-900">
                  {e.name}
                </div>
                <div className="text-xs text-gray-500">{e.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
