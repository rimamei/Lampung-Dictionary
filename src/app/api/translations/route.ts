import { NextResponse } from 'next/server'

import prisma from '@/lib/prisma'
import { TranslationType } from '@/lib/type'


// GET /api/translations
export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const text = searchParams.get('text') ?? ''
    const lang = searchParams.get('lang') ?? ''

    try {
        let result: TranslationType[] = []

        result = await prisma.translation.findMany({
            where: {
                idkata: lang == 'id' ? text : { contains: '' },
                lpgkata: lang == 'lpg' ? text : { contains: '' }
            }
        })

        if (result.length === 0) {
            return NextResponse.json({ message: 'Data is not found', data: [] }, { status: 200 })
        }

        return NextResponse.json({ message: 'Success get data', data: result }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}