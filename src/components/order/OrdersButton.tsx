'use client'
import { useStore } from "@/app/hooks/store"

export default function OrdersButton() {

    const showMenu = useStore((state) => state.setShowMenu)    
    return (
    <button onClick={() => showMenu(true)} className='text-sm rounded-3xl px-5 py-3 bg-hover text-primary'>Mis Ordenes</button>
  )
}
