import { useState, useEffect } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Callum Grant",
    role: "Scotland U19 & Scotland A",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=70&h=70&fit=crop",
    review:
      "Sporting 360 genuinely caresabout athletes. Their support,professionalism, and networkhave helped me focus on mycricket while they handle therest.",
  },
  {
    id: 2,
    name: "Akshay Chenniga",
    role: "Holistic Wellbeing Coach",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=70&h=70&fit=crop",
    review:
      "As a wellbeing coach, Istrongly resonate withSporting 360’s philosophy ofdeveloping athletes beyondjust physical performance.Their openness tomultidisciplinary collaborationset them apart as a truly futureready organisation.",
  },
  {
    id: 3,
    name: "Manju Gowda",
    role: "HeadPhysiotherapist",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=70&h=70&fit=crop",
    review:
      "Drawing from my experiencewith the Indian athlete team, Ican confidently say Sporting360 maintains high standardsin athlete care, performance,and professionalism.",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = testimonials.length;
  const dotCount = 2; // ✅ ONLY TWO DOTS

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // AUTO SCROLL
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % dotCount);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    switch (currentSlide) {
      case 0:
        return [testimonials[0], testimonials[1]]; // 1-2

      case 1:
        return [testimonials[1], testimonials[2]]; // 2-3

      case 2:
        return [testimonials[2], testimonials[0]]; // 3-1

      default:
        return [testimonials[0], testimonials[1]];
    }
  };
  // GET 2 CARDS BASED ON DOT STATE
  // const getVisibleTestimonials = () => {
  //   if (currentIndex === 0) {
  //     return [testimonials[0], testimonials[1]];
  //   }

  //   return [testimonials[1], testimonials[2]];
  // };

  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-[1400px] mx-auto px-5">
        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-[#25256b]">
            Testimonials
          </h1>
        </div>

        <p className="text-gray-500 text-lg max-w-4xl mx-auto leading-relaxed mb-10 text-center">
          What people within Sporting 360 have to say
        </p>

        {/* CARDS */}
        <div className="max-w-4xl mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 50}%)`,
            }}
          >
            {[
              testimonials[0],
              testimonials[1],
              testimonials[2],
              testimonials[0], // duplicate first for smooth loop
            ].map((t, idx) => (
              <div key={idx} className="w-1/2 flex-shrink-0 px-3">
                <div className="bg-white shadow-lg p-6 flex gap-4 items-center min-h-[240px] border border-gray-200">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />

                  <div className="flex-1">
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#F6B434] text-[#F6B434]"
                        />
                      ))}
                    </div>

                    <p className="text-gray-600 text-sm mb-3">"{t.review}"</p>

                    <h3 className="text-green-500 font-bold">{t.name}</h3>

                    <p className="text-gray-500 text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DOTS (ONLY 2) */}
        {/* <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: dotCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-green-500 scale-125"
                  : "bg-gray-400"
              }`}
            />
          ))}
        </div> */}

        <div className="flex justify-center gap-2 mt-6">
          {[0, 1].map((dot) => (
            <button
              key={dot}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide % 2 === dot
                  ? "bg-green-500 scale-125"
                  : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
