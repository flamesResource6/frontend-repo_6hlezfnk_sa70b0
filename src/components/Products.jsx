import { motion } from 'framer-motion'

const products = [
  { name: 'Whole Wheat Flour', desc: 'Rich in fiber and nutrients. Ideal for breads and rotis.', price: '$6.99 / 2kg', tag: 'Stone-ground' },
  { name: 'All-Purpose Flour', desc: 'Perfect balance for daily cooking and baking.', price: '$5.49 / 2kg', tag: 'Versatile' },
  { name: 'Multigrain Flour', desc: 'A wholesome blend for hearty flavors.', price: '$7.99 / 2kg', tag: 'Nutritious' },
]

export default function Products() {
  return (
    <section id="products" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Products</h2>
          <p className="mt-2 text-slate-300">Fresh, consistent, and crafted for taste.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition"
            >
              <div className="text-xs inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-200">
                <span className="h-2 w-2 rounded-full bg-amber-400" /> {p.tag}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{p.name}</h3>
              <p className="mt-1 text-slate-300">{p.desc}</p>
              <div className="mt-4 text-amber-300 font-semibold">{p.price}</div>
              <button className="mt-6 w-full rounded-xl bg-amber-400 py-2 font-semibold text-slate-900 shadow hover:shadow-amber-400/30 hover:-translate-y-0.5 transition">
                Enquire
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
