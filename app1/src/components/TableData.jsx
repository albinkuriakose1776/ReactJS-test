import React from 'react'

const TableData = () => {
  return (
    <div>
        <table className='w-full mt-6'>
            <thead>
                <tr className='bg-gray-800 text-white border'>
                    <th className='p-2'>Name</th>
                    <th className='p-2'>Age</th>
                    <th className='p-2'>Place</th>
                </tr>
            </thead>
            <tbody>
                <tr className='border hover:bg-yellow-100'>
                    <td className='p-2'>Albin</td>
                    <td className='p-2'>19</td>
                    <td className='p-2'>Ettumanoor</td>
                </tr>
                <tr className='border hover:bg-yellow-100'>
                    <td className='p-2'>Jaiwin</td>
                    <td className='p-2'>19</td>
                    <td className='p-2'>Kanakkary</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default TableData
