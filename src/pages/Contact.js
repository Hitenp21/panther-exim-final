import { useRef, useState } from "react";
import axios from "axios";
import backgroundImage from "../image/contact2.jpg";
import "./contact.css";
import Loader from "../components/loader";
import emailjs from '@emailjs/browser';
import FormLoader from "../components/formLoader";
import { ToastContainer, toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import WhatsAppButton from "../components/whatsapp";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phoneNumber: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);


  const resetFormFields = () => {
    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phoneNumber: "",
      message: ""
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData)
  //   axios
  //     .post(`${process.env.URL}/send-email`, formData)
  //     .then((response) => {
  //       // Show alert message
  //       alert("Form submitted successfully!");
  //       // Reset form fields
  //     })
  //     .catch((error) => {
  //       // Handle error
  //     });
  //   resetFormFields();
  // };


  const form = useRef();

  const ToastSuccess = () => {
    toast.success('Email sent.');
  }

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm('service_2tnu9ok', 'template_nd1p2qq', form.current,
        'RBNtkp8fGkxzUoUbx'
      )
      .then(
        () => {
          console.log('SUCCESS!');
          resetFormFields();
          ToastSuccess();

        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };


  return (
    <>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
     
        
     <div>
        <img className="img-fluid w-full" src="/images/contact2.jpg" />

      </div>
      

      <div className="contact-us bg-white px-6 sm:py-32 lg:px-8" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
        <div className="flex flex-col bg-white sm:flex-row justify-between mx-auto max-w-7xl gap-8">
          {/* Left side with company logo, address, contact number, and email */}
          <div className="company-info flex flex-col justify-center items-center sm:items-start mb-8 sm:mb-10">
            {/* Company logo */}
            <img
              src="/images/logo/PATHER EXIM.png"
              alt="Company Logo"
              className="logo mb-4"
            // style={{ height: "25%", width: "70%", marginRight:"10px" }}

            />

            {/* Address */}
            <p className="text-dark text-center sm:text-left  flex items-center" >
              <img
                className="mx-6 h-2 w-2 mr-2"
                src="https://img.icons8.com/?size=100&id=3723&format=png"
                // style={{ height: "28px", width: "28px" , marginRight:"10px"}}
                alt="map"
              />
              Plot No. 3021, Phase-III, Dared - GIDC, Jamnagar - 361004.
            </p>

            {/* Contact number */}
            <p className="text-dark text-center sm:text-left  flex items-center">
              <img
                className="mx-6 0 h-2 w-2 mr-2"
                src="https://img.icons8.com/?size=100&id=9659&format=png"
                // style={{ height: "28px", width: "28px"}}
                alt="phone"
              />
              +917984353863
            </p>

            {/* Email */}
            <p className="text-dark text-center sm:text-left flex items-center justify-center">
              <img
                className="mx-6 my-0 h-2 w-2 mr-2"
                src="https://cdn-icons-png.flaticon.com/128/2989/2989993.png"
                // style={{ height: "28px", width: "28px" }}
                alt="Email"
              />
              <span>info@pantherexim.com</span>
            </p>
          </div>

          {/* Right side with contact form */}
          <div className="w-full">
            <div className="contact-tital mx-auto  max-w-xl text-dark">
              <h2 className="contact-title" style={{ fontFamily: 'Amiri serif', wordSpacing: "2px", letterSpacing: "1px" }}>
                CONTACT US
              </h2>
            </div>
            {loading ?
              (<FormLoader />) :
              (
                <form
                  className="mx-auto mt-16 max-w-xl sm:mt-20 "
                  ref={form} onSubmit={sendEmail}
                >
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-semibold leading-6 "
                      >
                        First Name
                      </label>
                      <div className="input-field mt-2.5">
                        <input
                          type="text"
                          name="firstName"
                          id="first-name"
                          autoComplete="given-name"
                          onChange={(e) => { handleChange(e) }}
                          value={formData.firstName}
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-dark focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-semibold leading-6 text-dark"

                      >
                        Last Name
                      </label>
                      <div className="input-field mt-2.5">
                        <input
                          type="text"
                          name="lastName"
                          id="last-name"
                          autoComplete="family-name"
                          onChange={(e) => { handleChange(e) }}
                          value={formData.lastName}
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="company"
                        className="block text-sm font-semibold leading-6 text-dark"
                      >
                        Company
                      </label>
                      <div className="input-field mt-2.5">
                        <input
                          type="text"
                          name="company"
                          id="company"
                          autoComplete="organization"
                          onChange={(e) => { handleChange(e) }}
                          value={formData.company}
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          style={{ borderBlockColor: 'darkblue' }}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold leading-6 text-dark"
                      >
                        Email
                      </label>
                      <div className="input-field mt-2.5">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          autoComplete="email"
                          onChange={(e) => { handleChange(e) }}
                          value={formData.email}
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="phone-number"
                        className="block text-sm font-semibold leading-6 text-dark"
                      >
                        Phone Number
                      </label>
                      <div className="input-field relative mt-2.5">
                        <input
                          type="tel"
                          name="phoneNumber"
                          id="phone-number"
                          autoComplete="tel"
                          onChange={(e) => { handleChange(e) }}
                          value={formData.phoneNumber}
                          className="block w-full rounded-md border-0 px-3.5 py-2  ml-25 text-dark  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold leading-6 text-dark"
                      >
                        Message
                      </label>
                      <div className="input-field mt-2.5">
                        <textarea
                          name="message"
                          id="message"
                          rows={4}
                          onChange={(e) => { handleChange(e) }}
                          value={formData.message}
                          className="block w-full rounded-md  px-3.5 py-2 text-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-10">
                    <button
                      type="submit"
                      className="block w-full rounded-md bg-blue-600 dark:bg-gray-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-500 dark:hover:bg-dark-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
                    >
                      Send Message
                    </button>

                  </div>
                </form>
              )}
          </div>
        </div>
      </div>

      <WhatsAppButton/>

    </>
  );
}
