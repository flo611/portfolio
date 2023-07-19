const Formulaire=() =>{
    return(
        <>
        <div >
         <div >
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
      <div>
        <button>
            Envoyer
        </button>
      </div>
      </div>
        </>
    );
};
export default Formulaire;