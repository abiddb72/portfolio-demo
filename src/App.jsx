import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Switch from "react-switch";
import Sidebar from './pages/layout/sidebar';
import Home from './pages/home';
import About from './pages/about';
import Experience from './pages/experience';
import Qualification from './pages/qualification';
import Skills from './pages/skills';
import Projects from './pages/projects';
import './App.css'
import { FaBars } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [toggleSidebar,setToggleSidebar] = useState(true);
  const [theme, setTheme] = useState(false);
  const sidebar = () =>{
    const mediaQuery = window.matchMedia("(max-width: 1200px)");
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');

    if(mediaQuery.matches){
      if(toggleSidebar){
        sidebar.style.display = 'none';
      }else{
        sidebar.style.display = 'block';
      }
    }
    
    else
    {
      if(toggleSidebar){
        sidebar.style.display = 'none';
        content.style.marginLeft = '0px';
        content.style.width = '100%';
        
      }else{
        sidebar.style.display = 'block';
        content.style.marginLeft = '400px';
        content.style.width = 'calc(100% - 400px)';
      }
    }
    setToggleSidebar(!toggleSidebar);
    mediaQuery.addEventListener("change", updateLayout);
  }

  function createBox() {
    let box = document.createElement("div");
    box.classList.add("box");

    let randomLeft = Math.random() * window.innerWidth;  
    let randomSize = Math.random() * 50 + 50; 
    let randomDelay = Math.random() * 2; 

    box.style.left = `${randomLeft}px`;
    box.style.width = `${randomSize}px`;
    box.style.height = `${randomSize}px`;
    box.style.animationDelay = `${randomDelay}s`;

    document.querySelector(".container_anim").appendChild(box);

    setTimeout(() => {
        box.remove();
    }, 2000);
}

setInterval(createBox, 300);

  return (
    <><div class="container_anim"></div>
    <div className={theme ? 'theme-dark' + ' main_container w-100 d-flex' : 'theme-light' + ' main_container w-100 d-flex'}>
      
      <Router>
      <FaBars className='bar_icon' onClick={sidebar}/>
        <Sidebar/>
        <section className='content'>
          <Switch
            checked={theme}
            onChange={setTheme}
            onColor="#333"  
            offColor="#D3B9C1" 
            onHandleColor="#FF23B2"
            offHandleColor="#4400FF"
            handleDiameter={40} 
            uncheckedIcon={false} 
            checkedIcon={false} 
            height={45} 
            width={80} 
            className='theme z-1'
          />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/qualifications" element={<Qualification />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
          </Routes>
        </section>
      </Router>
    </div>
    
    </>
  )
}

export default App
