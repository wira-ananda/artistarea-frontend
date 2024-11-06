"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { postArtwork } from "@/api/libs/fetching";

const PostArtwork = () => {
  const validationSchema = Yup.object({
    title: Yup.string().required("Judul wajib diisi"),
    price: Yup.number().required("Harga wajib diisi").min(0, "Harga minimal 0"),
    imageUrl: Yup.string()
      .url("URL tidak valid")
      .required("URL gambar wajib diisi"),
    artistId: Yup.number()
      .required("ID Artis wajib diisi")
      .min(1, "ID Artis minimal 1"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await postArtwork(values);
      console.log("Artwork berhasil diposting");
      resetForm();
    } catch (error) {
      console.error("Gagal memposting artwork:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-center mb-4">Post Artwork</h2>
      <Formik
        initialValues={{
          title: "",
          description: "",
          price: "",
          imageUrl: "",
          artistId: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <label htmlFor="title" className="block font-medium">
                Judul
              </label>
              <Field
                type="text"
                name="title"
                id="title"
                className="w-full px-3 py-2 border rounded"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label htmlFor="description" className="block font-medium">
                Deskripsi
              </label>
              <Field
                as="textarea"
                name="description"
                id="description"
                className="w-full px-3 py-2 border rounded"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label htmlFor="price" className="block font-medium">
                Harga
              </label>
              <Field
                type="number"
                name="price"
                id="price"
                className="w-full px-3 py-2 border rounded"
              />
              <ErrorMessage
                name="price"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label htmlFor="imageUrl" className="block font-medium">
                URL Gambar
              </label>
              <Field
                type="text"
                name="imageUrl"
                id="imageUrl"
                className="w-full px-3 py-2 border rounded"
              />
              <ErrorMessage
                name="imageUrl"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label htmlFor="artistId" className="block font-medium">
                ID Artis
              </label>
              <Field
                type="number"
                name="artistId"
                id="artistId"
                className="w-full px-3 py-2 border rounded"
              />
              <ErrorMessage
                name="artistId"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              {isSubmitting ? "Mengirim..." : "Post Artwork"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PostArtwork;
