"use client";

import "react-sweet-progress/lib/style.css";
import Image from "next/image";

const Skills = () => {
  return (
    <section id="skills">
      <h1 className="w-full flex flex-row text-amber-800 dark:text-amber-600 justify-center uppercase pt-6  pb-4 font-bold font-nunitoRegular lg:pt-10 lg:pb-20 lg:text-3xl">
        Mes compétences
      </h1>
      <div className=" pb-4 mx-4 md:mx-14 lg:pb-0 lg:my-14 lg:mx-72 hover:transition hover:ease-in-out hover:duration-200 lg:hover:scale-105  ">
        <div className="contain rounded-lg p-4  ">
          <div className="card rounded-lg p-4 lg:p-8 lg:m-4 ">
            <div className="grid grid-cols-2 items-center justify-center lg:mx-4 font-assistantRegular lg:grid lg:grid-cols-3 lg:items-center lg:py-10 ">
              <div className="flex flex-col items-center justify-center pt-3 pb-4 lg:pb-0">
                <Image
                  src="/images/html.svg"
                  width={60}
                  height={60}
                  alt="html logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center  lg:pb-0">
                <Image
                  src="/images/css.svg"
                  width={60}
                  height={60}
                  alt="css logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center py-4 lg:py-10">
                <Image
                  src="/images/javascript.svg"
                  width={60}
                  height={60}
                  alt="javascript logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/php.svg"
                  width={80}
                  height={40}
                  alt="php logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center py-4">
                <Image
                  src="/images/symfony.svg"
                  width={60}
                  height={60}
                  alt="symfony logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/postman.svg"
                  width={60}
                  height={60}
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
