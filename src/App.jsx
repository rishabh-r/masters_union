import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Analyse from './pages/Analyse'
import Dashboard from './pages/Dashboard'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/analyse" element={<Analyse />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}
