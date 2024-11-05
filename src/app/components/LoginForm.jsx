"use client";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { fetchAllUser, fetchAllArtist } from "@/api/libs/fetching";

const validationSchema = Yup.object({
  username: Yup.string().required("Username wajib diisi"),
  password: Yup.string().required("Password wajib diisi"),
});

const LoginForm = () => {
  const [isArtist, setIsArtist] = useState(false);
  const [user, setUser] = useState([]);
  const [artist, setArtist] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isArtist) {
          const artistData = await fetchAllArtist();
          setArtist(artistData);
        } else {
          const userData = await fetchAllUser();
          setUser(userData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [isArtist]);

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Login dicoba:", values);
    setSubmitting(true);
    try {
      if (isArtist) {
        const foundArtist = artist.find(
          (artist) =>
            artist.name === values.username &&
            artist.password === values.password
        );
        if (foundArtist) {
          console.log("Login berhasil", foundArtist);
          window.location.href = "/user";
        } else {
          console.log("Salah");
        }
      } else {
        const foundUser = user.find(
          (user) =>
            user.email === values.username && user.password === values.password
        );
        if (foundUser) {
          console.log("Login berhasil", foundUser);
          window.location.href = "/user";
        } else {
          console.log("Salah");
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      setSubmitting(false);
    }
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
                {isArtist && (
                  <button onClick={() => setIsArtist(false)}>
                    pindah ke akun user | lg di artist
                  </button>
                )}
                {!isArtist && (
                  <button onClick={() => setIsArtist(true)}>
                    pindah ke akun artist | lg di user
                  </button>
                )}
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
