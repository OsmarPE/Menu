'use server'

import { validateNewProduct } from "@/lib/helper";
import { prisma } from "@/lib/prisma";
import { ProductNew } from "@/types/types"

 export const newOrderAction = async(data:ProductNew) =>{
    const res = validateNewProduct.safeParse(data)

    if (res.error) {

        return {
            error:res.error.issues
        }
    }


    try {
         await prisma.product.create({data:res.data})
    
        return{
            success: 'Se agrego correctamente'
        }
        
    } catch (e) {
        
        return {
            error:[{message:'Surgio un error'}]
        }
    }

    
}