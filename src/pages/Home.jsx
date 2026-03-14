import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BarChart3, Zap, Target, TrendingUp, ChevronRight, Database, Brain, ArrowRight, Star, CheckCircle } from 'lucide-react'

const stats = [
  { label: 'Product Launches Analysed', value: '10,000+', color: 'from-blue-500 to-indigo-600', icon: '📊' },
  { label: 'Distribution Channels Mapped', value: '20+', color: 'from-purple-500 to-pink-500', icon: '🗺️' },
  { label: 'Cities Covered', value: '150+', color: 'from-emerald-500 to-teal-500', icon: '🏙️' },
  { label: 'Brands Helped', value: '500+', color: 'from-orange-500 to-red-500', icon: '🚀' },
]

const pillars = [
  {
    icon: '🎯',
    title: 'Ground Intelligence Network',
    desc: '300–500 real consumer tests in 10 days for ₹2–5L. vs ₹20–50L and 90 days with traditional firms.',
    gradient: 'from-blue-50 to-indigo-100',
    border: 'border-blue-200',
    badge: '10x Faster',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
  {
    icon: '🧠',
    title: 'Data Intelligence Engine',
    desc: '10,000+ launch records — category, price band, channel performance, failure patterns. Real data, not opinions.',
    gradient: 'from-purple-50 to-pink-100',
    border: 'border-purple-200',
    badge: '10K+ Records',
    badgeColor: 'bg-purple-100 text-purple-700',
  },
  {
    icon: '⚡',
    title: 'AI Recommendation Layer',
    desc: 'Success probability score, channel sequencing roadmap, city prioritisation — all in 30 seconds.',
    gradient: 'from-emerald-50 to-teal-100',
    border: 'border-emerald-200',
    badge: '30s Results',
    badgeColor: 'bg-emerald-100 text-emerald-700',
  },
]

const problems = [
  { stat: '6–18 months', label: 'wasted testing wrong channels', color: 'text-rose-500' },
  { stat: '₹20–80L', label: 'burned on failed channel experiments', color: 'text-orange-500' },
  { stat: '<15%', label: 'of funded D2C brands are profitable', color: 'text-red-500' },
]

const testimonials = [
  { name: 'Ananya Sharma', role: 'Founder, GlowSkin D2C', text: 'Saved us 6 months and ₹40L by telling us Blinkit was wrong for our price point.', avatar: 'AS' },
  { name: 'Rahul Mehta', role: 'CEO, NutriFirst', text: 'The channel sequencing roadmap was exactly what we needed before our Series A pitch.', avatar: 'RM' },
  { name: 'Priya Kapoor', role: 'Co-founder, SnackBox', text: 'Identified Delhi NCR as our priority market. 3x better sell-through than our original plan.', avatar: 'PK' },
]

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }
const stagger = { show: { transition: { staggerChildren: 0.12 } } }

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 glass border-b border-white/60 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-gradient-to-br from-brand-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-brand-500/30">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-black text-xl text-ink tracking-tight">Rescale</span>
              <span className="hidden sm:inline text-xs text-sub ml-2 italic">Unlearn. Remeasure. Rescale.</span>
            </div>
          </div>
          <motion.button
            onClick={() => navigate('/analyse')}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-r from-brand-500 to-purple-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-lg shadow-brand-500/25 flex items-center gap-1.5"
          >
            Try Free <Zap className="w-4 h-4" />
          </motion.button>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-10 text-center overflow-hidden">
        {/* Background blobs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-brand-300/25 rounded-full blur-3xl blob pointer-events-none" />
        <div className="absolute -top-10 -right-20 w-80 h-80 bg-purple-300/25 rounded-full blur-3xl blob2 pointer-events-none" />
        <div className="absolute top-40 left-1/2 w-64 h-64 bg-pink-300/20 rounded-full blur-3xl blob3 pointer-events-none" />

        <motion.div
          initial="hidden" animate="show" variants={stagger}
          className="relative z-10"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white border border-brand-200 rounded-full px-4 py-2 text-sm font-medium text-brand-600 mb-8 shadow-sm">
            <Star className="w-3.5 h-3.5 fill-brand-500 text-brand-500" />
            #1 Distribution Intelligence Platform for Indian D2C Brands
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] mb-6">
            Stop Scaling{' '}
            <span className="gradient-text block">Blind.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-xl md:text-2xl text-sub max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Brands waste crores testing the wrong channels. We tell you exactly where to launch, which city to start, and what your success probability is — in 30 seconds.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => navigate('/analyse')}
              whileHover={{ scale: 1.04, boxShadow: '0 20px 40px rgba(79,110,247,0.35)' }}
              whileTap={{ scale: 0.97 }}
              className="bg-gradient-to-r from-brand-500 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 justify-center shadow-xl shadow-brand-500/30 pulse-glow"
            >
              Analyse My Product Free
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={() => navigate('/analyse')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white border-2 border-brand-200 text-ink px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-2 justify-center shadow-md hover:border-brand-400 transition-colors"
            >
              Watch Demo <span className="text-2xl">▶</span>
            </motion.button>
          </motion.div>

          <motion.p variants={fadeUp} className="text-sm text-sub mt-4">
            No signup · No credit card · Results in 30 seconds
          </motion.p>
        </motion.div>

        {/* Floating 3D Cards */}
        <div className="relative mt-20 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="relative w-full max-w-3xl"
          >
            {/* Main dashboard preview card */}
            <div className="glass rounded-3xl p-6 shadow-2xl border border-white/80 card-3d">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 h-6 bg-white/60 rounded-lg flex items-center px-3">
                  <span className="text-xs text-slate-400">rescale.ai/dashboard</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-1 bg-gradient-to-br from-brand-500 to-purple-600 rounded-2xl p-4 text-white text-center">
                  <div className="text-4xl font-black mb-1">72</div>
                  <div className="text-xs opacity-80">Success Score</div>
                  <div className="mt-2 text-2xl">🎯</div>
                </div>
                <div className="col-span-2 bg-white/80 rounded-2xl p-4">
                  <div className="text-xs font-semibold text-sub mb-3">Channel Scores</div>
                  {[
                    { ch: 'D2C Website', s: 85, c: 'bg-brand-500' },
                    { ch: 'Quick Commerce', s: 58, c: 'bg-purple-500' },
                    { ch: 'Marketplace', s: 71, c: 'bg-emerald-500' },
                  ].map(item => (
                    <div key={item.ch} className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-sub w-28 truncate">{item.ch}</span>
                      <div className="flex-1 bg-gray-100 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.s}%` }}
                          transition={{ delay: 1, duration: 0.8 }}
                          className={`h-2 rounded-full ${item.c}`}
                        />
                      </div>
                      <span className="text-xs font-bold text-ink w-6">{item.s}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-3">
                {['Month 1-3: Blinkit Delhi', 'Month 4: Own Website', 'Month 9: GT Trade'].map((t, i) => (
                  <div key={t} className="bg-white/70 rounded-xl p-2.5 text-center">
                    <div className="text-lg mb-0.5">{'🚀📈🏪'[i]}</div>
                    <div className="text-xs text-sub">{t}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge cards */}
            <motion.div
              className="absolute -left-8 top-10 glass rounded-2xl px-4 py-3 shadow-xl float border border-white/80"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-100 rounded-xl flex items-center justify-center text-lg">✅</div>
                <div>
                  <div className="text-xs font-bold text-ink">Saved ₹40L</div>
                  <div className="text-xs text-sub">GlowSkin Brand</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -right-8 top-20 glass rounded-2xl px-4 py-3 shadow-xl float-d1 border border-white/80"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-100 rounded-xl flex items-center justify-center text-lg">📊</div>
                <div>
                  <div className="text-xs font-bold text-ink">214 Comparables</div>
                  <div className="text-xs text-sub">Analysed instantly</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -right-4 bottom-10 glass rounded-2xl px-4 py-3 shadow-xl float-d2 border border-white/80"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-100 rounded-xl flex items-center justify-center text-lg">⚡</div>
                <div>
                  <div className="text-xs font-bold text-ink">30 seconds</div>
                  <div className="text-xs text-sub">Full report ready</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 gap-5"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="card-3d bg-white rounded-3xl p-6 shadow-md border border-border text-center cursor-default"
            >
              <div className="text-4xl mb-2">{s.icon}</div>
              <div className={`text-3xl font-black bg-gradient-to-r ${s.color} bg-clip-text text-transparent mb-1`}>
                {s.value}
              </div>
              <div className="text-xs text-sub leading-tight">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Problem Section */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 border border-red-100 rounded-3xl p-10 md:p-14 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-red-200/30 rounded-full blur-3xl" />
          <motion.div variants={fadeUp} className="text-center mb-10">
            <span className="text-4xl">😤</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink mt-3 mb-2">The Painful Reality</h2>
            <p className="text-sub">Every Indian D2C founder knows this pain</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((p) => (
              <motion.div
                key={p.stat}
                variants={fadeUp}
                whileHover={{ scale: 1.04, rotate: 1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-red-100 card-3d"
              >
                <div className={`text-5xl font-black mb-2 ${p.color}`}>{p.stat}</div>
                <div className="text-sub text-sm">{p.label}</div>
              </motion.div>
            ))}
          </div>
          <motion.p variants={fadeUp} className="text-center mt-8 text-ink font-bold text-lg">
            "Brands don't fail because of bad products. They fail because of wrong distribution decisions." 💡
          </motion.p>
        </motion.div>
      </div>

      {/* Three Pillars */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-ink mb-3">How Rescale Works</h2>
            <p className="text-sub text-lg">Three intelligence pillars → One decision platform</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                whileHover={{ scale: 1.04, rotate: i % 2 === 0 ? -1 : 1 }}
                className={`card-3d bg-gradient-to-br ${p.gradient} border ${p.border} rounded-3xl p-7 relative overflow-hidden cursor-default`}
              >
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/30 rounded-full blur-xl" />
                <div className="relative">
                  <div className="text-5xl mb-4">{p.icon}</div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${p.badgeColor} mb-3 inline-block`}>
                    {p.badge}
                  </span>
                  <h3 className="font-black text-ink text-lg mb-3">{p.title}</h3>
                  <p className="text-sub text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto px-6 py-8 pb-16">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp} className="text-center mb-10">
            <h2 className="text-3xl font-black text-ink mb-2">Loved by Founders</h2>
            <p className="text-sub">Real results from real brands</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                whileHover={{ scale: 1.03, rotate: i % 2 === 0 ? 0.5 : -0.5 }}
                className="card-3d bg-white rounded-2xl p-6 shadow-sm border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sub text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-ink">{t.name}</div>
                    <div className="text-xs text-sub">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CTA Banner */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-brand-500 via-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl blob" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl blob2" />
          <div className="relative">
            <div className="text-5xl mb-4">🚀</div>
            <h2 className="text-3xl md:text-4xl font-black mb-3">Ready to launch smarter?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Get your full distribution intelligence report in 30 seconds. Free, forever for early users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => navigate('/analyse')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white text-brand-600 px-10 py-4 rounded-2xl font-black text-lg shadow-xl flex items-center gap-2 justify-center"
              >
                Analyse Your Product <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
            <div className="flex items-center justify-center gap-6 mt-6 text-white/70 text-sm">
              {['No signup required', 'Free forever', '30 second results'].map(t => (
                <div key={t} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" /> {t}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
