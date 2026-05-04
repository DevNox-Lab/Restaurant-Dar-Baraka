import { useState } from 'react';
import { CalendarCheck, Clock, Users, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { businessData } from '../data/businessData';

export default function ReservationSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    preference: '',
    request: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const preferences = ['Indoor table', 'Quiet table', 'Family table', 'Group table'];

  return (
    <section id="reservations" className="py-16 sm:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-brown font-[family-name:var(--font-family-heading)] mb-4">
              Reserve Your Table
            </h2>
            <p className="text-rich-brown/70 text-lg mb-8">
              Dinner hours can get busy — reserve ahead for a smoother dining experience.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 bg-white rounded-xl p-4 border border-warm-beige">
                <Clock size={20} className="text-clay shrink-0" />
                <div>
                  <p className="font-medium text-deep-brown">Peak Hours</p>
                  <p className="text-sm text-rich-brown/70">Wed 7–8 PM · Sat 8–9 PM · Sun 9–10 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-xl p-4 border border-warm-beige">
                <CalendarCheck size={20} className="text-clay shrink-0" />
                <div>
                  <p className="font-medium text-deep-brown">Open Daily</p>
                  <p className="text-sm text-rich-brown/70">{businessData.hours}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-xl p-4 border border-warm-beige">
                <Users size={20} className="text-clay shrink-0" />
                <div>
                  <p className="font-medium text-deep-brown">Groups Welcome</p>
                  <p className="text-sm text-rich-brown/70">Family, solo, couples, tourists, and groups</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div className="bg-white rounded-2xl p-8 border border-warm-beige text-center">
                <CheckCircle size={48} className="text-sage mx-auto mb-4" />
                <h3 className="text-xl font-bold text-deep-brown mb-2">Reservation Submitted!</h3>
                <p className="text-rich-brown/70">This is a demo — in production, Dar Baraka would receive this instantly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 border border-warm-beige shadow-sm">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-deep-brown mb-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-warm-beige bg-cream focus:outline-none focus:ring-2 focus:ring-clay/30 focus:border-clay"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-deep-brown mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-warm-beige bg-cream focus:outline-none focus:ring-2 focus:ring-clay/30 focus:border-clay"
                      placeholder="+212..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-deep-brown mb-1">Number of Guests</label>
                    <select
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-warm-beige bg-cream focus:outline-none focus:ring-2 focus:ring-clay/30 focus:border-clay"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                        <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>
                      ))}
                      <option value="10+">10+ guests</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-deep-brown mb-1">Date</label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={form.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-warm-beige bg-cream focus:outline-none focus:ring-2 focus:ring-clay/30 focus:border-clay"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-deep-brown mb-1">Time</label>
                    <input
                      type="time"
                      name="time"
                      required
                      value={form.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-warm-beige bg-cream focus:outline-none focus:ring-2 focus:ring-clay/30 focus:border-clay"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-deep-brown mb-1">Dining Preference</label>
                    <div className="grid grid-cols-2 gap-2">
                      {preferences.map((pref) => (
                        <button
                          key={pref}
                          type="button"
                          onClick={() => setForm({ ...form, preference: pref })}
                          className={`px-4 py-2.5 rounded-xl text-sm font-medium border transition-all ${
                            form.preference === pref
                              ? 'border-clay bg-clay/10 text-clay'
                              : 'border-warm-beige bg-cream text-rich-brown hover:border-clay/50'
                          }`}
                        >
                          {pref}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-deep-brown mb-1">Special Request</label>
                    <textarea
                      name="request"
                      rows={3}
                      value={form.request}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-warm-beige bg-cream focus:outline-none focus:ring-2 focus:ring-clay/30 focus:border-clay resize-none"
                      placeholder="Any dietary needs, celebrations, or preferences..."
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full mt-6 bg-deep-brown text-cream py-4 rounded-full font-semibold text-base hover:bg-rich-brown transition-colors shadow-lg shadow-deep-brown/20"
                >
                  Confirm Reservation
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
