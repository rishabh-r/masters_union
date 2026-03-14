import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BarChart3, ChevronLeft, TrendingUp, AlertTriangle, CheckCircle, XCircle, MinusCircle, ArrowRight, RefreshCw, Download } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts'

const channelMeta = {
  'Quick Commerce (Blinkit/Zepto)': { color: '#f97316', bg: 'from-orange-400 to-red-500', emoji: '⚡' },
  'Marketplace (Amazon/Flipkart)':  { color: '#3b82f6', bg: 'from-blue-400 to-indigo-500', emoji: '🛒' },
  'D2C Website':                     { color: '#8b5cf6', bg: 'from-purple-400 to-violet-600', emoji: '🌐' },
  'Modern Trade':                    { color: '#10b981', bg: 'from-emerald-400 to-teal-500', emoji: '🏪' },
  'General Trade':                   { color: '#6b7280', bg: 'from-slate-400 to-gray-500', emoji: '🏬' },
}

const recMeta = {
  pricing: { emoji: '💰', gradient: 'from-blue-50 to-indigo-50', border: 'border-blue-200', badge: 'bg-blue-100 text-blue-700' },
  city:    { emoji: '🏙️', gradient: 'from-purple-50 to-pink-50', border: 'border-purple-200', badge: 'bg-purple-100 text-purple-700' },
  pack:    { emoji: '📦', gradient: 'from-emerald-50 to-teal-50', border: 'border-emerald-200', badge: 'bg-emerald-100 text-emerald-700' },
}

const outcomeConfig = {
  success: { icon: <CheckCircle className="w-4 h-4" />, color: 'text-emerald-600', bg: 'bg-emerald-50', label: 'Success' },
  failure: { icon: <XCircle className="w-4 h-4" />, color: 'text-red-500', bg: 'bg-red-50', label: 'Failed' },
  partial: { icon: <MinusCircle className="w-4 h-4" />, color: 'text-amber-500', bg: 'bg-amber-50', label: 'Partial' },
}

const scoreColor = s => s >= 70 ? '#10b981' : s >= 50 ? '#f59e0b' : '#ef4444'
const scoreGradient = s => s >= 70 ? 'from-emerald-400 to-teal-500' : s >= 50 ? 'from-amber-400 to-orange-500' : 'from-red-400 to-rose-500'
const scoreEmoji = s => s >= 70 ? '🚀' : s >= 50 ? '⚠️' : '🔴'

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }
const stagger = { show: { transition: { staggerChildren: 0.1 } } }

function ScoreRing({ score }) {
  const radius = 60
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference

  return (
    <div className="relative w-40 h-40 mx-auto">
      <svg className="transform -rotate-90 w-full h-full">
        <circle cx="80" cy="80" r={radius} fill="none" stroke="#e0e7ff" strokeWidth="12" />
        <motion.circle
          cx="80" cy="80" r={radius}
          fill="none"
          stroke={scoreColor(score)}
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
          className="text-4xl font-black"
          style={{ color: scoreColor(score) }}
        >
          {score}
        </motion.div>
        <div className="text-xs text-sub font-medium">/ 100</div>
      </div>
    </div>
  )
}

export default function Dashboard() {
  const { state } = useLocation()
  const navigate = useNavigate()

  if (!state?.result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center bg-white rounded-3xl p-10 shadow-xl">
          <div className="text-5xl mb-4">🔍</div>
          <p className="text-sub mb-4">No analysis found.</p>
          <button onClick={() => navigate('/analyse')} className="bg-brand-500 text-white px-6 py-3 rounded-xl font-bold">
            Run an Analysis
          </button>
        </div>
      </div>
    )
  }

  const { analysis, comparables } = state.result
  const { product } = state
  const score = analysis.successScore || 0

  const channelBarData = (analysis.channelScores || []).map(c => ({
    name: c.channel.split(' ')[0],
    fullName: c.channel,
    score: c.score,
    reason: c.reason,
    color: channelMeta[c.channel]?.color || '#4f6ef7',
  }))

  const radarData = (analysis.channelScores || []).map(c => ({
    subject: c.channel.split(' ')[0],
    score: c.score,
  }))

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Blobs */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-brand-200/20 rounded-full blur-3xl blob pointer-events-none -z-0" />
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl blob2 pointer-events-none -z-0" />

      {/* Nav */}
      <nav className="sticky top-0 z-50 glass border-b border-white/60 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/analyse')} className="text-sub hover:text-ink transition-colors p-1">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md shadow-brand-500/25">
                <BarChart3 className="w-4 h-4 text-white" />
              </div>
              <span className="font-black text-ink tracking-tight">Rescale</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => navigate('/analyse')} className="flex items-center gap-1.5 text-sm text-sub hover:text-ink border border-border bg-white rounded-xl px-3 py-2 transition-colors font-medium">
              <RefreshCw className="w-4 h-4" /> New Analysis
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-8 relative z-10">
        {/* Report Header */}
        <motion.div initial="hidden" animate="show" variants={stagger} className="mb-8">
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-3xl">📋</span>
            <h1 className="text-3xl font-black text-ink">
              {product.brandName || 'Your Brand'} — Intelligence Report
            </h1>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
            {[product.category, product.priceBand, product.channel?.replace(/-/g, ' '), `${analysis.comparablesUsed || comparables?.length || 0} comparable launches`].filter(Boolean).map(t => (
              <span key={t} className="bg-white border border-border px-3 py-1 rounded-full text-xs font-semibold text-sub capitalize">
                {t}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Top 3 Cards */}
        <motion.div initial="hidden" animate="show" variants={stagger} className="grid md:grid-cols-3 gap-5 mb-6">

          {/* Score Card */}
          <motion.div
            variants={fadeUp}
            className={`bg-gradient-to-br ${scoreGradient(score)} rounded-3xl p-6 text-white relative overflow-hidden card-3d`}
          >
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="relative">
              <div className="text-sm font-bold opacity-80 mb-4">Success Probability</div>
              <ScoreRing score={score} />
              <div className="text-center mt-4">
                <span className="text-4xl">{scoreEmoji(score)}</span>
                <p className="text-white/80 text-sm mt-1">
                  {score >= 70 ? 'High Potential' : score >= 50 ? 'Moderate Risk' : 'High Risk'}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Verdict Card */}
          <motion.div variants={fadeUp} className="bg-white rounded-3xl p-6 shadow-md border border-border card-3d">
            <div className="text-xs font-bold text-sub uppercase tracking-wide mb-3">AI Verdict</div>
            <p className="text-ink font-bold text-lg leading-snug mb-4">"{analysis.verdict}"</p>
            <div className="space-y-2.5">
              {(analysis.redFlags || []).map((flag, i) => (
                <div key={i} className="flex items-start gap-2.5 bg-amber-50 border border-amber-100 rounded-xl px-3 py-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-amber-800">{flag}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Metrics Card */}
          <motion.div variants={fadeUp} className="bg-white rounded-3xl p-6 shadow-md border border-border card-3d">
            <div className="text-xs font-bold text-sub uppercase tracking-wide mb-4">Estimated Metrics</div>
            <div className="space-y-3">
              {[
                { label: 'Customer Acquisition Cost', value: analysis.estimatedMetrics?.cac, emoji: '💸' },
                { label: '90-Day Sell Through', value: analysis.estimatedMetrics?.sellThrough90, emoji: '📦' },
                { label: 'Repeat Purchase Rate', value: analysis.estimatedMetrics?.repeatRate, emoji: '🔁' },
                { label: 'Breakeven Timeline', value: analysis.estimatedMetrics?.timeToBreakeven, emoji: '⏱️' },
              ].map(m => (
                <div key={m.label} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{m.emoji}</span>
                    <span className="text-sm text-sub">{m.label}</span>
                  </div>
                  <span className="font-black text-ink text-sm">{m.value || '—'}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Channel Scores */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="bg-white rounded-3xl p-6 shadow-md border border-border mb-6"
        >
          <h2 className="font-black text-ink text-lg mb-1 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-brand-500" /> Channel Probability Scores
          </h2>
          <p className="text-sub text-sm mb-5">Which channel gives you the best shot</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="h-52">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={channelBarData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                  <XAxis dataKey="name" tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis domain={[0, 100]} tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{ background: '#fff', border: '1px solid #e0e7ff', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                    formatter={(val, _n, p) => [`${val}/100`, p.payload.fullName]}
                    labelFormatter={() => ''}
                  />
                  <Bar dataKey="score" radius={[8, 8, 0, 0]}>
                    {channelBarData.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-2">
              {(analysis.channelScores || []).map(c => {
                const meta = channelMeta[c.channel] || {}
                return (
                  <motion.div
                    key={c.channel}
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="flex items-center justify-between bg-slate-50 hover:bg-white border border-border rounded-2xl px-4 py-3 transition-all cursor-default"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl">{meta.emoji}</span>
                      <div>
                        <div className="text-sm font-bold text-ink">{c.channel}</div>
                        <div className="text-xs text-sub">{c.reason}</div>
                      </div>
                    </div>
                    <div className="text-2xl font-black ml-3" style={{ color: meta.color || scoreColor(c.score) }}>
                      {c.score}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Recommendations + Roadmap */}
        <div className="grid md:grid-cols-2 gap-5 mb-6">
          {/* Recommendations */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl p-6 shadow-md border border-border"
          >
            <h2 className="font-black text-ink text-lg mb-1">Top Recommendations</h2>
            <p className="text-sub text-sm mb-5">Data-driven changes to boost your score</p>
            <div className="space-y-3">
              {(analysis.recommendations || []).map((r, i) => {
                const meta = recMeta[r.type] || recMeta.pack
                return (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className={`bg-gradient-to-r ${meta.gradient} border ${meta.border} rounded-2xl p-4 cursor-default`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{meta.emoji}</span>
                        <div>
                          <div className="font-bold text-sm text-ink">{r.title}</div>
                          <p className="text-xs text-sub mt-0.5 leading-relaxed">{r.detail}</p>
                        </div>
                      </div>
                      <span className={`text-xs font-black px-2.5 py-1 rounded-full whitespace-nowrap ${meta.badge}`}>
                        {r.impact}
                      </span>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Channel Roadmap */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="bg-white rounded-3xl p-6 shadow-md border border-border"
          >
            <h2 className="font-black text-ink text-lg mb-1">Channel Sequencing Roadmap</h2>
            <p className="text-sub text-sm mb-5">Exactly when to launch which channel</p>
            <div className="space-y-1">
              {(analysis.channelSequence || []).map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black text-sm text-white flex-shrink-0 ${
                      i === 0 ? 'bg-gradient-to-br from-brand-500 to-purple-600' :
                      i === 1 ? 'bg-gradient-to-br from-emerald-400 to-teal-500' :
                      'bg-gradient-to-br from-orange-400 to-pink-500'
                    }`}>
                      {i + 1}
                    </div>
                    {i < (analysis.channelSequence.length - 1) && (
                      <div className="w-0.5 h-8 bg-border my-1" />
                    )}
                  </div>
                  <div className="pb-3">
                    <div className="text-xs font-bold text-brand-600 mb-0.5">{step.phase}</div>
                    <div className="text-sm font-bold text-ink">{step.action}</div>
                    <div className="text-xs text-sub mt-0.5">{step.why}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Comparable Launches */}
        {comparables && comparables.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-3xl p-6 shadow-md border border-border mb-6"
          >
            <h2 className="font-black text-ink text-lg mb-1">📚 Comparable Launches Analysed</h2>
            <p className="text-sub text-sm mb-5">These real brand launches informed your success score</p>
            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted text-left">
                    {['Brand', 'Category', 'Channel', '90D Sell-Through', 'Repeat Rate', 'CAC', 'Outcome'].map(h => (
                      <th key={h} className="px-4 py-3 text-xs font-bold text-sub">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparables.map((c, i) => {
                    const oc = outcomeConfig[c.outcome] || outcomeConfig.partial
                    return (
                      <motion.tr
                        key={c.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * i }}
                        className="border-t border-border hover:bg-muted transition-colors"
                      >
                        <td className="px-4 py-3 font-bold text-ink">{c.brand}</td>
                        <td className="px-4 py-3 text-sub">{c.category}</td>
                        <td className="px-4 py-3 text-sub capitalize text-xs">{c.channel.replace(/-/g, ' ')}</td>
                        <td className="px-4 py-3 font-semibold text-ink">{Math.round(c.sellThrough90Days * 100)}%</td>
                        <td className="px-4 py-3 font-semibold text-ink">{Math.round(c.repeatRate * 100)}%</td>
                        <td className="px-4 py-3 font-semibold text-ink">₹{c.cac}</td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${oc.bg} ${oc.color}`}>
                            {oc.icon} {oc.label}
                          </span>
                        </td>
                      </motion.tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-br from-brand-500 via-purple-600 to-pink-600 rounded-3xl p-10 text-center text-white relative overflow-hidden"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl blob" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl blob2" />
          <div className="relative">
            <div className="text-5xl mb-3">🔬</div>
            <h3 className="text-2xl font-black mb-2">Want real consumer validation?</h3>
            <p className="text-white/80 text-base mb-6 max-w-xl mx-auto">
              Our Ground Intelligence Network deploys 300–500 field researchers to test with your actual target demographic.
              <br />
              <strong>10 days · ₹2–5L</strong> vs 90 days · ₹20–50L with traditional firms.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white text-brand-600 px-8 py-3.5 rounded-2xl font-black text-base flex items-center gap-2 justify-center shadow-xl"
              >
                Request Ground Intelligence Test <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={() => navigate('/analyse')}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="border-2 border-white/40 text-white px-8 py-3.5 rounded-2xl font-bold text-base flex items-center gap-2 justify-center hover:bg-white/10 transition-colors"
              >
                <RefreshCw className="w-4 h-4" /> New Analysis
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
