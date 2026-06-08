import cricketImg from "../assets/Cricket-drive-picture.png";
import ClubIcon from "../assets/Frame-2.png";

const feature = {
  club: "Icon Cricket Club",
  link: "Book A Tour >",
  eventLabel: "Event:",
  eventName: "Indoor Cricket Training And Fitness",
};

const CricketFeatureCard = () => {
  return (
    <article className="bg-[#292562] px-7 py-16 md:px-12 lg:h-[300px] lg:px-[50px] lg:py-0">
      <div className="grid h-full items-center gap-9 lg:grid-cols-[39%_22%_39%] lg:gap-0">
        <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left lg:gap-[40px]">
          <div className="flex h-[86px] w-[86px] shrink-0 items-center justify-center rounded-full bg-white p-5">
            <img src={ClubIcon} alt="" className="h-full w-full object-contain" />
          </div>

          <div>
            <h3 className="whitespace-nowrap text-[26px] font-black leading-none text-white">
              {feature.club}
            </h3>
            <a href="#tour" className="mt-4 inline-block text-[16px] font-medium leading-none text-[#00d05c] underline underline-offset-2 transition-colors duration-300 hover:text-white">
              {feature.link}
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative flex h-[150px] w-[220px] items-center justify-center overflow-visible rounded-tr-[56px] bg-[linear-gradient(135deg,#11bb58_0%,#2b236b_80%)] md:h-[160px] md:w-[230px]">
            <img
              src={cricketImg}
              alt="cricket"
              className="absolute bottom-3 left-8 w-[78px] object-contain transition-transform duration-300 hover:scale-105 md:w-[88px]"
            />
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-end">
          <div className="relative flex h-[60px] w-full max-w-[430px] items-center justify-between border border-[#00ff66] px-6 pr-12">
            <span className="text-[14px] font-medium leading-tight text-white">
              <strong className="text-[16px] font-black">{feature.eventLabel}</strong> {feature.eventName}
            </span>

            <button
              className="absolute -right-[17px] top-1/2 flex h-[27px] w-[33px] -translate-y-1/2 items-center justify-center bg-[#00c853] text-[21px] font-bold leading-none text-white transition-all duration-200 hover:translate-x-1 hover:shadow-[0_0_24px_rgba(0,255,102,0.55)]"
              aria-label="View event"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CricketFeatureCard;
