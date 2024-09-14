import { useEffect } from "react";

export const useStepManagement = ({ currentStep, setCurrentStep, setSelectedMovie, setSelectedSchedule, setSelectedSeats }) => {
  useEffect(() => {
    if (currentStep === 0) {
      setSelectedMovie(null);
      setSelectedSchedule(null);
      setSelectedSeats([]);
    } else if (currentStep === 1) {
      setSelectedSchedule(null);
      setSelectedSeats([]);
    } else if (currentStep === 2) {
      setSelectedSeats([]);
    }
  }, [currentStep]);

  return { setCurrentStep };
};
