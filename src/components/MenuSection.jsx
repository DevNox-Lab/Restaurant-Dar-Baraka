import { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems, menuCategories } from '../data/businessData';

const labelColors = {
  Popular: 'bg-gold/10 text-gold',
  Signature: 'bg-terracotta/10 text-terracotta',
  Vegan: 'bg-green-100 text-green-700',
  Vegetarian: 'bg-sage/10 text-sage',
  Tea: 'bg-amber/10 text-amber',
  Dessert: 'bg-pink-100 text-pink-700',
};

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-deep-brown font-[family-name:var(--font-family-heading)] mb-4">
            Our Menu
          </h2>
          <p className="text-rich-brown/70 max-w-2xl mx-auto">
            Discover authentic Moroccan cuisine — from slow-cooked tagines and royal couscous to fresh mint tea and traditional desserts.
          </p>
        </motion.div>

        <div className="mb-8">
          <div className="relative max-w-md mx-auto mb-6">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-rich-brown/40" />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-warm-beige bg-cream focus:outline-none focus:ring-2 focus:ring-clay/30 focus:border-clay transition-all"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {menuCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-deep-brown text-cream shadow-md'
                    : 'bg-warm-beige/50 text-rich-brown hover:bg-warm-beige'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchQuery}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="group bg-cream border border-warm-beige rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {item.labels.map((label) => (
                      <span
                        key={label}
                        className={`px-2 py-0.5 rounded-full text-xs font-medium backdrop-blur-sm bg-white/80 ${labelColors[label] ? labelColors[label].split(' ')[1] : 'text-gray-600'}`}
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-terracotta">
                      {item.price} MAD
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start gap-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-deep-brown group-hover:text-terracotta transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-sm text-rich-brown/60 mt-1">{item.description}</p>
                    </div>
                    <button className="mt-1 w-9 h-9 rounded-full bg-deep-brown text-cream flex items-center justify-center hover:bg-terracotta transition-colors shrink-0 opacity-0 group-hover:opacity-100">
                      <Plus size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-rich-brown/60">No dishes found. Try a different search or category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
