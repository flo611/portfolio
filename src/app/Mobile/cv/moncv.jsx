import Images from "next/image";
import Button from "../button";
import Input from "../input";
import Card from "../cards";

const Moncv=()=> {
    return(
<>
<h1 className=" uppercase pt-12 pb-2 flex flex-row justify-center w-full text-amber-800 ">
    Mon CV :
</h1>
<div className="w-full flex flex-row justify-center">

    <button   className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold  rounded-full px-2 ">
        <ul>
            <li><a href="http://localhost:3000/images/cv.svg">MonCV</a></li>
        </ul>
       
    </button>

    <Button type="text" title="Mon cv"  />
    <Button type="text" title="Envoyer"/>
   <Input type="text" /> 
   
   <Card type="text"  placeholder="text"/>
   
</div>
</>
    );

};
export default Moncv;