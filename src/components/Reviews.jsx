import pranavImg from "../assets/pranav.jpeg";
import adiImg from "../assets/adi.jpeg";
import atharvaImg from "../assets/atharva.jpeg";

export default function Reviews() {
  const reviews = [
    {
      text: "CertiFLEX genuinely changed how I approach self-learning. Instead of jumping between random tutorials, I now follow a structured path that actually validates what I’ve learned.",
      name: "Pranav Kale",
      date: "June 12, 2025",
      avatar: pranavImg,
    },
    {
      text: "What impressed me most about CertiFLEX is how it turns informal learning into something credible. The roadmap and verification system make learning feel intentional, not accidental.",
      name: "Adi Midla",
      date: "June 10, 2025",
      avatar: adiImg,
    },
    {
      text: "Earlier I used to learn a lot but had no way to prove or track it. CertiFLEX gave my learning structure, direction, and confidence to showcase my skills professionally.",
      name: "Atharv Porwal",
      date: "June 8, 2025",
      avatar: atharvaImg,
    },
    {
      text: "CertiFLEX helped me stay consistent without feeling overwhelmed. Knowing exactly what to learn next removed confusion and helped me measure real progress over time.",
      name: "Ananya Verma",
      date: "June 6, 2025",
      avatar: "https://randomuser.me/api/portraits/women/47.jpg",
    },
    {
      text: "The best part about CertiFLEX is clarity. It bridges the gap between learning and professional recognition. I finally feel my efforts are aligned with real-world expectations.",
      name: "Rahul Mehta",
      date: "June 4, 2025",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    },
    {
      text: "I’ve tried many platforms, but CertiFLEX stands out because it focuses on outcomes. The structured roadmap, validation, and progress tracking make learning meaningful.",
      name: "Sneha Kulkarni",
      date: "June 2, 2025",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  return (
    <section
  id="reviews"
  data-theme="light"
  className="bg-white text-black py-32"
>

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-600 mb-4">
            REVIEWS
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            What Learners Say About <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              CertiFLEX
            </span>
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-3xl p-10 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="text-4xl text-gray-300 mb-4">“</div>

              <p className="text-gray-700 leading-relaxed text-[15px]">
                {r.text}
              </p>

              <div className="border-t border-dashed mt-8 pt-6 flex items-center gap-4">
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{r.name}</div>
                  <div className="text-sm text-gray-500">{r.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* CTA BUTTON */}
<div className="mt-20 flex justify-center">
  <a
    href="https://microsoftedge.microsoft.com/addons/detail/certiflex/cndhogomgeaepnaglpkmihnkeabdebee"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all"
  >
    <img
      src="https://www.google.com/chrome/static/images/chrome-logo.svg"
      alt="Edge"
      className="w-5 h-5"
    />
    Download Extension – It’s Free
  </a>
</div>


      </div>
    </section>
  );
}
