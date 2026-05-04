import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { businessData, testimonials, galleryImages } from '../data/businessData';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-deep-brown font-[family-name:var(--font-family-heading)] mb-4">
            What Our Guests Say
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="text-gold fill-gold" />
              ))}
            </div>
            <span className="text-2xl font-bold text-deep-brown">{businessData.rating}</span>
          </div>
          <p className="text-rich-brown/70">
            {businessData.totalReviews.toLocaleString()} reviews · {businessData.fiveStarReviews} five-star ratings
          </p>
        </motion.div>

        <div className="mb-12">
          <div className="grid grid-cols-5 gap-1 max-w-md mx-auto">
            {Object.entries(businessData.reviewDistribution)
              .reverse()
              .map(([stars, count]) => (
                <div key={stars} className="text-center">
                  <div className="h-24 bg-warm-beige rounded-t-lg relative overflow-hidden">
                    <div
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gold to-amber rounded-t-lg transition-all"
                      style={{ height: `${(count / businessData.fiveStarReviews) * 100}%` }}
                    />
                  </div>
                  <p className="text-xs font-medium text-rich-brown mt-2">{stars}★</p>
                  <p className="text-xs text-rich-brown/60">{count}</p>
                </div>
              ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-cream rounded-2xl p-6 border border-warm-beige relative"
            >
              <Quote size={32} className="text-clay/20 absolute top-4 right-4" />
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="text-rich-brown/80 italic mb-4 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-warm-beige"
                  loading="lazy"
                />
                <div>
                  <p className="font-medium text-deep-brown text-sm">{review.name}</p>
                  <p className="text-xs text-rich-brown/60">Google Review</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mt-6">
          {testimonials.slice(3).map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-cream rounded-2xl p-6 border border-warm-beige relative"
            >
              <Quote size={32} className="text-clay/20 absolute top-4 right-4" />
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="text-rich-brown/80 italic mb-4 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-warm-beige"
                  loading="lazy"
                />
                <div>
                  <p className="font-medium text-deep-brown text-sm">{review.name}</p>
                  <p className="text-xs text-rich-brown/60">Google Review</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
