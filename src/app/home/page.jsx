"use client";
import React from "react";
import ArtList from "../components/Artwork/ArtList";
import Footer from "../components/Footer";
import Homepage from "../components/Homepage";
import useMode from "../clients/hooks/useMode";
import PostArtwork from "../components/Artwork/PostArtwork";

export default function User() {
  const { isArtist, setIsArtist, isLogin, setIsLogin } = useMode();
  console.log(isArtist);
  return (
    <div>
      {" "}
      <Homepage />
      <ArtList />
      {isArtist && <PostArtwork />}
      <Footer />
    </div>
  );
}
