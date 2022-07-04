import React from 'react'
import { version } from '../package.json'

const Footer = () => {
  return (
    <div className='py-4 mr-8 flex justify-end'>
      <p className='text-gray-400'>v{version}</p>
    </div>
  )
}

export default Footer