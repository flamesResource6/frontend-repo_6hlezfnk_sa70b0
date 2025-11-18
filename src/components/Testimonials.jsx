import { motion } from 'framer-motion'

const quotes = [
  { name: 'Aarav', text: 'Soft chapatis every time. You can taste the freshness!' },
  { name: 'Meera', text: 'Their multigrain flour has transformed my baking.' },
  { name: 'Rahul', text: 'Consistent quality and great customer service.' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What Customers Say</h2>
          <p className="mt-2 text-slate-300">Real experiences from kitchens like yours.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={q.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur text-slate-200"
            >
              “{q.text}”
              <footer className="mt-4 text-sm text-slate-400">— {q.name}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
