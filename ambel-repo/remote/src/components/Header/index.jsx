import { useState } from "react";

const Header = () => {
  // State to control the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle function for mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-ambel-1 h-[86px] flex justify-center items-center">
      <div className="max-w-[1440px] w-full mx-auto flex items-center justify-between px-4">
        {/* Logo Section */}
        <div>
          <img src="/images/logo.svg" alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Navigation for Large Screens */}
        <div className="hidden lg:block">
          <nav>
            <ul className="flex justify-center items-center gap-6">
              <li className="flex justify-center items-center gap-1">
                Features <img src="/images/caret.svg" alt="caret" />
              </li>
              <li className="flex justify-center items-center gap-1">
                Pricing
              </li>
              <li className="flex justify-center items-center gap-1">
                Solutions <img src="/images/caret.svg" alt="caret" />
              </li>
              <li className="flex justify-center items-center gap-1">
                Resources <img src="/images/caret.svg" alt="caret" />
              </li>
              <li className="flex justify-center items-center gap-1">
                Find Professionals
              </li>
              <li className="flex justify-center items-center gap-1">
                Help <img src="/images/caret.svg" alt="caret" />
              </li>
            </ul>
          </nav>
        </div>

        {/* Button Section for Large Screens */}
        <div className="hidden lg:flex space-x-6">
          <button className="">Login</button>
          <button className="px-3 py-2 bg-bg-1 text-white rounded-md">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {/* Menu Icon SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <nav className="absolute top-[86px] left-0 w-full bg-white shadow-md">
            <ul className="flex flex-col items-center gap-4 py-4">
              <li className="flex justify-center items-center gap-1">
                Features <img src="/images/caret.svg" alt="caret" />
              </li>
              <li className="flex justify-center items-center gap-1">
                Pricing
              </li>
              <li className="flex justify-center items-center gap-1">
                Solutions <img src="/images/caret.svg" alt="caret" />
              </li>
              <li className="flex justify-center items-center gap-1">
                Resources <img src="/images/caret.svg" alt="caret" />
              </li>
              <li className="flex justify-center items-center gap-1">
                Find Professionals
              </li>
              <li className="flex justify-center items-center gap-1">
                Help <img src="/images/caret.svg" alt="caret" />
              </li>
              <div className="flex space-x-4 mt-4">
                <button className="">Login</button>
                <button className="px-3 py-2 bg-bg-1 text-white rounded-md">
                  Sign Up
                </button>
              </div>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
