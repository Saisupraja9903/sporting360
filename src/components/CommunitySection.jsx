import image1 from "../assets/home.jpg";
import image2 from "../assets/about-us.jpg";
import image3 from "../assets/why-choose.jpg";

const CommunitySection = () => {
  return (
    <section className="py-[90px]">
      <div className="mx-auto max-w-[1176px]">

        <div className="grid items-center gap-[38px] lg:grid-cols-[500px_1fr]">

          {/* Images */}

          <div className="flex gap-[16px]">

            {/* Left Column */}

            <div className="flex flex-col gap-[16px]">

              <img
                src={image1}
                alt=""
                className="h-[140px] w-[180px] object-cover"
              />

              <img
                src={image2}
                alt=""
                className="h-[140px] w-[180px] object-cover"
              />

            </div>

            {/* Main Image */}

            <div className="relative">

              <img
                src={image3}
                alt=""
                className="h-[300px] w-[450px] object-cover"
              />

              <button className="absolute bottom-0 right-0 flex h-[60px] w-[60px] items-center justify-center bg-[#2B236B]">

                <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full border-[2px] border-white">

                  <span className="ml-[2px] text-[18px] text-white">
                    ▶
                  </span>

                </div>

              </button>

            </div>

          </div>

          {/* Content */}

          <div className="max-w-[520px]">

            <h2 className="sport-condensed text-[40px] font-bold leading-[1.05] text-[#1E2B45]">
              Stay Connected. Stay Active. <br />
              Play Hard.
            </h2>

            <p className="mt-[28px] text-[16px] leading-[1.45] text-[#4D5870]">

              At Sporting360 Sports Management, we bring athletes,
              brands, and opportunities together in one powerful
              network. From career strategy to performance growth,
              we help you stay connected to the right people,
              stay active in your development, and play hard
              on and off the field.

            </p>

            <div className="mt-[36px] flex gap-[18px]">

              <button className="h-[50px] w-[212px] border border-[#10C851] bg-[#10C851] text-[15px] font-semibold text-white underline underline-offset-8 transition-all duration-300 hover:bg-white hover:text-[#10C851]">

                Find Out More

              </button>

              <button className="h-[50px] w-[212px] border border-[#2B236B] bg-transparent text-[15px] font-semibold text-[#2B236B] underline underline-offset-8 transition-all duration-300 hover:bg-[#10C851] hover:text-white">

                Become A Member

              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CommunitySection;