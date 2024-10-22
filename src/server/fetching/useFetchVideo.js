import { useState, useEffect } from "react";

const useFetchVideo = () => {
  const videoUrls = [
    "https://www.youtube.com/watch?v=V9PVRfjEBTI",
    "https://www.youtube.com/watch?v=5GJWxDKyk3A",
    "https://www.youtube.com/watch?v=-tn2S3kJlyU",
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videoUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  return { isClient, videoUrls, currentVideoIndex, handleVideoEnd };
};

export default useFetchVideo;
