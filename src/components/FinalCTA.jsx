import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { businessData, galleryImages } from '../data/businessData';

export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={galleryImages.dining}
          alt="Moroccan dining ambiance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-deep-brown/85" />
      </div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-clay blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-amber blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cream/60 text-sm font-medium uppercase tracking-wider mb-4">
            Sales Demo Insight
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream font-[family-name:var(--font-family-heading)] mb-6">
            Give Dar Baraka a Stronger Online Presence
          </h2>
          <p className="text-cream/70 text-lg mb-4 max-w-2xl mx-auto">
            Make every visit easier to book — from menu discovery to confirmed reservations.
          </p>
          <p className="text-cream/90 text-xl font-medium mb-10 max-w-2xl mx-auto">
            Reserve your Moroccan dining experience today.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#reservations"
              className="inline-flex items-center px-8 py-4 bg-cream text-deep-brown rounded-full text-base font-semibold hover:bg-warm-beige transition-all hover:scale-105 shadow-lg"
            >
              Reserve a Table
            </a>
            <a
              href={`tel:${businessData.phone}`}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-cream/30 text-cream rounded-full text-base font-semibold hover:bg-cream/10 transition-all"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
