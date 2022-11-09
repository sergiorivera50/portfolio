import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RiRadioButtonFill } from 'react-icons/ri'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import ComplexButton from './ComplexButton'
import remarkBreaks from 'remark-breaks'

const ProjectDetail = ({ project }) => {
  return (
    <div className='w-full'>
      <div className='z-50 h-10 w-40 sticky top-0 flex justify-center items-center'>
        <Link href='/#projects'>
          <div className='w-full ml-2 mt-8'>
              <ComplexButton secondary>
                Go Back
              </ComplexButton>
          </div>
        </Link>
      </div>

      <div className='w-screen mt-[-4rem] h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-gradient-to-b from-transparent via-transparent to-[#ecf0f3] opacity-100 z-10' /> {/* Turn down opacity for harsher line */}
          <Image className='absolute z-1' layout='fill' objectFit='cover' src={project.thumbnail} alt='/' />
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4 pr-4'>
          <p className='text-gray-500'>Last updated 26th June 2022</p>
          <ReactMarkdown className='markdown' children={project.markdown} linkTarget={"_blank"}/>
        </div>
        <div className='col-span-4 h-fit ease-in duration-100 mt-10 md:col-span-1 border-[#5651e5] border-[1px] shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center pb-4 tracking-widest text-[#5651e5]'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              {
                project.technologies.map((tag, ix) => {
                  return (
                    <p key={ix} className='text-gray-600 py-2 flex items-center'>
                      <RiRadioButtonFill className='pr-2' /> {tag}
                    </p>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail