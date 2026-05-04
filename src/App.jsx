import Header from './components/Header';
import Hero from './components/Hero';
import TrustStats from './components/TrustStats';
import OnlinePresenceSection from './components/OnlinePresenceSection';
import MenuSection from './components/MenuSection';
import ReservationSection from './components/ReservationSection';
import TakeawaySection from './components/TakeawaySection';
import TouristGroupSection from './components/TouristGroupSection';
import ReviewsSection from './components/ReviewsSection';
import LocationSection from './components/LocationSection';
import FinalCTA from './components/FinalCTA';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TrustStats />
      <OnlinePresenceSection />
      <MenuSection />
      <ReservationSection />
      <TakeawaySection />
      <TouristGroupSection />
      <ReviewsSection />
      <LocationSection />
      <FinalCTA />
      <footer className="bg-deep-brown py-8 text-center">
        <p className="text-cream/60 text-sm">
          © 2026 Restaurant Dar Baraka — Sales Demo Website
        </p>
        <p className="text-cream/40 text-xs mt-2">
          This is a demonstration of how a professional website can improve online visibility and customer engagement.
        </p>
      </footer>
    </div>
  );
}
