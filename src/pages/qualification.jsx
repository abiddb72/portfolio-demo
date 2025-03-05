import React from 'react'
import { TypeAnimation } from "react-type-animation";

function qualification() {
  return (
    <section className='w-100'>
      <main>
        <TypeAnimation
          sequence={[
            "Qualifications", 
            2000,       
            "",         
            500         
          ]}
          speed={50}
          repeat={Infinity}
          className='heading'
        />
        <div className='mt-4'>
            <p className='fw-semibold'>Bachelor’s in Computer Science - 2020</p>
            <p className='fst-italic d-flex align-items-center'>ABC University, Karachi, Pakistan</p>
        </div>
        <div className='mt-4'>
            <p className='fw-semibold'>Intermediate in Computer Science - 2016</p>
            <p className='fst-italic d-flex align-items-center'>ABC College, Karachi, Pakistan</p>
        </div>
        <div className='mt-4'>
            <p className='fw-semibold'>Matric in Computer Science - 2014</p>
            <p className='fst-italic d-flex align-items-center'>ABC School, Karachi, Pakistan</p>
        </div>

        <TypeAnimation
          sequence={[
            "Certifications", 
            2000,       
            "",         
            500         
          ]}
          speed={50}
          repeat={Infinity}
          className='heading'
        />
        <div className='mt-4'>
            <p className='fw-semibold'>Certificate in Programming - 2020</p>
            <p className='fst-italic d-flex align-items-center'>ABC Institude, Karachi, Pakistan</p>
        </div>
        <div className='mt-4'>
            <p className='fw-semibold'>Certificate in Graphics - 2016</p>
            <p className='fst-italic d-flex align-items-center'>ABC Institude, Karachi, Pakistan</p>
        </div>
        <div className='mt-4'>
            <p className='fw-semibold'>Certificate in Technology - 2014</p>
            <p className='fst-italic d-flex align-items-center'>ABC Institude, Karachi, Pakistan</p>
        </div>
        
      </main>
    </section>
  )
}

export default qualification