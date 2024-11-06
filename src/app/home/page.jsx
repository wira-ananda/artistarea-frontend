"use client";
import React from "react";
import ArtList from "../components/ArtList";
import Footer from "../components/Footer";
import Homepage from "../components/Homepage";
import useMode from "../clients/useMode";

export default function User() {
  const { isArtist, setIsArtist, isLogin, setIsLogin } = useMode();
  return (
    <div>
      {" "}
      <Homepage />
      <ArtList />
      <Footer />
    </div>
  );
}
