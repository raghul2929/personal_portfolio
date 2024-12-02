import React from 'react'
import Navbar from './Component/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Projectdetails from './Component/Projectdetails'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/projectpage/*" element={<Projectdetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App