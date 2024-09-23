import React, { ReactNode } from 'react'

interface Props{
    children:ReactNode
}

export default function HeaderTittle({children}:Props) {
  return (
    <h2 className='text-primary tracking-[3px] uppercase'>{children}</h2>
  )
}
