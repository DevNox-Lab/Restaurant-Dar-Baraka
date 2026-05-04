import { Globe, TrendingUp, Smartphone, CalendarCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { galleryImages } from '../data/businessData';

export default function OnlinePresenceSection() {
  const cards = [
    {
      icon: Globe,
      title: 'No Active Social Posting',
      description: 'Instagram account exists since 2023 but has 0 posts. A dedicated website fills this gap instantly.',
      color: 'bg-terracotta/10 text-terracotta',
    },
    {
      icon: TrendingUp,
      title: 'Strong Google Reputation',
      description: '4.8 stars from 1,090 reviews — this trust needs a home that converts visitors into action.',
      color: 'bg-gold/10 text-gold',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Discovery',
      description: 'Most customers search on mobile. A fast, responsive website captures these visitors before they leave.',
      color: 'bg-sage/10 text-sage',
    },
    {
      icon: CalendarCheck,
      title: 'Direct Reservation Funnel',
      description: 'Turn Google search traffic into confirmed reservations, menu views, and takeaway calls — without intermediaries.',
      color: 'bg-clay/10 text-clay',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <span className="inline-block px-4 py-1.5 bg-terracotta/10 text-terracotta rounded-full text-sm font-medium mb-4">
              Growth Opportunity
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-brown font-[family-name:var(--font-family-heading)] mb-6">
              A Strong Reputation Deserves a Stronger Online Presence
            </h2>
            <p className="text-rich-brown/70 text-lg leading-relaxed mb-10">
              Dar Baraka already has strong customer trust offline, but its online presence is still underdeveloped. A modern website can turn Google visitors into menu views, calls, reservations, and takeaway requests.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {cards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-5 border border-warm-beige hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className={`w-10 h-10 rounded-xl ${card.color} flex items-center justify-center mb-3`}>
                    <card.icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-deep-brown mb-1">{card.title}</h3>
                  <p className="text-sm text-rich-brown/70 leading-relaxed">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 hidden lg:block"
          >
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-[3/2]">
                <img
                  src={galleryImages.spices}
                  alt="Moroccan spices"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-square">
                  <img
                    src={galleryImages.interior}
                    alt="Restaurant interior"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-square">
                  <img
                    src={galleryImages.couscous}
                    alt="Moroccan couscous"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
