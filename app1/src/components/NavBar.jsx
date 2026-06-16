import React from 'react'

const NavBar = () => {
  return (
    <div>
      <nav className='bg-blue-500 text-white p-4 flex justify-between'>
      <h1 className='text-2xl font-bond'>My App</h1>
      <div className='flex gap-6'>
        <a href="/s">State</a>
        <a href="/">Login</a>
        <a href="/r">Reg</a>
        <a href="/t">Table</a>
        <a href="/c">Card</a>
      </div>
      </nav>
    </div>
  )
}

export default NavBar
