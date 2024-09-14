function ReservationSummary({ selectedMovie, selectedSchedule, selectedSeats }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg text-white">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Reservation Summary</h2>
      {selectedMovie && (
        <div className="mb-2">
          <span className="font-semibold">Movie:</span> {selectedMovie.title} ({selectedMovie.year})
        </div>
      )}
      {selectedSchedule && (
        <div className="mb-2">
          <span className="font-semibold">Schedule:</span> {selectedSchedule.time}
        </div>
      )}
      <div className="mb-2">
        <span className="font-semibold">Selected Seats:</span> {selectedSeats.join(', ') || 'None'}
      </div>
      <div className="text-xl font-bold text-red-600 mt-4">
        Total: ${selectedSeats.length * selectedSchedule.price}
      </div>
    </div>
  )
}

export default ReservationSummary;