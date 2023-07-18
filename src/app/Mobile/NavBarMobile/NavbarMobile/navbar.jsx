import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub,faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
const Navbar = () => {
  return (
    <>
      <div className="grid grid-flow-col-3 bg-cyan-400">
        <img
          src="/logos/logo-porfolio-white.svg"
          alt="logoPF"
          width={150}
          height={100}
        />
      </div>

      <div>
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
    </>
  );
};
export default Navbar;
