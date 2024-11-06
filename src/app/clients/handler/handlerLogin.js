export const handleSubmitLogin = (values, user, artist, isArtist, {setSubmitting})=> {
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
          window.location.href = "/home";
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
          window.location.href = "/home";
        } else {
          console.log("Salah");
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      setSubmitting(false);
    }
}