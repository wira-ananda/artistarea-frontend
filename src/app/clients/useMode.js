import { useState, useEffect } from "react";

const useMode = () => {
  const [isArtist, setIsArtist] = useState(() => {
    return JSON.parse(localStorage.getItem("isArtist")) || false;
  });

  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    localStorage.setItem("isArtist", JSON.stringify(isArtist));
  }, [isArtist]);

  return { isArtist, setIsArtist, isLogin, setIsLogin };
};

export default useMode;
