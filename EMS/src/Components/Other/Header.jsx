import React from 'react'
const Header = () => {
  return (
    <div className='text-white flex  items-end justify-between '>
    <h1 className='text-2xl font-medium'>Hello <br />
    <span className='text-3xl font-bold'>Yawar Hussain</span></h1>
    
    <button className='bg-red-500 text-white px-5 py-2 rounded  text-lg font-medium hover:bg-red-700'>Logout</button>
    </div>
  )
}

export default Header