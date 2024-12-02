import React from 'react'
import '../Styles/Navbar.css'
import Navbar1 from './Navbar1'
import Navbar2 from './Navbar2'
import Sections from './Sections'

function Navbar() {
  return (
    <div className="nav">
        <nav>
           <div className='nav1'>
              <Navbar1 />
           </div>
           <div className='nav2'>
               <Navbar2 />  
           </div>
        </nav> 
        <main className='sections'>
           <Sections></Sections>
       </main>
    </div>
  )
}

export default Navbar