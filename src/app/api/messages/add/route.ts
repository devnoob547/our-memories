import { PrismaClient } from '@prisma/client'
import { NextRequest , NextResponse } from 'next/server'

const prisma = new PrismaClient();

type MessageData = {
  message: string;
  name: string;
}

export async function POST(req: Request) {
  const json: MessageData = await req.json()
  const message = await prisma.message.create({
    data: json
  })

  return NextResponse.json({ status: 'ok' })
}