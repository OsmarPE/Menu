import React from 'react'
import Sidebar from '../bar/Sidebar'
import AdminBarItem from './AdminBarItem'
import IconOrder from '@/assets/IconOrder'
import IconProducts from '@/assets/IconProducts'
import IconQuiosco from '@/assets/IconQuiosco'
const adminNavigation = [
    {url: '/admin/products', text: 'Productos', blank: false, icon:IconProducts},
    {url: '/admin/orders', text: 'Ordenes', blank: false, icon:IconOrder},
    {url: '/order/cafe', text: 'Ver Quiosco', blank: true, icon:IconQuiosco},
]


export default function AdminBar() {
  return (
    <div className='grid'>
      <h2 className='text-primary uppercase tracking-[3px] pt-6 px-4'>Admin User</h2>
      <Sidebar>
          {
              adminNavigation.map(link => <li> <AdminBarItem link={link}>{<link.icon width={20}/>}</AdminBarItem> </li> )
          }
      </Sidebar>
    </div>
  )
}
