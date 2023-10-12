import Input from "@/app/components/tools/inputs";
import Button from "@/app/components/tools/buttons";

import "./styles.css";

const Form = () => {
  const onSubmit = () => {
    alert("formulaire envoyé");
  };


  return (
    <form className="contain my-12 font-assistantRegular flex flex-col mx-8 px-3 pt-6  md:mx-16 lg:my-0 lg:grid lg:grid-cols-2 lg:mx-96 lg:mb-20 hover:scale-100 hover:ease-in-out hover:duration-200 lg:hover:scale-105 ">
      <div className="flex flex-col items-center lg:ml-12 ">
        <label htmlFor="">Votre nom</label>
        <Input type="text" className="w-3/4 dark:hover:bg-cyan-950" />
      </div>
      <div className="flex flex-col items-center py-4 lg:pt-0 lg:mr-12">
        <label htmlFor="">Votre prénom</label>
        <Input type="text" className="w-3/4 dark:hover:bg-cyan-950" />
      </div>
      <div className="flex flex-col items-center lg:pt-4 lg:ml-12">
        <label htmlFor="">Votre téléphone</label>
        <Input type="text" className="w-3/4 dark:hover:bg-cyan-950" />
      </div>
      <div className="flex flex-col items-center py-4 lg:mr-12">
        <label htmlFor="">Votre adresse email</label>
        <Input type="text" className="w-3/4 dark:hover:bg-cyan-950" />
      </div>
      <div className="mx-8  flex flex-col items-center  lg:justify-center lg:col-span-2 lg:py-4 lg:mx-2">
        <label htmlFor="">Objet du message</label>
        <textarea
          name=""
          id=""
          // cols="50"
          // rows="10"
          className="h-40 px-3 md:px-36 lg:w-10/12   lg:h-72 rounded-lg bg-cyan-800 hover:bg-white text-black border border-blue-300 focus-visible:border-blue-300 focus:border-blue-300 hover:transition hover:ease-in-out hover:duration-200 dark:hover:bg-cyan-950"
        ></textarea>
      </div>
      <div className="flex flex-row justify-center py-8 lg:col-span-2 lg:py-8 lg:pb-10">
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
