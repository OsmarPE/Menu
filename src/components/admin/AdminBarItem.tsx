'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { ReactNode } from 'react'


interface Props {
    link: {
        url: string,
        text: string,
        blank: boolean
    },
    children:ReactNode
}

export default function AdminBarItem({ link, children }: Props) {
    const {blank,text,url } = link
    
    const activeBlank = blank ? '_blank' : ''
    const pathname = usePathname()
    const isActive = pathname?.startsWith(url)

    return (
        <Link className={` flex items-center gap-2 rounded-md py-4 px-3 transition duration-300 hover:bg-gray-50 ${isActive ? 'text-primary bg-hover': 'text-gray-500 '}`} href={url} target={activeBlank}>{children}{text}</Link>
    )
}
