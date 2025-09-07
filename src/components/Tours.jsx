import { useTranslation } from "react-i18next";
import {
  tourOneImg,
  tourTwoImg,
  tourThreeImg,
  tourFourImg,
  tourFiveImg,
  tourSixImg,
} from "../assets/index.js";
import TourCard from "./TourCard";

function Tours() {
  const { t } = useTranslation();
  const tours = [
    {
      id: 1,
      title: t("tours.tour1.title"),
      description: t("tours.tour1.description"),
      destination: t("tours.tour1.destination"),
      duration: t("tours.tour1.duration"),
      price: t("tours.tour1.price"),
      date: t("tours.tour1.date"),
      image: tourOneImg,
    },
    {
      id: 2,
      title: t("tours.tour2.title"),
      description: t("tours.tour2.description"),
      destination: t("tours.tour2.destination"),
      duration: t("tours.tour2.duration"),
      price: t("tours.tour2.price"),
      date: t("tours.tour2.date"),
      image: tourTwoImg,
    },
    {
      id: 3,
      title: t("tours.tour3.title"),
      description: t("tours.tour3.description"),
      destination: t("tours.tour3.destination"),
      duration: t("tours.tour3.duration"),
      price: t("tours.tour3.price"),
      date: t("tours.tour3.date"),
      image: tourThreeImg,
    },
    {
      id: 4,
      title: t("tours.tour4.title"),
      description: t("tours.tour4.description"),
      destination: t("tours.tour4.destination"),
      duration: t("tours.tour4.duration"),
      price: t("tours.tour4.price"),
      date: t("tours.tour4.date"),
      image: tourFourImg,
    },
    {
      id: 5,
      title: t("tours.tour5.title"),
      description: t("tours.tour5.description"),
      destination: t("tours.tour5.destination"),
      duration: t("tours.tour5.duration"),
      price: t("tours.tour5.price"),
      date: t("tours.tour5.date"),
      image: tourFiveImg,
    },
    {
      id: 6,
      title: t("tours.tour6.title"),
      description: t("tours.tour6.description"),
      destination: t("tours.tour6.destination"),
      duration: t("tours.tour6.duration"),
      price: t("tours.tour6.price"),
      date: t("tours.tour6.date"),
      image: tourSixImg,
    },
  ];

  return (
    <div className="py-20 bg-white" id="tours">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-14">
          {t("tours.title.first")} <span>{t("tours.title.second")}</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14 justify-items-center">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tours;
