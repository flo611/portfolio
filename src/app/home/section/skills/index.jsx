"use client";

import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

const Skills = () => {
  return (
    <section>
      <h1 className="w-full flex flex-row text-amber-800 justify-center uppercase pt-6 pb-2">
        Mes compétences
      </h1>

      <div className="gap-8 sm:grid sm:grid-cols-2 pt-6 lg:grid grid-cols-2 ">
        <div>
          <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
              HTML
              <Progress percent={88} status="success" />;
            </dt>
            <dd className="flex items-center mb-3">
              <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                <div
                  className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                  width="88%"
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                8.8
              </span>
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
              CSS
            </dt>
            <dd className="flex items-center mb-3">
              <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                <div
                  className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                  width="89%"
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                8.9
              </span>
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
              JAVASCRIPT
            </dt>
            <dd className="flex items-center mb-3">
              <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                <div
                  className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                  width="88%"
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                8.8
              </span>
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
              PHYTON
            </dt>
            <dd className="flex items-center">
              <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                <div
                  className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                  width="54%"
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                5.4
              </span>
            </dd>
          </dl>
        </div>
        <dl>
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Figma
          </dt>
          <dd className="flex items-center mb-3">
            <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
              <div
                className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                width="89%"
              ></div>
            </div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              8.9
            </span>
          </dd>
        </dl>
      </div>
    </section>
  );
};

export default Skills;
