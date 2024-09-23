import { z } from "zod";

const format = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});


export const formatToMoney = (value:number) =>{
    return format.format(value)
}


export const OrderShema = z.object({
    name:z.string().min(1,'Tu nombre es obligatorio'),
    total:z.number().min(1,'Hubo un error en el total'),
    order:z.array(
        z.object({
            id:z.number(),
            name:z.string(),
            price:z.number(),
            quantity:z.number(),
            subtotal:z.number()
        })
    )
    
})

export const formatDateMX = (date: Date) =>{
    return date.toLocaleDateString('es-MX',{
        day:'numeric',
        month:'long',
        year:'numeric'
    })
}

export const validateSearch = z.string().trim().min(3,{message:'Enter your search'})

export const validateNewProduct = z.object({
    name: z.string().min(3,'Agregue un nombre valido'),
    price: z.string().transform(value => parseFloat(value)).refine(v => v > 0,'Agregue un precio valido'),
    image: z.string().min(1,'Ingrese una imagen'),
    categoryId: z.string().transform(value => parseInt(value)).refine(v => v > 0,'Agregue un id valido'),
})

export const getPathProduct = (imagePath:string) => {
    const path = 'https://res.cloudinary.com'
    return imagePath.startsWith(path) ? imagePath :`/products/${imagePath}.jpg`
}