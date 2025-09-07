import { useTranslation } from "react-i18next";
import { heroImg } from "../assets/index.js";

function Hero() {
  const { t } = useTranslation();
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage: `linear-gradient(rgb(44, 174, 186, 0.7), rgba(0, 0, 0, 0.7)), url(${heroImg})`,
      }}
      id="home"
    >
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-4 sm:gap-6 h-full">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-center">
          {t("hero.title")}
        </h1>
        <p className="text-white text-base sm:text-lg font-light tracking-widest max-w-[500px] text-center">
          {t("hero.subtitle")}
        </p>
        <a
          href="#tours"
          className="outline-0 bg-white text-primary-color h-10 sm:h-12 px-6 sm:px-8 cursor-pointer
          border border-white flex items-center justify-center text-base sm:text-lg hover:text-white hover:bg-transparent
          transition-all duration-300 ease-in-out font-medium uppercase tracking-widest"
        >
          {t("hero.button")}
        </a>
      </div>
    </div>
  );
}

export default Hero;
