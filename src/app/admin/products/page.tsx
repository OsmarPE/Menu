import IconPlus from "@/assets/IconPlus"
import Search from "@/components/admin/product/Search"
import Table from "@/components/admin/product/Table"
import TableNav from "@/components/admin/product/TableNav"
import TableRow from "@/components/admin/product/TableRow"
import ModalEdit from "@/components/modal/ModalEdit"
import { prisma } from "@/lib/prisma"
import Link from "next/link"

const getProducts = async (page:number, size:number ) => {
  const skip = size * (page - 1) 

  const data = await prisma.product.findMany({
    take: size,
    skip,
    include:{
      category:true
    }
  })

  return data
}

const getProductsSize = async () =>{
  const size = await prisma.product.count()
  return size
}

export default async function page({ searchParams }: { searchParams: { [key:string]:string } }) {

  const page = +searchParams.page || 1
  const size = 10
  const products = await getProducts(page,size)
  const productsCount = await getProductsSize()
  const totalPage =  Math.ceil(productsCount / size)


  const id = searchParams.edit
  const isActive = Boolean(id) || false 

  return (
    <div className=" max-w-5xl">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Products</h2>
          <p className="text-sm text-gray-400">Here show your products in table</p>
        </div>
        <div className="flex gap-4">
            <Search/>
            <Link href={`/admin/products?add=true`} className="p-3 rounded-lg bg-primary text-white flex items-center gap-1 text-sm transition-all duration-500 hover:text-primary hover:bg-hover">
                <IconPlus width={18} />
                Add Product
            </Link>
        </div>
      </header>
      <Table>
        {
          products.map(product => <TableRow product={product}/>)
        }
      </Table>
      <TableNav totalPage={totalPage} currentPage={page}/>
      {isActive && <ModalEdit id={+id}/>}
    </div>
  )
}
