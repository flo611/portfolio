import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "@emailjs/browser";
import "./styles.css";
import Button from "../buttons";
import { useEffect } from "react";
import Swal from "sweetalert2";


const ContactForm = () => {
  const initialValues = {
    name: "",
    surname: "",
    phone: "",
    email: "",
    message: "",
  };


  const onSubmit = (values, { resetForm }) => {
    emailjs
      .send("service_2up4qj8", "template_qv435b9", values, "okCH71BTXGKRxEAU6")
      .then((response) => {
        console.log("Email sent successfully:", response);
        resetForm();
        Swal.fire('Succès!', 'Formulaire envoyé avec succès!', 'success');
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        Swal.fire('Erreur!', "Une erreur s'est produite lors de l'envoi du formulaire.", 'error');
      });
  };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const formInputs = document.querySelectorAll('input[type="text"], textarea');
      let isFormDirty = false;

      formInputs.forEach(input => {
        if (input.value.trim() !== '') {
          isFormDirty = true;
        }
      });

      if (isFormDirty) {
        const confirmationMessage =
          "Vous allez perdre les données du formulaire. Êtes-vous sûr de vouloir quitter ?";
        event.returnValue = confirmationMessage;
        return confirmationMessage;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <div className="contain my-12 font-assistantRegular flex flex-col mx-8 px-3 pt-6  md:mx-16 lg:my-0 lg:grid lg:grid-cols-2 lg:mx-96 lg:mb-20 hover:scale-100 hover:ease-in-out hover:duration-200 lg:hover:scale-105">
          <div className="flex flex-col items-center lg:ml-12">
            <label htmlFor="name">Nom</label>
            <Field
              className="border border-blue-300 focus-visible:border-blue-300 focus:border-blue-300 rounded-lg bg-cyan-800 hover:transition hover:ease-in-out hover:duration-200 hover:bg-slate-100 text-black w-3/4 dark:hover:bg-cyan-950 "
              type="text"
              id="name"
              name="name"
            />

            <ErrorMessage name="name" component="div" />
          </div>

          <div className="flex flex-col items-center py-4 lg:pt-0 lg:mr-12">
            <label htmlFor="surname">Prénom</label>
            <Field
              className="border border-blue-300 focus-visible:border-blue-300 focus:border-blue-300 rounded-lg bg-cyan-800 hover:transition hover:ease-in-out hover:duration-200 hover:bg-slate-100 text-black w-3/4 dark:hover:bg-cyan-950 "
              type="text"
              id="surname"
              name="surname"
            />
            <ErrorMessage name="prenom" component="div" />
          </div>

          <div className="flex flex-col items-center lg:pt-4 lg:ml-12">
            <label htmlFor="phone">Téléphone</label>
            <Field
              className="border border-blue-300 focus-visible:border-blue-300 focus:border-blue-300 rounded-lg bg-cyan-800 hover:transition hover:ease-in-out hover:duration-200 hover:bg-slate-100 text-black w-3/4 dark:hover:bg-cyan-950 "
              type="text"
              id="phone"
              name="phone"
          
            />
            <ErrorMessage name="phone" component="div" />
          </div>

          <div className="flex flex-col items-center py-4 lg:mr-12">
            <label htmlFor="email">Email</label>
            <Field
              className="border border-blue-300 focus-visible:border-blue-300 focus:border-blue-300 rounded-lg bg-cyan-800 hover:transition hover:ease-in-out hover:duration-200 hover:bg-slate-100 text-black w-3/4 dark:hover:bg-cyan-950 "
              type="email"
              id="email"
              name="email"
            />
            <ErrorMessage name="email" component="div" />
          </div>

          <div className="mx-8  flex flex-col items-center  lg:justify-center lg:col-span-2 lg:py-4 lg:mx-2">
            <label htmlFor="message"> Objet du Message</label>
            <Field
              as="textarea"
              id="message"
              name="message"
              className="h-40 px-3 md:w-9/12 lg:w-10/12   lg:h-72 rounded-lg bg-cyan-800 hover:bg-white text-black border border-blue-300 focus-visible:border-blue-300 focus:border-blue-300 hover:transition hover:ease-in-out hover:duration-200 dark:hover:bg-cyan-950"
            />
            <ErrorMessage name="message" component="div" />
          </div>
          <div className="flex flex-row justify-center py-8 lg:col-span-2 lg:py-8 lg:pb-10">
            <Button
              type="submit"
              value="Envoyer"
              className="uppercase px-4 py-4 w-36"
              onClick={() => onSubmit()}
            ></Button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
