import { formatToMoney } from '@/lib/helper'
import { OrderWithProducts } from '@/types/types'
import { Product } from '@prisma/client'
import Link from 'next/link'
import React from 'react'

interface Props{
    product:Product
}

export default function TableRow({product}:Props) {
    return (
        <tr >
            <td className="px-3 py-3 text-sm text-gray-500">{product.name}</td>
            <td className="px-3 py-3 text-sm text-gray-500">{formatToMoney(product.price)}</td>
            <td className="px-3 py-3 text-sm text-gray-500">{product.categoryId}</td>
            <td className="px-3 py-3 text-sm text-gray-500">
                <Link href={`/admin/products?edit=${product.id}`} className="text-blue-600 hover:underline">Editar</Link>
            </td>
        </tr>
    )
}
