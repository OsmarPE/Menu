'use client'
import { useStore } from "@/app/hooks/store";
import OrderSummary from "./OrderSummary";

export default function OrderSummaryContainer() {
    
     const show = useStore((state) => (state.showMenu))

    return (
    <>
         {  show && <OrderSummary/> }
    </>
  )
}
