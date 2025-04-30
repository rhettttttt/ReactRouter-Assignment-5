import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Feature() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/movie/now_playing', {
        params: { api_key: import.meta.env.VITE_TMDB_KEY },
      })
      .then(res => setMovies(res.data.results.slice(0, 6)))
      .catch(console.error);
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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
  );
}
