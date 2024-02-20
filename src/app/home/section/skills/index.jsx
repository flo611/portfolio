"use client";

import "react-sweet-progress/lib/style.css";
import Image from "next/image";

const Skills = () => {
  return (
    <section id="skills" className="pt-40 lg:pt-0">
      <h2 className="w-full flex flex-row text-amber-800 dark:text-amber-600 justify-center uppercase pt-6  pb-4 font-bold font-nunitoRegular lg:pt-10 lg:pb-20 lg:text-3xl">
        Mes compétences
      </h2>
      <div className=" pb-4 mx-4 md:mx-14 lg:pb-0 lg:my-14 lg:mx-72 hover:transition hover:ease-in-out hover:duration-200 lg:hover:scale-105  ">
        <div className="contain rounded-lg p-4  ">
          <div className="card rounded-lg p-4 lg:p-8 lg:m-4 ">
            <div className="grid grid-cols-2 items-center justify-center lg:mx-4 font-assistantRegular lg:grid lg:grid-cols-4 lg:items-center lg:py-10 ">
              <div className="flex flex-col items-center justify-center pt-4 lg:pt-0  lg:pb-0">
                <Image
                  src="/images/html.svg"
                  width={60}
                  height={60}
                  alt="html logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center pt-4 lg:pt-0 lg:pb-0">
                <Image
                  src="/images/css.svg"
                  width={60}
                  height={60}
                  alt="css logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center py-6 lg:pt-0  lg:py-0">
                <Image
                  src="/images/javascript.svg"
                  width={60}
                  height={60}
                  alt="javascript logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center py-6 lg:pt-0  lg:py-0">
                <Image
                  src="/images/php.svg"
                  width={80}
                  height={40}
                  alt="php logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center lg:py-16 ">
                <Image
                  src="/images/symfony.svg"
                  width={60}
                  height={60}
                  alt="symfony logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center ">
                <Image
                  src="/images/postman.svg"
                  width={60}
                  height={60}
                  alt="postman logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center py-6 ">
                <Image
                  src="/images/react.svg"
                  width={60}
                  height={60}
                  alt="react logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center py-6 lg:py-0">
                <Image
                  src="/images/github.svg"
                  width={60}
                  height={60}
                  alt="github logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center ">
                <Image
                  src="/images/gitlab.svg"
                  width={60}
                  height={60}
                  alt="gitlab logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center  ">
                <Image
                  src="/images/figma.svg"
                  width={60}
                  height={60}
                  alt="figma logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center pt-6 pb-4 lg:pt-0 lg:pb-0 ">
                <Image
                  src="/images/wordpress.svg"
                  width={60}
                  height={60}
                  alt="wordpress logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center  pt-6 pb-4 lg:pt-0 lg:pb-0">
                <Image
                  src="/images/mysql.svg"
                  width={60}
                  height={60}
                  alt="mysql logo"
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
