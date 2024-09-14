import MovieCard from '../MovieCard';

function MovieSelector({ movies, selectedMovie, onSelectMovie }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-red-600">Select a Movie</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} selectedMovie={selectedMovie} onSelectMovie={onSelectMovie} />
        ))}
      </div>
    </div>
  )
}

export default MovieSelector;
