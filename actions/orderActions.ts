'use server'

import { OrderShema } from "@/lib/helper"
import { prisma } from "@/lib/prisma"

export async function handleCreateOrder(data:unknown) {
    const result = OrderShema.safeParse(data)
    if (!result.success) {
        return {errors: result.error.issues}    
    }

    try {
         await prisma.order.create({
            data:{
                name:result.data.name,
                total:result.data.total,
                orderProducts:{
                    create:result.data.order.map(item => ({productId:item.id,quantity:item.quantity}))
                }
            }
        })


        return {
            success:'Pedido realizado correctamente'
        }
        
    } catch (error) {
        return {
            error:'Surgio un error'
        }
    }

}