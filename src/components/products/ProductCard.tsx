import { Product } from '@prisma/client'
import Image from 'next/image'
import React from 'react'
import ProductCardBtn from './ProductCardBtn'
import { formatToMoney, getPathProduct } from '@/lib/helper'

interface Props{
    product: Product
}

export default function ProductCard({product}:Props) {
    
    const { name,image,price } = product

    return (
    <article className='p-3 bg-white shadow-2xl shadow-primary/10 rounded-md grid grid-rows-[max-content_auto] gap-2'>
        <div className='relative h-40 rounded-lg overflow-hidden'>
            <Image fill src={getPathProduct(image)} alt={`imagen of ${name}`} className='object-cover' quality={75} />
        </div>
        <div className=' p-1 flex flex-col'>
            <h3 className='font-bold text-lg leading-snug'>{name}</h3>
            <p className='text-sm text-pretty mt-1 mb-5 text-slate-400 flex-1 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eos officiis doloribus modi numquam fugit. </p>
            <div className='flex items-center justify-between'>
                <span className='font-bold text-3xl'>{formatToMoney(price)}</span>
                <ProductCardBtn product={product}/>
            </div>
        </div>
    </article>
  )
}
