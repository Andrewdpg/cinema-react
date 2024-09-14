import { useState } from "react";

export const useSeatSelection = (seats, setSeats) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatId) => {
    const updatedSeatMatrix = seats.map((row) =>
      row.map((seat) => {
        if (seat.seatId === seatId && seat.status !== "reserved") {
          return {
            ...seat,
            status: seat.status === "selected" ? "available" : "selected",
          };
        }
        return seat;
      })
    );

    setSeats(updatedSeatMatrix);
    setSelectedSeats(
      updatedSeatMatrix.flat().filter((seat) => seat.status === "selected")
    );
  };

  return { selectedSeats, setSelectedSeats, handleSeatClick };
};
