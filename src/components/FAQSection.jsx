import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import playerImg from "../assets/Frame.png";

const faqs = [
  {
    question: "Ut Neque Augue Interdum Ad Integer Tempus Convallis?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed elementum tempus egestas sed. Diam in arcu cursus euismod. Dolor sed viverra.",
  },
  {
    question: "Ut Neque Augue Interdum Ad Integer Tempus Convallis?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Ut Neque Augue Interdum Ad Integer Tempus Convallis?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Ut Neque Augue Interdum Ad Integer Tempus Convallis?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
           <div className="relative h-[420px] group">
            {/* Background Shape */}
            {/* <div className="absolute left-0 bottom-0 w-full h-[420px] rounded-tr-[120px] bg-gradient-to-br from-[#26236F] via-[#0b7f8a] to-[#241f75]" /> */}
             {/* <div className="absolute left-0 bottom-0 w-full h-[420px] rounded-tr-[120px] bg-gradient-to-br from-[#08b26d] via-[#25256b] to-[#0b234d]" /> */}
            <div className="absolute left-0 bottom-0 w-full h-[420px] rounded-tr-[120px] bg-gradient-to-tr from-[#08b26d] via-[#25256b] to-[#0b234d]" />
            {/* Player Image */}
            <img
              src={playerImg}
              alt="Player"
            //   className="absolute bottom-0 left-3/4 -translate-x-1/2 h-[480px] object-contain z-10"
            //  className="absolute bottom-0 left-3/4 -translate-x-1/2 h-[480px] object-contain z-10"
  className="absolute -bottom-8 left-3/4 -translate-x-1/2 h-[490px] object-contain z-10 transition-all duration-700 ease-out group-hover:scale-90"

            />
          </div>

          {/* Right Side */}
          <div>
            <h2 className="text-[26px] leading-none font-extrabold text-[#241f75] uppercase mb-10">
              Frequently Ask Questions
            </h2>
            <div className="space-y-4 max-w-[500px]">
  {faqs.map((faq, index) => (
    <div
      key={index}
      className="bg-white border shadow-lg overflow-hidden"
    >
      <button
        onClick={() =>
          setActive(active === index ? null : index)
        }
        className="w-full flex items-center justify-between px-2 py-2"
      >
        <span className="text-[#241f75] text-md font-bold underline text-left">
          {faq.question}
        </span>

        <div className="transition-transform duration-300">
          {active === index ? (
            <Minus
              size={30}
              strokeWidth={3}
              className="text-green-500 flex-shrink-0"
            />
          ) : (
            <Plus
              size={30}
              strokeWidth={3}
              className="text-green-500 flex-shrink-0"
            />
          )}
        </div>
      </button>

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          active === index
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-4">
            <p className="text-gray-600 text-sm">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
            {/* <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200"
                >
                  <button
                    onClick={() =>
                      setActive(active === index ? null : index)
                    }
                    className="w-full flex items-center justify-between px-2 py-2"
                  >
                    <span className="text-[#241f75] text-md font-bold underline text-left">
                      {faq.question}
                    </span>

                    {active === index ? (
                      <Minus
                        size={30}
                        className="text-green-500 flex-shrink-0"
                      />
                    ) : (
                      <Plus
                        size={30}
                        className="text-green-500 flex-shrink-0"
                      />
                    )}
                  </button>

                  {active === index && (
                    <div className="px-4 pb-4">
                      <p className="text-gray-600 text-sm ">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}