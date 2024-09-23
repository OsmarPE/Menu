'use client'
import { useStore } from '@/app/hooks/store'
import { Product } from '@prisma/client'
import React from 'react'


interface Props{
    product:Product
}
export default function ProductCardBtn({product}:Props) {

    const setProduct = useStore((state) => state.setProduct)

    return (
    <button onClick={() => setProduct(product)}  className='inline-block py-2 px-4 bg-primary rounded-3xl transition duration-300 hover:bg-hover hover:text-primary text-sm text-white'>
        Agregar
    </button>
  )
}
