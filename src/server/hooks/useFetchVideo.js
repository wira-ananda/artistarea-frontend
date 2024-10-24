import { useState, useEffect } from "react";
import useFetchData from "../../server/hooks/useFetchData";

const useFetchVideo = () => {
  const {
    data: video,
    loading,
    error,
  } = useFetchData(
    "https://api.sheety.co/19d7975c8b9de9a1359c61369d16493d/abbulosibatangDatabase/videoplayer"
  );

  const videoUrls = Array.isArray(video?.videoplayer)
    ? video.videoplayer.map(item => item.url)
    : ["https://www.youtube.com/watch?v=V9PVRfjEBTI", "https://www.youtube.com/watch?v=5GJWxDKyk3A", "https://www.youtube.com/watch?v=-tn2S3kJlyU", "https://www.youtube.com/watch?v=cW8VLC9nnTo&list=RDEMcce0hP5SVByOVCd8UWUHEA&index=10"];

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
