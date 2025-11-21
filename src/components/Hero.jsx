import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero({ onPrimary, onSecondary }) {
  return (
    <section className="relative pt-28 pb-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.15),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute -top-24 -right-24 w-[700px] h-[700px] rounded-full bg-cyan-400/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-[700px] h-[700px] rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <span className="inline-block mb-5 px-3 py-1 rounded-full text-xs font-medium tracking-wide bg-white/10 ring-1 ring-white/20 text-white/90">
              WhatsApp API Gateway
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
              Connect WhatsApp to your stack in minutes
            </h1>
            <p className="mt-5 text-lg text-white/70 max-w-xl">
              Authenticate with a quick QR scan, then send and receive messages at scale with a developer-first API. Secure, reliable, and blazing fast.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={onPrimary} className="group relative inline-flex items-center justify-center px-6 h-12 rounded-2xl font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-600 shadow-[0_8px_30px_rgba(56,189,248,0.35)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.45)] transition-all">
                <span className="relative z-10">Get Started</span>
                <span className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition" />
              </button>
              <button onClick={onSecondary} className="inline-flex items-center justify-center px-6 h-12 rounded-2xl font-semibold text-white/90 bg-white/10 hover:bg-white/15 ring-1 ring-white/15">
                Test Gateway
              </button>
            </div>
            <div className="mt-6 text-white/60 text-sm">
              • OAuth-free onboarding • Real-time webhooks • Rich media support
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative h-[420px] md:h-[520px] rounded-[28px] overflow-hidden ring-1 ring-white/15 bg-white/5 backdrop-blur-xl"
          >
            <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
