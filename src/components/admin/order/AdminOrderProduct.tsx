import { Category, Product } from "@prisma/client"

interface Props{
    title:Product['name'],
    category:Category['name']
}

export default function AdminOrderProduct({title,category}:Props) {
  return (
    <div className="flex items-center justify-between text-sm py-2 px-1">
    <div>
      <p>{title}</p>
      <p className="text-sm text-gray-400">{category}</p>
    </div>
    <span>1</span>
  </div>
  )
}
