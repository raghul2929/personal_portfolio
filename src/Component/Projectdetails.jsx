import React from 'react'
import Navbar1 from './Navbar1'
// import Navbar2 from './Navbar2'
import '../Styles/Project.css'
import Navbar3 from './Navbar3'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Projectnavbar from './Projectnavbar'
import Deployed from './Deployed'
import Cloned from './Cloned'
import Upcomming from './Upcomming'

function Projectdetails() {
  return (
    <div className="projectsep">
      <Projectnavbar/>
      <div className="projectroutes">
      <Routes>
        <Route path="/" element={<Deployed/>} />
        <Route path="/cloned" element={<Cloned/>} />
        <Route path="/upcomming" element={<Upcomming />} />
      </Routes>
      </div>

      </div>
  
  )
}

export default Projectdetails