"user client";

import { slide as Menu } from "react-burger-menu";
import { styles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareGithub,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const MenuHamburger = () => {
  return (
    <Menu styles={styles}>
      <div>
        <div>
          <ul className=" flex flex-col list-none text-amber-800">
            <li className="py-2">Accueil</li>
            <li>Introduction</li>
            <li className="py-2">Compétences</li>
            <li>Projets</li>
            <li className="py-2">Expériences</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex flex-row justify-center px-3 py-6">
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
      </div>
    </Menu>
  );
};

export default MenuHamburger;
