import React from "react";

export default function SpecialPackages() {
  const packages = [
    {
      price: "£60",
      title: "1 On 1 Coaching",
      description:
        "Personalized training focused entirely on your growth and performance.",
      color: "bg-[#26236F]",

      buttonBorder: "border-[#26236F]",
      buttonText: "text-[#26236F]",
      features: [
        "Personalized training plan",
        "Dedicated coach attention",
        "Targeted skill development",
        "Flexible schedule",
        "Faster results",
      ],
    },
    {
      price: "£25",
      title: "Group Coaching",
      description:
        "High-energy sessions that build skills, teamwork, and competitive spirit.",
      color: "bg-[#08C255]",

      buttonBorder: "border-[#26236F]",
      buttonText: "text-[#26236F]",
      features: [
        "Team-based sessions",
        "Motivating environment",
        "Teamwork building",
        "Competitive drills",
        "Affordable coaching",
      ],
    },
  ];

  return (
    <section className="bg-[#f4f1fa] py-20 px-4">
      <div className="max-w-[85%] mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-[40px] font-bold text-[#26236F] mb-4">
            Special Packages
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 text-md">
            Choose the training style that fits your goals and experience
            personalized coaching designed to maximize performance, confidence
            and results.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-[1800px] h-full">
          <div className="grid lg:grid-cols-2 gap-4">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="grid grid-cols-[50%_50%] bg-white h-[260px]"
              >
                {/* Left Panel */}
                <div
                  className={`${pkg.color} text-white flex flex-col justify-center items-center text-center px-8`}
                >
                  <h3 className="text-[38px] font-extrabold leading-none">
                    {pkg.price}
                  </h3>

                  <p className="text-[18px] font-semibold mt-1">/ Session</p>

                  <h4 className="text-[20px] font-bold mt-6 mb-2">
                    {pkg.title}
                  </h4>

                  <p className="text-[14px] leading-7 max-w-[220px]">
                    {pkg.description}
                  </p>
                </div>

                {/* Right Panel */}
                <div className="flex flex-col justify-center px-6">
                  <div className="space-y-4">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-3 h-3 border border-black rounded-full flex items-center justify-center">
                          <div className="w-1 h-1 bg-black rounded-full" />
                        </div>

                        <span className="text-gray-600 text-[12px]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* <button
                 onClick={() => (window.location.href = "#")}
                  className={`mt-4 h-[40px] border ${pkg.buttonBorder} ${pkg.buttonText} font-semibold text-sm underline hover:bg-gray-50 transition`}
                >
                  Get Started
                </button> */}

                  <button
                    onClick={() => (window.location.href = "#")}
                    className="mt-4 h-[40px] border border-[#26236F] text-[#26236F] font-semibold text-sm underline transition-all duration-300 hover:border-green-500 hover:text-green-600"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
