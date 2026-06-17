import React, { useState } from 'react'

const Example = () => {
    let [name, setName] = useState()
  return (
    <div className='mt-30'>
        <h1 className='text-4xl font-bold mb-6'>Welcome {name}</h1>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 mr-2' onClick={()=>{setName('Home')}}>Home</button>
        <button className='bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 mr-2' onClick={()=>{setName('Gallery')}}>Gallery</button>
        <button className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 mr-2' onClick={()=>{setName('Contact')}}>Contact</button>      
    </div>
  )
}

export default Example
