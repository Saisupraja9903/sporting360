import logo from "../assets/Sporting-360_light.png";

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const Footer = ({ className = "" }) => {
  return (
    <footer className={`bg-[#16283a] text-white ${className}`}>
      {/* Top Section */}
      <div className="max-w-[1400px] mx-auto px-6 py-10">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <img
            src={logo}
            alt="Sporting360"
            className="h-10 md:h-12 w-auto object-contain"
          />

          <h3 className="mt-3 text-sm md:text-lg font-bold text-center text-white/80 tracking-tight">
            Innovating the Future of Sports Management
          </h3>
        </div>

        {/* Subscribe Section */}
        <div className="max-w-4xl mx-auto mt-6 flex flex-col md:flex-row shadow-xl">
          <input
            type="email"
            placeholder="Enter Email Address"
            className="flex-1 h-[46px] px-6 text-[#4b5563] text-sm outline-none bg-white"
          />

          <button className="bg-[#08c954] hover:bg-[#06b54a] transition-all px-10 h-[46px] text-white text-base font-bold uppercase tracking-wider">
            Subscribe
          </button>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 mt-8 text-sm font-medium">
          <a href="/" className="hover:text-[#08c954] transition-colors">
            Home
          </a>
          <a href="/about-us" className="hover:text-[#08c954] transition-colors">
            About Us
          </a>
          <a href="/team" className="hover:text-[#08c954] transition-colors">
            Team
          </a>
          <a href="/news" className="hover:text-[#08c954] transition-colors">
            News & Article
          </a>
          <a href="/contact" className="hover:text-[#08c954] transition-colors">
            Contact
          </a>
          <a href="/faq" className="hover:text-[#08c954] transition-colors">
            FAQ
          </a>
        </div>
      </div>

      {/* Contact Bar */}
      <div className="bg-[#34475a]">
        <div className="max-w-[1400px] mx-auto px-6 py-4">
          <div className="flex flex-col xl:flex-row justify-between items-center gap-8">
            {/* Contact Details */}
            <div className="flex flex-col lg:flex-row flex-wrap items-center gap-6 lg:gap-10 text-sm">
              <a
                href="#"
                className="flex items-center gap-3 underline hover:text-[#08c954]"
              >
                <FaMapMarkerAlt />
                12 Navenby Walk, E3 4EZ, London, UK
              </a>

              <a
                href="mailto:Sporting360uk@gmail.com"
                className="flex items-center gap-3 underline hover:text-[#08c954]"
              >
                <FaEnvelope />
                Sporting360uk@gmail.com
              </a>

              <a
                href="tel:+447387561693"
                className="flex items-center gap-3 underline hover:text-[#08c954]"
              >
                <FaPhoneAlt />
                +44 7387561693
              </a>
            </div>

            {/* CTA + Social */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <button className="border border-white px-6 py-2.5 text-base font-semibold hover:bg-white hover:text-[#16283a] transition-all">
                Join Our Club
              </button>

              <div className="flex items-center gap-5">
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-[#08c954] flex items-center justify-center text-white text-base hover:scale-110 transition"
                >
                  <FaTwitter />
                </a>

                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-[#08c954] flex items-center justify-center text-white text-base hover:scale-110 transition"
                >
                  <FaInstagram />
                </a>

                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-[#08c954] flex items-center justify-center text-white text-base hover:scale-110 transition"
                >
                  <FaFacebookF />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-3 text-center bg-[#0f1b27]">
        <p className="text-xs md:text-sm italic text-white/50">
          © 2025. Sporting 360. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;