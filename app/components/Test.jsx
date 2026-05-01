import Image from "next/image";

const tests = [
  {
    id: 1,
    name: "Lactose Intolerance",
    desc: "Know if dairy is affecting you",
    img: "/tests/lactose.png",
    bg: "bg-red-50",
  },
  {
    id: 2,
    name: "Gluten Sensitivity",
    desc: "Find gluten intolerance",
    img: "/tests/gluten.png",
    bg: "bg-orange-50",
  },
  {
    id: 3,
    name: "Full Body Checkup",
    desc: "Complete health analysis",
    img: "/tests/fullbody.png",
    bg: "bg-blue-50",
  },
  {
    id: 4,
    name: "Hair Loss Panel",
    desc: "Find the real cause",
    img: "/tests/hairloss.png",
    bg: "bg-orange-50",
  },
  {
    id: 5,
    name: "Allergy Panel",
    desc: "Identify allergic triggers",
    img: "/tests/allergy.png",
    bg: "bg-pink-50",
  },
  {
    id: 6,
    name: "Vitamin & Mineral",
    desc: "Check your deficiencies",
    img: "/tests/vitamin.png",
    bg: "bg-blue-50",
  },
];

export default function PopularTests() {
  return (
    <section className="w-full py-12 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Popular Health Tests</h2>
          <a href="/tests" className="text-blue-600 text-sm font-semibold hover:underline flex items-center gap-1">
            View All Tests →
          </a>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {tests.map((test) => (
            <div
              key={test.id}
              className="bg-white border border-gray-100 rounded-2xl p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition group cursor-pointer"
            >
              {/* IMAGE BOX */}
              <div className={`w-20 h-20 ${test.bg} rounded-2xl flex items-center justify-center mb-3`}>
                <div className="relative w-12 h-12">
                  <Image
                    src={test.img}
                    alt={test.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* NAME */}
              <p className="text-sm font-bold text-gray-800 leading-snug mb-1">{test.name}</p>

              {/* DESC */}
              <p className="text-xs text-gray-400 leading-snug mb-3">{test.desc}</p>

              {/* BUTTON */}
              <button className="text-xs text-blue-600 border border-blue-200 rounded-lg px-3 py-1.5 font-semibold hover:bg-blue-600 hover:text-white transition w-full">
                View Test
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}