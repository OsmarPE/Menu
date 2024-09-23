import IconUpload from '@/assets/IconUpload';
import { getPathProduct } from '@/lib/helper';
import { CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image';
import { useState } from 'react';

export default function ImagesUpload({imgCurrent}:{imgCurrent?:string}) {

  const [image, setImage] = useState('')

  const handleSucess = async(result:any) =>{
    if (result.event === 'success') {
      console.log(result.info.secure_url);
      
      setImage(result.info.secure_url)
    }
  } 
  
  const imageCurrent = imgCurrent ?? ''
  const img = image || imageCurrent

  return (
    <CldUploadWidget uploadPreset='wxsvzyll' options={{maxFiles:1,}} onSuccess={handleSucess}>
      {
        ({open}) => (
          <>
            <div className='h-16 rounded-md cursor-pointer flex items-center gap-4 justify-center border-[2px] border-dashed group border-gray-200 transition duration-300 hover:border-primary hover:bg-primary/5 focus:border-primary w-full' onClick={() => open()}>
              <div className='bg-gray-200 group-hover:bg-primary size-8 grid place-content-center rounded-full shadow-[0_0_0_4px] shadow-gray-100 transition duration-300  group-hover:shadow-primary/30  '>
                <IconUpload className='size-4 text-white'/>
              </div>
              <span className='text-gray-300 transition duration-300 group-hover:text-primary font-medium'>Click here to {imgCurrent ? 'Update':'Upload'} your  File</span>
            </div>
            <input type="hidden" name="image" value={img} />
            { img && (
              <img src={getPathProduct(img)} alt="image demo" className='object-cover size-24 rounded-lg inline-block mt-4'/>
            ) }
          </>
        )
      }
    </CldUploadWidget>
  )
}
