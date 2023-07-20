import Image from 'next/image';
import React from 'react';
import Head from 'next/head'
import agentsImg from '../public/assets/projects/agents.png'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const agents = () => {
  return (
    <div>
      <Head>
        <title>Reactive/Deliberative Agents</title>
        <link rel="icon" href="/anchor.png" />
      </Head>
      <div className='w-full'>
        <div className='w-screen h-[50vh] relative'>
          <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
          <Image
            className='absolute z-1'
            layout='fill'
            objectFit='cover'
            src={agentsImg}
            alt='/'
          />
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h2 className='py-2'>Reactive/Deliberative Agents</h2>
            <h3>C++ / Informed Search Algorithms</h3>
          </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
          <div className='col-span-4'>
            <p>Project</p>
            <h2>Overview</h2>
            <p>
              This project was a practice assignment for my Artificial Intelligence class in UGR.
              The goal was to create a program that would simulate a robot that would move around
              a grid and collect objectives. There were 4 different levels, each with a different
              goal. Through the levels, I had to implement different algorithms to make the robot
              accomplish each goal. 
            </p>
            <br />
            <p>
              The algorithms I used were: Breadth-first search, Uniform-cost search and A* search.
              More importantly, I had to mix the reactive and deliberative approaches to make the
              robot complete the last level, which was the most complex one. 
            </p>
            <br />
            <p>
              More info can be found in the GitHub repository below.
            </p>
            <a
              href='https://github.com/Mayhem929/ReactiveDeliberativeAgents'
              target='_blank'
              rel='noreferrer'
            >
              <button className='px-8 py-2 mt-4 mr-8'>Code</button>
            </a>
          </div>
          <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
            <div className='p-2'>
              <p className='text-center font-bold pb-2'>Technologies and Skills</p>
              <div className='grid grid-cols-3 md:grid-cols-1'>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> C++
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> AI
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Informed Search Algorithms
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Path finding
                </p>
              </div>
            </div>
          </div>
          <Link href='/#projects'>
            <p className='underline cursor-pointer'>Back</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default agents;
