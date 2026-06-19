import React from 'react'

const NavBar = () => {
  return (
    <div>
      <nav className='bg-blue-500 text-white p-4 flex justify-between'>
        <h1 className='text-2xl font-bold'>EmployeeApp</h1>
        <div className='flex gap-6'>
            <a href="/a">Add</a>
            <a href="/v">View</a>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
