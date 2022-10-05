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
          <p className='py-2 text-gray-400 text-justify'>
            My name is Sergio, and I'm a software developer currently residing in Wales 🏴󠁧󠁢󠁷󠁬󠁳󠁿
          </p>
          <p className='py-2 text-gray-600 text-justify'>
            Driven by passion and diligence, I've managed to endeavor on many areas of the Computer Science landscape
            while maintaining a career focus on Artifical Intelligence and Data Science.
          </p>
          <p className='py-2 text-gray-600 text-justify'>
            My most recent professional experience has been a 13-month internship with <strong>IBM</strong> at Hursley 
            where I had the privilege to work alongside brilliant minds leveraging technologies such as Kubernetes, Jenkins 
            and the Elastic Stack for the centralisation of logging and monitoring pipelines. It was during my placement that
            I co-founded <strong>The Platform</strong>, a revolutionary new form of publishing for the Web3 ecosystem, where
            I created many of the open-source tools that our clients now use as well as various internal APIs and infrastructure
            requirements.
          </p>
          <p className='py-2 text-gray-600 text-justify'>
            At the moment, I'm working on my final year project at <strong>Swansea University</strong> regarding the use of
            conditional Generative Adversarial Networks for the generation of intermediate slices of three-dimensional datasets.
            Such idea comes back from a small exploratory project I created on the summer of 2019, right before starting university,
            where I experimented with the concept of increasing the resolution of CT scans through artificially generated slices. 
            I expect to graduate on 2023 with a first-class (with honours) in Computer Science.
          </p>
          <Link href='/#projects'>
            <p className='py-10 text-gray-600 cursor-pointer text-center rainbow-text hover:scale-[105%] linear duration-300'>
              Check out some of my latest projects
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 flex items-center justify-center hover:scale-105 ease-in duration-300'>
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
