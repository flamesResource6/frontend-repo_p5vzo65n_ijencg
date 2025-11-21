import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact & Support</h2>
            <p className="mt-3 text-white/70">We are here to help you ship fast.</p>
            <div className="mt-6 space-y-3 text-white/80">
              <p><span className="text-white">Sales:</span> +1 (555) 123-4567</p>
              <p><span className="text-white">Email:</span> support@wavelink.dev</p>
            </div>
          </div>
          <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl ring-1 ring-white/10">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input aria-label="Name" placeholder="Name" className="h-11 rounded-xl bg-white/5 ring-1 ring-white/10 px-4 text-white placeholder-white/50 focus:outline-none focus:ring-cyan-400/40" />
              <input aria-label="Email" placeholder="Email" className="h-11 rounded-xl bg-white/5 ring-1 ring-white/10 px-4 text-white placeholder-white/50 focus:outline-none focus:ring-cyan-400/40" />
              <textarea aria-label="Message" placeholder="Message" rows="4" className="sm:col-span-2 rounded-xl bg-white/5 ring-1 ring-white/10 p-4 text-white placeholder-white/50 focus:outline-none focus:ring-cyan-400/40" />
              <button type="button" className="sm:col-span-2 h-11 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-600">Send</button>
            </form>
          </div>
        </div>
        <div className="mt-16 text-white/60 text-sm">
          © {new Date().getFullYear()} WaveLink • Privacy • Terms
        </div>
      </div>
    </section>
  )
}
