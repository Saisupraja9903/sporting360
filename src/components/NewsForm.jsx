import React from "react";
import { Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NewsFeedsSection = ({ className = "" }) => {
    const navigate = useNavigate();
    const handleReadMore = () => {
  navigate("/blog-details");
};


  return (
    <section className={`bg-[#f5f5f7] py-[60px] ${className}`}>
      <div className="mx-auto max-w-[1200px] px-5">
        {/* Heading */}
        <div className="text-center">
          <h2 className="sport-condensed text-[36px] font-bold text-[#2B236B] md:text-[45px] lg:text-[60px]">
            News & Feeds
          </h2>

          <p className="mx-auto mt-4 max-w-[850px] text-[15px] leading-[1.8] text-[#666666] md:mt-6 md:text-[18px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* News Layout */}
        <div className="mt-20 grid grid-cols-1 gap-6 md:mt-[50px] lg:grid-cols-[2fr_1.15fr] lg:gap-3">
          {/* LEFT NEWS */}
          <div className="bg-white shadow-[0_15px_40px_rgba(0,0,0,0.08)] h-[500px]">
            <div className="flex flex-col lg:flex-row h-full">
              {/* Grey Shape */}
              <div className="h-[200px] w-full bg-[#e6e6e6] lg:h-[50%] lg:w-[50%]"></div>

              {/* Content */}
              <div className="w-full px-6 py-8 lg:w-[50%] lg:px-[30px] lg:pt-[45px]">
                <h3 className="sport-condensed text-[26px] font-bold text-[#07152d] lg:text-[32px]">
                  Hello World!
                </h3>

                <div className="mt-2 flex items-center gap-2 text-[14px] text-[#999] lg:mt-3">
                  <Clock size={16} />
                  <span>February 25, 2026</span>
                </div>

                <p className="mt-4 text-[15px] leading-[1.8] text-[#666] lg:mt-8 lg:text-[17px]">
                  Welcome to WordPress. This is your first post. Edit or delete
                  it, then start writing!
                </p>

                <button onClick={handleReadMore}
                className="mt-6 h-[55px] w-full border border-[#10c851] text-[16px] font-semibold text-[#10c851] transition-all hover:bg-[#10c851] hover:text-white lg:mt-8 lg:text-[18px]">
                  Read Out More
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SMALL NEWS */}
          {/* RIGHT NEWS */}
          <div className="bg-white shadow-[0_15px_40px_rgba(0,0,0,0.08)] h-[500px]">
            {/* <div className="bg-white shadow-[0_15px_40px_rgba(0,0,0,0.08)] mt-8 lg:mt-[80px]"> */}

            <div className="h-[150px] bg-[#e6e6e6] lg:h-[200px]"></div>

            <div className="p-6 lg:p-[30px]">
              <h3 className="sport-condensed text-[26px] font-bold text-[#07152d] lg:text-[32px]">
                Hello World!
              </h3>

              <div className="mt-2 flex items-center gap-2 text-[14px] text-[#999] lg:mt-3">
                <Clock size={16} />
                <span>February 25, 2026</span>
              </div>

              <p className="mt-4 text-[15px] leading-[1.8] text-[#666] lg:mt-6 lg:text-[17px]">
                Welcome to WordPress. This is your first post. Edit or delete
                it, then start writing!
              </p>

              <button onClick={handleReadMore}
              className="mt-6 h-[55px] w-full border border-[#10c851] text-[16px] font-semibold text-[#10c851] transition-all hover:bg-[#10c851] hover:text-white lg:mt-8 lg:text-[18px]">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsFeedsSection;
