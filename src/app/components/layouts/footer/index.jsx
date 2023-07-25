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
      <div className=" grid grid-cols-3 items-center  pt-3 bg-cyan-600">
        <div className="text-sm">
          <p>@All rights rerserved</p>
        </div>

        <div className="flex justify-center">
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
        <button>
          <div className="flex justify-end"> 
            <Image
              
              src="images/logos/logo-portfolio-white.svg"
              alt="logoPF"
              width={50}
              height={20}
            />
          </div>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
