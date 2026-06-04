import { CheckSquare, ChevronDown } from "lucide-react";
import { useState } from "react";

const benefits = [
  "Access to professional trainers and expert coaching",
  "Fun, competitive, and high-energy training sessions",
  "Exclusive member events, programs, and networking opportunities",
];

const sportsOptions = ["Cricket", "Football", "Basketball", "Badminton", "Tennis"];

const MembershipSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", sport: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Production-ready: replace with API call or form handler
    console.log("Membership form submitted:", formData);
  };

  return (
    <section className="bg-[#f7f7fb] py-2">
      <div className="max-w-[1176px] mx-auto px-6">
        <div className="overflow-hidden bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] rounded-tr-[56px]">
          <div className="grid grid-cols-1 lg:grid-cols-[58%_42%]">
            {/* LEFT PANEL */}
            <div className="bg-[#10c656] py-4 px-8 lg:px-6 flex flex-col justify-center">
              <h2 className="sport-condensed text-[42px] font-bold leading-[1.95] text-white">
                Become A Member
              </h2>

              <p className="mt-1 max-w-[500px] text-[17px] leading-[1.6] text-white">
                Join Sporting360 and take your game to the next level in a dynamic, supportive, and professional environment. Experience the perfect balance of performance, passion, and play.
              </p>

              <div className="mt-4 space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckSquare size={28} strokeWidth={2} className="mt-1 shrink-0 text-white" />

                    <p className="max-w-[540px] text-[17px] leading-[1.8] text-white">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              <button className="mt-6 h-[54px] w-[170px] border border-white text-[17px] font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#10c656]">
                View Pricing
              </button>
            </div>

            {/* RIGHT PANEL */}
            <div className="bg-[#f8f8f8] px-8 lg:px-14 py-4 flex flex-col justify-center">
              <h2 className="sport-condensed text-[34px] font-bold leading-[1.05] text-black max-w-[520px]">
                Fill The Form To Become A
                <br />
                Member
              </h2>

              <form onSubmit={handleSubmit} className="mt-4 w-full">
                {/* Name + Email */}
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-[14px] font-semibold text-black">
                      Name <span className="text-[#10c656]">*</span>
                    </label>

                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border-b border-[#cfd5dc] bg-transparent pb-2 text-[17px] outline-none focus:border-[#10c656] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-[14px] font-semibold text-black">
                      Email <span className="text-[#10c656]">*</span>
                    </label>

                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-b border-[#cfd5dc] bg-transparent pb-2 text-[17px] outline-none focus:border-[#10c656] transition-colors"
                    />
                  </div>
                </div>

                {/* Select Sport */}
                <div className="mt-3">
                  <label className="mb-1 block text-[14px] font-semibold text-black">Select</label>

                  <div className="relative">
                    <select
                      name="sport"
                      value={formData.sport}
                      onChange={handleChange}
                      className="w-full appearance-none border-b border-[#cfd5dc] bg-transparent pb-2 pr-10 text-[17px] outline-none focus:border-[#10c656] transition-colors"
                    >
                      <option value="">Select Sports</option>
                      {sportsOptions.map((sport) => (
                        <option key={sport} value={sport}>
                          {sport}
                        </option>
                      ))}
                    </select>

                    <ChevronDown size={18} className="absolute right-2 top-1 text-gray-400" />
                  </div>
                </div>

                {/* Message */}
                <div className="mt-3">
                  <label className="mb-1 block text-[14px] font-semibold text-black">Text</label>

                  <textarea
                    rows="3"
                    name="message"
                    placeholder="Additional message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full resize-none border-b border-[#cfd5dc] bg-transparent pb-2 text-[17px] outline-none focus:border-[#10c656] transition-colors"
                  />
                </div>

                {/* CTA */}
                <button type="submit" className="mt-6 h-[54px] w-full bg-[#f0b63c] text-[18px] font-semibold text-white transition duration-300 hover:bg-[#e0a82f]">
                  Join Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;