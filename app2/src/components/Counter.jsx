import React, { useState } from 'react'

const Counter = () => {
    let [count, setCount] = useState(0);
    const inc = () => {
        setCount(++count);
    };

  return (
    <div className='mt-30'>
        <h1 className='text-4xl font-bold mb-6'>Count : {count}</h1>
        <button className='bg-blue-500 text-white px-6 py-2 rounded' onClick={inc}>+</button>
        <button className='bg-red-500 text-white px-6 py-2 rounded' onClick={()=>setCount(--count)}>-</button>

    </div>
  )
}

export default Counter
