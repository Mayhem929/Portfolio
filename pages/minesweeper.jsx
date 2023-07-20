import Image from 'next/image';
import React from 'react';
import Head from 'next/head'
import mineImg from '../public/assets/projects/minesweeper.png'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const minesweeper = () => {
  return (
    <div>
    <Head>
      <title>Minesweeper</title>
      <link rel="icon" href="/anchor.png" />
    </Head>
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={mineImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>MineSweeper</h2>
          <h3> Python / TKinter </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This is a project I made by myself in the hope of learning more about
            User Interfaces and Recursive Algorithms. It is a recreation of the classic
            game MineSweeper. It uses the Python language and is built using the TKinter
            library.
          </p>
          <br />
          <p>
            The game is fully functional and has all the features of the original game.
            The player can choose between 3 different difficulties and the game will
            generate a random board with the correct number of mines. The player can
            then click on the tiles to reveal them and if they click on a mine, they
            lose. If they click on a tile with no mines around it, it will reveal all
            the tiles around it and if there are no mines around those tiles, it will
            continue to reveal all the tiles around those tiles until it reaches a tile
            that has mines around it. The player can also flag tiles that they think
            have mines around them and if they flag all the tiles with mines, they win.
          </p>
          <a
            href='https://github.com/Mayhem929/MineSweeper'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies and Skills</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Python
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> TKinter
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Recursive Algorithm
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> OOP
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

export default minesweeper;
