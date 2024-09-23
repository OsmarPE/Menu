import React from 'react'

export default function loading() {
    return (
        <div role="status" className="animate-pulse">
            <div className='flex items-center justify-between w-full'>
                <div className='grid gap-2'>
                    <div className='bg-gray-200 rounded-lg h-4 w-24'></div>
                    <div className='bg-gray-200 rounded-lg h-8 w-32'></div>
                </div>
                <div className='flex gap-2'>
                    <div className='bg-gray-200 rounded-3xl h-11 w-32'></div>
                </div>
            </div>
            <div className='mt-10'>
                <div className='grid gap-5 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]'>

                    {
                        Array.from({length:8},() => (

                            <div role="status" className=" border border-gray-100 rounded animate-pulse p-3 ">
                                <div className="h-40 mb-4 bg-gray-300 rounded-lg ">
                                
                                </div>
                                <div className=''>
                                    <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                                    <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                                    <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                                    <div className="h-2 bg-gray-200 rounded-full "></div>
                                    <div className="flex items-center justify-between mt-4">
                                            <div className="h-9 bg-gray-200 rounded-lg  w-24 "></div>
                                            <div className="w-24 h-8 rounded-3xl bg-gray-200 "></div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
