import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/fotillo.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>A bit about myself</h2>
          <p className='py-2 text-gray-600'>
          Welcome to my personal portfolio. My name is Adrián Jaén Fuentes, and I have been 
          studying at the University of Granada since 2020. My academic focus lies in 
          Mathematics and Computer Science, which have sparked my enthusiasm for 
          algorithms, problem-solving, and Artificial Intelligence.
          </p>
          <p className='py-2 text-gray-600'>
          I am excited to share that the coming academic year I will be studying at the Technical 
          University of Munich (TUM) in Munich. This opportunity promises to be an enriching 
          experience, allowing me to learn and grow while immersing myself in a new culture 
          and academic environment.
          </p>
          <p className='py-2 text-gray-600'>
          Beyond academics, I have cultivated a passion for music and enjoy playing the guitar. 
          Recently, I also discovered an interest in chess, finding it an engaging game that 
          fosters strategic thinking and decision-making skills. Besides, I am a big fan of
          old movies and I often play videogames.
          </p>
          <p className='py-2 text-gray-600'>
          My fascination with Artificial Intelligence drives me to explore its vast potential. 
          Specifically, I am eager to apply my knowledge in graph algorithms in a professional capacity. 
          The prospect of developing intelligent systems that can positively impact various industries 
          and people's lives is truly motivating.
          </p>
          <p className='py-2 text-gray-600'>
          Thank you for visiting! I hope you enjoy exploring my portfolio and learning more about me.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
