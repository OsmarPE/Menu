
import ModalProductNew from '@/components/modal/ModalProductNew'
import React, { ReactNode } from 'react'

export default function layout({children}:{children:ReactNode}) {
  
  return (
    <>
        {children}
        <ModalProductNew />

    </>
  )
}
