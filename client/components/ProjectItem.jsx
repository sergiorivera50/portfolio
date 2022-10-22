import Image from 'next/image'
import Link from 'next/link'
import ComplexButton from './ComplexButton'

const ProjectItem = ({ project, placeholder }) => {

  return placeholder ?
    (
      <div className='animate-pulse relative flex h-80 w-full bg-gray-300 shadow-xl shadow-gray-300 rounded-xl' />
    )
    : (
      <div className='relative flex items-center justify-center h-80 w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] hover:scale-[98%] ease-in duration-200'>
        <Image className='rounded-xl group-hover:opacity-0' layout='fill' objectFit='cover' src={project.thumbnail} alt='/' priority />
        <div className='hidden group-hover:block absolute w-[80%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h3 className='text-2xl text-white tracking-wider text-center'>{project.title}</h3>
          <p className='pb-4 pt-2 text-white text-center'>{project.description}</p>
          <Link href={`/projects/${project._id}`}>
            <div className='relative w-40 left-[50%] translate-x-[-50%]'>
              <ComplexButton before='Learn more' after='Fetching...'/>
            </div>
          </Link>
        </div>
      </div>
    )
}

export default ProjectItem