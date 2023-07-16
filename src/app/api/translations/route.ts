import { NextResponse } from 'next/server'

import prisma from '@/lib/prisma'

type Translation = {
    "id": string;
    "idkata": string | null;
    "lpgkata": string | null;
    "lpgaksara": string | null;
    "lpgdialek": string | null;
}

// GET /api/translations
export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const search = searchParams.get('search') ?? ''
    const type = searchParams.get('type') ?? ''

    try {
        let result: Translation[] = []

        result = await prisma.translation.findMany({
            where: {
                idkata: type == 'id' ? search : { contains: '' },
                lpgkata: type == 'lpg' ? search : { contains: '' }
            }
        })

        return NextResponse.json({ message: 'Success get data', data: result }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}