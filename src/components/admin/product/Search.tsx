'use client'
import IconSearch from '@/assets/IconSearch'
import { validateSearch } from '@/lib/helper'
import { redirect } from 'next/navigation'
import React from 'react'
import { toast } from 'sonner'

export default function Search() {

    const handleSubmit = (formData: FormData) => {
        const value = formData.get('search')
        const validate = validateSearch.safeParse(value)

        if (validate.error) {
            const { message } = validate.error.issues[0]
            toast.error(message)
            return
        }

        redirect(`/admin/search?search=${value}`)

    }

    return (
        <form action={handleSubmit} className="flex  border border-gray-200 w-[300px] rounded-md pl-3 gap-2 transition overflow-hidden duration-300 hover:border-primary focus:border-primary">
            <IconSearch width={16} className="text-gray-400" />
            <input type="search" placeholder="Search" name='search' className="h-full outline-none  text-sm px-3 pl-0 placeholder:text-sm flex-1 placeholder:text-gray-400" />
        </form>

    )
}
