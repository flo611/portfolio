"use client";

import Form from "@/app/components/tools/form";
import ScrollToTop from "react-scroll-to-top";

const Contact = () => {
  return (
    <section id="contact">
      <h1 className="w-full flex flex-row justify-center text-amber-800 uppercase pt-6 font-bold lg:py-20 lg:text-3xl">
        Me contacter
      </h1>
      <Form />
      <div>
        <ScrollToTop smooth color="#006064" width="40" top={2000} />
      </div>
    </section>
  );
};
export default Contact;
