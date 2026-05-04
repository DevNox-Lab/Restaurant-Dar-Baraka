import { Star, Users, Award, DollarSign, Clock, CalendarCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { businessData, galleryImages } from '../data/businessData';

export default function TrustStats() {
  const stats = [
    { icon: Star, value: businessData.rating.toString(), label: 'Guest Rating', sublabel: 'out of 5.0' },
    { icon: Users, value: businessData.totalReviews.toLocaleString(), label: 'Total Reviews', sublabel: 'on Google' },
    { icon: Award, value: businessData.fiveStarReviews.toString(), label: 'Five-Star Reviews', sublabel: '90% of guests' },
    { icon: DollarSign, value: 'MAD 50–100', label: 'Price Range', sublabel: 'per person' },
    { icon: Clock, value: '12–11 PM', label: 'Open Daily', sublabel: '7 days a week' },
    { icon: CalendarCheck, value: 'Yes', label: 'Reservations', sublabel: 'accepted' },
  ];

  const photos = [galleryImages.tagine, galleryImages.couscous, galleryImages.tea, galleryImages.spices];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-deep-brown font-[family-name:var(--font-family-heading)] mb-4">
            Trusted by Over 1,000 Guests
          </h2>
          <p className="text-rich-brown/70 max-w-2xl mx-auto">
            Dar Baraka's reputation speaks for itself — a consistent 4.8-star experience loved by locals, families, and tourists alike.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          {photos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <img src={src} alt="Dar Baraka cuisine" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-4 sm:p-6 rounded-2xl bg-cream border border-warm-beige hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-clay/10 flex items-center justify-center mx-auto mb-3">
                <stat.icon size={22} className="text-clay" />
              </div>
              <p className="text-xl sm:text-2xl font-bold text-deep-brown">{stat.value}</p>
              <p className="text-sm font-medium text-rich-brown mt-1">{stat.label}</p>
              <p className="text-xs text-rich-brown/60 mt-0.5">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
