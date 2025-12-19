import { useState } from "react";

const faqs = [
  {
    q: "What is CertiFLEX and how does it help in career growth?",
    a: `CertiFLEX is your AI-powered learning companion designed to turn informal learning into structured, career-ready progress.

It builds personalized learning paths, validates what you learn, tracks real improvement, and removes confusion so you can move forward with confidence — whether you're starting out or preparing for top tech roles.`,
  },
  {
    q: "How is CertiFLEX different from other AI tools like ChatGPT?",
    a: `CertiFLEX doesn’t just give answers. It guides your thinking, asks the right follow-up questions, and tracks your learning journey.

The focus is on understanding, not shortcuts — helping you build long-term skills instead of copy-paste solutions.`,
  },
  {
    q: "How does CertiFLEX create a personalized learning path?",
    a: `CertiFLEX analyzes your goals, current skill level, and learning behavior to create a step-by-step roadmap that adapts as you grow.`,
  },
  {
    q: "Can CertiFLEX help me prepare for real interviews?",
    a: `Yes. CertiFLEX simulates interview-style problem solving, encourages structured thinking, and helps you practice explaining solutions — just like in real interviews.`,
  },
  {
    q: "Does CertiFLEX work on platforms like LeetCode or GeeksforGeeks?",
    a: `CertiFLEX complements all coding platforms by focusing on concepts, patterns, and reasoning rather than platform-specific tricks.`,
  },
];

export default function Faq() {
  const [open, setOpen] = useState(null);

  return (
    <section
  id="faq"
  data-theme="light"
  className="bg-white py-28"
>

      <div className="max-w-3xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-12">
          {/* SINGLE FAQ BADGE */}
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold rounded-full 
            bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md">
            FAQ
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 
              bg-clip-text text-transparent">
              Frequently Asked
            </span>{" "}
            <span className="relative text-black">
              Questions
              <span className="absolute left-0 -bottom-2 w-full h-1 
                bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
            </span>
          </h2>

          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Everything you need to know about{" "}
            <span className="font-semibold text-purple-600">CertiFLEX</span> —  
            clear, simple and to the point.
          </p>
        </div>

        {/* FAQ ITEMS */}
        <div className="space-y-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;

            return (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl px-6 py-5 transition-all"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left"
                >
                  {/* QUESTION */}
                  <span className="text-[15px] md:text-base font-medium text-gray-900">
                    {item.q}
                  </span>

                  {/* ARROW */}
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full border 
                      border-gray-300 text-gray-500 transition-all duration-300
                      ${isOpen ? "rotate-180 bg-gray-100" : ""}`}
                  >
                    ▾
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 mt-4" : "max-h-0"
                  }`}
                >
                  <p className="text-sm leading-relaxed text-gray-600 whitespace-pre-line">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
