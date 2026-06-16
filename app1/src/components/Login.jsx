import React from 'react'

const Login = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold mb-6'>Welcome to Login page</h1>
      <input type="text" placeholder='Username' className='border p-2'/>
      <br /><br />
      <input type="password" placeholder='Password' className='border p-2'/>
      <br /><br />
      <button className='bg-blue-400 px-3 text-white rounded'>Login</button>
      <br /><br />
    </div>
  )
}

export default Login
