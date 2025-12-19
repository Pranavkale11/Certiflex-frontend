import manavImg from "../assets/Manav.jpeg";
import hardikImg from "../assets/hardik.jpeg";

export default function Testimonial() {
  const testimonials = [
    {
      text:
        "CertiFLEX helped me turn my self-learning into something credible. I now have clear validation of what I’ve learned and feel more confident showcasing my skills.",
      highlight:
        "It makes informal learning measurable and trustworthy.",
      name: "Hardik Jain",
      role: "Software Engineer II",
      avatar: hardikImg,
      linkedin: "https://www.linkedin.com/in/hardikjain0083/",
    },
    {
      text:
        "With CertiFLEX, my informal learning finally feels recognized. The verification process gave structure to my preparation and helped me track real progress.",
      highlight:
        "A powerful bridge between learning and professional recognition.",
      name: "Manav Tiwari",
      role: "Backend Developer",
      avatar: manavImg,
      linkedin: "https://www.linkedin.com/in/manav-tiwari/",
    },
  ];

  return (
    <section id="testimonials" data-theme="light" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 text-center">
          
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-between"
            >
              {/* TEXT */}
              <p className="text-lg text-gray-800 max-w-md leading-relaxed">
                {t.text}
              </p>

              {/* HIGHLIGHT */}
              <p className="mt-4 text-indigo-600 font-medium max-w-md">
                {t.highlight}
              </p>

              {/* AVATAR */}
              <img
                src={t.avatar}
                alt={t.name}
                className="w-14 h-14 rounded-full mt-8 object-cover"
              />

              {/* NAME + ROLE */}
              <div className="mt-3 font-semibold text-gray-900">
                {t.name}
              </div>
              <div className="text-sm text-gray-500">
                {t.role}
              </div>

              {/* LINKEDIN BUTTON */}
              <a
                href={t.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-sm rounded-full border border-gray-300 hover:border-indigo-500 hover:text-indigo-600 transition"
              >
                🔗 LinkedIn
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
