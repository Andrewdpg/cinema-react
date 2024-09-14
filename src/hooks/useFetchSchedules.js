import { useState, useEffect } from "react";
import { get } from "../lib/api";

export const useFetchSchedules = (selectedMovie, setCurrentStep) => {
  const [schedules, setSchedules] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (selectedMovie) {
      setCurrentStep(1);
      const fetchSchedules = async () => {
        try {
          const data = await get(`/api/v1/schedules?movieId=${selectedMovie.movieId}`);
          setSchedules(data);
        } catch (error) {
          setError("Error fetching schedules. Please try again later.");
        } finally {
          setIsLoading(false);
        }
      };

      fetchSchedules();
    }
  }, [selectedMovie]);

  return { schedules, isLoading, error };
};
