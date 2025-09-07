import { useTranslation } from "react-i18next";
import {
  FaHome,
  FaInfo,
  FaServicestack,
  FaPlaneDeparture,
} from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

const socialLinks = [
  { id: 1, icon: <FaFacebook />, link: "https://www.facebook.com/" },
  { id: 2, icon: <FaTwitter />, link: "https://www.twitter.com/" },
  { id: 3, icon: <FaInstagram />, link: "https://www.instagram.com/" },
  { id: 4, icon: <FaLinkedin />, link: "https://www.linkedin.com/" },
];

function Footer() {
  const { t } = useTranslation();

  const navItems = [
    { id: 1, text: t("footer.home"), link: "#home", icon: <FaHome /> },
    { id: 2, text: t("footer.about"), link: "#about", icon: <FaInfo /> },
    {
      id: 3,
      text: t("footer.services"),
      link: "#services",
      icon: <FaServicestack />,
    },
    {
      id: 4,
      text: t("footer.tours"),
      link: "#tours",
      icon: <FaPlaneDeparture />,
    },
  ];

  return (
    <footer className="py-16 bg-footer-bg">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col items-center gap-8">
          <ul className="flex justify-center gap-6 max-[400px]:gap-3 text-white">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="flex items-center gap-0 text-white hover:text-primary-color hover:underline font-medium hoverEffect
                max-[400px]:text-sm"
                >
                  {item.icon}
                  <span className="ml-2">{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex justify-center gap-6 text-white">
            {socialLinks.map((item) => (
              <li
                key={item.id}
                className="border border-primary-color hover:bg-primary-color rounded-sm hoverEffect"
              >
                <a
                  href={item.link}
                  target="_blank"
                  className="flex items-center gap-0 text-sm p-2"
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-center text-neutral-500 mt-8 text-sm max-w-md mx-auto">
          {t("footer.text")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
