"use client";
import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { useFetchArtworkById } from "../clients/useFetchArtwork";

const ArtworkDetailPage = ({ params }) => {
  const { id } = params;
  const { artwork, loading } = useFetchArtworkById(id);

  if (loading) return <p className="text-center">Loading...</p>;

  if (!artwork) return <p className="text-center">Artwork tidak ditemukan.</p>;

  return (
    <>
      <Header gradient="textGradient2" />
      <div className="w-full mx-auto px-4 py-6">
        <div className="w-[90%] md:w-[60%] mx-auto">
          <h1 className="text-[4.3rem] font-bold mb-4">{artwork.title}</h1>
          <img
            src={artwork.imageUrl}
            alt={artwork.title}
            className="w-full h-auto mb-4"
          />
          <p className="text-black text-[2.1rem]">Price: {artwork.price}</p>
          <p className="text-black text-[2.1rem]">
            Created by: {artwork.artist.name}
          </p>
          <p className="text-black text-[2.1rem]">
            Likes: {artwork.likes.length}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ArtworkDetailPage;
