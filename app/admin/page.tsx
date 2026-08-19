import { cookies } from 'next/headers'
import prisma from '@/lib/prisma'
import { LoginForm, LogoutButton, StatusDropdown } from './client-components'
import { Download, ExternalLink, FileText, Mail, Phone, Link2 } from 'lucide-react'

// Force dynamic rendering since we are checking cookies and database
export const dynamic = 'force-dynamic'

export default async function AdminPage() {
  const authCookie = cookies().get('admin-auth')?.value

  // Check authentication
  if (authCookie !== process.env.ADMIN_PASSWORD) {
    return <LoginForm />
  }

  // Fetch all applications, newest first
  const applications = await prisma.applicant.findMany({
    orderBy: { createdAt: 'desc' }
  })

  return (
    <div className="min-h-screen bg-[#04060e] p-4 sm:p-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 flex items-center justify-between rounded-2xl bg-white/5 px-6 py-4 ring-1 ring-white/10">
          <div>
            <h1 className="font-heading text-2xl font-bold text-white">HR Dashboard</h1>
            <p className="text-sm text-slate-400">Manage incoming career applications.</p>
          </div>
          <LogoutButton />
        </header>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0c0e1e] shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="border-b border-white/10 bg-white/5 text-xs uppercase text-slate-400">
                <tr>
                  <th className="px-6 py-4 font-medium">Applicant</th>
                  <th className="px-6 py-4 font-medium">Role</th>
                  <th className="px-6 py-4 font-medium">Contact</th>
                  <th className="px-6 py-4 font-medium">Links</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium text-right">CV / Resume</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {applications.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                      No applications received yet.
                    </td>
                  </tr>
                ) : (
                  applications.map((app) => (
                    <tr key={app.id} className="transition-colors hover:bg-white/[0.02]">
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="font-medium text-white">{app.name}</div>
                        <div className="text-xs text-slate-500">
                          {new Date(app.createdAt).toLocaleDateString('en-US', {
                            month: 'short', day: 'numeric', year: 'numeric'
                          })}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <span className="rounded-full bg-violet-500/10 px-2.5 py-1 text-xs font-semibold text-violet-400 ring-1 ring-violet-500/20">
                          {app.jobTitle}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col gap-1.5 text-xs text-slate-400">
                          <a href={`mailto:${app.email}`} className="flex items-center gap-1.5 hover:text-white">
                            <Mail size={12} /> {app.email}
                          </a>
                          <a href={`tel:${app.phone}`} className="flex items-center gap-1.5 hover:text-white">
                            <Phone size={12} /> {app.phone}
                          </a>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          {app.linkedin && (
                            <a href={app.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 transition-colors hover:text-[#0a66c2]" title="LinkedIn">
                              <Link2 size={16} />
                            </a>
                          )}
                          {app.portfolio && (
                            <a href={app.portfolio} target="_blank" rel="noreferrer" className="text-slate-500 transition-colors hover:text-white" title="Portfolio">
                              <ExternalLink size={16} />
                            </a>
                          )}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <StatusDropdown id={app.id} currentStatus={app.status} />
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-right">
                        <a 
                          href={app.cvFilePath} 
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-white/20"
                        >
                          <FileText size={14} /> View CV
                        </a>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
