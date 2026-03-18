import React from 'react'

const TaskList_No = () => {
  return (
    <div className='flex screen justify-between gap-5 mt-10'>

        <div className='px-10 py-5  w-[45%] bg-red-400 rounded-xl  '>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>Failed</h3>
        </div>

        <div className='px-10 py-5  w-[45%] bg-emerald-400 rounded-xl  '>
        <h2 className='text-3xl font-semibold'>3</h2>
        <h3 className='text-xl font-medium'>Completed Tasks</h3>
        </div>

        <div className='px-10 py-5  w-[45%] bg-blue-400 rounded-xl  '>
        <h2 className='text-3xl font-semibold'>2</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className='px-10 py-5  w-[45%] bg-yellow-400 rounded-xl  '>
        <h2 className='text-3xl font-semibold'>5</h2>
        <h3 className='text-xl font-medium'>Accepted</h3>
        </div>

    </div>
  )
}

export default TaskList_No