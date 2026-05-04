import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { businessData } from '../data/businessData';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'Reservations', href: '#reservations' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Takeaway', href: '#takeaway' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-warm-beige shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-clay to-terracotta flex items-center justify-center">
              <span className="text-white font-bold text-lg font-[family-name:var(--font-family-heading)]">D</span>
            </div>
            <span className="text-lg sm:text-xl font-bold text-deep-brown font-[family-name:var(--font-family-heading)]">
              Dar Baraka
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-rich-brown hover:text-terracotta transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${businessData.phone}`}
              className="hidden sm:inline-flex items-center gap-2 bg-deep-brown text-cream px-4 py-2 rounded-full text-sm font-medium hover:bg-rich-brown transition-colors"
            >
              <Phone size={16} />
              Call Now
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-deep-brown"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-cream border-t border-warm-beige overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 px-4 text-rich-brown hover:bg-warm-beige rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`tel:${businessData.phone}`}
                className="mt-2 flex items-center justify-center gap-2 bg-deep-brown text-cream px-4 py-3 rounded-full text-sm font-medium"
              >
                <Phone size={16} />
                Call Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
