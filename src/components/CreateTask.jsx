import React from 'react'

const CreateTask = () => {
  return (
    <>
       <div className=' flex flex-col items-center mx-auto  mt-10 gap-12 p-4 bg-white'>
       <p className=' text-[rgb(62,180,158)] text-[30px]'>Task Details</p>
          <form action="" className=' flex flex-col gap-10'>
            
            <input type="text" placeholder='Task Tittle' className='bg-[rgb(241,245,244)] p-4 w-[20rem]'/>
           <textarea name="Description" id="Description" placeholder='Task Description' className=' p-4 bg-[rgb(241,245,244)]'></textarea>

            <input type="date" placeholder='Due Date' className='bg-[rgb(241,245,244)] p-4 w-[20rem]'/>
            <div className=' flex justify-center mt-[-10px]'><button className=' bg-[rgb(62,180,158)] px-8 h-10 rounded-full text-white'>Create</button></div>
          </form>
       </div>
    </>
  )
}

export default CreateTask