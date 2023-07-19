import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareGithub,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import MenuHamburger from "./menuHamburger";

const Navbar = () => {
  return (
    <nav className="bg-cyan-300 grid grid-cols-3 fixed w-full lg:hidden z-10">
      <div>
        <MenuHamburger />
      </div>
      <div className="flex flex-row justify-center">
        <img 
          src="/logos/logo-porfolio-white.svg"
          alt="logoPF"
          width={150}
          height={100}
        />
      </div>
      <div className="flex flew-row justify-center">
        <button>
          <FontAwesomeIcon width={22} height={20} icon={faLinkedin} />
        </button>
        <button>
          <FontAwesomeIcon width={22} height={20} icon={faSquareGithub} />
        </button>
        <button>
          <FontAwesomeIcon width={22} height={20} icon={faDiscord} />
        </button>
        <button>
          <FontAwesomeIcon width={22} height={20} icon={faEnvelope} />
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
