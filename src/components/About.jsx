import { useTranslation } from "react-i18next";
import { aboutImg } from "../assets/index.js";

function About() {
  const { t } = useTranslation();

  return (
    <div className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-14">
          {t("about.title.first")} <span>{t("about.title.second")}</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-16">
          <div className="w-full max-w-[94%] md:w-calc(50% - 1rem) border-8 border-primary-color shadow-3xl">
            <img
              src={aboutImg}
              alt="About Us"
              className="w-full h-full object-cover translate-x-6 translate-y-6 rounded-lg"
            />
          </div>
          <div className="flex flex-col w-full md:w-calc(50% - 1rem) md:mt-8">
            <h4 className="text-black text-xl sm:text-3xl font-semibold tracking-widest mb-12 capitalize">
              {t("about.subtitle")}
            </h4>
            <p className="text-grey-300 text-sm sm:text-base font-normal tracking-wider mb-2">
              {t("about.contentOne")}
            </p>
            <p className="text-grey-300 text-sm sm:text-base font-normal tracking-wider mb-2">
              {t("about.contentTwo")}
            </p>
            <a
              href="#services"
              className="mt-16 outline-0 border-2 border-primary-color text-white h-10 px-8
              bg-primary-color hover:bg-transparent hover:text-primary-color font-medium 
              hoverEffect cursor-pointer w-max flex items-center justify-center"
            >
              {t("about.button")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
