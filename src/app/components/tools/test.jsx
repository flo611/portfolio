import React,{useEffect} from "react";

import { Formik} from "formik";
import Input from "@/app/components/tools/inputs";
import Button from "@/app/components/tools/buttons";
import emailjs from '@emailjs/browser';

import "./form/styles.css";


//  const sendEmail =(e)=>{
//   emailjs.init('Ct_tjnwDOVyG-H5Bf&');
//  };

// window.onload = function() {
//   document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     // generate a five digit number for the contact_number variable
//     this.contact_number.value = Math.random() * 100000 | 0;
//     // these IDs from the previous steps
//     emailjs.sendForm('contact_service', 'contact_form', this) // a mettre dans la fonction onSubmit
//     .then(function() {
//       console.log('SUCCESS!');
//     }, function(error) {
//       console.log('FAILED...', error);
//     });
//   });
// }


emailjs
const onSubmit = (event) => {
  const formElement = document.getElementById('contact-form');
  emailjs.sendForm('service_2up4qj8', 'template_qv435b9',formElement) 
  .then(function(response) {
    console.log('SUCCESS!',response);
  alert("formulaire envoyé");

  })
  .catch(function(error) {
    console.error('Erreur lors de l\'envoi du formulaire:', error);
    alert("Une erreur s'est produite lors de l'envoi du formulaire.");
  });
};

const Basic = () => (
  
  useEffect(() => {
    emailjs.init('okCH71BTXGKRxEAU6');
  }, []),
  <div>
    <Formik
      initialValues={{ email: "", name:"",surname:"" ,phone:""}}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form
        id="contact-form"
          className="contain my-12 font-assistantRegular flex flex-col mx-8 px-3 pt-6  md:mx-16 lg:my-0 lg:grid lg:grid-cols-2 lg:mx-96 lg:mb-20 hover:scale-100 hover:ease-in-out hover:duration-200 lg:hover:scale-105 "
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col items-center lg:ml-12 ">
            <div className="flex flex-col items-center py-4 lg:mr-12">
              Votre adresse email
              <Input
                className="w-3/4 dark:hover:bg-cyan-950"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </div>
          </div>
          {errors.email && touched.email && errors.email}
        
          <div className="flex flex-col items-center lg:ml-12 ">
            <label htmlFor="">Votre nom</label>
            <Input type="text" name="name" className="w-3/4 dark:hover:bg-cyan-950" />
          </div>
          <div className="flex flex-col items-center py-4 lg:pt-0 lg:mr-12">
            <label htmlFor="">Votre prénom</label>
            <Input type="text" name="surname" className="w-3/4 dark:hover:bg-cyan-950" />
          </div>
          <div className="flex flex-col items-center py-4 lg:pt-0 lg:mr-12">
            <label htmlFor="">Votre Téléphone</label>
            <Input type="text" name="phone" className="w-3/4 dark:hover:bg-cyan-950" />
          </div>

          <div className="mx-8  flex flex-col items-center  lg:justify-center lg:col-span-2 lg:py-4 lg:mx-2">
            <label htmlFor="">Objet du message</label>
            <textarea
              name="message"
            
              className="h-40 px-3 md:px-36 lg:w-10/12   lg:h-72 rounded-lg bg-cyan-800 hover:bg-white text-black border border-blue-300 focus-visible:border-blue-300 focus:border-blue-300 hover:transition hover:ease-in-out hover:duration-200 dark:hover:bg-cyan-950"
            ></textarea>
          </div>
          <div className="flex flex-row justify-center py-8 lg:col-span-2 lg:py-8 lg:pb-10">

          
            <Button
            
              type="submit"
              disabled={isSubmitting}
              value="Envoyer"
              className="uppercase px-4 py-4 w-36"
              
              onClick={() => onSubmit()}
            ></Button>
            
          </div>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;
