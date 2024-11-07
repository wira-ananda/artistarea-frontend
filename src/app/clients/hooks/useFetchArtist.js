"use client"
import { useEffect, useState } from "react"
import { fetchAllArtist } from "@/api/apiServices"
import useMode from "./useMode"

export const useFetchAllArtist = () => {
  const [artist, setArtist] = useState([]);
  const {isArtist, setIsArtist} = useMode();

 useEffect(()=> {
  const fetchData = async ()=> {
    try {
      const artistData = await fetchAllArtist()
      setArtist(artistData)
    } catch (error) {
     console.log('Error fetching data:', error); 
    }
  }
  fetchData()
 }, [isArtist])
 return {artist: artist ||[]}
}
