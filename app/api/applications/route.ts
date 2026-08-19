import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { promises as fs } from 'fs'
import path from 'path'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    // Extract text fields
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const linkedin = formData.get('linkedin') as string | null
    const portfolio = formData.get('portfolio') as string | null
    const coverLetter = formData.get('coverLetter') as string
    const jobTitle = formData.get('jobTitle') as string
    const cvFile = formData.get('cvFile') as File | null

    if (!name || !email || !phone || !coverLetter || !jobTitle || !cvFile) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Process and save the uploaded CV File
    const bytes = await cvFile.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Ensure the uploads directory exists
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads', 'cvs')
    try {
      await fs.access(uploadsDir)
    } catch {
      await fs.mkdir(uploadsDir, { recursive: true })
    }

    // Generate a unique filename to prevent overwriting
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`
    const originalName = cvFile.name.replace(/[^a-zA-Z0-9.-]/g, '_')
    const fileName = `${uniqueSuffix}-${originalName}`
    const filePath = path.join(uploadsDir, fileName)

    // Write file to disk
    await fs.writeFile(filePath, buffer)
    
    // Create public URL path for DB storage
    const cvFilePath = `/uploads/cvs/${fileName}`

    // Save record to Database
    const application = await prisma.applicant.create({
      data: {
        name,
        email,
        phone,
        linkedin: linkedin || null,
        portfolio: portfolio || null,
        coverLetter,
        jobTitle,
        cvFilePath,
      },
    })

    return NextResponse.json(
      { message: 'Application submitted successfully', applicationId: application.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error submitting application:', error)
    return NextResponse.json(
      { error: 'Internal server error while submitting application' },
      { status: 500 }
    )
  }
}
