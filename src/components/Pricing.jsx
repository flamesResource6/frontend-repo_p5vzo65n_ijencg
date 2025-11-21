import React from 'react'
import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Starter',
    price: '$19',
    tagline: 'Fixed price. No per-message fees.',
    features: ['1 WhatsApp instance', '2,000 messages/day', 'Incoming webhooks', 'Community support'],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Business',
    price: '$49',
    tagline: 'Best for growing teams',
    features: ['Up to 3 instances', '50k messages/mo', 'Priority webhooks', 'Email support'],
    cta: 'Choose Business',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    tagline: 'High volume and compliance needs',
    features: ['Unlimited instances', 'Dedicated infra', 'SLAs & SSO', 'Dedicated support'],
    cta: 'Contact Sales',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Pricing</h2>
          <p className="mt-3 text-white/70">Fixed price. No hidden fees.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative p-6 rounded-2xl backdrop-blur-xl ring-1 ring-white/10 shadow-[inset_1px_1px_0_rgba(255,255,255,0.07),0_10px_30px_rgba(0,0,0,0.25)] ${
                t.popular ? 'bg-gradient-to-br from-cyan-400/10 to-blue-600/10' : 'bg-white/5'
              }`}
            >
              {t.popular && (
                <span className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-medium bg-cyan-400/20 text-cyan-200 ring-1 ring-cyan-300/30">Popular</span>
              )}
              <h3 className="text-xl font-semibold text-white">{t.name}</h3>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-white">{t.price}</span>
                {t.price !== 'Custom' && <span className="text-white/60">/mo</span>}
              </div>
              <p className="mt-2 text-white/70">{t.tagline}</p>
              <ul className="mt-6 space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full h-11 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-600 hover:opacity-95 transition">
                {t.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
