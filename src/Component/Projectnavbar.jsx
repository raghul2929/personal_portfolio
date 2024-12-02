import React from 'react'
import Navbar1 from './Navbar1'
import Navbar3 from './Navbar3'

function Projectnavbar() {
  return (
    <div className="projectnav">
    <nav>
         <div className='nav1'>
            <Navbar1 />
         </div>
         <div className='nav2'>
              <Navbar3/>

         </div>
      </nav> 
    </div>
     
  )
}

export default Projectnavbar