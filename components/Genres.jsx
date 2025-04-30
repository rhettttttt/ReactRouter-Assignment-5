import React from 'react';
import { Link } from 'react-router-dom';

export default function Genres({ genres }) {
  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-5 gap-4">
      {genres.map((genre) => (
        <Link
          to={`/movies/genre/${genre.id}`}
          key={genre.id}
          className="bg-blue-500 text-white p-2 rounded text-center hover:bg-blue-600"
        >
          {genre.genre}
        </Link>
      ))}
    </div>
  );
}
