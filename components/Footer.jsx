import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} My Movie App. All rights reserved.</p>
      <p>Data provided by TMDB API.</p>
    </footer>
  );
}
