import Search from '@/components/admin/product/Search'
import Table from '@/components/admin/product/Table'
import TableRow from '@/components/admin/product/TableRow'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import React from 'react'

const getProductsSerch = async(search:string) =>{
    return await prisma.product.findMany({
        where:{
            name:{
                contains:search,
                mode:'insensitive'
            }
        }
    })
}

export default async function page({ searchParams }: { searchParams: { search: string } }) {

    const search = searchParams.search || ''
    const products = await getProductsSerch(search)

    
    if (!search) return redirect('/admin/products')

  return (
    <div className=" max-w-5xl">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Search Results:</h2>
          <p className=" text-gray-400">Pizza</p>
        </div>
        <div className="flex gap-4 h-11">
            <Search/>
        </div>
      </header>
     { products.length > 0 ? ( <Table>
        {
          products.map(product => <TableRow product={product}/>)
        }
      </Table>) : <p className='text-gray-500 mt-6 text-center text-sm'>Product Not Found</p> }
       
    </div>
    
  )
}
