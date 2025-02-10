import React from 'react';
import avtarImg from '../../assets/7358602-removebg-preview.png';
import TextChanger from '../TextChanger';

const Home = () => {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
        <div className='md:w-2/4 space-y-7 md:pt-10'>
        <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>
          <TextChanger />
        </h1>
        <p className='text-sm md:text-xl tracking-tight'>
        Web developer proficient in React, Node.js, MongoDB, and modern web technologies, focusing on clean, responsive design and user experience.
        </p>
        <button className='mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85
        duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>Contact Me</button>
        </div>
        <div><img className='' src={avtarImg} alt="" /></div>
        </div>
  );
}

export default Home;
