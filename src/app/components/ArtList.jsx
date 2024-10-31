"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { fetchArtwork } from "@/api/libs/api";

export default function ArtList() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const artworkData = await fetchArtwork();
        setArtworks(artworkData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (artworks.length === 0) return <p className="text-center">Loading...</p>;

  return (
    <div className="my-[2rem] w-full">
      <div className="container mx-auto w-[80%] ">
        <div className="text-[2rem] font-semibold my-4">Now on View!</div>
        <div className="flex gap-4 flex-nowrap overflow-x-auto no-scrollbar">
          {artworks.map((artwork) => (
            <Link key={artwork.id} href={`/${artwork.id}`} className="">
              <ArtCard
                imageUrl={artwork.imageUrl}
                caption={artwork.title}
                uploader={artwork.artist.name}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function ArtCard({ imageUrl, caption, uploader }) {
  return (
    <div className="bg-white min-w-[300px] max-w-[300px]">
      <div className="relative w-full cursor-pointer">
        <img
          src={imageUrl}
          alt={caption}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2 text-black">{caption}</h2>
        <p className="text-gray-500 text-sm">Created by {uploader}</p>
      </div>
    </div>
  );
}
