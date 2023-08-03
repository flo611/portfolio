"use client";

import Form from "@/app/components/tools/form";
import ScrollToTop from "react-scroll-to-top";

const Contact = () => {
  return (
    <section>
      <h1 className="w-full flex flex-row justify-center text-amber-800 uppercase pt-6 font-bold lg:text-4xl">
        Contactez-moi
      </h1>
      <Form />
      <div>
        <ScrollToTop smooth color="#006064" width="40" top={2000} />
      </div>
    </section>
  );
};
export default Contact;
