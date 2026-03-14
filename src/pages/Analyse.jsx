import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BarChart3, ChevronLeft, Loader2, Sparkles } from 'lucide-react'
import axios from 'axios'

const categories = ['Beverages', 'Skincare', 'Snacks', 'Wellness', 'Personal Care', 'Apparel', 'Electronics', 'Dairy', 'Instant Food', 'Condiments', 'Pet Care', 'Home Care']
const ageGroups = ['16-24', '18-28', '18-32', '18-35', '20-35', '22-32', '22-38', '22-40', '24-40', '25-38', '25-40', '25-45', '28-45', '28-50', '30-50']
const incomeGroups = ['₹2L-₹6L', '₹3L-₹8L', '₹4L-₹12L', '₹5L-₹15L', '₹6L-₹20L', '₹8L-₹25L', '₹10L-₹30L', '₹12L-₹40L', '₹15L-₹50L']
const channels = [
  { value: 'quick-commerce', label: 'Quick Commerce (Blinkit/Zepto)' },
  { value: 'marketplace', label: 'Marketplace (Amazon/Flipkart)' },
  { value: 'd2c-website', label: 'D2C Website' },
  { value: 'modern-trade', label: 'Modern Trade (DMart/Reliance)' },
  { value: 'general-trade', label: 'General Trade (Kirana)' },
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

export default function Analyse() {
  const navigate = useNavigate()
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
    } finally {
      setLoading(false)
    }
  }

  const loadDemo = () => {
    setForm(demoData)
  }

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Nav */}
      <nav className="border-b border-border px-6 py-4 flex items-center gap-4">
        <button onClick={() => navigate('/')} className="text-slate-400 hover:text-white transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-brand-500 rounded-lg flex items-center justify-center">
            <BarChart3 className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-bold tracking-tight">Rescale</span>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-3xl font-bold">Analyse Your Product</h1>
            <button
              onClick={loadDemo}
              className="text-sm text-brand-500 hover:text-brand-600 border border-brand-500/30 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Load Demo
            </button>
          </div>
          <p className="text-slate-400 mb-8">Fill in your product details. We'll analyse 10,000+ comparable launches and generate your distribution intelligence report.</p>

          <form onSubmit={(e) => { e.preventDefault(); handleSubmit() }} className="space-y-5">
            {/* Brand Name */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Brand / Product Name</label>
              <input
                value={form.brandName}
                onChange={e => set('brandName', e.target.value)}
                placeholder="e.g. Freshly Yours"
                className="w-full bg-card border border-border rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
              />
            </div>

            {/* Category + Subcategory */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Category *</label>
                <select
                  value={form.category}
                  onChange={e => set('category', e.target.value)}
                  required
                  className="w-full bg-card border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                >
                  <option value="">Select category</option>
                  {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Subcategory</label>
                <input
                  value={form.subcategory}
                  onChange={e => set('subcategory', e.target.value)}
                  placeholder="e.g. Protein Bars"
                  className="w-full bg-card border border-border rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
                />
              </div>
            </div>

            {/* Price + Pack */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Price Band *</label>
                <input
                  value={form.priceBand}
                  onChange={e => set('priceBand', e.target.value)}
                  placeholder="e.g. ₹200-₹350"
                  required
                  className="w-full bg-card border border-border rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Pack Size</label>
                <input
                  value={form.packSize}
                  onChange={e => set('packSize', e.target.value)}
                  placeholder="e.g. 250ml, 500g, 30 tabs"
                  className="w-full bg-card border border-border rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
                />
              </div>
            </div>

            {/* Age + Income */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Target Age Group *</label>
                <select
                  value={form.targetAge}
                  onChange={e => set('targetAge', e.target.value)}
                  required
                  className="w-full bg-card border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                >
                  <option value="">Select age group</option>
                  {ageGroups.map(a => <option key={a} value={a}>{a} years</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Target Income Bracket</label>
                <select
                  value={form.targetIncome}
                  onChange={e => set('targetIncome', e.target.value)}
                  className="w-full bg-card border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                >
                  <option value="">Select income bracket</option>
                  {incomeGroups.map(i => <option key={i} value={i}>{i} annual</option>)}
                </select>
              </div>
            </div>

            {/* Channel */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Preferred Launch Channel *</label>
              <div className="grid grid-cols-1 gap-2">
                {channels.map(c => (
                  <label key={c.value} className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${form.channel === c.value ? 'border-brand-500 bg-brand-500/10' : 'border-border hover:border-slate-500'}`}>
                    <input
                      type="radio"
                      name="channel"
                      value={c.value}
                      checked={form.channel === c.value}
                      onChange={e => set('channel', e.target.value)}
                      className="accent-brand-500"
                    />
                    <span className="text-sm text-slate-200">{c.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Cities + Tier */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Launch Cities</label>
                <input
                  value={form.cities}
                  onChange={e => set('cities', e.target.value)}
                  placeholder="Delhi, Mumbai, Bangalore"
                  className="w-full bg-card border border-border rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">City Tier</label>
                <select
                  value={form.cityTier}
                  onChange={e => set('cityTier', e.target.value)}
                  className="w-full bg-card border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                >
                  <option value="">Select tier</option>
                  {cityTiers.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm">
                {error}
              </div>
            )}

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.01 }}
              whileTap={{ scale: loading ? 1 : 0.99 }}
              className="w-full bg-brand-500 hover:bg-brand-600 disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 transition-colors"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Analysing {form.comparablesCount || ''} comparable launches...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Generate Distribution Intelligence Report
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
