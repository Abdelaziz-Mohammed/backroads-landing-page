import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const languages = [
  {
    code: "en",
    name: "En",
    flag: "https://flagcdn.com/w20/us.png",
    alt: "English",
  },
  {
    code: "ar",
    name: "Ar",
    flag: "https://flagcdn.com/w20/eg.png",
    alt: "Arabic",
  },
  {
    code: "es",
    name: "Es",
    flag: "https://flagcdn.com/w20/es.png",
    alt: "Spanish",
  },
];

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-50 w-20">
      <div
        className="flex items-center justify-between gap-1 cursor-pointer w-20 bg-neutral-50 hover:bg-neutral-100
        hoverEffect border border-neutral-100 text-gray-800  px-2 py-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-[6px]">
          <img
            src={languages.find((lang) => lang.code === i18n.language)?.flag}
            alt={i18n.language}
          />
          <span className="text-sm font-medium capitalize">
            {i18n.language}
          </span>
        </div>
        <button type="button" className="cursor-pointer">
          {isOpen ? <FaAngleUp /> : <FaAngleDown />}
        </button>
      </div>
      {isOpen && (
        <div
          className="bg-white border border-neutral-100 text-gray-800 shadow-sm cursor-pointer
          rounded-lg overflow-hidden absolute right-0 mt-1 w-20 z-10"
        >
          {languages.map((lang) => (
            <div
              key={lang.code}
              className={`flex items-center gap-3 px-3 py-[3px] ${
                i18n.language === lang.code && "bg-neutral-100"
              } hover:bg-neutral-100 hoverEffect border-b border-b-neutral-200 last:border-0`}
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setIsOpen(false);
              }}
            >
              <img src={lang.flag} alt={lang.alt} />
              <span className="text-sm sm:text-base font-medium">
                {lang.name}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
