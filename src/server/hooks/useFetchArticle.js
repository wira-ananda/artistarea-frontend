import { useState, useEffect } from "react";
import axios from "axios";

const useFetchArticle = (url) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(url);
        const parsedArticles = response.data; // Akses array artikel dari JSON
        setArticles(parsedArticles);
      } catch (err) {
        setError("Error fetching articles.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [url]);

  return { articles, loading, error };
};

export default useFetchArticle;
