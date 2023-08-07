"use client";
import ScrollToTop from "react-scroll-to-top";
import { AiOutlineArrowUp } from "react-icons/ai";

const ReturnToTop = () => {
  return (
    <ScrollToTop
      smooth
      component={
        <div className="w-full h-full rounded-md bg-black text-cyan-900 flex items-center justify-center hover:text-amber-800 hover:scale-105 hover:transition hover:ease-in-out hover:duration-200">
          <AiOutlineArrowUp />
        </div>
      }
    />
  );
};

export default ReturnToTop;
