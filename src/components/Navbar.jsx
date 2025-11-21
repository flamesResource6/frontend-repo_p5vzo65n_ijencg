import React from 'react'
import { Sun, Moon, Menu } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export default function Navbar({ onCTAClick }) {
  const { theme, setTheme } = useTheme()

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-slate-900/40 dark:bg-slate-950/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[inset_2px_2px_6px_rgba(255,255,255,0.15),inset_-3px_-3px_8px_rgba(0,0,0,0.25)] ring-1 ring-white/20" />
            <span className="text-white/90 dark:text-white text-lg font-semibold tracking-tight">WHATSAPP.SABTECH.ORG</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#how" className="hover:text-white transition-colors">How it works</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              aria-label="Toggle theme"
              className="relative inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition-all"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-white/90" />
              ) : (
                <Moon className="w-5 h-5 text-slate-900" />
              )}
              <span className="sr-only">Toggle theme</span>
            </button>
            <button
              onClick={onCTAClick}
              className="hidden sm:inline-flex items-center gap-2 px-4 h-10 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-400/30 to-blue-600/30 hover:from-cyan-400/50 hover:to-blue-600/50 ring-1 ring-cyan-300/30 shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all"
            >
              Get Started
            </button>
            <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 ring-1 ring-white/10">
              <Menu className="w-5 h-5 text-white/80" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
