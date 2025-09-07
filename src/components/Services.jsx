import { useTranslation } from "react-i18next";
import { TbBrandCashapp } from "react-icons/tb";
import { FaTree } from "react-icons/fa";
import { FaSocks } from "react-icons/fa6";

function Services() {
  const { t } = useTranslation();
  const services = [
    {
      id: 1,
      icon: <TbBrandCashapp />,
      title: t("services.service1.title"),
      description: t("services.service1.description"),
    },
    {
      id: 2,
      icon: <FaTree />,
      title: t("services.service2.title"),
      description: t("services.service2.description"),
    },
    {
      id: 3,
      icon: <FaSocks />,
      title: t("services.service3.title"),
      description: t("services.service3.description"),
    },
  ];

  return (
    <div className="py-20 bg-primary-bg" id="services">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-14">
          {t("services.title.first")} <span>{t("services.title.second")}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div key={service.id} className="flex gap-3">
              <div
                className="text-4xl text-black bg-primary-color w-16 h-16
                flex items-center justify-center"
              >
                {service.icon}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-black text-lg font-medium capitalize">
                  {service.title}
                </h3>
                <p className="text-neutral-500 text-[12px] font-normal tracking-wider">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
