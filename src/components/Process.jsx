import { motion } from 'framer-motion'
import { Leaf, Factory, Package, Truck } from 'lucide-react'

const steps = [
  { icon: Leaf, title: 'Sourced Wheat', desc: 'Selected from trusted farms for quality and nutrition.' },
  { icon: Factory, title: 'Careful Milling', desc: 'Slow, cool grinding preserves fiber and flavor.' },
  { icon: Package, title: 'Fresh Packaging', desc: 'Sealed to lock in freshness and aroma.' },
  { icon: Truck, title: 'Swift Delivery', desc: 'From our mill to your kitchen, fast.' },
]

export default function Process() {
  return (
    <section id="process" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Process</h2>
          <p className="mt-2 text-slate-300">Tradition meets technology for consistent quality.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur hover:bg-white/10 transition"
            >
              <s.icon className="mx-auto h-8 w-8 text-amber-400" />
              <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-1 text-slate-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
