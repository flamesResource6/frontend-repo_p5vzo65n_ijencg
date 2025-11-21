import React from 'react'
import { motion } from 'framer-motion'
import { Bot, ShieldCheck, MessageSquare, Image as ImageIcon, BellRing, Repeat2, FileText, ClipboardCheck, Workflow } from 'lucide-react'

const features = [
  { icon: MessageSquare, title: 'WhatsApp APIs', desc: 'Simple HTTP endpoints for sending and receiving.' },
  { icon: Bot, title: 'Chatbot', desc: 'Automate replies and flows with webhooks.' },
  { icon: BellRing, title: 'OTPs', desc: 'Fast, reliable One Time Password delivery.' },
  { icon: BellRing, title: 'Service Notifications', desc: 'Order updates, reminders, and alerts.' },
  { icon: ImageIcon, title: 'Multimedia Messages', desc: 'Pictures, audio, video, documents, emojis.' },
  { icon: BellRing, title: 'Important Alerts', desc: 'Time-sensitive messages with delivery receipts.' },
  { icon: ClipboardCheck, title: 'Order Confirmation', desc: 'Transactional messages with buttons.' },
  { icon: FileText, title: 'Invoice & Bill', desc: 'Send PDFs and receipts directly in chat.' },
  { icon: Repeat2, title: 'Message Delivery Report', desc: 'Track every message status with IDs.' },
  { icon: MessageSquare, title: '2‑Way Communication', desc: 'Support conversations in real time.' },
  { icon: ShieldCheck, title: 'Customer Support', desc: 'Multi-agent workflows and unified inbox ready.' },
  { icon: Workflow, title: 'Automation', desc: 'Triggers, templates, and webhooks for scale.' },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Features</h2>
          <p className="mt-3 text-white/70">Enterprise WhatsApp messaging without limits</p>
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
