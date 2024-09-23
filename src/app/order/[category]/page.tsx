import OrdersButton from '@/components/order/OrdersButton'
import ProductCard from '@/components/products/ProductCard'
import { prisma } from '@/lib/prisma'
import React from 'react'


interface Props{
    params:{
        category:string
    }
}

const getProductsByCategory = async(idCategory:string) =>{
    const products = await prisma.product.findMany({
        where:{
            category:{
                slug: idCategory
            }
        }
    })

    return products
}

export default async function OrderCategory({params:{category}}:Props) {

    const products = await getProductsByCategory(category)
   
    return (
        <>  
        <div className='flex items-start justify-between'>
            <div>
                <span className='text-gray-600 uppercase text-xs tracking-[3px]'>Category</span>
                <h2 className='font-bold capitalize text-3xl mb-4 w-max bg-gradient-to-r from-[#FF8E48] to-[#FF7147] text-transparent bg-clip-text'>{category}</h2>        
            </div>
            <OrdersButton/>

        </div>
            <div className='grid gap-5 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]'>
                {
                    products.map(product => <ProductCard key={product.id} product={product}/>)
                }
            </div>

        </>
  )
}
