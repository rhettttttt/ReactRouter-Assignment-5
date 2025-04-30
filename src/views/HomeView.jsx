import Header from '../components/Header';
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import Footer from '../components/Footer';

export default function HomeView() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero
          title="Welcome to MovieZone"
          subtitle="Discover your next favorite film"
          bgImage="/assets/hero-bg.jpg"
        />
        <section className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold mb-6">Now Playing</h2>
          <Feature />
        </section>
      </main>
      <Footer />
    </div>
  );
}
