import React from 'react'
import { TypeAnimation } from "react-type-animation";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhone,FaRegFilePdf,FaWhatsapp,FaLinkedinIn,FaGithub,FaFacebookF,FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function home() {
  return (
    <section className='w-100'>
      <main>
        <p>Hey there! I am</p>
        <TypeAnimation
          sequence={[
            "John Doe", 
            2000,       
            "",         
            500         
          ]}
          speed={50}
          repeat={Infinity}
          className='heading'
        />
        <p>a passionate <strong className='fst-italic'>Frontend Developer</strong></p>

        <p className='mt-4'><HiOutlineMail size={26} className='me-2'/> johndoe.developer@example.com</p>
        <p><FaPhone size={22} className='me-2'/> (123) 456 789</p>

        <div className='group'>
          <Link to='/' className='btn_1 anim_scale'>DOWNLOAD CV <div className='icon'><FaRegFilePdf size={30}/></div></Link>
          <Link to='/' className='btn_2 anim_scale'>WHATSAPP <div className='icon'><FaWhatsapp size={30}/></div></Link>
          <Link to='/' className='btn_5 anim_scale'>FACEBOOK <div className='icon'><FaFacebookF size={30}/></div></Link>
          <Link to='/' className='btn_6 anim_scale'>INSTAGRAM <div className='icon'><FaInstagram size={30}/></div></Link>
          <Link to='/' className='btn_3 anim_scale'>LINKEDIN <div className='icon'><FaLinkedinIn size={30}/></div></Link>
          <Link to='/' className='btn_4 anim_scale'>GITHUB <div className='icon'><FaGithub size={30}/></div></Link>
        </div>
      </main>
    </section>
  )
}

export default home