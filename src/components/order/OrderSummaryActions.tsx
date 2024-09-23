'use client'
import { useStore } from "@/app/hooks/store"
import IconRemove from "@/assets/IconRemove"
import { OrderItem } from "@/types/types"

interface Props {
    id: OrderItem['id'],
    quantity: OrderItem['quantity']
}

export default function OrderSummaryActions({ id, quantity }: Props) {

    const { incrementOrder, removeOrder, decrementOrder } = useStore(({ incrementOrder, removeOrder, decrementOrder }) => ({ incrementOrder, removeOrder, decrementOrder }))

    return (
        <div className="flex items-center gap-2">
            <button onClick={() => removeOrder(id)} className=" text-white block" >
                <IconRemove className="fill-gray-400 size-4 block" />
            </button>
            <div className='flex text-xs shadow-sm shadow-black/5'>
                <button onClick={() => incrementOrder(id)} className='rounded-l-md size-5 grid place-items-center border border-gray-300 bg-gray-100'>+</button>
                <span className='size-5 grid place-items-center border border-gray-300 border-r-0 border-l-0 font-medium'>{quantity}</span>
                <button onClick={() => decrementOrder(id)} className='rounded-r-md size-5 grid place-items-center border border-gray-300 bg-gray-100'>-</button>
            </div>
        </div>

    )
}
