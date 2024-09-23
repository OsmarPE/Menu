import React, { ReactNode } from 'react'

export default function Sidebar({children}:{children:ReactNode}) {
  return (
    <aside className='w-64 min-h-screen py-6 px-4 bg-white border-r border-r-gray-100'>
    <nav>
      <ul className='grid'>
        {children}
      </ul>
    </nav>
  </aside>
  )
}
