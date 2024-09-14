import { useState } from "react";
import { post } from "../lib/api";
import { useFetchMovies } from "./useFetchMovies";
import { useFetchSchedules } from "./useFetchSchedules";
import { useFetchSeats } from "./useFetchSeats";
import { useStepManagement } from "./useStepManagement";
import { useSeatSelection } from "./useSeatSelection";

export const useCinemaReservations = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);

  const { movies, isLoading: isLoadingMovies, error: movieError } = useFetchMovies();
  const { schedules, isLoading: isLoadingSchedules, error: scheduleError } = useFetchSchedules(selectedMovie, setCurrentStep);
  const { seats, setSeats, isLoading: isLoadingSeats, error: seatsError } = useFetchSeats(selectedSchedule, setCurrentStep);
  const { selectedSeats, setSelectedSeats, handleSeatClick } = useSeatSelection(seats, setSeats);
  useStepManagement({ currentStep, setCurrentStep, setSelectedMovie, setSelectedSchedule, setSelectedSeats });

  const handleConfirmReservation = async () => {
    try {
      const response = await post("/api/v1/tickets", {
        scheduleId: selectedSchedule.scheduleId,
        customerEmail: "john.doe@example.com", // Hardcoded for now
        reservations: selectedSeats.map(seat => ({ seatId: seat.seatId })),
      });
      alert(`Reservation confirmed! Ticket: ${response.ticketId}`);
      setCurrentStep(0);
    } catch (error) {
      console.error("Error confirming reservation", error);
    }
  };

  return {
    movies,
    schedules,
    seats,
    selectedMovie,
    setSelectedMovie,
    selectedSchedule,
    setSelectedSchedule,
    selectedSeats,
    handleSeatClick,
    currentStep,
    setCurrentStep,
    isLoading: isLoadingMovies || isLoadingSchedules || isLoadingSeats,
    error: movieError || scheduleError || seatsError,
    handleConfirmReservation,
  };
};
