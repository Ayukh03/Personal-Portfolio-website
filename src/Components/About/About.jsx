import React from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';
import AboutImg from '../../assets/7358653-removebg-preview.png';

const About = () => {
  return (
    <div id='About' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg py-12'>
      <div>
        <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
        <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
          <img className='md:h-80' src={AboutImg} alt='About img' />

          <ul>
            <div className='flex gap-3 py-4'>
              <IoArrowForwardOutline size={30} className='mt-1' />

              <span className='w-96'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend Developer</h1>
                <p className='text-sm md:text-md leading-tight'>
                  "Experienced frontend developer skilled in HTML, CSS, JavaScript, Tailwind CSS, Redux, React.js, and React Native. Focused on building responsive and intuitive web and mobile interfaces."
                </p>
              </span>
            </div>
            <div className='flex gap-3 py-4'>
              <IoArrowForwardOutline size={30} className='mt-1' />

              <span className='w-96'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Backend Developer</h1>
                <p className='text-sm md:text-md leading-tight'>
                  "Experienced in backend development with Node.js, I specialize in building robust APIs. Proficient in using Axios for efficient data handling and communication, ensuring seamless integration and functionality."
                </p>
              </span>
            </div>
            <div className='flex gap-3 py-4'>
              <IoArrowForwardOutline size={30} className='mt-1' />

              <span className='w-96'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Database Developer</h1>
                <p className='text-sm md:text-md leading-tight'>
                  "Full-stack developer skilled in Node.js, MongoDB, and API development. Proficient in using Axios for efficient data handling."
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;


