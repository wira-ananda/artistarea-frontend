"use client";
import React, { useState, useEffect } from "react";
import Header from "@/app/user/components/Header";
import Footer from "@/app/user/components/Footer";
import { fetchArtworkById } from "@/api/libs/api";

const ArtworkDetailPage = ({ params }) => {
  const { id } = params;
  const [artwork, setArtwork] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const artworkData = await fetchArtworkById(id);
        setArtwork(artworkData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

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
