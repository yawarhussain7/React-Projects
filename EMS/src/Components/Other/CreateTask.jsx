import React from 'react'

const CreateTask = () => {
  return (
    <div>

            <form className='flex w-full flex-wrap bg-[#1C1C1C] p-10 mt-5 items-start justify-between '>
                <div className='w-1/2 font-sm'>
                <div className='mt-3'><h3>Task Title</h3>
                <input className='w-full border  border-white outline-none px-2 py-1 ' type="text" name="" id="" placeholder='Enter task title ' /></div>
                <div className='mt-3'><h3>Date</h3>
                <input className='w-full border  border-white outline-none px-2 py-1 ' type="date" name="" id="" /></div>
                <div className='mt-3'><h3>Assign to</h3>
                <input className='w-full border  border-white outline-none px-2 py-1 ' type="text" name="" id="" placeholder='Enter employee name' /></div>
                <div className='mt-3'><h3>Category</h3>
                <input className='w-full border  border-white outline-none px-2 py-1 ' type="text" name="" id="" placeholder='design, dev, etc' /></div>
                </div>
                <div className='w-1/2 py-3 px-5 '><h3>Description</h3>
                <textarea className='w-full border border-white outline-none px-2 py-1 ' rows={8} columns={50} name="" id="" placeholder='Enter task details'></textarea>
                <button type="submit" className='w-full bg-green-500 rounded  font-medium py-1 mt-2 cursor-pointer hover:bg-green-700'>Add Task</button>
                </div>
    
            </form>

           
       
    </div>
  )
}

export default CreateTask