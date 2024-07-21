import React from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import GlowingText from "./GlowingText";
import { FormSchema } from "../../types/Form";
import { type TFormSchema } from "../../types/Form";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<TFormSchema>({ resolver: zodResolver(FormSchema), mode: "onSubmit", });

  const onSubmit = async (data: TFormSchema) => {
    const response = await fetch("/api/SaveClientData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    if (response.ok) {
      // handle success
      if(responseData.success === true){
        toast.success("Message sent successfully.");
      }else{
        toast.error("Some error occured.")
      }
      
    } else {
      // handle error
      toast.error("Failed to send message");
      return;
    }

    // setting errors
    if (responseData.errors) {
      const errors = responseData.errors;
      if (errors.FirstName) {
        setError("FirstName", {
          type: "server",
          message: errors.FirstName,
        });
      } else if (errors.LastName) {
        setError("LastName", {
          type: "server",
          message: errors.LastName,
        });
      } else if (errors.Email) {
        setError("Email", {
          type: "server",
          message: errors.Email,
        });
      } else if (errors.Phone) {
        setError("Phone", {
          type: "server",
          message: errors.Phone,
        });
      } else if (errors.Message) {
        setError("Message", {
          type: "server",
          message: errors.Message,
        });
      } else {
        alert("Something went wrong!");
      }
    }

    // reset the form in the end,
    reset();
  };

  return (
    <div  className="z-40  md:py-10  lg:py-14 lg:pb-0 ">
      <div className=" lg:pl-20 xl:pl-28">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          className="text-center md:text-left px-8 mb-12"
        >
          <GlowingText text="Get in Touch" />

          <p className="md:mt-1 text-neutral-300">
            Have a project in mind? Get in touch and let's make it happen!
          </p>
        </motion.div> 

        <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
          {/* <!-- Card --> */}
          <div className="flex mb-8 md:mb-16  flex-col border border-1 border-gray-500 rounded-xl p-4 sm:p-6 lg:p-8 bg-black bg-opacity-10 backdrop-blur-lg mx-6 ">
            <h2 className="mb-8 text-xl font-semibold text-neutral-200">
              Fill in the form
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-4">
                {/* <!-- Grid --> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      {...register("FirstName")}
                      type="text"
                      className="py-3 px-4 block w-full  rounded-lg text-sm focus:border-blue-500  disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 border-neutral-700 text-neutral-200 placeholder-neutral-500 focus:ring-neutral-600"
                      placeholder="First Name"
                    />
                    {errors.FirstName && (
                      <p className="text-sm mt-2 text-red-500">
                        {errors.FirstName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      {...register("LastName")}
                      type="text"
                      className="py-3 px-4 block w-full  rounded-lg text-sm focus:border-blue-500  disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 border-neutral-700 text-neutral-200 placeholder-neutral-500 focus:ring-neutral-600"
                      placeholder="Last Name"
                    />
                    {errors.LastName && (
                      <p className="text-sm mt-2 text-red-500">
                        {errors.LastName.message}
                      </p>
                    )}
                  </div>
                </div>
                {/* <!-- End Grid --> */}

                <div>
                  <input
                    {...register("Email")}
                    type="email"
                    autoComplete="email"
                    className="py-3 px-4 block w-full  rounded-lg text-sm focus:border-blue-500  disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 border-neutral-700 text-neutral-200 placeholder-neutral-500 focus:ring-neutral-600"
                    placeholder="Email"
                  />
                  {errors.Email && (
                    <p className="text-sm mt-2 text-red-500">
                      {errors.Email.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    {...register("Phone")}
                    type="text"
                    className="py-3 px-4 block w-full  rounded-lg text-sm focus:border-blue-500  disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 border-neutral-700 text-neutral-200 placeholder-neutral-500 focus:ring-neutral-600"
                    placeholder="Phone Number"
                  />
                  {errors.Phone && (
                    <p className="text-sm mt-2 text-red-500">
                      {errors.Phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    {...register("Message")}
                    rows={4}
                    className="py-3 px-4 block w-full  rounded-lg text-sm focus:border-blue-500  disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 border-neutral-700 text-neutral-200 placeholder-neutral-500 focus:ring-neutral-600"
                    placeholder="Message"
                  ></textarea>
                  {errors.Message && (
                    <p className="text-sm mt-2 text-red-500">
                      {errors.Message.message}
                    </p>
                  )}
                </div>
              </div>
              {/* <!-- End Grid --> */}

              <div className="mt-4 grid">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-cyan-300 to-violet-700 text-white disabled:opacity-50 disabled:pointer-events-none disabled:bg-gray-600"
                >
                  Submit
                </button>
              </div>

              <div className="mt-5 text-center">
                <p className="text-sm text-gray-200 ">
                  Your dream website awaits.
                </p>
              </div>
            </form>
          </div>
          {/* <!-- End Card --> */}

          <div className="divide-y divide-neutral-800">
            {/* <!-- Icon Block --> */}

            {/* <!-- End Icon Block --> */}

            {/* <!-- Icon Block --> */}
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
        closeButton={false}
        />
    </div>
  );
}

export default ContactForm;
