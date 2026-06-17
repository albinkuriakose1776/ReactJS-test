import axios from 'axios';
import React, { useEffect, useState } from 'react'


const TableData = () => {
  var [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
      console.log(res.data)
       setUsers(res.data)})
    .catch((err)=>{
      console.log(err.data)
    })
  }, [])
  return (
    <div className='px-6'>
      <table className='w-full mt-6 '>
        <thead>
            <tr className='bg-gray-800 text-white border'>
                <th className='p-3 border'>Name</th>
                <th className='p-3 border'>Place</th>
                <th className='p-3 border'>Age</th>
            </tr>
        </thead>
        <tbody>
            {users.map((val)=>{
              return(
                <tr className='border'>
                  <td className='border p-3'>{val.name}</td>
                  <td className='border p-3'>{val.phone}</td>
                  <td className='border p-3'>{val.email}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}


export default TableData