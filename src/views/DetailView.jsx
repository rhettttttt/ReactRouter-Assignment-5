import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function DetailView() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    async function fetchDetails() {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`);
      setDetails(res.data);

      const vidRes = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${import.meta.env.VITE_TMDB_KEY}`);
      const trailer = vidRes.data.results.find(v => v.type === 'Trailer' && v.site === 'YouTube');
      setTrailer(trailer);
    }

    fetchDetails();
  }, [id]);

  if (!details) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">{details.title}</h2>
      <p><strong>Overview:</strong> {details.overview}</p>
      <p><strong>Release Date:</strong> {details.release_date}</p>
      <p><strong>Runtime:</strong> {details.runtime} mins</p>
      <p><strong>Budget:</strong> ${details.budget}</p>
      <p><strong>Revenue:</strong> ${details.revenue}</p>
      <p><strong>Rating:</strong> {details.vote_average}</p>
      {trailer && (
        <div className="mt-4">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title="Movie Trailer"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}
