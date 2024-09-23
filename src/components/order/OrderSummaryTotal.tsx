import { formatToMoney } from "@/lib/helper"

interface Props{
    total:number
}

export default function OrderSummaryTotal({total}:Props) {
    return (
        <div className='py-3'>
            <div className='flex items-center justify-between'>
                <p className='font-medium'>Total</p>
                <p className='font-bold text-lg'> <span className='text-gray-400 font-normal text-sm'>MXN</span> {formatToMoney(total)}</p>
            </div>
        </div>
    )
}
