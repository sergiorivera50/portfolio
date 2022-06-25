import React, { useState, useEffect } from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { VscArrowDown } from 'react-icons/vsc'
import MovingComponent from 'react-moving-text'
import quotes from '../quotes.json'
import Link from 'next/link'

const Main = () => {
  const [randQuote, setRandQuote] = useState(null)


  useEffect(() => {
    const quote = quotes[Math.floor(Math.random()*quotes.length)]
    setRandQuote(quote)
  }, [])

  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <h1 className='uppercase text-sm font-normal tracking-widest text-gray-600'>
          <MovingComponent type="typewriter"
            dataText={[
              'Machine Learning',
              'Backend Dev',
              'Data Science',
              'Infrastructure',
              'DevOps'
            ]} />
          </h1>
          <h1 className='py-4 text-gray-700'>
            Hi 👋 I&apos;m <span className='text-[#5651e5]'>Sergio Rivera</span>
          </h1>
          <h1 className='uppercase text-2xl tracking-widest py-2 text-gray-700'>
            <MovingComponent
              type="popIn"
              duration="1000ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="backwards">
              Welcome to my developer portfolio
            </MovingComponent>
          </h1>
          <h1 className='py-4 text-xl font-normal text-gray-600 max-w-[70%] m-auto'>
            <MovingComponent
                type="fadeIn"
                duration="1000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="backwards">
                I&apos;m a Computer Science student specializing in <span className='font-bold'>Back-End</span> development,
                <span className='font-bold'> Machine Learning</span> techniques and <span className='font-bold'>Infrastructure</span> management. 
                Backed by professional experience, open-source collaboration and personal dedication.
              </MovingComponent>
          </h1>
          {/* <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaLinkedinIn />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaGithub />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineMail />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <BsFillPersonLinesFill />
            </div>
          </div> */}
          <div className='flex items-center justify-center max-w-[330px] m-auto py-4'>
            <MovingComponent
              type="fadeInFromBottom"
              duration="400ms"
              delay="800ms"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="backwards">
              <div className='p-6 cursor-pointer hover:scale-[130%] ease-in duration-200'>
                <Link href='/#about'>
                  <a>
                    <VscArrowDown size={20} />
                  </a>
                </Link> 
              </div>
            </MovingComponent>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
