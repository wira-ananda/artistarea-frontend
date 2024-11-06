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

// untuk deployment dilarang menggunakan localstorage

// "use client"
// import { useState } from "react";

// const useMode = () => {
//   const [isArtist, setIsArtist] = useState(false);
//   const [isLogin, setIsLogin] = useState(true)
//   return { isArtist, setIsArtist, isLogin, setIsLogin };
// };

// export default useMode;