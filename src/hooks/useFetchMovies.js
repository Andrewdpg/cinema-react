import { useState, useEffect } from "react";
import { get } from "../lib/api";

export const useFetchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await get("/api/v1/movies");
        setMovies(data);
      } catch (error) {
        setError("Error fetching movies. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { movies, isLoading, error };
};
