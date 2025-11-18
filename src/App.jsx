import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(251,191,36,0.08),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.06),transparent_30%)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <section id="mill" className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
              <h2 className="text-2xl sm:text-3xl font-bold">About Our Mill</h2>
              <p className="mt-3 text-slate-300">We run a modern, hygienic facility with stone and roller mills to match different baking needs. Every batch is tested to ensure consistency and freshness.</p>
            </div>
          </div>
        </section>
        <Products />
        <Process />
        <Testimonials />
        <Contact />
        <footer className="py-10 text-center text-slate-400">© {new Date().getFullYear()} BlueFlour Mills. All rights reserved.</footer>
      </main>
    </div>
  )
}

export default App
