import Form from "@/app/components/tools/form";
import ReturnToTop from "@/app/components/tools/returnToTop";

const Contact = () => {
  return (
    <section id="contact">
      <h1 className="w-full flex flex-row justify-center text-amber-800 dark:text-lime-500 uppercase pt-6 font-bold lg:py-20 lg:text-3xl">
        Me contacter
      </h1>
      <Form />
      <ReturnToTop />
    </section>
  );
};
export default Contact;
