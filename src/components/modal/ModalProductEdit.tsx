'use client'
import React, { useState } from 'react'
import Modal from './Modal'
import {  Category, Product } from '@prisma/client'
import ImagesUpload from '../products/ImagesUpload';
import { useRouter } from 'next/navigation';
import { updateProduct } from '../../../actions/updateActionProduct';
import { ProductNew } from '@/types/types';
import { toast } from 'sonner';

interface Props{
    product:Product,
    show:boolean,
    categories:Category[]
}

export default function ModalProductEdit({product,show,categories}:Props) {

    const router = useRouter()

    async function handleSubmit(formData: FormData) {
        const data = Object.fromEntries(formData) as unknown as ProductNew
        const response = await updateProduct(product.id,data)

        if (response.error) {
            for (const error of response.error) {
                toast.error(error.message)
                break
            }
            return
        }

        toast.success(response.success)

        router.replace('/admin/products')
    }


    return (
        <Modal pathRedirect='/admin/products' show={show} >
            <h1 className='font-bold text-3xl mb-3'>Edit Product</h1>
            <form action={handleSubmit}>
                <div className='grid gap-3 mb-4 text-sm'>
                    <div>
                        <label className='text-sm mb-1 inline-block text-gray-500' htmlFor="name">Product</label>
                        <input className='h-11 outline-none transition duration-300 hover:border-primary focus:border-primary px-3 rounded-md border-[2px] border-gray-3 00 w-full placeholder:text-sm' type="text" name='name' placeholder='Pizza for tomate' defaultValue={product?.name} />
                    </div>
                    <div>
                        <label className='text-sm mb-1 inline-block text-gray-500' htmlFor="price">Price</label>
                        <input className='h-11 outline-none transition duration-300 hover:border-primary focus:border-primary px-3 rounded-md border-[2px] border-gray-3 00 w-full placeholder:text-sm' type="text" name='price' placeholder='19.30' defaultValue={product.price} />
                    </div>
                    <div>
                        <label className='text-sm mb-1 inline-block text-gray-500' htmlFor="categoryId">Category</label>
                        <select name="categoryId" className='h-11 outline-none transition duration-300 hover:border-primary focus:border-primary px-3 rounded-md border-[2px] border-gray-3 00 w-full placeholder:text-sm' defaultValue={product.categoryId} >
                            <option value="">Select Category</option>
                            {
                                categories?.map(({ name, id }) => <option value={id}>{name}</option>)
                            }
                        </select>
                    </div>
                    <div>
                        <label className='text-sm mb-1 inline-block text-gray-500' htmlFor="image">Imagen</label>
                        <ImagesUpload imgCurrent={product.image} />
                    </div>
                </div>
                <div className='flex items-center gap-3 justify-end text-sm'>
                    <button type='button' className='py-3 px-4 font-medium rounded-lg duration-300 hover:bg-gray-100 ' onClick={() => router.replace('/admin/products')}>Cancel</button>
                    <input className='py-3 px-4 rounded-lg bg-primary font-medium text-white transition duration-300 hover:bg-hover hover:text-primary cursor-pointer' type="submit" value="Update Product" />
                </div>
            </form>
        </Modal>
    )
}
