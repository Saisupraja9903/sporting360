import { Check } from "lucide-react";
import baseball from "../assets/Training-session/training-session-1.jpg";
import tennis from "../assets/Training-session/training-session-2.jpg";
import runner from "../assets/Training-session/training-session-3.jpg";
import football from "../assets/Training-session/training-session-4.jpg";

export default function TrainingSessions() {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="absolute inset-0 bg-gradient-to-r from-[#08b26d] via-[#25256b] to-[#0b234d]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%)] pointer-events-none" />

      <div className="relative z-10 max-w-[1580px] mx-auto px-12 sm:px-16 lg:px-20 xl:px-28">
        {/* <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start"> */}
        <div className="grid gap-8 lg:grid-cols-2 items-stretch min-h-[600px]">
          {/* <div className="grid gap-6 sm:grid-cols-[1.15fr_0.85fr]"> */}
          <div className="grid gap-6 sm:grid-cols-2 max-w-[620px]">
            <div className="flex flex-col gap-6">
              <div className="overflow-hidden shadow-2xl ring-1 ring-white/10 min-h-[240px] bg-slate-950/10">
                <img
                  src={football}
                  alt="Football"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden shadow-2xl ring-1 ring-white/10 min-h-[210px] bg-slate-950/10">
                <img
                  src={baseball}
                  alt="Baseball"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6 ">
              <div className="overflow-hidden shadow-2xl ring-1 ring-white/10 min-h-[190px] bg-slate-950/10">
                <img
                  src={tennis}
                  alt="Tennis"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden shadow-2xl ring-1 ring-white/10 min-h-[270px] bg-slate-950/10">
                <img
                  src={runner}
                  alt="Runner"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* <div className="text-white pt-2 lg:pt-0"> */}
          <div className="text-white flex flex-col justify-start items-start text-left">
            <h2 className="text-[36px] md:text-[38px] leading-[1.05] font-bold tracking-[-0.03em] mb-5">
              Training Sessions
            </h2>

            <p className="max-w-[650px] text-[15px] md:text-[16px] leading-relaxed text-white/90 mb-10">
              Your performance with structured, high-energy sessions designed to
              sharpen skills, build strength, and boost confidence.
            </p>

            <div className="space-y-7">
              <div className="flex gap-5 items-start">
                {/* <div className="flex h-8 w-8 shrink-0 items-center justify-center border-[2px] border-white"> */}
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-sm border-[3px] border-white">
                  <Check size={20} strokeWidth={3} className="text-white" />
                </div>

                <div className="justify-start items-start -mt-1">
                  <h3 className="text-[20px] md:text-[22px] font-semibold mb-2">
                    Free Weekly Course
                  </h3>
                  <p className="text-sm md:text-base text-white/75 max-w-[560px]">
                    Enjoy a complimentary training session every week to keep
                    improving your game.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-sm border-[3px] border-white">
                  <Check size={20} strokeWidth={3} className="text-white" />
                </div>
                <div className="justify-start items-start -mt-1">
                  <h3 className="text-[20px] md:text-[22px] font-semibold mb-2">
                    Discount Up To 50% For Merch
                  </h3>
                  <p className="text-sm md:text-base text-white/75 max-w-[560px]">
                    Get exclusive member savings on top-quality sporting gear
                    and merchandise.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-sm border-[3px] border-white">
                  <Check size={20} strokeWidth={3} className="text-white" />
                </div>
                <div className="justify-start items-start -mt-1">
                  <h3 className="text-[20px] md:text-[22px] font-semibold mb-2">
                    Premium Support
                  </h3>
                  <p className="text-sm md:text-base text-white/75 max-w-[560px]">
                    Receive dedicated guidance and priority assistance whenever
                    you need it.
                  </p>
                </div>
              </div>
            </div>

            <a href="#">
              <button className="mt-6 inline-flex items-center justify-start bg-[#0BCB63] px-6 py-2 text-[16px] font-bold text-white underline transition hover:bg-[#0b234d]">
                Join Our Club
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
