"use client";
import React from "react";
import ReactPlayer from "react-player/youtube";
import { MdOutlineSlowMotionVideo, MdOutlineArticle } from "react-icons/md";
import useFetchArticle from "../../server/hooks/useFetchArticle";
import useFetchVideo from "../../server/hooks/useFetchVideo";
import ArticlesList from "../components/ArticlesList";

export default function ProfileandArticles() {
  const { articles, loading, error } = useFetchArticle(
    "https://abbscout1987.vercel.app/api/articles"
  ); // Gunakan proxy URL
  const { isClient, videoUrls, currentVideoIndex, handleVideoEnd } =
    useFetchVideo();

  return (
    <div className="w-full bg-black">
      <div className="w-[80%] md:w-[90%] bottom-10 mx-auto block md:flex justify-between">
        <div className="md:w-[35%] w-full">
          <div className="h-[7vh] md:h-[13vh] bg-yellowColor md:bg-white flex items-center pl-[5%] md:pl-[10%] gap-[3rem]">
            <MdOutlineSlowMotionVideo size={40} />
            <span className="block text-left">
              <p className="font-bold text-[2rem]">All About</p>
              <p className="font-medium text-[1.7rem]">Abbulosibatang</p>
            </span>
          </div>
          <div className="video-container py-5 hover:bg-gray-900 transition-colors duration-200 ease-in-out">
            {isClient && (
              <ReactPlayer
                url={videoUrls[currentVideoIndex]}
                controls
                playing
                onEnded={handleVideoEnd}
                width="100%"
                height="240px"
              />
            )}
          </div>
        </div>
        <div className="md:w-[65%] w-full">
          <div className="h-[7vh] md:h-[13vh] bg-yellowColor flex items-center pl-[5%] gap-[3rem]">
            <MdOutlineArticle size={40} />
            <span className="block text-left">
              <p className="font-bold text-[2rem]">Articles & Updates</p>
              <p className="font-medium text-[1.7rem]">Abbulosibatang</p>
            </span>
          </div>
          <div className="pt-5 pl-5">
            <ArticlesList articles={articles} loading={loading} error={error} />
          </div>
        </div>
      </div>
    </div>
  );
}
