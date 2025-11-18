import { useState } from 'react'
import { Menu, X, Wheat, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Our Mill', href: '#mill' },
    { label: 'Products', href: '#products' },
    { label: 'Process', href: '#process' },
    { label: 'Testimonials', href: '#testimonials' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-5 py-4">
            <a href="#home" className="flex items-center gap-2">
              <Wheat className="h-6 w-6 text-amber-400 drop-shadow" />
              <span className="font-semibold tracking-tight text-white">BlueFlour Mills</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map(item => (
                <a key={item.label} href={item.href} className="text-sm text-slate-200 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-amber-400/90 px-4 py-2 text-sm font-semibold text-slate-900 shadow hover:shadow-amber-400/20 hover:bg-amber-300 transition-all">
                <Phone className="h-4 w-4" /> Contact
              </a>
            </nav>

            <button className="md:hidden rounded-lg p-2 text-white/90 hover:bg-white/10" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                className="md:hidden overflow-hidden border-t border-white/10"
              >
                <div className="px-5 py-4 flex flex-col gap-3">
                  {navItems.map(item => (
                    <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="text-slate-200 hover:text-white">
                      {item.label}
                    </a>
                  ))}
                  <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 rounded-xl bg-amber-400/90 px-4 py-2 text-sm font-semibold text-slate-900 shadow">
                    <Phone className="h-4 w-4" /> Contact
                  </a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}
