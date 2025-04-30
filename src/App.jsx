import { Routes, Route, Navigate } from 'react-router-dom';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import MoviesView from './views/MoviesView';
import GenreView from './views/GenreView';
import DetailView from './views/DetailView';
import ErrorView from './views/ErrorView';

// Predefined genre list
const genreList = [
  { id: 28, genre: 'Action' },
  { id: 12, genre: 'Adventure' },
  { id: 16, genre: 'Animation' },
  { id: 35, genre: 'Comedy' },
  { id: 80, genre: 'Crime' },
  { id: 99, genre: 'Documentary' },
  { id: 18, genre: 'Drama' },
  { id: 14, genre: 'Fantasy' },
  { id: 27, genre: 'Horror' },
  { id: 10751, genre: 'Family' },
];

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="login" element={<LoginView />} />
      <Route path="register" element={<RegisterView />} />
      <Route path="movies" element={<MoviesView genreList={genreList} />}>
        <Route index element={<Navigate to="genre/28" replace />} />
        <Route path="genre/:genre_id" element={<GenreView />} />
        <Route path="details/:id" element={<DetailView />} />
      </Route>
      <Route path="*" element={<ErrorView />} />
    </Routes>
  );
}
