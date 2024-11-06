"use client";
import React from "react";
import Link from "next/link";
import { useFetchAllArtwork } from "../clients/useFetchArtwork";

export default function ArtList() {
  const { artworks } = useFetchAllArtwork();

  if (artworks.length === 0)
    return <p className="text-center justify-center">Loading...</p>;

  return (
    <div className="my-[2rem] w-full ">
      <div className="container mx-auto w-[80%] ">
        <div className="text-[2rem] font-semibold my-4">Now on View!</div>
        <div className="flex gap-4 h-full overflow-x-auto no-scrollbar">
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
    <div className="bg-white min-w-[300px] max-w-[300px] h-full cursor-pointer hover:bg-gray-300 transition-colors duration-200 ease-in-out">
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
