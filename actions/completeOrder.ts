'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function actionOrderCompleted(formData: FormData) {
    const id = formData.get('id')!
    
    const response = await prisma.order.update({
        where:{
            id: +id
        },
        data:{
            orderReadyAt: new Date(Date.now()),
            status:true
        }
    })

    revalidatePath('/admin/orders')
}