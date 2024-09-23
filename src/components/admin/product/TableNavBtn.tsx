import Link from 'next/link'
import React, { ReactNode } from 'react'

interface Props{
    children:ReactNode,
    active?:boolean,
    href:string
}

export default function TableNavBtn({children,href,active = false}:Props) {

    const isActive = active ? 'bg-primary text-white ' : 'hover:bg-gray-100 text-gray-500'

  return (
    <Link href={href} className={`size-10 grid text-sm place-content-center rounded-full transition duration-300  ${isActive}`}>{children}</Link>
  )
}
