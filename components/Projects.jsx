import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import renderImg from '../public/assets/projects/render.png'
import mineImg from '../public/assets/projects/minesweeper.png'
import agentsImg from '../public/assets/projects/agents.png'
import advImg from '../public/assets/projects/adv2.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='3DRender'
            backgroundImg={renderImg}
            projectUrl='/render'
            tech='C++ / OOP'
          />
          <ProjectItem
            title='Reactive/Deliberative Agents'
            backgroundImg={agentsImg}
            projectUrl='/agents'
            tech='C++ / Informed Search Algorithms'
          />
          <ProjectItem
            title='MineSweeper'
            backgroundImg={mineImg}
            projectUrl='/minesweeper'
            tech='Python / TKinter'
          />
          <ProjectItem
            title='Adversarial Search (Games)'
            backgroundImg={advImg}
            projectUrl='/adversary'
            tech='C++ / Search Trees'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
