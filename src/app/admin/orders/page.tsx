import AdminOrderItem from "@/components/admin/order/AdminOrderItem"
import { formatDateMX } from "@/lib/helper"
import { prisma } from "@/lib/prisma"


async function getPendingOrders() {
  const data = await prisma.order.findMany({
    where:{
      status:false
    },
    include:{
      orderProducts:{
        include:{
          product:{
            include:{
              category:true
            }
          },
        }
      }
    }
  })

  return data
}


export default async function page() {
  
  const data = await getPendingOrders()
  const date = new Date()
  const dateNow = formatDateMX(date)


  return (
    <div>
      <h2 className="text-2xl font-bold">Order List</h2>
      <p className="text-sm text-gray-400">{dateNow}</p>

      <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(260px,1fr))] mt-4">
        {
          data.map(order => <AdminOrderItem key={order.id} order={order}/> )
        }

      </div>
        
    </div>
  )
}
