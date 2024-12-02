import React from 'react'
import carrerimg from '../assests/Career.svg'
import portfolio from '../assests/Portfolio.svg'
 
function Deployed() {
  return (
   <div className="deployed">
     <section>
        <main className='project1'>
          <div className="content">
            <div className='container1'>
              <h1>CAREER GUIDENCE</h1>
              <ul>
             <li> Designed and implemented a web application to help
              students choose their career paths.</li>
             <li> Developed a platform for students to communicate with
              experienced experts for personalized guidance.</li>
             <li> Features include top filtered online courses and roadmap
              videos, helping students develop skills through
              structured learning resources.</li>
             <li> Integrated a code editor to allow students to practice
              coding while learning, promoting hands-on experience.</li>
             </ul>
              <div className='projectbutton'>
                   <button><a href="https://levelup-1f91a.web.app/">Visit Site</a></button>
                  
              </div>
            </div>
            <div className='container2'>
      
            <img src={carrerimg} alt="" />
            
            </div>
          </div>
        </main>
        <main className='project2'>
          <div className="content">
            <div className='container1'>
<img src={portfolio} alt="" />
            </div>
            <div className='container2'>
              <h1>PortFolio</h1>
              <ul>
                <li> Designed and implemented a web application to help
                show my Skills</li>
                <li> Developed a Portfolio with wnon coded way</li>
                <li> Using wix studio platform develped a full port folio</li>
                <li>Integreted with th division of skills ,project,about,contacts etc.. </li>
                <li>with the help of the wix the portfolio is hosted on internet
                  directly view by clicking visit site
                </li>
              </ul>
              <div className='projectbutton'>
                <button><a href="https://raghulraghul439.wixstudio.io/portfolio">visit</a> </button>
               </div>

            </div>
          </div>

        </main>
        <main className='project3'>

       </main>
       <main className='project4'>
 
       </main>
   </section>
   </div>
  )
}

export default Deployed