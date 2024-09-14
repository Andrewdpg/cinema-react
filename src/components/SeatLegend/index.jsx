import seatIcon from '../../assets/icons/seat.svg';

function SeatLegend() {
  return (
    <div className="flex justify-center space-x-6 mt-4">
      <div className="flex items-center">
        <div className="w-8 h-8 bg-gray-300 rounded-t-lg mr-2 flex items-center justify-center">
          <img className="w-6 h-6 text-gray-800" src={seatIcon} alt="Chair" />
        </div>
        <span className="text-sm text-gray-300">Available</span>
      </div>
      <div className="flex items-center">
        <div className="w-8 h-8 bg-red-600 rounded-t-lg mr-2 flex items-center justify-center">
          <img className="w-6 h-6 text-gray-800" src={seatIcon} alt="Chair" />
        </div>
        <span className="text-sm text-gray-300">Selected</span>
      </div>
      <div className="flex items-center">
        <div className="w-8 h-8 bg-gray-500 rounded-t-lg mr-2 flex items-center justify-center">
          <img className="w-6 h-6 text-gray-800" src={seatIcon} alt="Chair" />
        </div>
        <span className="text-sm text-gray-300">Reserved</span>
      </div>
    </div>
  );
}

export default SeatLegend;