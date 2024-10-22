import { useState, useEffect } from "react";
import axios from "axios";

const useFetchArticles = (url) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("Articles fetched successfully:", response.data);
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setError("Failed to fetch articles.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [url]);

  return { articles, loading, error };
};




module.exports = useFetchArticles;