'use server'

import { cookies } from 'next/headers'
import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function loginAction(formData: FormData) {
  const password = formData.get('password') as string
  
  if (password === process.env.ADMIN_PASSWORD) {
    cookies().set('admin-auth', password, { 
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production',
      path: '/'
    })
    return { success: true }
  }
  
  return { error: 'Invalid password' }
}

export async function logoutAction() {
  cookies().delete('admin-auth')
  revalidatePath('/admin')
}

export async function updateApplicationStatus(id: string, newStatus: string) {
  const auth = cookies().get('admin-auth')?.value
  if (auth !== process.env.ADMIN_PASSWORD) {
    throw new Error('Unauthorized')
  }

  await prisma.applicant.update({
    where: { id },
    data: { status: newStatus }
  })
  
  revalidatePath('/admin')
}
