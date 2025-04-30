import { useNavigate } from 'react-router-dom';

export default function Genres({ genres }) {
  const nav = useNavigate();

  return (
    <div className="bg-white p-4 rounded-lg shadow space-y-2">
      {genres.map(g => (
        <button
          key={g.id}
          onClick={() => nav(`/movies/genre/${g.id}`)}
          className="block w-full text-left px-3 py-2 rounded hover:bg-gray-100 transition"
        >
          {g.genre}
        </button>
      ))}
    </div>
  );
}
