import React from 'react'
import { TypeAnimation } from "react-type-animation";
import { IoLocationSharp } from "react-icons/io5";

function experience() {
  return (
    <section className='w-100'>
      <main>
        <TypeAnimation
          sequence={[
            "Experiences", 
            2000,       
            "",         
            500         
          ]}
          speed={50}
          repeat={Infinity}
          className='heading'
        />
        <div className='mt-4'>
            <p className='fw-semibold d-md-flex justify-content-between'><div className='color_1'>Senior Developer</div>  <div className='fw-normal fs-5'>JAN 2024 - Present</div></p>
            <p className='fst-italic d-flex align-items-center mt-4'><IoLocationSharp  className='me-2'/> Resident Address, city, country</p>
            <p className='fs-5 mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className='mt-4'>
            <p className='fw-semibold d-md-flex justify-content-between'><div className='color_1'>Developer</div>  <div className='fw-normal fs-5'>JAN 2023 - DEC 2023</div></p>
            <p className='fst-italic d-flex align-items-center mt-4'><IoLocationSharp  className='me-2'/> Resident Address, city, country</p>
            <p className='fs-5 mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className='mt-4'>
            <p className='fw-semibold d-md-flex justify-content-between'><div className='color_1'>Junior Developer</div>  <div className='fw-normal fs-5'>JAN 2022 - DEC 2022</div></p>
            <p className='fst-italic d-flex align-items-center mt-4'><IoLocationSharp  className='me-2'/> Resident Address, city, country</p>
            <p className='fs-5 mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        
      </main>
    </section>
  )
}

export default experience