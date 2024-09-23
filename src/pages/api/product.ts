import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
 
export default async function GET(req: NextApiRequest,res: NextApiResponse) {
    res.status(200).json({message:'hola'});
}