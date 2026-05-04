import { MapPin, Phone, Clock, ExternalLink, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';
import { businessData, galleryImages } from '../data/businessData';

export default function LocationSection() {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${businessData.coordinates.lat},${businessData.coordinates.lng}`;

  return (
    <section id="location" className="py-16 sm:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-deep-brown font-[family-name:var(--font-family-heading)] mb-4">
            Find Us in Meknes
          </h2>
          <p className="text-rich-brown/70 max-w-2xl mx-auto">
            Located in the heart of Meknes, Dar Baraka is easy to find and open daily for lunch through late dinner.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="bg-white rounded-2xl p-6 border border-warm-beige">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-clay/10 flex items-center justify-center shrink-0">
                  <MapPin size={22} className="text-clay" />
                </div>
                <div>
                  <h3 className="font-bold text-deep-brown mb-1">Address</h3>
                  <p className="text-rich-brown/70">{businessData.address}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-warm-beige">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-clay/10 flex items-center justify-center shrink-0">
                  <Phone size={22} className="text-clay" />
                </div>
                <div>
                  <h3 className="font-bold text-deep-brown mb-1">Phone</h3>
                  <a href={`tel:${businessData.phone}`} className="text-terracotta hover:underline">
                    {businessData.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-warm-beige">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-clay/10 flex items-center justify-center shrink-0">
                  <Clock size={22} className="text-clay" />
                </div>
                <div>
                  <h3 className="font-bold text-deep-brown mb-1">Opening Hours</h3>
                  <p className="text-rich-brown/70">{businessData.hours}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-warm-beige">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-clay/10 flex items-center justify-center shrink-0">
                  <ExternalLink size={22} className="text-clay" />
                </div>
                <div>
                  <h3 className="font-bold text-deep-brown mb-1">Instagram</h3>
                  <a
                    href={businessData.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-terracotta hover:underline text-sm"
                  >
                    @restaurant.baraka_meknes
                  </a>
                </div>
              </div>
            </div>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-deep-brown text-cream px-8 py-4 rounded-full font-semibold text-base hover:bg-rich-brown transition-all hover:scale-105 shadow-lg shadow-deep-brown/20"
            >
              <Navigation size={20} />
              Open Directions
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden border border-warm-beige shadow-lg relative">
              <img
                src={galleryImages.meknesGate}
                alt="Historic gate of Meknes, Morocco"
                className="w-full h-full object-cover absolute inset-0"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/70 via-deep-brown/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-3">
                  <MapPin size={24} className="text-white" />
                </div>
                <p className="font-bold text-white text-lg mb-1">Restaurant Dar Baraka</p>
                <p className="text-sm text-white/80 mb-1">Meknes, Morocco</p>
                <p className="text-xs text-white/60">
                  {businessData.coordinates.lat}°N, {Math.abs(businessData.coordinates.lng)}°W
                </p>
                <a
                  href={businessData.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 px-4 py-2 rounded-full text-sm font-medium transition-colors"
                >
                  <Navigation size={14} />
                  View on Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
