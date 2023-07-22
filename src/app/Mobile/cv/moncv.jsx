import Images from "next/image";
import Button from "../button";

const Moncv = () => {
  return (
    <>
      <h1 className=" uppercase pt-12 pb-2 flex flex-row justify-center w-full text-amber-800 ">
        Mon CV :
      </h1>
      <div className=" flex flex-row justify-center">
        <ul>
          <li>
            <a href="http://localhost:3000/images/cv.svg">
              <Button type="text" title="Mon cv" />
            </a>{" "}
          </li>
        </ul>
      </div>
    </>
  );
};
export default Moncv;
