import Input from "../input";
import Button from "../button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/fontawesome-free-solid";
const Contact = () => {
  return (
    <>
      <h1 className="w-full flex flex-row justify-center text-amber-800 uppercase pt-6">
        {" "}
        Contactez-moi :{" "}
      </h1>

      <div className="mx-3 flex flex-col items-center lg:grid grid-cols-2 pt-6   ">
        <div>
          <Input type="text" name="Nom:" />
        </div>
        <div>
          <Input type="text" name="Prénom:" />
        </div>
        <div>
          <Input type="text" name="Téléphone:" />
        </div>
        <div>
          <Input type="text" name="Société:" />
        </div>
        <div >
        <Input type="text" name="Message:" />
        </div>
      </div>
      <div className=" flex flex-row pt-2 pb-2 justify-center">
        <Button label="Envoyer" />
      </div>

      <div className="flex flex-row justify-end">
        <FontAwesomeIcon
          width={30}
          height={20}
          icon={faArrowUp}
          color="black"
        />
      </div>
    </>
  );
};
export default Contact;
