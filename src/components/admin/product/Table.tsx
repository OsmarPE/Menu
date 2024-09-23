import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export default function Table({ children }: Props) {

    return (
        <div className=" mt-10 min-h-[496px]">
            <table className="min-w-full divide-y divide-gray-300 border-b border-b-gray-300 ">
                <thead className="bg-gray-100">
                    <tr>
                        <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-600">
                            Producto
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-600">
                            Precio
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-600">
                            Categoría
                        </th>
                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                            <span className="sr-only">Acciones</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {children}
                </tbody>
            </table>
        </div>
    )
}
