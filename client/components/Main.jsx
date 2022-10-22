import React, { useState, useEffect } from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { VscArrowDown } from 'react-icons/vsc'
import MovingComponent from 'react-moving-text'
import Link from 'next/link'

export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      showAnimation: false
    }
  }

  componentDidMount() {
    this.setState({
      showAnimation: true
    })
  }

  render() {
    return (
      <div id='home' className='w-full h-screen text-center'>
        {/* <div className='w-full h-10 bg-gradient-to-r from-[#5651e5df] to-[#709dff] sticky top-0 flex justify-center items-center'>
          <div className='w-full text-slate-200 whitespace-nowrap overflow-hidden'>
            <TextScroller duration={20000}>
              LATEST PROJECT: CT2CT A generative Adversarial Networks exploration | MONTHLY STATS: 36 GitHub commits, 5 Vercel deployments, 6 CloudFlare domains, 2 new repos
            </TextScroller>
          </div>
        </div> */}
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
          <div>
            <h1 className='uppercase text-sm font-normal tracking-widest text-gray-600'>
              {this.state.showAnimation ? (
                <MovingComponent type="typewriter"
                  dataText={[
                    'Machine Learning',
                    'Backend Dev',
                    'Data Science',
                    'Infrastructure',
                    'DevOps'
                  ]} />
                ) : ''}
            </h1>
            <h1 className='py-4 text-gray-700'>
              {this.state.showAnimation ? (
                <MovingComponent
                  type="fadeInFromTop"
                  duration="300ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="backwards">
                  Hi 👋 I&apos;m <span className='text-[#5651e5]'>Sergio Rivera</span>
                </MovingComponent>
              ) : ''}
            </h1>
            <h1 className='uppercase text-2xl tracking-widest py-2 text-gray-700'>
              {this.state.showAnimation ? (
                <MovingComponent
                  type="popIn"
                  duration="1000ms"
                  delay="0.1s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="backwards">
                  Welcome to my developer portfolio
                </MovingComponent>
              ) : ''}
            </h1>
            <h1 className='py-4 text-xl font-normal text-gray-600 max-w-[70%] m-auto'>
              {this.state.showAnimation ? (
                <MovingComponent
                    type="fadeIn"
                    duration="800ms"
                    delay="0.4s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="backwards">
                    I&apos;m a Computer Science student specializing in <span className='font-bold rainbow-text'>Microservices</span>, application of
                    <span className='font-bold rainbow-text'> Machine Learning</span> techniques and <span className='font-bold rainbow-text'>Blockchain</span> technologies. 
                    Backed by professional experience, open-source collaboration and personal dedication.
                  </MovingComponent>
                ) : ''}
            </h1>
            <div className='flex items-center justify-center max-w-[330px] m-auto py-4'>
              {this.state.showAnimation ? (
                <MovingComponent
                  type="fadeInFromBottom"
                  duration="400ms"
                  delay="800ms"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="backwards">
                    <Link href='/#about'>
                      <div className='p-6 cursor-pointer animate-bounce delay-100 rounded-full hover:scale-[130%] hover:bg-[#5651e5] hover:bg-opacity-5 ease-in duration-200'>
                        <VscArrowDown size={20} />
                      </div>
                    </Link> 
                </MovingComponent>
              ) : ''}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
