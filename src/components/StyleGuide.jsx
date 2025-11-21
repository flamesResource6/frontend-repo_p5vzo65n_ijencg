import React from 'react'

export default function StyleGuide() {
  const colors = [
    { name: 'Background', value: '#0f172a', class: 'bg-slate-900' },
    { name: 'Glass Panel', value: 'rgba(255,255,255,0.06)', class: 'bg-white/10' },
    { name: 'Accent Cyan', value: '#22d3ee', class: 'bg-cyan-400' },
    { name: 'Accent Blue', value: '#2563eb', class: 'bg-blue-600' },
    { name: 'Text', value: '#ffffff', class: 'bg-white' },
  ]

  return (
    <section className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white">Style Guide</h2>
          <p className="mt-2 text-white/70">Colors, typography, and iconography</p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl">
            <h3 className="text-lg font-semibold text-white">Colors</h3>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {colors.map((c) => (
                <div key={c.name} className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg ring-1 ring-white/20 ${c.class}`} />
                  <div className="text-white/80 text-sm">
                    <div>{c.name}</div>
                    <div className="text-white/60 text-xs">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl">
            <h3 className="text-lg font-semibold text-white">Typography</h3>
            <div className="mt-4 space-y-3">
              <div className="text-4xl font-extrabold">Heading XL – Inter ExtraBold</div>
              <div className="text-2xl font-bold">Heading L – Inter Bold</div>
              <div className="text-lg font-semibold">Heading M – Inter SemiBold</div>
              <div className="text-base text-white/80">Body – Inter Regular, 16px/1.6</div>
              <div className="text-sm text-white/70">Caption – Inter, 14px/1.5</div>
            </div>
            <h3 className="mt-6 text-lg font-semibold text-white">Icons</h3>
            <p className="mt-2 text-white/70 text-sm">Use Lucide icons with consistent 24px size and stroke width. Pair with rounded glass containers for neumorphic depth.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
