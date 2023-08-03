import Input from "@/app/components/tools/inputs";
import Button from "@/app/components/tools/buttons";

const Form = () => {
  return (
    <form>
      <div className="px-3 flex flex-col pt-6 lg:grid grid-cols-2 lg:items-center md:mx-10 lg:mx-12">
        <div className="flex flex-col items-center lg:pr-4">
          <label htmlFor="">Votre nom :</label>
          <Input type="text" className="md:w-full " />
        </div>
        <div className="flex flex-col items-center py-4 lg:pl-6">
          <label htmlFor="">Votre prénom :</label>
          <Input type="text" className="md:w-full  lg:px-6" />
        </div>
        <div className="flex flex-col items-center lg:pr-4">
          <label htmlFor="">Votre téléphone :</label>
          <Input type="text" className="md:w-full " />
        </div>
        <div className="flex flex-col items-center py-4 lg:pl-6">
          <label htmlFor="">Votre adresse email :</label>
          <Input type="text" className="md:w-full " />
        </div>
      </div>
      <div className="flex flex-col items-center lg:justify-center md:px-14">
        <label htmlFor="">Objet du message :</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="rounded-lg bg-cyan-800 hover:bg-white hover:text-black md:w-full  "
        ></textarea>
      </div>

      <div className=" flex flex-row justify-center pt-4 pb-12">
        <Button
          type="button"
          value="Envoyer"
          className="uppercase px-4 py-4 w-36"
        />
      </div>
    </form>
  );
};

export default Form;
