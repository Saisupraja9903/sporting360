import aboutUsImage from "../assets/About/about-us-1.png";

const AboutUs = () => {
  return (
    <section className="relative overflow-hidden bg-[#f3f3f6] py-20 lg:py-28">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-[#00C853] text-5xl md:text-7xl font-extrabold uppercase tracking-tight -mt-20 pb-10 ">
            ABOUT US
          </h2>

          {/* Watermark Text */}
          <h1 className="absolute left-1/2 top-[-40px] -translate-x-1/2 text-[90px] md:text-[180px] font-extrabold text-white opacity-60 whitespace-nowrap pointer-events-none select-none">
            Athletic Aim
          </h1>
        </div>

        {/* Main Banner */}
        <div className="relative mx-auto max-w-[1150px]">
          {/* Gradient Box */}
          <div className="relative h-[430px] md:h-[420px] overflow-hidden rounded-tr-[70px] rounded-br-[70px] bg-gradient-to-r from-[#00c853] via-[#0f4cc9] to-[#281f7a]" />

          {/* Background Typography - Moved "over" the card */}
          <div className="absolute inset-0 z-10 px-8 pt-2 pointer-events-none select-none">
            <div className="text-[#143f00] uppercase font-black text-[70px] leading-[1.0] tracking-[-5px]">
              <div>PUSH YOURSELF TO THE LIMIT</div>
              <div className="pl-18">DUMMY TEXT OF THE TO THE</div>
              <div>PRINTING AND TYPESETTING</div>
              <div>INDUSTRY. LOREM IPSUM HAS</div>
              <div className="pl-32">BEEN THE INDUSTRY.</div>
            </div>
          </div>

          {/* Athlete Image */}
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 z-20">
            <img
              src={aboutUsImage}
              alt="Athlete"
              className="w-[380px] md:w-[520px] lg:w-[620px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
