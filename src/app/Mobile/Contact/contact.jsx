import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareGithub,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {
  return (
    <>
      <h1 className="w-full flex flex-row text-amber-800"> Contactez-moi </h1>
      <div>
        <p>SABINE Florian</p>

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
      </div>

     
    </>
  );
};
export default Contact;
