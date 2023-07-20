const Contact = () => {
  return (
    <>
      <h1 className="w-full flex flex-row justify-center text-amber-800 uppercase pt-6">
        {" "}
        Contactez-moi :{" "}
      </h1>

      <div className="flex flex-col items-center">
        <div>
          <form className="mt-5  ">
            <div className="mb-4"></div>
            <div>
              <label htmlFor="" className="block">
                Nom
              </label>
            </div>
            <input
              type="text"
              className="border-cyan-800 bg-cyan-400 border-2 p-2 rounded-sm"
              placeholder="Ecrire"
            />
          </form>
        </div>
        <div>
          <form className="mt-5">
            <div className="mb-4"></div>
            <div>
              <label htmlFor="" className="block">
                Prénom
              </label>
            </div>
            <input
              type="text"
              className="border-cyan-800 bg-cyan-400 border-2 p-2 rounded-sm"
              placeholder="Ecrire"
            />
          </form>
        </div>
        <div>
          <form className="mt-5">
            <div className="mb-4"></div>
            <div>
              <label htmlFor="" className="block">
                Téléphone
              </label>
            </div>
            <input
              type="text"
              className="border-cyan-800 bg-cyan-400 border-2 p-2 rounded-sm"
              placeholder="Ecrire"
            />
          </form>
        </div>
        <div>
          <form className="mt-5">
            <div className="mb-4"></div>
            <div>
              <label htmlFor="" className="block">
                Message
              </label>
            </div>
            <input
              type="text"
              className="border-cyan-800 bg-cyan-400 border-2 p-2 rounded-sm"
              placeholder="Ecrire"
            />
          </form>
        </div>
        <div className="pt-2">
          <button className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold  rounded-full px-2 ">
            Envoyer
          </button>
        </div>
      </div>
    </>
  );
};
export default Contact;
