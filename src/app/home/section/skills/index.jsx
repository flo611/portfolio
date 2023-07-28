"use client";

import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import Image from "next/image";

const Skills = () => {
  return (
    <section>
      <h1 className="w-full flex flex-row text-amber-800 justify-center uppercase pt-6 pb-2">
        Mes compétences
      </h1>

      <div className="flex flex-col px-12 lg:grid grid-cols-2 lg:px-6">
        <div>
          <dl>
            <dt
              className="text-sm font-medium text-gray-500 dark:text-gray-400 lg:mx-6"
              data-aos="fade-down"
            >
              <Image
                src="/portfolio/public/images/html.svg"
                width={40}
                height={40}
                alt="html logo"
              />

              <Progress
                percent={95}
                status={"default"}
                theme={{
                  default: {
                    symbol: "",
                    color: "red",
                    style: "shining",
                  },
                }}
              />
            </dt>
          </dl>
        </div>
        <div>
          <dl>
            <dt
              className="text-sm font-medium text-gray-500 dark:text-gray-400 lg:mx-6"
              data-aos="fade-down"
            >
              <Image
                src="/portfolio/public/images/css.svg"
                width={40}
                height={40}
                alt="css logo"
              />

              <Progress
                percent={90}
                status={"default"}
                theme={{
                  default: {
                    symbol: "",
                    color: "blue",
                  },
                }}
              />
            </dt>
          </dl>
        </div>
        <div>
          <dl>
            <dt
              className="text-sm font-medium text-gray-500 dark:text-gray-400 lg:mx-6"
              data-aos="fade-down"
            >
              <Image
                src="/portfolio/public/images/javascprit.svg"
                width={40}
                height={40}
                alt="javascprit logo"
              />
              <Progress
                percent={80}
                status={"default"}
                theme={{
                  default: {
                    symbol: "",
                    color: "yellow",
                  },
                }}
              />
            </dt>
          </dl>
        </div>
        <div>
          <dl>
            <dt
              className="text-sm font-medium text-gray-500 dark:text-gray-400 lg:mx-6"
              data-aos="fade-down"
            >
              <Image
                src="/portfolio/public/images/php.svg"
                width={40}
                height={40}
                alt="php logo"
              />
              <Progress
                percent={75}
                status={"default"}
                theme={{
                  default: {
                    symbol: "",
                    color: "cyan",
                  },
                }}
              />
            </dt>
          </dl>
        </div>
        <div>
          <dl>
            <dt
              className="text-sm font-medium text-gray-500 dark:text-gray-400 lg:mx-6"
              data-aos="fade-down"
            >
              Symfony
              <Progress
                percent={75}
                status={"default"}
                theme={{
                  default: {
                    symbol: "",
                    color: "black",
                  },
                }}
              />
            </dt>
          </dl>
        </div>
        <div>
          <dl>
            <dt
              className="text-sm font-medium text-gray-500 dark:text-gray-400 lg:mx-6"
              data-aos="fade-down"
            >
              Postman
              <Progress
                percent={70}
                status={"default"}
                theme={{
                  default: {
                    symbol: "",
                    color: "orange",
                  },
                }}
              />
            </dt>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Skills;
