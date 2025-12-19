export default function Paths() {
  const paths = [
    {
      title: "GenAI for QA Engineers",
      author: "Bishnu Das",
      rating: "4.9",
      image:
        "https://i.pinimg.com/1200x/c1/7a/92/c17a92cfcd8108005d42aa63d825bc16.jpg",
    },
    {
      title: "Generative AI for Backend Engineers",
      author: "Chetana Bollini",
      rating: "5.0",
      image:
        "https://i.pinimg.com/736x/88/14/33/881433e75e1199b92efdc3f5f7e48120.jpg",
    },
    {
      title: "AI for Data Scientists",
      author: "Manish Pathak",
      rating: "5.0",
      image:
        "https://i.pinimg.com/1200x/8e/f8/c4/8ef8c40ce3b37e092e3cd2c0523137a2.jpg",
    },
    {
      title: "AI Product Management",
      author: "Punit Dwivedi",
      rating: "4.9",
      image:
        "https://i.pinimg.com/1200x/3a/a7/a9/3aa7a9dc9b6d9c522fa9c23d437f66ed.jpg",
    },
    {
      title: "GenAI for DevOps Engineers",
      author: "Muskaan Vaddoriya",
      rating: "5.0",
      image:
        "https://i.pinimg.com/736x/80/1c/0d/801c0d08a1b08141ec3b5d04d7b0d5d9.jpg",
    },
  ];

  return (
    <section id="paths" data-theme="light" className="bg-gray-50 py-24 px-6">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14">
        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
          Top Paths
        </span>{" "}
        <span className="text-gray-900">Created By Experts</span>
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {paths.map((path, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Image */}
            <div className="h-52 flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white">
              <img
                src={path.image}
                alt={path.title}
                className="h-36 object-contain"
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-lg text-gray-900">
                {path.title}
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                {path.author} • ⭐ {path.rating}
              </p>

              <button className="mt-5 w-full border rounded-lg py-2 text-sm font-medium hover:bg-gray-100 transition">
                View Path
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
