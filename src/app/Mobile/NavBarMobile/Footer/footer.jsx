import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareGithub,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/fontawesome-free-solid";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-3 items-center  pt-2 bg-cyan-200">
        <div className="text-sm" >
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
        <div className="flex justify-center">
          <FontAwesomeIcon width={22} height={20} icon={faArrowUp} />
        </div>
      </div>
    </>
  );
};

export default Footer;
