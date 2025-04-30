import { useEffect, useState } from 'react';
import axios from 'axios';

export default function GenreView({ genreId }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`/api/discover/movie?with_genres=${genreId}&page=${page}`)
      .then(res => setMovies(res.data.results))
      .catch(console.error);
  }, [genreId, page]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {movies.map(m => (
          <div key={m.id} className="bg-white rounded-lg shadow overflow-hidden">
            <img
              src={`https://image.tmdb.org/t/p/w300${m.poster_path}`}
              alt={m.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-3">
              <h3 className="text-lg font-medium">{m.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-4">
        <button
          disabled={page === 1}
          onClick={() => setPage(p => p - 1)}
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50 transition"
        >
          Previous
        </button>
        <button
          onClick={() => setPage(p => p + 1)}
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}
