import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            I have been a student in University of Granada since 2020, and throughout 
            my education I have been carrying out my own projects, trying to give a 
            practical application to the knowledge I gained in math and software thanks 
            to my degree.
          </p>
          <p className='py-2 text-gray-600'>
            Moreover, I'm specially interested in Artificial Inteligence. I am excited 
            about utilizing my expertise in search algorithms and decision trees to 
            contribute effectively in a professional capacity. Having acquired a deep 
            understanding of these concepts through my education and experience, I am 
            eager to apply them to real world problems in a work setting.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
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
