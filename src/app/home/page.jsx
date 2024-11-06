import React from "react";
import ArtList from "../components/ArtList";
import Footer from "../components/Footer";
import Homepage from "../components/Homepage";

export default function User() {
  return (
    <div>
      {" "}
      <Homepage />
      <ArtList />
      <Footer />
    </div>
  );
}
