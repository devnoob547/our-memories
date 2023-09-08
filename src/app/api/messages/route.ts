import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json({ name: 'Daniel', message: 'hello' })
}

//5433