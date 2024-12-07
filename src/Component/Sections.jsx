import React from 'react'
import '../Styles/Sections.css'
import image from '../assests/profile.jpg'
import resume from '../assests/Raghul_resume.pdf'
import Contactforms from './Contactforms'
// import Cards from './Cards'+
import img from '../assests/book.png'
import skillimg1 from '../assests/skill1.png'
import skillimg2 from '../assests/skill2.png'
import skillimg3 from '../assests/skill3.png'
import skillimg4 from '../assests/skill4.png'
import skillimg5 from '../assests/skill5.png'
import skillimg6 from '../assests/skill6.png'
import skillimg7 from '../assests/skill7.png'
import skillimg8 from '../assests/skill8.png'
import info1 from '../assests/git.png'
import info2 from '../assests/linkedinlogo.png'
import info3 from '../assests/instalogo.png'
import info4 from '../assests/mail.png'
import info5 from '../assests/phone.png'
import project1 from '../assests/project1.png'
import project2 from '../assests/project2.png'
import project3 from '../assests/project.png'
// import Project from './Project'
import { Link } from 'react-router-dom'

function Sections() {
  document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".sections > div");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        section.classList.add("in-view");
      }
    });
  });

  return (
    <div className="sections">
      <main>
        <section id='home'>
          <div className="home1">
            <div className='data'>
              <h3>Hello</h3>
              <span>I'M</span> <span className='name'>RAGHUL k</span><br />
              <span className='developer'>Mern Stack Developer..</span>
            </div>
            <div className="cv">
              <a href={resume} download={"myresume.pdf"}><button><span>DownloadCV</span></button></a>
              <a href="#contact"><button>contact</button></a>

            </div>

          </div>
          <div className="home2">
            <img src={image} alt="" />
          </div>
        </section>
        <section id='about'>
          <div className="about">
            <div className="aboutheading">
              <h1>ABOUT</h1>
            </div>
            <div className="aboutpara">
              <p>
                Passionate and motivated web developer with hands-on experience in
                building full-stack applications using the (MongoDB, React.js,Express.js,Node.js) stack .Proficient in front-end with a
                strong focus on creating responsive, user-friendly web applications Both in coded and Non coded Way(wix Studio)
              </p>
            </div>
            <div className="abouteducation">
              <div className="educationheading">
                <h2>EDUCATION</h2>
              </div>
              <div className="educationdetails">
                <div className="eduationaldetail1">
                  <img src={img} alt="" />
                  <div className="detail">
                    <p><h3>SSLC</h3>SRI RAJA VINAYAKA MATRICULATION SCHOOL,
                      TAMILNADU</p>
                    <h3>STATE BOARD</h3>
                    <h4>84%</h4>
                  </div>
                  <div className="year">
                    <p>2017-2018</p>
                  </div>

                </div>
                <div className="eduationaldetail2">
                  <img src={img} alt="" />
                  <div className="detail">
                    <p><h3>HSE</h3>SUN STAR HIGHER SECONDARY SCHOOL,
                      TAMILNADU</p>
                    <h3>STATE BOARD(MATHS-CS)</h3>
                    <h4>67%</h4>
                  </div>
                  <div className="year">
                    <p>2019-2020</p>
                  </div>
                </div>
                <div className="eduationaldetail3">
                  <img src={img} alt="" />
                  <div className="detail">
                    <p><h3>DEGREE</h3>K S R INSITUTE FOR ENGINEERING AND TECHNOLOGY,TAMILNADU</p>
                    <h3>B.E CSE</h3>
                    <h4>78%</h4>
                  </div>
                  <div className="year">
                    <p>2020-2024</p>
                  </div>

                </div>
              </div>
            </div>

          </div>


        </section>
        <section id='Heading'>
          <div className="skillsheading">
            <h1>SKILLS</h1>
          </div>
        </section>
        <section id='skill'>



          <div className="skills">

            <div className="skillimg1">
              <div className="skillimg">
                <img src={skillimg1} alt="" />

              </div>
              <div className="skillimg">
                <img src={skillimg2} alt="" />

              </div>
              <div className="skillimg">
                <img src={skillimg3} alt="" />

              </div>
              <div className="skillimg">
                <img src={skillimg4} alt="" />

              </div>
            </div>
            <div className="skillimg2">
              <div className="skillimg">
                <img src={skillimg5} alt="" />

              </div>
              <div className="skillimg">
                <img src={skillimg6} alt="" />
              </div>
              <div className="skillimg">
                <img src={skillimg7} alt="" />
              </div>
              <div className="skillimg">
                <img src={skillimg8} alt="" />
              </div>
            </div>
          </div>

        </section>
        <section id='project'>
          <div className="project">
            <div className="projectheading">
              <h1>PROJECTS</h1>
            </div>
            <div class="card-container">
              <div class="card">
                <center><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpWcufFPEneL4T4pB-q3HhwNj5oOlJTPM64qQTKQuW3qY7iJxxJUVzMxe6R6mxkkT9RwM&usqp=CAU" alt="Card  1" /></center>
                <div class="card-body">
                  <h3 class="card-title">Deployed Projects</h3>
                  <p class="card-text">Designed and deployed a web application  through the internet</p>
                  <button class="card-button"><Link to='/projectpage'>learn more</Link></button>
                </div>
              </div>
              <div class="card">
                <img src="data:image/png;base64,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" alt="Card 2" />
                <div class="card-body">
                  <h3 class="card-title">Cloned Webpages</h3>
                  <p class="card-text">designed the exact copy of the original web pages
                  </p>
                  <button class="card-button"><Link to='/projectpage'>Visit more</Link></button>
                </div>
              </div>
              <div class="card">
                <img src="data:image/png;base64,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" alt="Card 3" />
                <div class="card-body">
                  <h3 class="card-title">Upcoming Projects</h3>
                  <p class="card-text">Portfolio using non coded (wixStudio)</p>
                  <button class="card-button" ><Link to='/projectpage'>learn more</Link></button>
                </div>
              </div>
            </div>


          </div>
        </section>
        <section id='contact'>
          <div className='contact'>
            <div className="contactheading">
              <h1>CONTACT</h1>
            </div>
            <div className="contactdetails">
              <div className="contactform">
                <Contactforms></Contactforms>
              </div>
              <div className="contactinfo">
                <div className="info1">
                  <div className="infodata1">
                    <img src={info1} alt="" />
                    <button> <a href="https://github.com/raghul2929 " target="_blank" rel="noopener noreferrer">Github</a></button>
                  </div>
                  <div className="infodata2">
                    <img src={info2} alt="" />
                    <button> <a href="https://www.linkedin.com/in/raghul-k-3a5344221 " target="_blank" rel="noopener noreferrer">linkedin</a></button>

                  </div>
                </div>
                <div className="info2">
                  <div className="infodata1">
                    <img src={info3} alt="" />
                    <button> <a href="https://www.instagram.com/raghul_r29?igsh=aW5oYnF3Y2RycTho" target="_blank" rel="noopener noreferrer">Instagram</a></button>
                  </div>
                  <div className="infodata2">
                    <img src={info4} alt="" />
                    <button> <a href="raghulraghul439@gmail.com" target="_blank" rel="noopener noreferrer">Email</a></button>
                  </div>
                </div>

                <div className="info3">
                  <div className="infodata1">
                    <img src={info5} alt="" />
                    <button> <a href="#home" target="_blank" rel="noopener noreferrer">6382636364</a></button>

                  </div>
                  <div className="infodata2">
                    {/* <img src={} alt=""/> */}
                  </div>
                </div>


              </div>

            </div>
          </div>
        </section>
      </main>

    </div>
  )
}

export default Sections