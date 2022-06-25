/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useRouter } from 'next/router'

const Project = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        project: {id}
      </div>
    </div>
  )
}

export default Project
