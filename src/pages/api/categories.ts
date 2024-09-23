import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
 
export default async function GET(req: NextApiRequest,res: NextApiResponse) {
    const data = await prisma.category.findMany()
    res.status(200).json(data);
}