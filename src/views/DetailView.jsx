import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DetailView() {
    const { id } = useParams();
    const [details, setDetails] = useState(null);
    const [trailers, setTrailers] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${id}`, {
                params: { api_key: import.meta.env.VITE_TMDB_KEY },
            })
            .then((res) => setDetails(res.data))
            .catch(console.error);

        axios
            .get(`https://api.themoviedb.org/3/movie/${id}/videos`, {
                params: { api_key: import.meta.env.VITE_TMDB_KEY },
            })
            .then((res) =>
                setTrailers(
                    res.data.results.filter((v) => v.type === "Trailer")
                )
            )
            .catch(console.error);
    }, [id]);

    if (!details) return <p className="text-center py-10">Loading...</p>;

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold">{details.title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img
                    src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
                    alt={details.title}
                    className="rounded-lg shadow-lg"
                />
                <ul className="space-y-2">
                    <li>
                        <strong>Release Date:</strong> {details.release_date}
                    </li>
                    <li>
                        <strong>Runtime:</strong> {details.runtime} mins
                    </li>
                    <li>
                        <strong>Rating:</strong> {details.vote_average}
                    </li>
                    <li>
                        <strong>Genres:</strong>{" "}
                        {details.genres.map((g) => g.name).join(", ")}
                    </li>
                    <li>
                        <strong>Overview:</strong> {details.overview}
                    </li>
                    <li>
                        <strong>Language:</strong> {details.original_language}
                    </li>
                    <li>
                        <strong>Budget:</strong> $
                        {details.budget.toLocaleString()}
                    </li>
                </ul>
            </div>
            <div className="space-y-4">
                {trailers.map((t) => (
                    <div key={t.id} className="aspect-w-16 aspect-h-9">
                        <iframe
                            src={`https://www.youtube.com/embed/${t.key}`}
                            title={t.name}
                            allowFullScreen
                            className="w-full h-full rounded-lg shadow"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
