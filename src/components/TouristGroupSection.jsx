import { Globe, Users, Baby, Coffee, Sun, Armchair, UtensilsCrossed, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';
import { galleryImages } from '../data/businessData';

export default function TouristGroupSection() {
  const highlights = [
    { icon: Globe, label: 'Tourists Welcome' },
    { icon: Users, label: 'Groups Welcome' },
    { icon: Baby, label: 'Good for Kids' },
    { icon: Sun, label: 'Lunch & Dinner' },
    { icon: Armchair, label: 'Cosy & Quiet' },
    { icon: UtensilsCrossed, label: 'Table Service' },
    { icon: Coffee, label: 'Tea & Coffee' },
    { icon: Wallet, label: 'Affordable Dining' },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-warm-beige via-cream to-amber/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-brown font-[family-name:var(--font-family-heading)] mb-4">
              Perfect for Tourists & Groups
            </h2>
            <p className="text-rich-brown/70 text-lg mb-8">
              Whether you're a tourist exploring Meknes, a family gathering, or a group of friends — Dar Baraka offers a cosy, welcoming atmosphere with authentic Moroccan hospitality at affordable prices.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex flex-col items-center gap-2 p-3 bg-white/70 rounded-xl border border-warm-beige"
                >
                  <item.icon size={22} className="text-clay" />
                  <span className="text-xs font-medium text-deep-brown text-center">{item.label}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="#reservations"
              className="inline-flex items-center px-8 py-4 bg-deep-brown text-cream rounded-full text-base font-semibold hover:bg-rich-brown transition-all hover:scale-105 shadow-lg shadow-deep-brown/20"
            >
              Plan a Visit
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="w-full aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={galleryImages.group}
                  alt="Group dining at Moroccan restaurant"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/30 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl">
                <img src={galleryImages.interior} alt="Restaurant interior" className="w-28 h-20 object-cover" loading="lazy" />
              </div>

              <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <p className="text-sm font-bold text-deep-brown">MAD 50–100</p>
                <p className="text-xs text-rich-brown/70">affordable for all</p>
              </div>

              <div className="absolute bottom-1/4 -right-4 bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl">
                <img src={galleryImages.tea} alt="Moroccan tea" className="w-20 h-20 object-cover" loading="lazy" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
