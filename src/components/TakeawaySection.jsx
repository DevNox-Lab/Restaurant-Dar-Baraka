import { Phone, ShoppingBag, UtensilsCrossed, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { businessData, galleryImages } from '../data/businessData';

export default function TakeawaySection() {
  const features = [
    {
      icon: ShoppingBag,
      title: 'Order for Pickup',
      description: 'Call ahead and collect your order freshly prepared.',
    },
    {
      icon: Phone,
      title: 'Call to Prepare',
      description: 'Phone your takeaway order so it\'s ready when you arrive.',
    },
    {
      icon: UtensilsCrossed,
      title: 'Takeaway-Friendly Dishes',
      description: 'Tagines, couscous, grills, and desserts — all packaged for takeaway.',
    },
    {
      icon: Clock,
      title: 'Available All Day',
      description: 'Takeaway available during all opening hours, 12 PM – 11 PM.',
    },
  ];

  return (
    <section id="takeaway" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-brown font-[family-name:var(--font-family-heading)] mb-4">
              Takeaway & Pickup
            </h2>
            <p className="text-rich-brown/70 text-lg mb-8">
              Enjoy Dar Baraka's authentic Moroccan cuisine at home. Call ahead for quick pickup — no waiting.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-cream border border-warm-beige"
                >
                  <div className="w-10 h-10 rounded-lg bg-terracotta/10 flex items-center justify-center shrink-0">
                    <feature.icon size={20} className="text-terracotta" />
                  </div>
                  <div>
                    <h3 className="font-bold text-deep-brown text-sm">{feature.title}</h3>
                    <p className="text-xs text-rich-brown/70 mt-0.5">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href={`tel:${businessData.phone}`}
              className="inline-flex items-center gap-3 bg-deep-brown text-cream px-8 py-4 rounded-full font-semibold text-base hover:bg-rich-brown transition-all hover:scale-105 shadow-lg shadow-deep-brown/20"
            >
              <Phone size={20} />
              Call for Takeaway
            </a>
            <p className="mt-4 text-sm text-rich-brown/60">
              Pickup only — no delivery service. Call to place your order.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src={galleryImages.takeaway}
                  alt="Delicious Moroccan food ready for takeaway"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/20 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl">
                <img src={galleryImages.tagine} alt="Tagine dish" className="w-28 h-20 object-cover" loading="lazy" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
