import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Feature() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchNowPlaying() {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=1`
        );
        const results = res.data.results;
        // pick 3 random movies
        const picked = [];
        const used = new Set();
        while (picked.length < 3 && used.size < results.length) {
          const idx = Math.floor(Math.random() * results.length);
          if (!used.has(idx)) {
            used.add(idx);
            picked.push(results[idx]);
          }
        }
        setMovies(picked);
      } catch (err) {
        console.error(err);
      }
    }
    fetchNowPlaying();
  }, []);

  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Now Playing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {movies.map(movie => (
          <div key={movie.id} className="bg-white shadow rounded overflow-hidden">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
              <p className="text-gray-600 text-sm">Release: {movie.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
