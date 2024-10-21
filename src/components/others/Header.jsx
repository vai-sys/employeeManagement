import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
      <h2>Hello    <br/>   <span>Vaishnavi </span></h2>
      <button className='bg-red-600 text-white px-5 py-2  text-lg font-medium rounded-lg'>Log out</button>
    </div>
  )
}

export default Header
