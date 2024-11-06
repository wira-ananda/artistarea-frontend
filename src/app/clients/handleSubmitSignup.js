import { registerArtist, registerUser } from "@/api/libs/fetching";

export const handleSubmitSignup = async (values, isArtist, { setSubmitting, resetForm }) => {
  console.log("Mencoba sign up:", values);
  setSubmitting(true);

  try {
    if (isArtist) {
      await registerArtist(values);
      console.log("Sign up berhasil");
      resetForm();
      window.location.href = "/home";
    } else {
      await registerUser(values);
      console.log("Sign up berhasil");
      resetForm();
      window.location.href = "/home";
    }
  } catch (error) {
    console.error("Error during sign up:", error);
  } finally {
    setSubmitting(false);
  }
};
