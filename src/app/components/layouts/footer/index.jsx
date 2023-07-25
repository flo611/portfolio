"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareGithub,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col bg-cyan-600">
        <div className="flex flex-row justify-center pt-2">
          <Image
            src="images/logos/logo-portfolio-white.svg"
            alt="logoPF"
            width={60}
            height={60}
          />
        </div>
        <div className="flex justify-center py-2">
          <button>
            <FontAwesomeIcon width={22} height={20} icon={faLinkedin} />
          </button>
          <button className="px-2">
            <FontAwesomeIcon width={22} height={20} icon={faSquareGithub} />
          </button>
          <button>
            <FontAwesomeIcon width={22} height={20} icon={faDiscord} />
          </button>
          <button className="px-2">
            <FontAwesomeIcon width={22} height={20} icon={faEnvelope} />
          </button>
        </div>
        <hr />
        <div className="text-center py-2">
          <span className="italic">&copy; Tous droits réservés</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
