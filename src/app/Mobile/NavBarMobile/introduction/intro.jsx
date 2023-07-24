import Image from "next/image";


const Intro = () => {
  return (
    <>
    
   
      <h1 className="uppercase pt-24 pb-2 flex flex-row justify-center w-full text-amber-800  ">
        Introduction :
      </h1>
      <div className="flex  justify-center w-full pt-6">
        <div class=" lg: rounded  shadow-2xl dark:bg-cyan-600 ">
          <div className="flex justify-center">
            <Image
              class="w-96"
              src="/images/logos/white-logo naturopied.svg"
              alt="Sunset in the mountains "
              width={20}
              height={40}
            />
          </div>

          <div class="px-6 py- ">
            <div class=" text-xl text-amber-800 mb-2 flex justify-center">
              {" "}
              Des questions à mon sujet?
            </div>
            <p class="text-white text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2 flex justify-center">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Sports
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Nature
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Travel
            </span>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Intro;
