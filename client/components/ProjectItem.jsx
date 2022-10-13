import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LoadingOverlay from 'react-loading-overlay'

const ProjectItem = ({ title, imgSrc, description, projectPath }) => {
  const [loadTriggered, setLoadTriggered] = useState(false)
  return (
    <LoadingOverlay spinner
      active={loadTriggered} 
      text='Fetching project...'
      styles={{
        overlay: (base) => ({
          ...base,
          background: 'transparent',
        }),
        content: (base) => ({
          ...base,
          color: 'rgb(107 114 128)'  // text-gray-500
        }),
        spinner: (base) => ({
          ...base,
          '& svg circle': {
            stroke: 'rgb(107 114 128)'  // text-gray-500
          }
        })
    }}>
      { loadTriggered ? <div className='h-80 w-full' />
        : (
          <div className='relative flex items-center justify-center h-80 w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] hover:scale-[98%] ease-in duration-200'>
            <Image className='rounded-xl group-hover:opacity-0' layout='fill' objectFit='cover' src={imgSrc} alt='/' priority />
            <div className='hidden group-hover:block absolute w-[90%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
              <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
              <p className='pb-4 pt-2 text-white text-center'>{description}</p>
              <Link href={projectPath}>
                <div className='relative w-40 left-[50%] translate-x-[-50%]'>
                  <a onClick={() => setLoadTriggered(true)} style={{textDecoration: 'none'}}>
                    <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More info</p>
                  </a>
                </div>
              </Link>
            </div>
          </div>
        )}
    </LoadingOverlay>
  )
}

export default ProjectItem