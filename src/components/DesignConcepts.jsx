import React from 'react'
import { motion } from 'framer-motion'

export default function DesignConcepts() {
  const concepts = [
    {
      name: 'Minimal Pro',
      desc: 'Clean layout, strong grid, restrained effects. Focus on clarity and readability.',
      badges: ['High contrast', 'Neumorphic touches', 'Calm motion'],
    },
    {
      name: 'Futuristic Glass',
      desc: 'Pronounced glassmorphism with holographic accents and the 3D hero scene.',
      badges: ['Iridescent glow', 'Frosted panels', '3D Spline'],
    },
    {
      name: 'Type-Forward',
      desc: 'Bold typography, oversized headings, and punchy color blocks.',
      badges: ['Statement headlines', 'Neon accents', 'Expressive spacing'],
    },
  ]

  return (
    <section className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Concept Variations</h2>
          <p className="mt-2 text-white/70">Three directions to explore</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {concepts.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl ring-1 ring-white/10 hover:ring-cyan-400/40 transition"
            >
              <div className="text-white/80 text-sm">Concept {i + 1}</div>
              <h3 className="mt-2 text-xl font-semibold text-white">{c.name}</h3>
              <p className="mt-2 text-white/70">{c.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.badges.map((b) => (
                  <span key={b} className="px-2.5 py-1 rounded-full text-xs bg-white/10 ring-1 ring-white/10 text-white/80">{b}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
