import { prisma } from '@/lib/prisma'
import React from 'react'
import CategoryItem from '../category/CategoryItem'
import Sidebar from '../bar/Sidebar'

const getCategories = async () => {
  return await prisma.category.findMany()
}

export default async function OrderSidebar() {

  const categories = await getCategories()


  return (
    <Sidebar>
      {
        categories.map(category => <li key={category.id}><CategoryItem category={category} /></li>)
      }
    </Sidebar >
  )
}
