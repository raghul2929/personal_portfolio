import React from 'react'
import'../Styles/Navbar2.css'
import { useState } from 'react';

function Navbar2() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="nav2">
            <nav>
                <span className="hamburger" onClick={toggleMenu}>
                    ☰
                </span>
                <ul className={isOpen ? 'active' : ''}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skill">Skill</a></li>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#contact">Contact</a></li>
                    {/* <li><button>Edit</button></li>  */}
                </ul>
            </nav>
        </div>
    );
}

export default Navbar2