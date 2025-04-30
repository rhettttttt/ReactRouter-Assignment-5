import React from 'react';

export default function Hero() {
  return (
    <section className="bg-cover bg-center h-96 text-white flex flex-col justify-center items-center" style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900?cinema')" }}>
      <h1 className="text-5xl font-extrabold mb-4">Welcome to My Movie App</h1>
      <p className="text-lg max-w-xl text-center">Discover the latest movies playing now. Browse, explore, and enjoy.</p>
    </section>
  );
}