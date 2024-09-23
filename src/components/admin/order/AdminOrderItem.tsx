import { formatDateMX, formatToMoney } from "@/lib/helper"
import { OrderWithProducts } from "@/types/types"
import AdminOrderStatus from "./AdminOrderStatus"
import AdminOrderProduct from "./AdminOrderProduct"
import { actionOrderCompleted } from "../../../../actions/completeOrder"

interface Props{
    order:OrderWithProducts
}

export default function AdminOrderItem({order}:Props) {

    const { date,status,name,orderProducts ,total} = order
            
    return (
    <div className="border border-gray-300 p-4 rounded-lg">
    <div className="flex items-start justify-between mb-1">
      <div className="leading-tight">
        <h3 className="font-medium">{name}</h3>
        <time className="text-sm text-gray-400">{formatDateMX(date)}</time>
      </div>
      <div>
      <p className="font-semibold text-xl">{formatToMoney(total)}</p>
      </div>
    </div>

    <AdminOrderStatus status={status}/>
    
    <div className="my-3 border-t border-t-gray-300 border-b border-b-gray-300">
      {
        orderProducts.map(order => <AdminOrderProduct key={order.id} title={order.product.name} category={order.product.category.name}/>)
      }
    </div>
    <form action={actionOrderCompleted}>
      <input type="hidden" value={order.id} name="id"/>
      <button className="block p-3 text-white bg-black w-full text-sm rounded-lg transition duration-300 hover:opacity-60">Confirmar Orden</button>
    </form>
</div>  
  )
}
