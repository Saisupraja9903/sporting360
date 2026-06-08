import { CheckSquare } from "lucide-react";
import athleteImg from "../assets/Athletes/Untitled-design-2.jpg";
import athleteImg2 from "../assets/Athletes/Top-trainer-1.png";
import TopTrainersSection from "../components/TopTrainersSection";
import Footer from "../components/Footer";


const Athletes = () => {
  return (
    <section className="relative bg-[#f4f4f6] pt-20 pb-0 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative z-10 mt-10 md:mt-0">
         <h2 className="text-[#A33A1E] text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tighter md:-mt-10 relative z-20">
            Our Athletes
           </h2>

          {/* Watermark Text */}
          <h1 className="text-[42px] sm:text-[80px] md:text-[110px] lg:text-[140px] font-bold text-white opacity-60 pointer-events-none select-none whitespace-nowrap leading-none flex justify-center gap-2 md:gap-4 z-10 -mt-2 md:-mt-6">
            <span>Athletic</span>
            <span>Aim</span>
          </h1>
        </div>

        {/* Main Wrapper */}
        <div className="relative max-w-[1150px] mx-auto flex flex-col md:block mb-16 md:mb-24 bg-gradient-to-b from-[#190961] via-[#152f63] to-[#24754e] md:bg-none rounded-tr-[50px] md:rounded-tr-none">
          {/* Right Player Card (Order 2 on mobile) */}
          <div className="relative md:absolute md:top-0 md:right-0 w-full md:w-[350px] lg:w-[400px] h-auto md:h-full flex flex-col items-center justify-end order-2 md:order-none z-20 mt-2 mb-10 md:mt-0 md:mb-0">
            {/* Card Container with Image and Text */}
            <div className="relative w-full flex flex-col items-center mb-8 md:mb-12">
              {/* Best Player Text - Overlay on Image */}
              <h3 className="absolute top-[90px] md:top-[120px] lg:top-[160px] left-1/2 -translate-x-1/2 text-[40px] md:text-[48px] font-bold text-[#1d5003] uppercase whitespace-nowrap z-30 pointer-events-none select-none ">
                Best Player
              </h3>

              {/* Player Image */}
            <img
              src={athleteImg2}
              alt="Athlete"
              className="relative z-20 h-[300px] sm:h-[350px] md:h-[400px] object-contain"
            />

              {/* Player Info Card */}
              <div className="relative md:absolute md:bottom-2 md:left-1/2 md:-translate-x-1/2 w-[260px] bg-white text-center z-30 py-4 px-8 shadow-xl md:shadow-none -mt-2 md:mt-0">
                <h4 className="text-2xl font-bold text-[#1a2d4d] uppercase">
                  Callum Grant
                </h4>

                <p className="text-gray-600 text-sm mt-1 leading-relaxed font-semibold">
                  Left-arm Orthodox Spinner |
                  <br />
                  Right-hand Bat
                </p>
              </div>
            </div>
          </div>

          {/* Left Content */}
          <div className="md:bg-gradient-to-b md:from-[#190961] md:via-[#152f63] md:to-[#24754e] md:rounded-tr-[80px] pt-10 pb-4 md:py-8 px-6 md:px-10 lg:px-14 md:pr-[360px] lg:pr-[420px] md:min-h-[400px] order-1 md:order-none relative z-10 flex flex-col justify-center">
            <h3 className="text-white text-3xl md:text-4xl font-bold leading-none max-w-[700px] uppercase">
              Elite Performance And Consistent Match Impact
            </h3>

            <p className="text-white/95 text-[16px] md:text-[18px] leading-snug mt-4 max-w-[700px]">
              Callum Grant is a Scottish cricketer from Stenhousemuir known for
              his consistency, tactical awareness, and calm approach in pressure
              situations. A left-arm orthodox spinner and dependable
              right-handed lower-order batter, he has developed into a reliable
              all-round contributor across domestic, international, and overseas
              cricket environments.
            </p>

            <div className="mt-6 space-y-4 max-w-[750px]">
              <div className="flex gap-5">
                <CheckSquare className="text-white w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-1" />
                <p className="text-white text-base md:text-lg leading-6">
                  Represented Scotland U19, Scotland B (15+ appearances), and
                  Scotland A in the Euro T10 Championships, gaining valuable
                  international experience.
                </p>
              </div>

              <div className="flex gap-5">
                <CheckSquare className="text-white w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-1" />
                <p className="text-white text-base md:text-lg leading-6">
                  His long-term impact and consistency earned him induction into
                  the Stenhousemuir Cricket Club Hall of Fame, recognising him
                  as one of the club’s leading performers.
                </p>
              </div>

              <div className="flex gap-5">
                <CheckSquare className="text-white w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-1" />
                <p className="text-white text-base md:text-lg leading-6">
                  Key first-team player since 2017, recording 359+ wickets,
                  2000+ runs and 50+ catches across competitions.
                </p>
                
              </div>
              {/* <h2 className="absolute top-[850px] lg:top-auto text-[40px] md:text-6xl lg:text-7xl font-bold text-[#143f00] uppercase z-30 pointer-events-none select-none">
              Best Player
            </h2> */}

            {/* <img
              src={athleteImg2}
              alt="Athlete"
              className="relative z-20 h-[300px] sm:h-[350px] md:h-[400px] object-contain"
            />

            <div className="bg-white w-[260px] py-4 text-center -mt-6 lg:-mt-8 z-30 shadow-xl lg:shadow-none">
              <h3 className="text-xl md:text-2xl font-bold text-[#1f2f4c] uppercase">
                Bahadar Esakhiel
              </h3>

              <p className="text-gray-600 text-xs md:text-[13px] mt-0.5 leading-relaxed font-semibold">
                All-Rounder | Right-hand Bat |
                <br />
                Right-arm Medium Fast
              </p>
            </div>
       */}

            </div>
          </div>
          
        </div>
        
      </div>

      <div className="relative max-w-[1150px] mx-auto mb-16 md:mb-0">
        <div className="bg-gradient-to-br from-[#231d73] via-[#26206f] to-[#10c34f] min-h-[400px] relative rounded-tr-[50px] md:rounded-tr-[80px] flex flex-col md:block overflow-visible md:overflow-hidden">
          {/* Left Athlete Section */}
          <div className="relative md:absolute left-0 top-0 w-full md:w-[45%] lg:w-[48%] h-auto md:h-full flex flex-col items-center justify-center pt-8 md:pt-0 z-20">
             <h3 className="absolute top-[90px] md:top-[290px] lg:top-[160px] left-1/2 -translate-x-1/2 text-[40px] md:text-[48px] font-bold text-[#1d5003] uppercase whitespace-nowrap z-30 pointer-events-none select-none ">
                Best Player
              </h3>

            <img
              src={athleteImg2}
              alt="Athlete"
              className="relative z-20 h-[300px] sm:h-[350px] md:h-[400px] object-contain"
            />

            <div className="bg-white w-[260px] py-4 text-center -mt-2 md:-mt-4 z-30 shadow-xl md:shadow-none">
              <h3 className="text-xl md:text-2xl font-bold text-[#1f2f4c] uppercase">
                Bahadar Esakhiel
              </h3>

              <p className="text-gray-600 text-xs md:text-[13px] mt-0.5 leading-relaxed font-semibold">
                All-Rounder | Right-hand Bat |
                <br />
                Right-arm Medium Fast
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative z-10 md:ml-[45%] lg:ml-[48%] px-6 md:px-10 lg:px-10 py-10 max-w-[700px]">
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-none uppercase mt-6 md:mt-0">
              Powerful All-Round Performance And Match-Winning Ability
            </h2>

            <p className="text-white/95 text-[16px] md:text-[17px] leading-snug mt-4">
              Bahadar Esakhiel is a Scottish international all-rounder known for
              his explosive batting, aggressive right-arm medium-fast bowling,
              and elite fielding. Batting in the top and middle order, he is
              recognised as a high-impact player capable of changing the
              momentum of matches and delivering in pressure situations.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex gap-5">
                <CheckSquare className="text-white w-5 h-5 md:w-6 md:h-6 mt-1 flex-shrink-0" />
                <p className="text-white text-base md:text-lg leading-6">
                  Made his Scotland A debut against Gloucestershire 2nd XI,
                  after gaining development experience with the Western Warriors
                  system, Northants Academy, and PakLions Academy, along with
                  overseas cricket in England, Australia, South Africa, and
                  Pakistan.
                </p>
              </div>

              <div className="flex gap-5">
                <CheckSquare className="text-white w-5 h-5 md:w-6 md:h-6 mt-1 flex-shrink-0" />
                <p className="text-white text-base md:text-lg leading-6">
                  Represented Scotland U15, U17, U19, and Scotland A,
                  progressing through Scotland’s national high-performance
                  cricket pathway.
                </p>
              </div>

              <div className="flex gap-5">
                <CheckSquare className="text-white w-5 h-5 md:w-6 md:h-6 mt-1 flex-shrink-0" />
                <p className="text-white text-base md:text-lg leading-6">
                  Standout performer at the ICC U19 Cricket World Cup 2024,
                  scoring a memorable 75* including four sixes in the final
                  over, showcasing his finishing ability on the global stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Top Trainers Section */}
      <TopTrainersSection />


      {/* Footer */}
      <Footer />

    </section>
  );
};

export default Athletes;
