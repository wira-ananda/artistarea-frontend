"use client"
import { useEffect, useState } from "react"
import { fetchAllUser } from "@/api/apiServices"
import useMode from "./useMode"

export const useFetchAllUser = () => {
  const [user, setUser] = useState([]);
  const {isArtist, setIsArtist} = useMode();

 useEffect(()=> {
  const fetchData = async ()=> {
    try {
      const userData = await fetchAllUser()
      setUser(userData)
    } catch (error) {
     console.log('Error fetching data:', error); 
    }
  }
  fetchData()
 }, [isArtist])
 
 return {user: user || []}
}
