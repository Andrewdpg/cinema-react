import React from "react";
import { Card, CardContent, CardFooter } from "../../components/Layout/Card";
import Header from "../../components/Header";
import ReservationTabs from "../../components/ReservationTabs";
import ReservationButton from "../../components/ReservationButton";
import { useCinemaReservations } from "../../hooks/useCinemaReservations";

function Home() {
  const {
    movies, schedules, seats, selectedMovie, selectedSchedule, selectedSeats, handleSeatClick,
    setSelectedMovie, setSelectedSchedule, currentStep, setCurrentStep, isLoading, error, handleConfirmReservation
  } = useCinemaReservations(); 

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-5xl mx-auto bg-gray-900 shadow-2xl rounded-lg overflow-hidden">
        <Header />
        <CardContent className="p-6">
          <ReservationTabs
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            movies={movies}
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
            schedules={schedules}
            selectedSchedule={selectedSchedule}
            setSelectedSchedule={setSelectedSchedule}
            seats={seats}
            handleSeatClick={handleSeatClick}
            isLoading={isLoading}
            selectedSeats={selectedSeats}
          />
        </CardContent>
        <CardFooter className="bg-black px-6 py-4">
          <ReservationButton
            handleConfirmReservation={handleConfirmReservation}
            disabled={!selectedMovie || !selectedSchedule || selectedSeats.length === 0}
          />
        </CardFooter>
      </Card>
    </div>
  );
}

export default Home;
