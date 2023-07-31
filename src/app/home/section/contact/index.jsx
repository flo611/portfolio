"use client";

import Form from "@/app/components/tools/form";
import ScrollToTop from "react-scroll-to-top";



const Contact = () => {
  return (
    <section>
      <h1 className="w-full flex flex-row justify-center text-amber-800 uppercase pt-6 font-bold">
        Contactez-moi
      </h1>
      <Form />
      <div className="mx-0">
        <ScrollToTop smooth color="#006064" width="40" top={2000}   />
      </div>
    </section>
  );
};
export default Contact;
