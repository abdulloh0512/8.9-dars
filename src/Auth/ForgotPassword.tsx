import {
    fetchSignInMethodsForEmail,
    sendPasswordResetEmail,
  } from "firebase/auth";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import { auth } from "../Helpers/Firebase";
  
  function ForgotPassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [loader, setLoader] = useState(false);
  
    const validateEmail = (email: string) => {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    };
    const handleResetPassword = async () => {
      try {
        // Check if email exists in Firebase Authentication
        const methods = await fetchSignInMethodsForEmail(auth, email);
        if (methods.length === 0) {
          setError("Email does not exist.");
          return;
        }
  
        // Send password reset email
        await sendPasswordResetEmail(auth, email);
        setError("Password reset email sent. Please check your inbox.");
      } catch (err: any) {
        if (err.code === "auth/user-not-found") {
          setError("Email does not exist.");
        } else {
          setError(err.message);
        }
      }
    };
  
    return (
      <>
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
           
            <a className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
              Abdulloh's Project
            </a>
            Comming Soon
            <button
              onClick={() => navigate(-1)}
              className="mt-5 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              back
            </button>
          </div>
        </section>{" "}
      </>
    );
  }
  
  export default ForgotPassword;