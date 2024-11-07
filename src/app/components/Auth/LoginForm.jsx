import React, { use } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useFetchAllUser } from "../../clients/hooks/useFetchUser";
import { useFetchAllArtist } from "../../clients/hooks/useFetchArtist";
import { handleSubmitLogin } from "../../clients/handler/handlerLogin";

const LoginForm = ({ isArtist, setIsArtist }) => {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username wajib diisi"),
    password: Yup.string().required("Password wajib diisi"),
  });

  const { user } = useFetchAllUser();
  const { artist } = useFetchAllArtist();

  const handleSubmit = (values, { setSubmitting }) => {
    handleSubmitLogin(values, user, artist, isArtist, { setSubmitting });
  };

  return (
    <div className="w-full">
      <div className="w-[50%] mx-auto">
        <div className="w-[70%] mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
          <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium mb-1"
                  >
                    Name
                  </label>
                  <Field
                    type="text"
                    name="username"
                    id="username"
                    className="w-full px-3 py-2 border rounded-md"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
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
                  {isSubmitting ? "Loading..." : "Login"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
