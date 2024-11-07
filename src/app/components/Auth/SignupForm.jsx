import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { handleSubmitSignup } from "../../clients/handler/handlerSignup";

const SignupForm = ({ isArtist, setIsArtist }) => {
  const validationSchema = Yup.object(
    isArtist
      ? {
          name: Yup.string().required("Nama wajib diisi"),
          password: Yup.string()
            .min(6, "Password minimal 6 karakter")
            .required("Password wajib diisi"),
        }
      : {
          name: Yup.string().required("Nama wajib diisi"),
          email: Yup.string()
            .email("Email tidak valid")
            .required("Email wajib diisi"),
          password: Yup.string()
            .min(6, "Password minimal 6 karakter")
            .required("Password wajib diisi"),
        }
  );

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    handleSubmitSignup(values, isArtist, { setSubmitting, resetForm });
  };

  return (
    <div className="w-full">
      <div className="w-[50%] mx-auto">
        <div className="w-[70%] mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
          <Formik
            initialValues={{ name: "", email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Nama
                  </label>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    className="w-full px-3 py-2 border rounded-md"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                {!isArtist && (
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1"
                    >
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                )}

                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium mb-1"
                  >
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    className="w-full px-3 py-2 border rounded-md"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600 transition duration-200"
                >
                  {isSubmitting ? "Loading..." : "Sign Up"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
