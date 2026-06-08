import trainer1 from "../assets/Trainer/T1.jpg";
import trainer2 from "../assets/Trainer/T2.jpg";
import trainer3 from "../assets/Trainer/T3.jpeg";
import trainer4 from "../assets/Trainer/T4.jpg";

const trainers = [
  {
    id: 1,
    name: "Praveen Kumar",
    role: "Founder & Head of Global Strategy",
    image: trainer1,
  },
  {
    id: 2,
    name: "Salman Fariz",
    role: "Co-Founder & Head Of Athletes Relations",
    image: trainer2,
  },
  {
    id: 3,
    name: "Gopi Krishna",
    role: "Manager",
    image: trainer3,
  },
  {
    id: 4,
    name: "Raymond Little",
    role: "Tennis Coach",
    image: trainer4,
  },
];

const TopTrainersSection = () => {
  return (
    <section className="bg-[#f5f5f5] py-20 lg:py-24">
      <div className="max-w-[1150px] mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[#2a2474] text-4xl md:text-6xl font-black uppercase tracking-tight">
            Our Top Trainers
          </h2>

          <p className="max-w-[800px] mx-auto mt-6 text-[#5d6574] leading-relaxed text-[15px] md:text-[16px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took.
          </p>
        </div>

        {/* Trainers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-16">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-white text-center overflow-hidden transition-all duration-300 hover:shadow-lg group border border-transparent hover:border-gray-100"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-[230px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="py-6 px-4">
                <h3 className="text-[#364457] text-xl md:text-2xl font-black">
                  {trainer.name}
                </h3>

                <p className="mt-2 text-[#5f6978] text-[15px] md:text-[16px] leading-snug font-medium">
                  {trainer.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopTrainersSection;