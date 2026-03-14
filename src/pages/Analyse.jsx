import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BarChart3, ChevronLeft, Loader2, Sparkles, ChevronRight } from 'lucide-react'
import axios from 'axios'

const categories = ['Beverages', 'Skincare', 'Snacks', 'Wellness', 'Personal Care', 'Apparel', 'Electronics', 'Dairy', 'Instant Food', 'Condiments', 'Pet Care', 'Home Care']
const ageGroups = ['16-24', '18-28', '18-32', '18-35', '20-35', '22-32', '22-38', '22-40', '24-40', '25-38', '25-40', '25-45', '28-45', '28-50', '30-50']
const incomeGroups = ['₹2L-₹6L', '₹3L-₹8L', '₹4L-₹12L', '₹5L-₹15L', '₹6L-₹20L', '₹8L-₹25L', '₹10L-₹30L', '₹12L-₹40L', '₹15L-₹50L']
const channels = [
  { value: 'quick-commerce', label: 'Quick Commerce', sub: 'Blinkit, Zepto, Swiggy Instamart', emoji: '⚡' },
  { value: 'marketplace', label: 'Marketplace', sub: 'Amazon, Flipkart, Meesho', emoji: '🛒' },
  { value: 'd2c-website', label: 'D2C Website', sub: 'Own Shopify / website', emoji: '🌐' },
  { value: 'modern-trade', label: 'Modern Trade', sub: 'DMart, Reliance, Big Basket', emoji: '🏪' },
  { value: 'general-trade', label: 'General Trade', sub: 'Kirana stores, local retail', emoji: '🏬' },
]
const cityTiers = ['Tier 1', 'Tier 2', 'Tier 1+2', 'Pan India']

const demoData = {
  brandName: 'Freshly Yours',
  category: 'Snacks',
  subcategory: 'Healthy Snacks',
  priceBand: '₹80-₹150',
  packSize: '75g',
  targetAge: '22-38',
  targetIncome: '₹8L-₹25L',
  channel: 'quick-commerce',
  cities: 'Delhi, Mumbai, Bangalore',
  cityTier: 'Tier 1',
}

const steps = ['Product Details', 'Target & Channel', 'Launch Cities']

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }

export default function Analyse() {
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({
    brandName: '', category: '', subcategory: '', priceBand: '',
    packSize: '', targetAge: '', targetIncome: '',
    channel: '', cities: '', cityTier: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async (data = form) => {
    setLoading(true)
    setError('')
    try {
      const res = await axios.post('/api/analyse', data)
      navigate('/dashboard', { state: { result: res.data, product: data } })
    } catch (e) {
      setError(e.response?.data?.error || 'Something went wrong. Check your API key.')
      setLoading(false)
    }
  }

  const loadDemo = () => { setForm(demoData) }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Blobs */}
      <div className="fixed -top-20 -left-20 w-80 h-80 bg-brand-200/30 rounded-full blur-3xl blob pointer-events-none" />
      <div className="fixed -bottom-20 -right-20 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl blob2 pointer-events-none" />

      {/* Nav */}
      <nav className="sticky top-0 z-50 glass border-b border-white/60 px-6 py-4">
        <div className="max-w-2xl mx-auto flex items-center gap-4">
          <button onClick={() => navigate('/')} className="text-sub hover:text-ink transition-colors p-1">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md shadow-brand-500/25">
              <BarChart3 className="w-4 h-4 text-white" />
            </div>
            <span className="font-black text-ink tracking-tight">Rescale</span>
          </div>
          <div className="flex-1" />
          <button
            onClick={loadDemo}
            className="text-sm text-brand-600 hover:text-brand-700 bg-brand-50 border border-brand-200 px-3 py-1.5 rounded-xl transition-colors flex items-center gap-1.5 font-medium"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Load Demo
          </button>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-10 relative z-10">
        {/* Header */}
        <motion.div initial="hidden" animate="show" variants={fadeUp} className="text-center mb-8">
          <div className="text-5xl mb-3">🔬</div>
          <h1 className="text-3xl font-black text-ink mb-2">Analyse Your Product</h1>
          <p className="text-sub">Fill in the details. We cross-reference 10,000+ launches and generate your intelligence report in 30 seconds.</p>
        </motion.div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                i === step ? 'bg-brand-500 text-white shadow-md shadow-brand-500/30' :
                i < step ? 'bg-emerald-100 text-emerald-700' : 'bg-white text-sub border border-border'
              }`}>
                {i < step ? '✓' : i + 1} {s}
              </div>
              {i < steps.length - 1 && <ChevronRight className="w-4 h-4 text-slate-300" />}
            </div>
          ))}
        </div>

        {/* Form Card */}
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-3xl p-8 shadow-xl shadow-brand-500/8 border border-border"
        >
          {/* Step 0 */}
          {step === 0 && (
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-ink mb-2">Brand / Product Name</label>
                <input
                  value={form.brandName}
                  onChange={e => set('brandName', e.target.value)}
                  placeholder="e.g. Freshly Yours"
                  className="w-full bg-muted border-2 border-border rounded-2xl px-4 py-3.5 text-ink placeholder-slate-400 focus:outline-none focus:border-brand-400 transition-colors font-medium"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-ink mb-2">Category *</label>
                  <select
                    value={form.category}
                    onChange={e => set('category', e.target.value)}
                    required
                    className="w-full bg-muted border-2 border-border rounded-2xl px-4 py-3.5 text-ink focus:outline-none focus:border-brand-400 transition-colors font-medium"
                  >
                    <option value="">Select...</option>
                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-ink mb-2">Subcategory</label>
                  <input
                    value={form.subcategory}
                    onChange={e => set('subcategory', e.target.value)}
                    placeholder="e.g. Protein Bars"
                    className="w-full bg-muted border-2 border-border rounded-2xl px-4 py-3.5 text-ink placeholder-slate-400 focus:outline-none focus:border-brand-400 transition-colors font-medium"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-ink mb-2">Price Band *</label>
                  <input
                    value={form.priceBand}
                    onChange={e => set('priceBand', e.target.value)}
                    placeholder="e.g. ₹200-₹350"
                    required
                    className="w-full bg-muted border-2 border-border rounded-2xl px-4 py-3.5 text-ink placeholder-slate-400 focus:outline-none focus:border-brand-400 transition-colors font-medium"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-ink mb-2">Pack Size</label>
                  <input
                    value={form.packSize}
                    onChange={e => set('packSize', e.target.value)}
                    placeholder="e.g. 250ml, 500g"
                    className="w-full bg-muted border-2 border-border rounded-2xl px-4 py-3.5 text-ink placeholder-slate-400 focus:outline-none focus:border-brand-400 transition-colors font-medium"
                  />
                </div>
              </div>
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => { if (form.category && form.priceBand) setStep(1) }}
                disabled={!form.category || !form.priceBand}
                className="w-full bg-gradient-to-r from-brand-500 to-purple-600 text-white py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-brand-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next: Target & Channel <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          )}

          {/* Step 1 */}
          {step === 1 && (
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-ink mb-2">Target Age Group *</label>
                  <select
                    value={form.targetAge}
                    onChange={e => set('targetAge', e.target.value)}
                    required
                    className="w-full bg-muted border-2 border-border rounded-2xl px-4 py-3.5 text-ink focus:outline-none focus:border-brand-400 transition-colors font-medium"
                  >
                    <option value="">Select...</option>
                    {ageGroups.map(a => <option key={a} value={a}>{a} years</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-ink mb-2">Target Income</label>
                  <select
                    value={form.targetIncome}
                    onChange={e => set('targetIncome', e.target.value)}
                    className="w-full bg-muted border-2 border-border rounded-2xl px-4 py-3.5 text-ink focus:outline-none focus:border-brand-400 transition-colors font-medium"
                  >
                    <option value="">Select...</option>
                    {incomeGroups.map(i => <option key={i} value={i}>{i} annual</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-ink mb-3">Launch Channel *</label>
                <div className="space-y-2">
                  {channels.map(c => (
                    <motion.label
                      key={c.value}
                      whileHover={{ scale: 1.01 }}
                      className={`flex items-center gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                        form.channel === c.value
                          ? 'border-brand-400 bg-brand-50 shadow-sm'
                          : 'border-border hover:border-brand-200 bg-muted'
                      }`}
                    >
                      <input
                        type="radio"
                        name="channel"
                        value={c.value}
                        checked={form.channel === c.value}
                        onChange={e => set('channel', e.target.value)}
                        className="accent-brand-500"
                      />
                      <span className="text-2xl">{c.emoji}</span>
                      <div>
                        <div className="text-sm font-bold text-ink">{c.label}</div>
                        <div className="text-xs text-sub">{c.sub}</div>
                      </div>
                    </motion.label>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(0)}
                  className="flex-1 border-2 border-border text-sub py-3.5 rounded-2xl font-bold hover:border-brand-200 transition-colors"
                >
                  Back
                </button>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => { if (form.targetAge && form.channel) setStep(2) }}
                  disabled={!form.targetAge || !form.channel}
                  className="flex-[2] bg-gradient-to-r from-brand-500 to-purple-600 text-white py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-brand-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next: Launch Cities <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-ink mb-2">Launch Cities</label>
                <input
                  value={form.cities}
                  onChange={e => set('cities', e.target.value)}
                  placeholder="Delhi, Mumbai, Bangalore"
                  className="w-full bg-muted border-2 border-border rounded-2xl px-4 py-3.5 text-ink placeholder-slate-400 focus:outline-none focus:border-brand-400 transition-colors font-medium"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-ink mb-3">City Tier</label>
                <div className="grid grid-cols-2 gap-2">
                  {cityTiers.map(t => (
                    <motion.label
                      key={t}
                      whileHover={{ scale: 1.02 }}
                      className={`flex items-center justify-center gap-2 p-3.5 rounded-2xl border-2 cursor-pointer transition-all font-bold text-sm ${
                        form.cityTier === t
                          ? 'border-brand-400 bg-brand-50 text-brand-700'
                          : 'border-border hover:border-brand-200 text-sub bg-muted'
                      }`}
                    >
                      <input
                        type="radio"
                        name="cityTier"
                        value={t}
                        checked={form.cityTier === t}
                        onChange={e => set('cityTier', e.target.value)}
                        className="hidden"
                      />
                      {t}
                    </motion.label>
                  ))}
                </div>
              </div>

              {/* Summary */}
              <div className="bg-gradient-to-br from-brand-50 to-purple-50 rounded-2xl p-4 border border-brand-100">
                <div className="text-xs font-bold text-sub mb-2 uppercase tracking-wide">Your Product Summary</div>
                <div className="grid grid-cols-2 gap-1.5 text-xs">
                  {[
                    ['Brand', form.brandName || '—'],
                    ['Category', form.category],
                    ['Price', form.priceBand],
                    ['Channel', channels.find(c => c.value === form.channel)?.label || '—'],
                    ['Age Group', form.targetAge],
                    ['Income', form.targetIncome || '—'],
                  ].map(([k, v]) => (
                    <div key={k} className="flex gap-1">
                      <span className="text-sub">{k}:</span>
                      <span className="font-bold text-ink truncate">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-2xl px-4 py-3 text-red-600 text-sm flex items-center gap-2">
                  ⚠️ {error}
                </div>
              )}

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 border-2 border-border text-sub py-3.5 rounded-2xl font-bold hover:border-brand-200 transition-colors"
                >
                  Back
                </button>
                <motion.button
                  type="button"
                  onClick={() => handleSubmit()}
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className="flex-[2] bg-gradient-to-r from-brand-500 to-purple-600 disabled:opacity-60 text-white py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-brand-500/25"
                >
                  {loading ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Analysing launches...</>
                  ) : (
                    <><Sparkles className="w-5 h-5" /> Generate Report</>
                  )}
                </motion.button>
              </div>
            </div>
          )}
        </motion.div>

        {/* Trust badges */}
        <div className="flex items-center justify-center gap-6 mt-6 text-xs text-sub">
          {['🔒 Secure', '⚡ 30 seconds', '🆓 Free forever'].map(t => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
