import { useState, useEffect } from "react";
import axios from "axios";

const useFetchPhotos = (url) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("Photos fetched successfully:", response.data);
        setPhotos(response.data.foto); // Menyimpan data foto
      } catch (error) {
        console.error("Error fetching photos:", error);
        setError("Failed to fetch photos.");
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, [url]);

  return { photos, loading, error };
};

export default useFetchPhotos;
