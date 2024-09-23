'use server'
import { validateNewProduct } from "@/lib/helper";
import { prisma } from "@/lib/prisma";
import { ProductNew } from "@/types/types";


export  const updateProduct = async(id:number,data:ProductNew) =>{
    const res = validateNewProduct.safeParse(data)

    if (res.error) {
        return{
            error: res.error.issues       
        }
    }

    try {

        console.log(data);
        

        await prisma.product.update({
            where:{
                id,
            },
            data:res.data
        })

        return {
            success:'Product update success'
        }
        
    } catch (error) {
        return{
            error: [{message:'There is a error in server'}]
        }
    }


}