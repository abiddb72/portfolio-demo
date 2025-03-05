import React from 'react'
import avatar from '../../assets/images/avatar.png'
import { Link } from "react-router-dom";

function sidebar() {
  
  return (
    <aside className='sidebar z-1'>
        <div className='avatar'>
            <img src={avatar}  />
        </div>
        <ul className='links'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About Me</Link></li>
            <li><Link to='/experience'>Experience</Link></li>
            <li><Link to='/qualifications'>Qualifications</Link></li>
            <li><Link to='/skills'>Skills</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
        </ul>
    </aside>
  )
}

export default sidebar