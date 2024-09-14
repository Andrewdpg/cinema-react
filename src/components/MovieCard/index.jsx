function MovieCard({movie, selectedMovie, onSelectMovie}) {

  const [year] = movie.releaseDate.split("-");

  return (
    <div
      key={movie.movieId}
      className={`cursor-pointer rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105 ${
        selectedMovie?.movieId === movie.movieId ? 'ring-2 ring-red-600' : ''
      }`}
      onClick={() => onSelectMovie(movie)}
    >
      <div className="relative">
        <img
          src={movie.image}
          alt={movie.title}
          width={300}
          height={400}
          className="w-full h-64 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4">
          <h3 className="font-bold text-lg">{movie.title}</h3>
          <p className="text-sm text-red-400">{movie.director} • {year} • {movie.runtime} min </p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;