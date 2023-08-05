import Input from "@/app/components/tools/inputs";
import Button from "@/app/components/tools/buttons";

const Form = () => {
  const onSubmit = () => {
    alert("formulaire envoyé");
  };

  return (
    <form className="flex flex-col px-3 pt-6 dark:text-lime-500 lg:grid lg:grid-cols-2 lg:mx-96">
      <div className="flex flex-col items-center lg:pr-8">
        <label htmlFor="">Votre nom :</label>
        <Input type="text" className="" />
      </div>
      <div className="flex flex-col items-center py-4 lg:pt-0 lg:pl-8">
        <label htmlFor="">Votre prénom :</label>
        <Input type="text" className="" />
      </div>
      <div className="flex flex-col items-center lg:pt-4 lg:pr-8">
        <label htmlFor="">Votre téléphone :</label>
        <Input type="text" className="" />
      </div>
      <div className="flex flex-col items-center py-4 lg:pl-8">
        <label htmlFor="">Votre adresse email :</label>
        <Input type="text" className="" />
      </div>
      <div className="flex flex-col items-center lg:justify-center lg:col-span-2 lg:py-4">
        <label htmlFor="">Objet du message :</label>
        <textarea
          name=""
          id=""
          cols="50"
          rows="10"
          className="rounded-lg bg-cyan-800 hover:bg-white hover:text-black "
        ></textarea>
      </div>
      <div className="flex flex-row justify-center pt-4 pb-12 lg:col-span-2 lg:py-8 lg:mb-20">
        <Button
          type="button"
          value="Envoyer"
          className="uppercase px-4 py-4 w-36"
          onClick={() => onSubmit()}
        />
      </div>
    </form>
  );
};

export default Form;
