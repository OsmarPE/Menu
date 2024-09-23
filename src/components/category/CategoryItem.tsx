"use client"
import { Category } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

interface Props {
    category: Category
}

export default function CategoryItem({category}: Props) {

    const params = useParams()

    const { name,slug } = category
    
    const active = params?.category === slug
    const activeClass = active ? 'bg-gradient-to-r from-[#FF8E48] to-[#FF7147] text-white':''

    return (
        <Link href={`/order/${slug}`} className={`flex w-full rounded-md gap-3 items-center border-t border-t-gray-200  transition duration-500 hover:bg-primary py-3 px-4 hover:text-white ${activeClass}`}>
            
            <div className='size-10 rounded-full relative bg-gray-50 grid place-content-center'>
                <div className='relative size-5'>
                    <Image fill src={`/icon_${slug}.svg`} alt={`icon_${slug}`}  />
                </div>
            </div>
            <span className='font-medium '>{name}</span>
        </Link>
    )
}
