import LanguageSwitcher from "./LanguageSwitcher";
import { logoImg } from "../assets/index.js";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaInfo,
  FaServicestack,
  FaPlaneDeparture,
} from "react-icons/fa";

function Navbar() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 1, text: t("navbar.home"), link: "#home", icon: <FaHome /> },
    { id: 2, text: t("navbar.about"), link: "#about", icon: <FaInfo /> },
    {
      id: 3,
      text: t("navbar.services"),
      link: "#services",
      icon: <FaServicestack />,
    },
    {
      id: 4,
      text: t("navbar.tours"),
      link: "#tours",
      icon: <FaPlaneDeparture />,
    },
  ];

  return (
    <header className="bg-white h-14 fixed top-0 left-0 z-50 w-full shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between gap-4">
        {/* logo */}
        <a href="#home" className="flex items-center py-2">
          <img src={logoImg} alt="Back Roads" className="h-8" />
        </a>
        {/* nav items */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="text-gray-700 hover:text-primary-color font-medium hoverEffect"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* links for mobile */}
        <div className="md:hidden order-3">
          {/* menu toggler */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center w-8 h-8 cursor-pointer"
          >
            {isMenuOpen ? (
              <FaTimes
                className="w-5 h-5 text-black"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            ) : (
              <FaBars
                className="w-5 h-5 text-black"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            )}
          </button>
          {/* nav items for mobile */}
          {isMenuOpen && (
            <ul
              className={`flex flex-col gap-1 bg-transparent rounded absolute z-10 top-[68px] left-6 right-6  
              transition-all duration-300 ease-in-out ${
                isMenuOpen
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              {navItems.map((navItem) => (
                <li
                  key={navItem.id}
                  className="px-4 bg-white/30 backdrop-blur-2xl rounded-2xl shadow-md
                hover:bg-white/60 hoverEffect"
                >
                  <a
                    href={navItem.link}
                    className="text-gray-800 hover:translate-x-2 ease-in-out hover:text-primary-color
                    duration-200 cursor-pointer py-[6px] flex items-center gap-4 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-lg">{navItem.icon}</span>
                    <span className="tracking-wider">{navItem.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* lang switch */}
        <div className="max-md:ml-auto ">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
