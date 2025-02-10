import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md;text-4xl text-white font-bold'>Projects</h1>
        <div className='py-12 px-8 flex flex-wrap gap-5'>
            <ProjectCard
            title='CRUD Operation with REST API '
            main='Developed a web application using React.js, Tailwind CSS, and Axios.
            It performs CRUD operations via a REST API, with Axios handling API calls.
            The interface is styled with Tailwind CSS for a modern and responsive design.'
            />
            <ProjectCard
            title='Landing Page: Vastu-Space'
            main='Designed a modern and responsive landing page for Vastu-Space using React.js
            and Tailwind CSS. The page showcases the company’s services and products, ensuring
            a seamless user experience across devices.'
            />
            <ProjectCard
            title='Landing Page: Restura-Restura'
            main='Developed a responsive landing page for Restura using React.js and Tailwind CSS.
            The page includes sections for the restaurant’s menu, reviews, and contact information,
            providing an engaging user interface.'
            />
        </div>
    </div>
  )
}

export default Projects
