import React from "react";
import { FilmIcon, ClockIcon, ArmchairIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/Layout/Tabs";
import MovieSelector from "../../components/MovieSelector";
import ScheduleSelector from "../../components/ShowTimeSelector";
import SeatMap from "../../components/SeatMap";
import SeatLegend from "../../components/SeatLegend";
import ReservationSummary from "../../components/ReservationSummary";

function ReservationTabs({
  currentStep,
  setCurrentStep,
  movies,
  selectedMovie,
  setSelectedMovie,
  schedules,
  selectedSchedule,
  setSelectedSchedule,
  seats,
  handleSeatClick,
  isLoading,
  selectedSeats
}) {
  return (
    <Tabs value={currentStep.toString()} className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-8">
        <TabsTrigger value="0" disabled={currentStep < 0} onClick={() => setCurrentStep(0)}>
          <FilmIcon className="w-5 h-5 mr-2" /> Select Movie
        </TabsTrigger>
        <TabsTrigger value="1" disabled={currentStep < 1} onClick={() => setCurrentStep(1)}>
          <ClockIcon className="w-5 h-5 mr-2" /> Choose Schedule
        </TabsTrigger>
        <TabsTrigger value="2" disabled={currentStep < 2} onClick={() => setCurrentStep(2)}>
          <ArmchairIcon className="w-5 h-5 mr-2" /> Pick Seats
        </TabsTrigger>
      </TabsList>
      <TabsContent value="0">
        <MovieSelector movies={movies} selectedMovie={selectedMovie} onSelectMovie={setSelectedMovie} />
      </TabsContent>
      <TabsContent value="1">
        <ScheduleSelector schedules={schedules} selectedSchedule={selectedSchedule} onSelectSchedule={setSelectedSchedule} />
      </TabsContent>
      <TabsContent value="2">
        {isLoading ? (
          <div className="text-center">Loading seats...</div>
        ) : (
          <div className="space-y-6">
            <SeatMap seats={seats} onSeatClick={handleSeatClick} />
            <SeatLegend />
            <ReservationSummary selectedMovie={selectedMovie} selectedSchedule={selectedSchedule} selectedSeats={selectedSeats} />
          </div>
        )}
      </TabsContent>
    </Tabs>
  );
}

export default ReservationTabs;
