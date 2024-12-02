import React from 'react'
import { Link } from 'react-router-dom'

function Navbar3() {
  return (
    <div className="navbar3">
        <Link to='/projectpage/'><p>Deployed</p></Link>
        <Link to='/projectpage/cloned'><p>Cloned</p></Link>
        <Link to='/projectpage/upcomming'><p>Upcomming</p></Link>
        
    </div>
  )
}

export default Navbar3