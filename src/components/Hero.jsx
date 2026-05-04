import { Star, Clock, DollarSign, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { businessData, galleryImages } from '../data/businessData';

export default function Hero() {
  const badges = [
    { icon: Star, text: `${businessData.rating} Rating`, color: 'bg-gold/10 text-gold' },
    { icon: Users, text: `${businessData.totalReviews.toLocaleString()} Reviews`, color: 'bg-terracotta/10 text-terracotta' },
    { icon: Star, text: `${businessData.fiveStarReviews} Five-Star`, color: 'bg-sage/10 text-sage' },
    { icon: DollarSign, text: businessData.priceRange, color: 'bg-clay/10 text-clay' },
    { icon: Clock, text: businessData.hours, color: 'bg-deep-brown/10 text-deep-brown' },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0">
        <img
          src={galleryImages.hero}
          alt="Moroccan restaurant interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/85 to-cream/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream/60 via-transparent to-cream/30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-gold/15 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Star size={16} className="text-gold fill-gold" />
              <span className="text-sm font-medium text-deep-brown">
                4.8 stars from {businessData.totalReviews.toLocaleString()} guests
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-deep-brown leading-tight font-[family-name:var(--font-family-heading)] mb-6">
              {businessData.tagline}
            </h1>

            <p className="text-lg sm:text-xl text-rich-brown/80 mb-8 max-w-xl">
              {businessData.subtitle}
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {badges.map((badge) => (
                <span
                  key={badge.text}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm ${badge.color}`}
                >
                  <badge.icon size={14} />
                  {badge.text}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#reservations"
                className="inline-flex items-center px-8 py-4 bg-deep-brown text-cream rounded-full text-base font-semibold hover:bg-rich-brown transition-all hover:scale-105 shadow-lg shadow-deep-brown/20"
              >
                Reserve a Table
              </a>
              <a
                href="#menu"
                className="inline-flex items-center px-8 py-4 border-2 border-deep-brown text-deep-brown rounded-full text-base font-semibold hover:bg-deep-brown hover:text-cream transition-all backdrop-blur-sm"
              >
                View Menu
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="w-full aspect-[4/5] rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src={galleryImages.moroccanDoor}
                  alt="Traditional Moroccan restaurant entrance"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/40 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-deep-brown">{businessData.rating}</span>
                </div>
                <p className="text-xs text-rich-brown/70 mt-1">{businessData.totalReviews.toLocaleString()} reviews</p>
              </div>

              <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <p className="text-sm font-bold text-deep-brown">{businessData.priceRange}</p>
                <p className="text-xs text-rich-brown/70 mt-1">per person</p>
              </div>

              <div className="absolute top-1/2 -left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-xl">
                <img src={galleryImages.tea} alt="Mint tea" className="w-16 h-16 rounded-xl object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
