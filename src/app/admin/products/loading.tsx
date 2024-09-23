import React from 'react'

export default function loading() {
    return (

        <div role="status" className="animate-pulse max-w-5xl">
            <div className='flex items-center justify-between w-full'>
                <div className='grid gap-2'>
                    <div className='bg-gray-200 rounded-lg h-8 w-32'></div>
                    <div className='bg-gray-200 rounded-lg h-4 w-48'></div>
                </div>
                <div className='flex gap-2'>
                    <div className='bg-gray-200 rounded-lg h-11 w-72'></div>
                    <div className='bg-gray-200 rounded-lg h-11 w-32'></div>
                </div>
            </div>
            <div className='mt-10'>
            <div className='bg-gray-200/60 rounded-lg h-11 w-full'></div>
                <div className='grid gap-2 mt-3'>
                <div className='bg-gray-100 rounded-lg h-10 w-full'></div>
                <div className='bg-gray-100 rounded-lg h-10 w-full'></div>
                <div className='bg-gray-100 rounded-lg h-10 w-full'></div>
                <div className='bg-gray-100 rounded-lg h-10 w-full'></div>
                <div className='bg-gray-100 rounded-lg h-10 w-full'></div>
                <div className='bg-gray-100 rounded-lg h-10 w-full'></div>
                <div className='bg-gray-100 rounded-lg h-10 w-full'></div>
                <div className='bg-gray-100 rounded-lg h-10 w-full'></div>
                <div className='bg-gray-100 rounded-lg h-10 w-full'></div>
                </div>
            </div>
        </div>


    )
}
