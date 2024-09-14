import React from "react";
import { TicketIcon } from "lucide-react";
import Button from "../../components/Layout/Button";

function ReservationButton({ handleConfirmReservation, disabled }) {
  return (
    <Button
      onClick={handleConfirmReservation}
      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
      disabled={disabled}
    >
      <TicketIcon className="w-5 h-5 mr-2" /> Confirm Reservation
    </Button>
  );
}

export default ReservationButton;