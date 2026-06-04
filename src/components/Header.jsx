import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Sporting-360_light.png";

const navLinks = [
  { label: "About Us", path: "/about-us" },
  { label: "Athletes", path: "/athletes" },
  { label: "Home", path: "/" },
];

const contactNumber = "+44 7387561693";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="relative z-50 h-20 w-full bg-[#063f00] lg:h-[86px]">
      <div className="mx-auto flex h-full max-w-[1068px] items-center justify-between px-5 md:px-8 lg:translate-x-2 lg:px-0">
        <Link to="/" className="flex items-center" aria-label="Sporting 360 home">
          <img
            src={logo}
            alt="Sporting 360"
            className="w-[104px] object-contain lg:w-[120px] xl:w-[122px]"
          />
        </Link>

        <div className="flex items-center lg:pr-[55px]">
          <nav className="hidden items-center gap-[30px] lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-[14px] font-medium text-black underline underline-offset-2 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-4 mr-3 hidden h-[66px] w-px bg-white/75 lg:block"></div>
          <a
            href="tel:+447387561693"
            className="hidden whitespace-nowrap text-[15px] font-bold text-white underline underline-offset-2 transition-colors duration-300 hover:text-[#00d05c] xl:block"
          >
            {contactNumber}
          </a>

          <a
            href="#join"
            className="ml-4 hidden h-[52px] w-[120px] items-center justify-center border border-[#00d05c] text-[14px] font-bold text-white underline underline-offset-2 transition-colors duration-300 hover:bg-[#00d05c] hover:text-[#063f00] focus:outline-none focus-visible:bg-[#00d05c] focus-visible:text-[#063f00] sm:flex lg:ml-5"
          >
            Join Now
          </a>

          <button
            className="ml-5 flex h-11 w-11 items-center justify-center text-white transition-colors duration-300 hover:text-[#00d05c] lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[100] h-screen w-full bg-[#063f00] transition-transform duration-500 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
          <img
            src={logo}
            alt="Sporting 360"
            className="w-[100px] object-contain"
          />
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 text-white"
            aria-label="Close Menu"
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex h-[calc(100vh-80px)] flex-col items-center justify-center gap-9">
          {navLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-3xl font-bold text-white transition-colors hover:text-[#00d05c]"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="w-20 h-px bg-white/20"></div>
          <a href="tel:+447387561693" className="text-xl font-bold text-white underline">
            {contactNumber}
          </a>
          <a
            href="#join"
            onClick={() => setIsMenuOpen(false)}
            className="border border-[#00d05c] px-12 py-4 font-semibold text-white transition-colors hover:bg-[#00d05c] hover:text-[#063f00]"
          >
            Join Now
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
