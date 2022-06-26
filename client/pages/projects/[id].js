import React from 'react'
import api from '../../services/project'
import Image from 'next/image'
import Link from 'next/link'
import { RiRadioButtonFill } from 'react-icons/ri'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export async function getServerSideProps({ params }) {
  const { data } = await api.getProjectById(params.id)
  const { project } = data

  project.thumbnail = Buffer.from(project.thumbnail.data).toString("base64")

  return {
    props: { project }
  }
}

const Project = ({ project }) => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10' />
          <Image className='absolute z-1' layout='fill' objectFit='cover' src={`data:image/png;base64,${project.thumbnail}`} alt='/' />
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h2 className='py-2'>{project.title}</h2>
            <h3>{project.description}</h3>
          </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p className='text-gray-500'>Last updated 26th June 2022</p>
          <ReactMarkdown className='markdown' children={project.markdown} remarkPlugins={[remarkGfm]}/>
        </div>
        <div className='col-span-4 max-h-80 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              {
                project.technologies.map((tag) => {
                  return (
                    <p className='text-gray-600 py-2 flex items-center'>
                      <RiRadioButtonFill className='pr-1' /> {tag}
                    </p>
                  )
                })
              }
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Go Back</p>
        </Link>
      </div>
    </div>
  )
}

export default Project
