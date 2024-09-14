import { useState, useEffect } from "react";
import { get } from "../lib/api";

export const useFetchSeats = (selectedSchedule, setCurrentStep) => {
  const [seats, setSeats] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (selectedSchedule) {
      setCurrentStep(2);
      const fetchSeats = async () => {
        try {
          const data = await get(`/api/v1/seats?scheduleId=${selectedSchedule.scheduleId}`);

          const sortedSeats = data.sort((a, b) => {
            const aRow = a.row.charCodeAt(0) - 65;
            const bRow = b.row.charCodeAt(0) - 65;
            return aRow - bRow || a.column - b.column;
          });

          const seatMatrix = [];
          let currentRow = sortedSeats[0].row;
          let currentRowSeats = [];

          sortedSeats.forEach((seat) => {
            if (seat.row === currentRow) {
              currentRowSeats.push(seat);
            } else {
              seatMatrix.push(currentRowSeats);
              currentRow = seat.row;
              currentRowSeats = [seat];
            }
          });

          if (currentRowSeats.length > 0) {
            seatMatrix.push(currentRowSeats);
          }

          setSeats(seatMatrix);
        } catch (error) {
          setError("Error fetching seats. Please try again later.");
        } finally {
          setIsLoading(false);
        }
      };

      fetchSeats();
    }
  }, [selectedSchedule]);

  return { seats, setSeats, isLoading, error };
};
