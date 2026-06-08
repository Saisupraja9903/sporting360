import aboutUsImage from "../assets/About/about-us-1.png";
import AboutStatsSection from "../components/AboutStatsSection";
import AboutChooseUs from "../components/AboutChooseUs";
import ClubPartnersSection from "../components/ClubPartnersSection";
import ParallaxBannerSection from "../components/CTABannerSection";
import TrainersSection from "../components/TrainersSection";
import Testimonals from "../components/Testimonals";
import NewsForm from "../components/NewsForm";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f3f3f6]">
      <main className="flex-grow relative overflow-hidden pt-12 md:pt-20 lg:pt-28">
        <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-16 relative z-10 mt-10 md:mt-0">
          <h2 className="text-[#00C853] text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tight md:-mt-20 pb-5 md:pb-10 ">
            ABOUT US
          </h2>

          {/* Watermark Text */}
          <h1 className="absolute left-1/2 top-[-20px] md:top-[-40px] -translate-x-1/2 text-[50px] sm:text-[80px] md:text-[130px] lg:text-[180px] font-bold text-white opacity-60 whitespace-nowrap pointer-events-none select-none">
            Athletic Aim
          </h1>
        </div>

        {/* Main Banner */}
        <div className="relative mx-auto max-w-[1150px]">
          {/* Gradient Box */}
          <div className="relative h-[250px] sm:h-[320px] md:h-[420px] overflow-hidden rounded-tr-[40px] rounded-br-[40px] md:rounded-tr-[70px] md:rounded-br-[70px] bg-gradient-to-r from-[#00c853] via-[#0f4cc9] to-[#281f7a]" />

          {/* Background Typography - Moved "over" the card */}
          <div className="absolute inset-0 z-10 px-4 sm:px-6 md:px-8 pt-2 md:pt-4 pointer-events-none select-none overflow-hidden">
            <div className="text-[#143f00] uppercase font-bold text-[24px] sm:text-[36px] md:text-[60px] lg:text-[110px] leading-[0.8] md:leading-[0.75] tracking-[-1px] lg:tracking-[-5px] opacity-80 md:opacity-100">
              <div>PUSH YOURSELF TO THE LIMIT</div>
              <div className="pl-4 sm:pl-8 lg:pl-18">
                DUMMY TEXT OF THE TO THE
              </div>
              <div>PRINTING AND TYPESETTING</div>
              <div>INDUSTRY. LOREM IPSUM HAS</div>
              <div className="pl-8 sm:pl-16 lg:pl-32">BEEN THE INDUSTRY.</div>
            </div>
          </div>

          {/* Athlete Image */}
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 z-20">
            <img
              src={aboutUsImage}
              alt="Athlete"
              className="w-[220px] sm:w-[300px] md:w-[450px] lg:w-[620px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* About Stats Section */}
      <AboutStatsSection className="-mt-12 lg:-mt-[80px]" />

      {/* Why Choose Us Section */}
      <AboutChooseUs className="-mt-12 lg:-mt-20" />

      {/* Club Partners Section */}
      <ClubPartnersSection className="-mt-16 lg:-mt-32" />

      {/* Parallax Banner Section */}
      <ParallaxBannerSection />

      {/* Trainers Section */}
      <TrainersSection className="-mt-10 lg:-mt-26" />

      {/* Testimonials Section */}
      <Testimonals className="-mt-10 lg:-mt-20" />

        {/* News Form Section */}
        <NewsForm className="-mt-10 lg:-mt-20" />
      </main>

      {/* Footer */}
      <Footer className="mt-10 lg:mt-16 relative z-30" />
    </div>
  );
};

export default AboutUs;
