'use server'
export const searchAction = async(formData:FormData) =>{
  console.log(formData.get('search'));
  
}