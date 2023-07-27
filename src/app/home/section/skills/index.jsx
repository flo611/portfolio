"use client";

import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

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
              HTML
              <Progress
                percent={95}
                
                status={"default"}
                theme={{
                  default: {
                    symbol: "",
                    color: "red",
                    style: "shining"
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
              CSS
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
              JavaScript
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
              PHP
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
