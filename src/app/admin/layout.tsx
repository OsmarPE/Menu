import AdminBar from '@/components/admin/AdminBar';
import OrderSummaryContainer from '@/components/order/OrderSummaryContainer';
import ToastContainer from '@/components/toast/ToastContainer';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: 'Admin - Os',
    description: 'Panel for administration for products',
  }

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <ToastContainer />
            <div className='flex'>
                <AdminBar/>
                <main className='flex-1'>
                    <div className='p-8'>
                        {children}
                    </div>
                </main>

                <OrderSummaryContainer />
            </div>
        </>
    );
}
