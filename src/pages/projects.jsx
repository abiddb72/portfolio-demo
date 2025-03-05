import React from 'react'
import { TypeAnimation } from "react-type-animation";
import project from '../assets/images/project.png'
import { Link } from 'react-router-dom';

function projects() {
  return (
    <section className='w-100'>
      <main>
        <TypeAnimation
          sequence={[
            "Projects", 
            2000,       
            "",         
            500         
          ]}
          speed={50}
          repeat={Infinity}
          className='heading'
        />
        <p>Subtitle Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <div className='row mt-4'>
          <div className='col-md-4 col-sm-6 text-center'>
            <img src={project} className='w-100 rounded-4 border border-1 border-dark anim_scale'  />
            <Link to='/' className='d-block py-4 fs-5'>Project Title</Link>
          </div>
          <div className='col-md-4 col-sm-6 text-center'>
            <img src={project} className='w-100 rounded-4 border border-1 border-dark anim_scale'  />
            <Link to='/' className='d-block py-4 fs-5'>Project Title</Link>
          </div>
          <div className='col-md-4 col-sm-6 text-center'>
            <img src={project} className='w-100 rounded-4 border border-1 border-dark anim_scale'  />
            <Link to='/' className='d-block py-4 fs-5'>Project Title</Link>
          </div>
          <div className='col-md-4 col-sm-6 text-center'>
            <img src={project} className='w-100 rounded-4 border border-1 border-dark anim_scale'  />
            <Link to='/' className='d-block py-4 fs-5'>Project Title</Link>
          </div>
          <div className='col-md-4 col-sm-6 text-center'>
            <img src={project} className='w-100 rounded-4 border border-1 border-dark anim_scale'  />
            <Link to='/' className='d-block py-4 fs-5'>Project Title</Link>
          </div>
          <div className='col-md-4 col-sm-6 text-center'>
            <img src={project} className='w-100 rounded-4 border border-1 border-dark anim_scale'  />
            <Link to='/' className='d-block py-4 fs-5'>Project Title</Link>
          </div>
        </div>

        
      </main>
    </section>
  )
}

export default projects