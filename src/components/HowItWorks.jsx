import React from 'react'
import { motion } from 'framer-motion'
import { UserPlus2, QrCode, Code2 } from 'lucide-react'

const steps = [
  {
    icon: UserPlus2,
    title: 'Sign Up',
    desc: 'Create an account and generate your API keys in seconds.',
  },
  {
    icon: QrCode,
    title: 'Scan QR',
    desc: 'Authenticate your WhatsApp number securely by scanning a QR code.',
  },
  {
    icon: Code2,
    title: 'Use the API',
    desc: 'Send and receive messages, media, and events with a clean REST API.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">How it works</h2>
          <p className="mt-3 text-white/70">Three simple steps to go live</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl ring-1 ring-white/10 hover:ring-cyan-400/40 transition shadow-[inset_1px_1px_0_rgba(255,255,255,0.06),0_10px_30px_rgba(0,0,0,0.25)]"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-600/30 ring-1 ring-white/15 flex items-center justify-center mb-4 group-hover:scale-105 transition">
                <s.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-white/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
