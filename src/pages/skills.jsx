import React from 'react'
import { TypeAnimation } from "react-type-animation";

function skills() {
  return (
    <section className='w-100'>
      <main>
        <TypeAnimation
          sequence={[
            "Skills", 
            2000,       
            "",         
            500         
          ]}
          speed={50}
          repeat={Infinity}
          className='heading'
        />
        <div className='mt-4'>
            <div className='d-flex justify-content-between align-items-center'>
                <p>HTML</p>
                <p className='fw-semibold'>50%</p>
            </div>
            <div className="progress">
                <div className=" bg-custom" role="progressbar" style={{width:'50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                </div>
            </div>
        </div>

        <div className='mt-4'>
            <div className='d-flex justify-content-between align-items-center'>
                <p>CSS</p>
                <p className='fw-semibold'>80%</p>
            </div>
            <div className="progress">
                <div className=" bg-custom" role="progressbar" style={{width:'80%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                </div>
            </div>
        </div>

        <div className='mt-4'>
            <div className='d-flex justify-content-between align-items-center'>
                <p>REACT</p>
                <p className='fw-semibold'>70%</p>
            </div>
            <div className="progress">
                <div className=" bg-custom" role="progressbar" style={{width:'70%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                </div>
            </div>
        </div>

        <div className='mt-4'>
            <div className='d-flex justify-content-between align-items-center'>
                <p>JAVASCRIPT</p>
                <p className='fw-semibold'>60%</p>
            </div>
            <div className="progress">
                <div className=" bg-custom" role="progressbar" style={{width:'60%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                </div>
            </div>
        </div>
        
      </main>
    </section>
  )
}

export default skills