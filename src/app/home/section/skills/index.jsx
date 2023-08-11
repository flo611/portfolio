"use client";

import "react-sweet-progress/lib/style.css";
import Image from "next/image";


const Skills = () => {
  return (
    <section id="skills">
      <h1 className="w-full flex flex-row text-amber-800 dark:text-amber-600 justify-center uppercase pt-10 pb-4 font-bold font-nunitoRegular  lg:pb-20 lg:text-3xl">
        Mes compétences
      </h1>
      <div className=" pb-4 mx-4 md:mx-14 lg:pb-0 lg:my-14 lg:mx-72 hover:transition hover:ease-in-out hover:duration-200 lg:hover:scale-105  ">
        <div className="contain rounded-lg p-4  ">
          <div className="card rounded-lg p-4 lg:p-8 lg:m-4 ">
            <div className="flex flex-col items-center justify-center lg:mx-4 font-assistantRegular lg:grid lg:grid-cols-2 lg:items-center lg:py-4 ">
              <div className="flex flex-col items-center justify-center ">
                <h1 className="pb-3">
                  <span className=" border-b-2 border-cyan-900 hover:text-black hover:transition hover:ease-in-out hover:duration-200 hover:border-b-2 hover:border-amber-800  dark:hover:text-amber-800 dark:hover:border-cyan-800" >
                    HTML
                  </span>
                </h1>
                <Image 
                  src="/images/html.svg"
                  width={40}
                  height={40}
                  alt="html logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h1 className="pb-3">
                  <span className="border-b-2 border-cyan-900 hover:text-black hover:transition hover:ease-in-out hover:duration-200 hover:border-b-2 hover:border-amber-800  dark:hover:text-amber-800 dark:hover:border-cyan-800">
                    CSS
                  </span>
                </h1>
                <Image 
                  src="/images/css.svg"
                  width={40}
                  height={40}
                  alt="css logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center lg:py-6">
                <h1 className="pb-3">
                  <span className="border-b-2 border-cyan-900 hover:text-black hover:transition hover:ease-in-out hover:duration-200 hover:border-b-2 hover:border-amber-800  dark:hover:text-amber-800 dark:hover:border-cyan-800">
                    JavaScript
                  </span>
                </h1>
                <Image
                  src="/images/javascript.svg"
                  width={40}
                  height={40}
                  alt="javascript logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h1 className="pb-3">
                  <span className="border-b-2 border-cyan-900 hover:text-black hover:transition hover:ease-in-out hover:duration-200 hover:border-b-2 hover:border-amber-800  dark:hover:text-amber-800 dark:hover:border-cyan-800">
                    PHP
                  </span>
                </h1>
                <Image
                  src="/images/php.svg"
                  width={70}
                  height={70}
                  alt="php logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h1 className="pb-3">
                  <span className="border-b-2 border-cyan-900 hover:text-black hover:transition hover:ease-in-out hover:duration-200 hover:border-b-2 hover:border-amber-800  dark:hover:text-amber-800 dark:hover:border-cyan-800">
                    Symfony
                  </span>
                </h1>
                <Image
                  src="/images/symfony.svg"
                  width={40}
                  height={40}
                  alt="symfony logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h1 className="pb-3">
                  <span className="border-b-2 border-cyan-900 hover:text-black hover:transition hover:ease-in-out hover:duration-200 hover:border-b-2 hover:border-amber-800  dark:hover:text-amber-800 dark:hover:border-cyan-800">
                    Postman
                  </span>
                </h1>
                <Image
                  src="/images/postman.svg"
                  width={40}
                  height={40}
                  alt="postman logo"
                  
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
