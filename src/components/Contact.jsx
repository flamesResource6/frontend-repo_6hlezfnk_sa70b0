import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s Talk</h2>
          <p className="mt-2 text-slate-300">Wholesale or retail — we’re happy to help.</p>
        </motion.div>
        <form onSubmit={(e)=>e.preventDefault()} className="mt-8 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required placeholder="Name" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50" />
            <input required type="email" placeholder="Email" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50" />
          </div>
          <input placeholder="Phone" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50" />
          <textarea required placeholder="Message" rows="4" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50" />
          <button className="mt-2 rounded-xl bg-amber-400 px-6 py-3 font-semibold text-slate-900 shadow hover:shadow-amber-400/30 hover:-translate-y-0.5 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
