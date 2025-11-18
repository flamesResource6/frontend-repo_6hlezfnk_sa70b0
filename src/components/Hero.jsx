import { motion } from 'framer-motion'
import { Wheat } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-24 overflow-hidden">
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-blue-500/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                <Wheat className="h-4 w-4 text-amber-400" /> Stone-ground goodness
              </div>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Flour crafted with care. Taste the difference.
              </h1>
              <p className="mt-4 text-slate-300 text-lg">
                From premium wheat to finely milled flour — we combine tradition and modern precision to bring you the freshest, most nutritious flour.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <a href="#products" className="rounded-xl bg-amber-400 px-6 py-3 text-slate-900 font-semibold shadow hover:shadow-amber-400/30 hover:-translate-y-0.5 transition">
                  Explore Products
                </a>
                <a href="#process" className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white font-semibold hover:bg-white/10 transition">
                  See Our Process
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="relative mx-auto h-72 w-72 sm:h-80 sm:w-80 lg:h-[28rem] lg:w-[28rem] rounded-3xl bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500 p-1 shadow-2xl">
              <div className="h-full w-full rounded-3xl bg-slate-900 grid place-items-center">
                <Wheat className="h-24 w-24 text-amber-400 drop-shadow" />
              </div>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 shadow">
              100% Natural
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }} className="absolute -top-6 -right-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 shadow">
              Freshly Milled
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
