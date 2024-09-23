'use client'
import { Fragment, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { Category } from '@prisma/client';
import { newOrderAction } from '../../../actions/newOrderAction';
import { ProductNew } from '@/types/types';
import { toast } from 'sonner';
import ImagesUpload from '../products/ImagesUpload';
import Modal from './Modal'


export default function ModalProductNew() {

    const router = useRouter()
    const searchParams = useSearchParams()
    const show = searchParams?.get('add') === 'true' || false
    const [categories, setCategories] = useState<Category[]>()

    useEffect(() => {
        fetch('http://localhost:3000/api/categories')
            .then(res => res.json())
            .then((data) => {
                setCategories(data);

            })
            .catch(error =>{
                console.log(error);
            })
            
    }, [])

    async function handleSubmit(formData: FormData) {
        const data = Object.fromEntries(formData) as unknown as ProductNew
        const response = await newOrderAction(data)


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
        <>
            <Modal show={show} pathRedirect='/admin/products'>
                <h1 className='font-bold text-3xl mb-3'>Add Product</h1>
                <form action={handleSubmit}>
                    <div className='grid gap-3 mb-4 text-sm'>
                        <div>
                            <label className='text-sm mb-1 inline-block text-gray-500' htmlFor="name">Product</label>
                            <input className='h-11 outline-none transition duration-300 hover:border-primary focus:border-primary px-3 rounded-md border-[2px] border-gray-200 w-full placeholder:text-sm' type="text" name='name' placeholder='Pizza for tomate' />
                        </div>
                        <div>
                            <label className='text-sm mb-1 inline-block text-gray-500' htmlFor="price">Price</label>
                            <input className='h-11 outline-none transition duration-300 hover:border-primary focus:border-primary px-3 rounded-md border-[2px] border-gray-200 w-full placeholder:text-sm' type="text" name='price' placeholder='19.30' />
                        </div>
                        <div>
                            <label className='text-sm mb-1 inline-block text-gray-500' htmlFor="categoryId">Category</label>
                            <select name="categoryId" className='h-11 outline-none transition duration-300 hover:border-primary focus:border-primary px-3 rounded-md border-[2px] border-gray-200 w-full placeholder:text-sm'  >
                                <option value="">Select Category</option>
                                {
                                    categories?.map(({ name, id }) => <option key={id} value={id}>{name}</option>)
                                }
                            </select>
                        </div>
                        <div>
                            <label className='text-sm mb-1 inline-block text-gray-500' htmlFor="image">Imagen</label>
                            <ImagesUpload />
                        </div>
                    </div>
                    <div className='flex items-center gap-3 justify-end text-sm'>
                        <button type='button' className='py-3 px-4 font-medium rounded-lg duration-300 hover:bg-gray-100 ' onClick={() => router.replace('/admin/products')}>Cancel</button>
                        <input className='py-3 px-4 rounded-lg bg-primary font-medium text-white transition duration-300 hover:bg-hover hover:text-primary cursor-pointer' type="submit" value="Add Product" />
                    </div>
                </form>
            </Modal>
        </>
    )
}