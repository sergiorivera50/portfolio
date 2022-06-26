/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import Image from 'next/image'
import bodyImg from '../public/assets/body.jpeg'
import Link from 'next/link'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
          <h2 className='py-4'>A little bit about me</h2>
          <p className='py-2 text-gray-400'>
            / / I am not your average developer 👨🏻‍💻
          </p>
          <p className='py-2 text-gray-600'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, sapiente molestias! 
            Error quas nulla obcaecati quam consequatur voluptas, neque laudantium? 
            Inventore eius voluptatibus molestiae minus earum necessitatibus cum eum doloribus.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, sapiente molestias! 
            Error quas nulla obcaecati quam consequatur voluptas, neque laudantium?
            Inventore eius voluptatibus molestiae minus earum necessitatibus cum eum doloribus.
          </p>
          <p className='py-2 text-gray-600'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, sapiente molestias! 
            Error quas nulla obcaecati quam consequatur voluptas, neque laudantium? 
            Inventore eius voluptatibus molestiae minus earum necessitatibus cum eum doloribus.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, sapiente molestias! 
            Error quas nulla obcaecati quam consequatur voluptas, neque laudantium? 
            Inventore eius voluptatibus molestiae minus earum necessitatibus cum eum doloribus.
          </p>
          <Link href='/#projects'>
            <p className='py-10 text-gray-600 cursor-pointer text-center rainbow-text hover:scale-[105%] ease-in duration-300'>
              Check out some of my latest projects
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image 
            src={bodyImg}
            alt='/'
          />
        </div>
      </div>
    </div>
  )
}

export default About
