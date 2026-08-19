'use client'

import { useState } from 'react'
import { loginAction, logoutAction, updateApplicationStatus } from './actions'
import { Lock, LogOut, CheckCircle, Clock, XCircle } from 'lucide-react'

export function LoginForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    const formData = new FormData(e.currentTarget)
    const res = await loginAction(formData)
    
    if (res?.error) {
      setError(res.error)
      setLoading(false)
    }
    // If successful, the server action sets the cookie and re-renders the page
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#04060e] p-4">
      <div className="w-full max-w-md overflow-hidden rounded-3xl p-[1px]"
        style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.4), rgba(99,102,241,0.1), rgba(124,58,237,0.4))' }}>
        <div className="rounded-3xl bg-[#0c0e1e] p-8 text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-violet-500/10 text-violet-400">
            <Lock size={24} />
          </div>
          <h1 className="font-heading mb-2 text-2xl font-bold text-white">Admin Access</h1>
          <p className="mb-8 text-sm text-slate-400">Enter your master password to view applications.</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input 
              type="password" 
              name="password"
              placeholder="Enter password..."
              className="w-full rounded-xl bg-white/5 px-4 py-3 text-white outline-none ring-1 ring-white/10 transition-all focus:ring-violet-500/50"
              required 
            />
            {error && <p className="text-sm text-red-400">{error}</p>}
            <button 
              type="submit" 
              disabled={loading}
              className="mt-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 py-3 font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {loading ? 'Authenticating...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export function LogoutButton() {
  return (
    <button 
      onClick={() => logoutAction()}
      className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
    >
      <LogOut size={16} /> Logout
    </button>
  )
}

export function StatusDropdown({ id, currentStatus }: { id: string, currentStatus: string }) {
  const [isUpdating, setIsUpdating] = useState(false)

  async function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setIsUpdating(true)
    await updateApplicationStatus(id, e.target.value)
    setIsUpdating(false)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New': return 'text-blue-400 bg-blue-400/10 border-blue-400/20'
      case 'Reviewed': return 'text-amber-400 bg-amber-400/10 border-amber-400/20'
      case 'Rejected': return 'text-red-400 bg-red-400/10 border-red-400/20'
      case 'Hired': return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20'
      default: return 'text-slate-400 bg-slate-400/10 border-slate-400/20'
    }
  }

  return (
    <div className="relative inline-flex items-center">
      <select
        value={currentStatus}
        onChange={handleChange}
        disabled={isUpdating}
        className={`appearance-none rounded-full border px-3 py-1 pr-8 text-xs font-semibold outline-none transition-all ${getStatusColor(currentStatus)} ${isUpdating ? 'opacity-50' : 'cursor-pointer hover:brightness-110'}`}
      >
        <option value="New" className="bg-slate-900 text-white">New</option>
        <option value="Reviewed" className="bg-slate-900 text-white">Reviewed</option>
        <option value="Hired" className="bg-slate-900 text-white">Hired</option>
        <option value="Rejected" className="bg-slate-900 text-white">Rejected</option>
      </select>
    </div>
  )
}
