import React from 'react'
import packageInfo from '../package.json'

const Footer = () => {
  return (
    <div className='py-4 mr-8 flex justify-end'>
      <p className='text-gray-400'>v{packageInfo.version}</p>
    </div>
  )
}

export default Footer