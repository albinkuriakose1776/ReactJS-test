import React from 'react'

const Reg = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold mb-6'>Welcome to Registration Page</h1>
      <input type="text" placeholder='Name' className='border p-2 px-4 py-1'/>
      <br /><br />
      <input type="number" placeholder='Age' className='border p-2 px-4 py-1'/>
      <br /><br />
      <input type="text" placeholder='Place' className='border p-2 px-4 py-1'/>
      <br /><br />
      <input type="password" placeholder='Password' className='border p-2 px-4 py-1'/>
      <br /><br />
      <button className='bg-blue-500 px-4 py-1 text-white rounded'>Login</button>
      <br /><br />
    </div>
  )
}

export default Reg
