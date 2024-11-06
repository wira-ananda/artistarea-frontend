"use client"
import { useState } from "react";

const useMode = () => {
  const [isArtist, setIsArtist] = useState(false);
  const [isLogin, setIsLogin] = useState(true)
  return { isArtist, setIsArtist, isLogin, setIsLogin };
};

export default useMode;