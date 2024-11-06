"use client"
import { useEffect, useState } from "react"
import { fetchAllArtwork, fetchArtworkById } from "@/api/apiServices"

export const useFetchAllArtwork = ()=> {
  const [artworks, setArtworks]= useState([]
  )
  useEffect(()=>{
    const fetchData = async ()=> {
      try {
        const artworksData = await fetchAllArtwork()
        setArtworks(artworksData)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData()
  
  }, [] )
  return {artworks: artworks || []}
}

export const useFetchArtworkById = (id)=> {
  const [artwork, setArtwork] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    const fetchData = async ()=> {
      try {
        const artworkData = await fetchArtworkById(id)
        setArtwork(artworkData)
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally{
        setLoading(false)
      }
    }
    fetchData()
  }, [id])
  return {artwork: artwork || [], loading}
} 

