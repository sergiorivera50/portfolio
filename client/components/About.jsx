/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import Image from 'next/image'
import bodyImg from '../public/assets/body.jpeg'
import Link from 'next/link'

const About = () => {
  return (
    <div id='about' className='w-full lg:h-screen p-2 flex items-center py-16 px-4'>
      <div className='max-w-[1240px] m-auto lg:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
          <h2 className='py-4'>A little bit about me</h2>
          <p className='py-2 text-gray-400 text-justify'>
            My name is Sergio. I'm a software developer currently residing in the United Kingdom 🇬🇧
          </p>
          <p className='py-2 text-gray-600 text-justify'>
          Driven by passion and diligence, I've managed to endeavour in many areas of the Computer Science landscape 
          while maintaining a career focus on Artificial Intelligence and Data Science.
          </p>
          <p className='py-2 text-gray-600 text-justify'>  {/* Mention NLP work in IBM, polish The Platform */}
            My most recent professional experience has been a 13-month internship with <strong>IBM</strong> at Hursley, 
            where I had the privilege to work alongside brilliant minds leveraging technologies such as Kubernetes, Jenkins 
            and the Elastic Stack for the centralisation of logging and monitoring pipelines. During my placement, 
            I co-founded <strong>The Platform</strong>, a new form of online publishing heavily influenced by the Web3 ecosystem, where
            I created many of the open-source tools that our clients now use as well as various internal APIs and the automation of our infrastructure.
          </p>
          <p className='py-2 text-gray-600 text-justify'>
            Currently, I'm working on my final year project at <strong>Swansea University</strong> regarding the use of Generative Adversarial Networks 
            for the generation of synthetic datasets, where I expect to graduate in 2023 with a first-class degree (with honours) in Computer Science.
          </p>
          {/* <Link href='/#projects'>
            <p className='py-10 text-gray-600 cursor-pointer text-center rainbow-text hover:scale-[105%] linear duration-300'>
              Check out some of my latest projects
            </p>
          </Link> */}
          <div className='lg:grid grid-cols-2 py-4 mb-6'>
            <div className='lg:flex justify-end'>
              <Link href='/#projects'>
                <div className='relative w-60 left-[50%] translate-x-[-50%] mb-4'>
                  <a style={{textDecoration: 'none'}}>
                    <p className='text-center py-3 rounded-lg bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white text-lg cursor-pointer hover:scale-105 ease-in duration-300'>Check out my projects</p>
                  </a>
                </div>
              </Link>
            </div>
            <div className='lg:flex'>
              <Link href={process.env.CV_URL || '/#about'}>
                <div className='relative w-40 left-[50%] translate-x-[-50%]'>
                  <a style={{textDecoration: 'none'}}>
                    <p className='text-center py-3 rounded-lg bg-[#ecf0f3] hover:bg-[#f4f6f7] border-[1px] border-[#5651e5] text-black text-lg cursor-pointer hover:scale-105 ease-in duration-300'>Download CV</p>
                  </a>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className='w-[80%] h-auto sm:w-[70%] lg:w-full m-auto shadow-xl shadow-gray-400 flex items-center justify-center hover:scale-105 ease-in duration-300'>
          <Image 
            src={bodyImg}
            alt='/'
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default About
