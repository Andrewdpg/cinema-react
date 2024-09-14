import seatIcon from '../../assets/icons/seat.svg';

function SeatMap({ seats, onSeatClick }) {
  const numRows = seats.length;
  const numCols = Math.max(...seats.map(row => row.length));

  return (
    <div
      className="grid gap-2 overflow-auto"
      style={{
        gridTemplateRows: `repeat(${numRows}, auto)`,
        gridTemplateColumns: `repeat(${numCols}, auto)`,
      }}
    >
      {seats.flat().map((seat) => (
        <button
          key={seat.seatId}
          onClick={() => onSeatClick(seat.seatId)}
          className={`w-9 h-11 rounded-t-lg flex flex-col items-center justify-center text-xs font-semibold transition-all duration-300 ease-in-out relative ${
            seat.status === "available"
              ? "bg-gray-300 hover:bg-gray-400 text-gray-800"
              : seat.status === "selected"
              ? "bg-red-600 text-white"
              : "bg-gray-500 text-gray-300 cursor-not-allowed"
          }`}
          style={{
            gridRow: seat.row.charCodeAt(0) - 64,
            gridColumn: seat.column + 1,
          }}
          disabled={seat.status === "reserved"}
        >
          <img className="w-6 h-6 mb-3" src={seatIcon} alt="Chair" />
          <span className="absolute bottom-1 text-[10px] font-bold">
            {seat.row}
            {seat.column}
          </span>
        </button>
      ))}
    </div>
  );
}

export default SeatMap;