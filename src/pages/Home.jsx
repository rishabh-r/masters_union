import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BarChart3, Zap, Target, TrendingUp, ChevronRight, Database, Brain } from 'lucide-react'

const stats = [
  { label: 'Product Launches Analysed', value: '10,000+' },
  { label: 'Distribution Channels Mapped', value: '20+' },
  { label: 'Cities Covered', value: '150+' },
  { label: 'Brands Saved from Wrong Channels', value: '500+' },
]

const pillars = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Ground Intelligence Network',
    desc: 'Real consumer tests by 300-500 target consumers in 10 days for ₹2-5L vs ₹20-50L and 90 days with traditional firms.',
    color: 'from-blue-500/20 to-blue-600/10',
    border: 'border-blue-500/30',
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'Data Intelligence Engine',
    desc: 'Proprietary database of 10,000+ consumer launches — launch config, performance outcomes, and failure patterns.',
    color: 'from-purple-500/20 to-purple-600/10',
    border: 'border-purple-500/30',
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'AI Recommendation Layer',
    desc: 'Success probability score, channel sequencing strategy, and city-level expansion roadmap — all data-driven.',
    color: 'from-emerald-500/20 to-emerald-600/10',
    border: 'border-emerald-500/30',
  },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Nav */}
      <nav className="border-b border-border px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
            <BarChart3 className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight">Rescale</span>
        </div>
        <div className="text-sm text-slate-400 italic">Unlearn. Remeasure. Rescale.</div>
      </nav>

      {/* Hero */}
      <div className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/30 rounded-full px-4 py-1.5 text-sm text-brand-500 mb-6">
            <Zap className="w-3.5 h-3.5" />
            Distribution Intelligence for Consumer Brands
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
            Stop scaling{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-purple-500">
              blind.
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Brands waste 6–18 months and crores testing the wrong channels. Rescale gives you the intelligence layer to launch right — the first time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => navigate('/analyse')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 justify-center transition-colors"
            >
              Analyse My Product
              <ChevronRight className="w-5 h-5" />
            </motion.button>
            <button
              onClick={() => navigate('/analyse')}
              className="border border-border hover:border-slate-500 text-slate-300 px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              See a Demo
            </button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-card border border-border rounded-2xl p-6">
              <div className="text-3xl font-bold text-white mb-1">{s.value}</div>
              <div className="text-sm text-slate-400">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Problem */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-6 text-white">The Crisis No One Talks About</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { stat: '6–18 months', label: 'wasted testing wrong channels', sub: 'before finding distribution fit' },
              { stat: '₹20–80L', label: 'burned on bad channel experiments', sub: 'before PMF is validated' },
              { stat: '<15%', label: 'of funded D2C brands profitable', sub: '24 out of 170+ funded brands in FY23' },
            ].map((item) => (
              <div key={item.stat} className="text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">{item.stat}</div>
                <div className="text-white font-medium mb-1">{item.label}</div>
                <div className="text-sm text-slate-400">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Three Pillars */}
      <div className="max-w-5xl mx-auto px-6 py-8 pb-20">
        <h2 className="text-3xl font-bold text-center mb-4">How Rescale Works</h2>
        <p className="text-slate-400 text-center mb-12">Three intelligence pillars. One decision platform.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className={`bg-gradient-to-b ${p.color} border ${p.border} rounded-2xl p-6`}
            >
              <div className="text-brand-500 mb-4">{p.icon}</div>
              <h3 className="font-bold text-white mb-3">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <motion.button
            onClick={() => navigate('/analyse')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-brand-500 hover:bg-brand-600 text-white px-10 py-4 rounded-xl font-semibold text-lg inline-flex items-center gap-2 transition-colors"
          >
            <TrendingUp className="w-5 h-5" />
            Analyse Your Brand Now — Free
          </motion.button>
          <p className="text-slate-500 text-sm mt-3">No signup required. Results in 30 seconds.</p>
        </div>
      </div>
    </div>
  )
}
