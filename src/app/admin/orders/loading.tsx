
export default function loading() {
    return (
        <div role="status" className="animate-pulse ">
            <div className='grid gap-2'>
                <div className='bg-gray-200 rounded-lg h-8 w-32'></div>
                <div className='bg-gray-200 rounded-lg h-4 w-36'></div>
            </div>
            <div className='grid gap-5 grid-cols-[repeat(auto-fill,minmax(260px,1fr))] mt-4'>
                <div className="bg-gray-200 rounded-lg h-64"></div>
                <div className="bg-gray-200 rounded-lg h-64"></div>
                <div className="bg-gray-200 rounded-lg h-64"></div>
                <div className="bg-gray-200 rounded-lg h-64"></div>
                <div className="bg-gray-200 rounded-lg h-64"></div>
                <div className="bg-gray-200 rounded-lg h-64"></div>
                <div className="bg-gray-200 rounded-lg h-64"></div>
                <div className="bg-gray-200 rounded-lg h-64"></div>
            </div>
        </div>
    )
}
