import ContactForm from "@/app/components/tools/form";
import ReturnToTop from "@/app/components/tools/returnToTop";

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="w-full flex flex-row justify-center text-amber-800 dark:text-amber-600 uppercase pt-6 font-bold font-nunitoRegular lg:py-20 lg:text-3xl">
        Me contacter
      </h2>
      <ContactForm/>
      <ReturnToTop />
    </section>
  );
};
export default Contact;
