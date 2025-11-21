import React from 'react'

export default function CTA({ onClick }) {
  return (
    <section className="relative py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-400/15 to-blue-600/15 ring-1 ring-white/15 backdrop-blur-xl p-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Ready to create your instance?</h3>
          <p className="mt-3 text-white/80">Start sending messages in minutes with our developer-friendly API.</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button onClick={onClick} className="inline-flex h-12 items-center justify-center px-6 rounded-2xl font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-600 shadow-[0_8px_30px_rgba(56,189,248,0.35)] hover:shadow-[0_10px_40px_rgba(59,130,246,0.45)] transition">
              Start Now
            </button>
          </div>
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.25),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(37,99,235,0.25),transparent_40%)]" />
        </div>
      </div>
    </section>
  )
}
