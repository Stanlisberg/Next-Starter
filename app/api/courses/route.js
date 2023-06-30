import courses from './data.json'
import { NextResponse } from 'next/server'

export async function GET(request) {
    const data = NextResponse.json(courses)
    return data
}