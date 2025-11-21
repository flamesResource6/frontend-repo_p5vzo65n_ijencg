import React from 'react'
import { motion } from 'framer-motion'
import { Bot, ShieldCheck, MessageSquare, Image as ImageIcon, BellRing, Repeat2 } from 'lucide-react'

const features = [
  {
    icon: Bot,
    title: 'Chatbot & Flows',
    desc: 'Build conversational flows and auto-replies with webhooks.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Compliant',
    desc: 'Robust auth, rate limits, and data controls out of the box.',
  },
  {
    icon: MessageSquare,
    title: '2‑Way Messaging',
    desc: 'Send and receive messages with delivery receipts and read status.',
  },
  {
    icon: ImageIcon,
    title: 'Rich Media',
    desc: 'Images, audio, video, files, and templates all supported.',
  },
  {
    icon: BellRing,
    title: 'Notifications',
    desc: 'OTP, alerts, and campaign messaging with templating.',
  },
  {
    icon: Repeat2,
    title: 'Reliable Webhooks',
    desc: 'Auto-retries, signature verification, and event replay.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Features</h2>
          <p className="mt-3 text-white/70">Everything you need to ship fast</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl ring-1 ring-white/10 hover:ring-cyan-400/40 transition shadow-[inset_1px_1px_0_rgba(255,255,255,0.07),0_10px_30px_rgba(0,0,0,0.25)]"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-600/30 ring-1 ring-white/15 flex items-center justify-center mb-4 group-hover:scale-105 transition">
                <f.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
