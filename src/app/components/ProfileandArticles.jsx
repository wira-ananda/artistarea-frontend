"use client";
import React from "react";
import ReactPlayer from "react-player/youtube";
import { MdOutlineSlowMotionVideo, MdOutlineArticle } from "react-icons/md";
import useFetchData from "../../server/hooks/useFetchData";
import useFetchVideo from "../../server/hooks/useFetchVideo";

export default function ProfileandArticles() {
  const {
    data: articles,
    loading,
    error,
  } = useFetchData(
    "https://v1.nocodeapi.com/urwiraaanda/medium/IdwHnhSFoYCavcFK"
  );

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
          <div>
            {loading ? (
              <p className="text-yellowColor">Loading articles...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              <div className="list-disc pl-5 pt-5">
                {articles.map((article, index) => {
                  const contentEncoded = article.content_encoded;
                  const imgRegex = /<img[^>]+src="([^">]+)"/;
                  const matchImg = contentEncoded.match(imgRegex);
                  const dateRegex = /<strong>(.*?)<\/strong>/;
                  const matchDate = contentEncoded.match(dateRegex);

                  return (
                    <a key={index} className="flex pb-4 w-full">
                      <a
                        className="flex w-full gap-4 md:text-[1.35rem] text-[1.5rem]  cursor-pointer hover:bg-gray-900 transition-colors duration-200 ease-in-out"
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {matchImg && (
                          <div className="w-[30%] md:w-[20%] text-white h-full my-auto">
                            <img
                              className="w-[150px] h-[70px] object-cover"
                              src={matchImg[1]}
                              alt={`Image for ${article.title}`}
                            />
                          </div>
                        )}
                        <div className="w-[70%] md:w-[80%] md:my-auto">
                          {matchDate && (
                            <p className="text-white">
                              <p>{matchDate[1]}</p>
                            </p>
                          )}
                          <p className="text-white font-semibold">
                            {article.title}
                          </p>
                        </div>
                      </a>{" "}
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
