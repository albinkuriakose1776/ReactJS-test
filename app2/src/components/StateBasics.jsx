import React, { useState } from 'react'

const StateBasics = () => {
    let name = "Mangalam"
    let [sname, setName] = useState("ICT Kerala")
    const changeName = () => {
      setName("New Name")
    }
  return (
    <div>
      <h1 className='text-4xl font-bold mb-6'>Welcome {name}</h1>
      <h1 className='text-4xl font-bold mb-6'>Welcome {sname}</h1>
      <button className='bg-green-700 text-white px-4 py-2 rounded-lg' onClick={changeName}>Change</button>
      <button className='bg-green-700 text-white px-4 py-2 rounded-lg' onClick={() => {setName("Luttappi")}}>Change</button>
    </div>
  )
}

export default StateBasics