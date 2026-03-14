import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BarChart3, ChevronLeft, TrendingUp, AlertTriangle, CheckCircle, XCircle, MinusCircle, ArrowRight, RefreshCw } from 'lucide-react'
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts'

const channelColors = {
  'Quick Commerce (Blinkit/Zepto)': '#f97316',
  'Marketplace (Amazon/Flipkart)': '#3b82f6',
  'D2C Website': '#8b5cf6',
  'Modern Trade': '#10b981',
  'General Trade': '#6b7280',
}

const outcomeIcon = (outcome) => {
  if (outcome === 'success') return <CheckCircle className="w-4 h-4 text-emerald-400" />
  if (outcome === 'failure') return <XCircle className="w-4 h-4 text-red-400" />
  return <MinusCircle className="w-4 h-4 text-yellow-400" />
}

const outcomeLabel = (outcome) => {
  if (outcome === 'success') return 'Success'
  if (outcome === 'failure') return 'Failed'
  return 'Partial'
}

const outcomeColor = (outcome) => {
  if (outcome === 'success') return 'text-emerald-400'
  if (outcome === 'failure') return 'text-red-400'
  return 'text-yellow-400'
}

const scoreColor = (score) => {
  if (score >= 70) return '#10b981'
  if (score >= 50) return '#f59e0b'
  return '#ef4444'
}

const recTypeColor = {
  pricing: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
  city: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
  pack: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
}

export default function Dashboard() {
  const { state } = useLocation()
  const navigate = useNavigate()

  if (!state?.result) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center text-white">
        <div className="text-center">
          <p className="text-slate-400 mb-4">No analysis found.</p>
          <button onClick={() => navigate('/analyse')} className="text-brand-500 hover:underline">
            Run an analysis
          </button>
        </div>
      </div>
    )
  }

  const { analysis, comparables } = state.result
  const { product } = state
  const score = analysis.successScore || 0

  const gaugeData = [{ name: 'score', value: score, fill: scoreColor(score) }]
  const channelData = (analysis.channelScores || []).map(c => ({
    name: c.channel.split(' ')[0],
    fullName: c.channel,
    score: c.score,
    reason: c.reason,
  }))

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Nav */}
      <nav className="border-b border-border px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/analyse')} className="text-slate-400 hover:text-white transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-brand-500 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-bold tracking-tight">Rescale</span>
          </div>
        </div>
        <button
          onClick={() => navigate('/analyse')}
          className="flex items-center gap-2 text-sm text-slate-400 hover:text-white border border-border rounded-lg px-3 py-1.5 transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          New Analysis
        </button>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl font-bold mb-1">
            {product.brandName || 'Your Brand'} — Distribution Intelligence Report
          </h1>
          <p className="text-slate-400">
            {product.category} · {product.priceBand} · {product.channel.replace('-', ' ')} · Based on {analysis.comparablesUsed || comparables.length} comparable launches
          </p>
        </motion.div>

        {/* Top Row: Score + Verdict + Metrics */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {/* Success Score Gauge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center"
          >
            <div className="text-sm text-slate-400 mb-2">Success Probability Score</div>
            <div className="w-48 h-36">
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                  cx="50%" cy="80%"
                  innerRadius="70%" outerRadius="100%"
                  barSize={14}
                  data={gaugeData}
                  startAngle={180} endAngle={0}
                >
                  <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                  <RadialBar background={{ fill: '#2a2d3a' }} dataKey="value" angleAxisId={0} data={gaugeData} />
                </RadialBarChart>
              </ResponsiveContainer>
            </div>
            <div className="text-5xl font-bold mt-2" style={{ color: scoreColor(score) }}>{score}</div>
            <div className="text-sm text-slate-400 mt-1">out of 100</div>
          </motion.div>

          {/* Verdict */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className="bg-card border border-border rounded-2xl p-6"
          >
            <div className="text-sm text-slate-400 mb-3">AI Verdict</div>
            <p className="text-white font-medium text-lg leading-snug mb-4">"{analysis.verdict}"</p>
            <div className="space-y-2">
              {(analysis.redFlags || []).map((flag, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <AlertTriangle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">{flag}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Estimated Metrics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-6"
          >
            <div className="text-sm text-slate-400 mb-3">Estimated Metrics</div>
            <div className="space-y-4">
              {[
                { label: 'Customer Acquisition Cost', value: analysis.estimatedMetrics?.cac },
                { label: '90-Day Sell Through', value: analysis.estimatedMetrics?.sellThrough90 },
                { label: 'Repeat Purchase Rate', value: analysis.estimatedMetrics?.repeatRate },
                { label: 'Time to Breakeven', value: analysis.estimatedMetrics?.timeToBreakeven },
              ].map(m => (
                <div key={m.label} className="flex justify-between items-center">
                  <span className="text-sm text-slate-400">{m.label}</span>
                  <span className="text-white font-semibold text-sm">{m.value || '—'}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Channel Scores */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="bg-card border border-border rounded-2xl p-6 mb-6"
        >
          <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-brand-500" />
            Channel Probability Scores
          </h2>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={channelData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <XAxis dataKey="name" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis domain={[0, 100]} tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ background: '#1a1d27', border: '1px solid #2a2d3a', borderRadius: '12px', color: '#fff' }}
                  formatter={(val, _name, props) => [val + '/100', props.payload.fullName]}
                />
                <Bar dataKey="score" radius={[6, 6, 0, 0]}>
                  {channelData.map((entry) => (
                    <Cell key={entry.name} fill={channelColors[entry.fullName] || '#4f6ef7'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
            {(analysis.channelScores || []).map(c => (
              <div key={c.channel} className="flex items-center justify-between bg-surface rounded-xl px-4 py-3">
                <div>
                  <div className="text-sm font-medium text-white">{c.channel}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{c.reason}</div>
                </div>
                <div className="text-xl font-bold ml-4" style={{ color: scoreColor(c.score) }}>{c.score}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recommendations + Channel Sequence */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Recommendations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card border border-border rounded-2xl p-6"
          >
            <h2 className="font-bold text-lg mb-4">Top Recommendations</h2>
            <div className="space-y-4">
              {(analysis.recommendations || []).map((r, i) => (
                <div key={i} className={`border rounded-xl p-4 ${recTypeColor[r.type] || 'bg-slate-500/10 border-slate-500/30 text-slate-400'}`}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-semibold text-sm text-white">{r.title}</div>
                    <div className="text-xs font-bold">{r.impact}</div>
                  </div>
                  <p className="text-xs opacity-80">{r.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Channel Sequence Roadmap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="bg-card border border-border rounded-2xl p-6"
          >
            <h2 className="font-bold text-lg mb-4">Channel Sequencing Roadmap</h2>
            <div className="space-y-3">
              {(analysis.channelSequence || []).map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-brand-500/20 border border-brand-500/40 flex items-center justify-center text-brand-500 font-bold text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    {i < (analysis.channelSequence.length - 1) && (
                      <div className="w-0.5 h-8 bg-border mt-1" />
                    )}
                  </div>
                  <div className="pb-2">
                    <div className="text-xs text-slate-400 mb-0.5">{step.phase}</div>
                    <div className="text-sm font-medium text-white">{step.action}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{step.why}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Comparable Launches */}
        {comparables && comparables.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card border border-border rounded-2xl p-6"
          >
            <h2 className="font-bold text-lg mb-2">Comparable Launches Analysed</h2>
            <p className="text-slate-400 text-sm mb-4">These launches informed your success score and recommendations.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-slate-400 text-left border-b border-border">
                    <th className="pb-3 font-medium">Brand</th>
                    <th className="pb-3 font-medium">Category</th>
                    <th className="pb-3 font-medium">Channel</th>
                    <th className="pb-3 font-medium">90D Sell-Through</th>
                    <th className="pb-3 font-medium">Repeat Rate</th>
                    <th className="pb-3 font-medium">CAC</th>
                    <th className="pb-3 font-medium">Outcome</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {comparables.map(c => (
                    <tr key={c.id} className="hover:bg-surface transition-colors">
                      <td className="py-3 font-medium text-white">{c.brand}</td>
                      <td className="py-3 text-slate-400">{c.category}</td>
                      <td className="py-3 text-slate-400 capitalize">{c.channel.replace('-', ' ')}</td>
                      <td className="py-3 text-slate-300">{Math.round(c.sellThrough90Days * 100)}%</td>
                      <td className="py-3 text-slate-300">{Math.round(c.repeatRate * 100)}%</td>
                      <td className="py-3 text-slate-300">₹{c.cac}</td>
                      <td className="py-3">
                        <div className={`flex items-center gap-1.5 ${outcomeColor(c.outcome)}`}>
                          {outcomeIcon(c.outcome)}
                          <span className="text-xs font-medium">{outcomeLabel(c.outcome)}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-gradient-to-r from-brand-500/20 to-purple-500/20 border border-brand-500/30 rounded-2xl p-8 text-center"
        >
          <h3 className="text-xl font-bold mb-2">Want real consumer validation?</h3>
          <p className="text-slate-400 mb-6">
            Our Ground Intelligence Network deploys 300–500 researchers to test with your actual target demographic in 10 days for ₹2–5L.
            <br />vs ₹20–50L and 90 days with traditional firms.
          </p>
          <button className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-3 rounded-xl font-semibold inline-flex items-center gap-2 transition-colors">
            Request Ground Intelligence Test
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </div>
  )
}
