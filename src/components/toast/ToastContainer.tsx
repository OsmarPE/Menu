'use client'

import { Toaster } from "sonner"

export default function ToastContainer() {
  return (
    <Toaster  position="top-center" toastOptions={{
      style:{
        boxShadow:'0 0 30px rgba(0,0,0,.1)',
        zIndex:1000
      }
    }} />
  )
}
