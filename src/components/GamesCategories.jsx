import cricket from "../assets/Categories/Cricket.png";
import football from "../assets/Categories/Football.png";
import rugby from "../assets/Categories/Rugby.png";
import baseball from "../assets/Categories/Baseball.png";

const categories = [
  {
    title: "Cricket",
    image: cricket,
  },
  {
    title: "Football",
    image: football,
  },
  {
    title: "Rugby",
    image: rugby,
  },
  {
    title: "Baseball",
    image: baseball,
  },
];

export default function GamesCategories() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-10 text-center">
        {/* Small Heading */}
        <h4 className="text-green-500 font-bold text-xl mb-8">Our Academy</h4>

        {/* Main Title */}
        <h1 className="text-[40px] font-extrabold text-slate-800 mb-6">
          Games Categories
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-lg max-w-4xl mx-auto leading-relaxed mb-20">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((item, index) => (
            <div
              key={index}
              //   className="relative h-[270px] rounded-tr-[35px] overflow-visible"
              className="group relative h-[270px] rounded-tr-[35px] overflow-visible"
            >
              {/* <div className="absolute inset-0 rounded-tr-[35px] bg-gradient-to-br from-[#228b22] to-[#292562]" /> */}
              {/* <div className="absolute inset-0 rounded-tr-[35px] bg-gradient-to-br from-[#292562] to-[#12bf58]" /> */}
              <div className="absolute inset-0 rounded-tr-[35px] bg-gradient-to-tr from-[#12bf58] to-[#292562]" />

              <h2
                className="
    absolute
    left-1
    bottom-1
    text-[50px]
    font-extrabold
    text-[#1c4f0f]
    leading-none
    z-20
  "
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                {item.title}
              </h2>

              <img
                src={item.image}
                alt={item.title}
                // className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[340px] object-contain"
                className="
    absolute
    bottom-5
    left-1/2
    -translate-x-1/2
    h-[300px]
    object-contain
    z-10
    scale-110
    transition-all
    duration-500
    ease-out
    group-hover:scale-100
    group-hover:-translate-y-2

  "
              />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-10">
          <a href="#" className="text-blue-900 font-semibold underline text-lg">
            View All Categories &gt;
          </a>
        </div>
      </div>
    </section>
  );
}
