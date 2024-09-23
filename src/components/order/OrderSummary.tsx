'use client'
import React, { useMemo } from 'react'
import { useStore } from '@/app/hooks/store'
import OrderSummaryItem from './OrderSummaryItem'
import OrderSummarySubtotal from './OrderSummarySubtotal'
import OrderSummaryTotal from './OrderSummaryTotal'
import { handleCreateOrder } from '../../../actions/orderActions'
import { OrderShema } from '@/lib/helper'
import { toast } from 'sonner'

export default function OrderSummary() {

  const { order, setShowMenu, clearOrders } = useStore(({ order, setShowMenu,clearOrders }) => ({ order, setShowMenu,clearOrders }))

  const ordersLenght = order.length

  const subtotal = useMemo(() => order.reduce((total, item) => total = total + item.subtotal, 0), [order])
  const IVA = subtotal * .16
  const total = subtotal + IVA

  const handleSubmit = async (formData: FormData) => {
    const data = {
      name: formData.get('name'),
      order,
      total: total,
    }


    const result = OrderShema.safeParse(data)
    if (!result.success) {
      result.error.issues.forEach(({ message }) => {
        toast.error(message)
      })
      return
    }

    const response = await handleCreateOrder(data)


    if (response?.errors) {
      response.errors.forEach(({ message }) => {
        toast.error(message)
      })
      return
    }

    clearOrders()
    setShowMenu(false)
    toast.success(response.success)


  }

  return (
    <>
      <div onClick={() => setShowMenu(false)} className='fixed inset-0 bg-black/30'>

      </div>
      <div className='fixed top-0 right-0 bottom-0 w-[90%] max-w-[360px] px-7 py-8 bg-white shadow-xl shadow-slate-100 '>
        <h1 className='font-semibold text-lg'>Order Summary</h1>
        <div className='mt-2'>
          {
            ordersLenght === 0 ? (
              <span className='text-slate-500 text-sm inline-block'>No hay ordenes disponibles</span>
            ) : (
              <div role='list' className='grid gap-5 mt-5'>
                {
                  order.map(orderItem => <OrderSummaryItem order={orderItem} />)
                }
              </div>
            )
          }
        </div>
        {
          ordersLenght > 0 && (
            <>
              <OrderSummarySubtotal IVA={IVA} subtotal={subtotal} />
              <OrderSummaryTotal total={total} />
              <div className='border-t border-t-gray-200 pt-3'>
                <h3 className='font-semibold text-lg mb-3'>Personal Information</h3>
                <form action={handleSubmit}>
                  <label htmlFor="name" className='text-sm inline-block font-medium mb-1'>Name</label>
                  <input type="text" name='name'  placeholder='Enter your name' className='block transition duration-300 text-sm w-full h-10 outline-none border px-4 border-gray-300 focus:border-gray-400 hover:border-gray-400 rounded-md placeholder:text-sm placeholder:text-gray-300 placeholder:font-normal' />
                  <input type="submit" value="Confirmar Orden" className='cursor-pointer  text-white w-full mt-6  text-sm block p-3 rounded-lg bg-gradient-to-r from-[#FF8E48] to-[#FF7147] ' />
                </form>

              </div>
            </>
          )

        }
      
      </div>
    </>
  )
}
