import { prisma } from "@/lib/prisma"
import ModalProductEdit from "./ModalProductEdit"
import { Product } from "@prisma/client"


const getProductById =  async (id:number) =>{
    return await prisma.product.findUnique({
        where:{
            id
        }
    })
}

const getCategories =  async () =>{
    return await prisma.category.findMany()
}

export default async function ModalEdit({id}:{id:number}) {

    const [products, categories] = await Promise.all([getProductById(id),getCategories()])
    const product = products as Product

    return <ModalProductEdit categories={categories} product={product} show={true}/>
}
