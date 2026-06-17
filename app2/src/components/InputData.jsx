import React, { useState } from 'react'

const InputData = () => {
  var [inp, input] = useState()
  var [out, submit] = useState()

  const inputHandler = (e) => {
    input(e.target.value);
  }
  const submitHandler = () => {
    submit(inp)

  }
  return (
    <div className='mt-30'>
      <h1 className='text-4xl font-bold mb-6'>Hello {inp}</h1>
      <h1 className='text-4xl font-bold mb-6'>Hello {out}</h1>
      <input type="text" placeholder='Enter the name' className='border p-3 rounded-lg w-80' onChange={inputHandler}/>
      <br /><br />
      <button className='bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-700' onClick={submitHandler}>Submit</button>
    </div>
  )
}

export default InputData
