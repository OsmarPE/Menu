import OrdersButton from '@/components/order/OrdersButton';
import OrderSidebar from '@/components/order/OrderSidebar';
import OrderSummaryContainer from '@/components/order/OrderSummaryContainer';
import ToastContainer from '@/components/toast/ToastContainer';
import React from 'react'

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <div className='flex'>
                <OrderSidebar />
                <main className='flex-1'>
                    <div className='p-8'>
                        {children}
                    </div>
                </main>

                <OrderSummaryContainer />
            </div>
            <ToastContainer />
        </>
    );
}
