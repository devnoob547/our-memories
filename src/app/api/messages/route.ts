import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient();

export async function GET() {
  const message = await prisma.message.findMany();
  return NextResponse.json(message)
}

//5433