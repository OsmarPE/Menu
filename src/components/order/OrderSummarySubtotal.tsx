import { formatToMoney } from "@/lib/helper"

interface Props{
    IVA:number,
    subtotal:number
}

export default function OrderSummarySubtotal({IVA,subtotal}:Props) {
    return (
        <div className='mt-6 text-sm grid gap-2 py-4 border-t border-b border-gray-200'>
            <div className='flex items-center justify-between'>
                <p className='text-gray-400'>Subtotal</p>
                <span className='font-medium'>{formatToMoney(subtotal)}</span>
            </div>
            <div className='flex items-center justify-between'>
                <p className='text-gray-400'>IVA</p>
                <span className='font-medium'>{formatToMoney(IVA)}</span>
            </div>
        </div>
    )
}
