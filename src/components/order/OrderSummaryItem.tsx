import { OrderItem } from '@/types/types'
import Image from 'next/image'
import React from 'react'
import OrderSummaryActions from './OrderSummaryActions'
import { formatToMoney, getPathProduct } from '@/lib/helper'


interface Props{
  order:OrderItem
}

export default function OrderSummaryItem({order}:Props) {

  const { name,quantity,subtotal,image,id } = order

  console.log(getPathProduct(image));
  

  return (
    <div className='flex gap-3' role='listitem'>
      <div className='relative size-14 overflow-hidden object-cover rounded-md shadow-lg shadow-slate-300'>
        <Image src={getPathProduct(image)} alt="" fill />
      </div>
      <div className='flex-1'>
        <p className=' text-sm text-gray-600 leading-tight'>{name}</p>
      </div>
      <div className='flex flex-col justify-between items-end'>
        <span className='text-sm font-bold text-primary'>{formatToMoney(subtotal)}</span>
        <OrderSummaryActions id={id} quantity={quantity} />
      </div>
    </div>
  )
}
