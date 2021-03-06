import React, { useState } from 'react'

//Icons from font Awesome
//Relied heavily on Brian Design Tutorial to learn how to create Navbar
//https://youtu.be/CXa0f4-dWi4

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";


import { Link } from 'react-router-dom';

import { SidebarData } from './SidebarData';

import './Navbar.css';

import { IconContext } from 'react-icons';


import Navbar from 'react-bootstrap/Navbar'


function navbar(){

    const navbar= () => {
        return(
        <>
        <Navbar bg="dark" variant="dark">
            <container>
            <Navbar.Brand href="#home">Food Source Hub</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#Calendar">Calendar</Nav.Link>
                <Nav.Link href="#Join">Join</Nav.Link>
            </Nav>
            </container>
        </Navbar>
    
        </>
        );
    }

}




/*
function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
        <>
            <IconContext.Provider value ={{ color: '#fff' }}>    
                <div className="navbar">

                    <Link to="#" className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar}/>

                    </Link>

                </div>

                <nav className = {sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to ="#" className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key ={index} className={item.className}>
                                    <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                    </Link>    

                                </li>

                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}
*/
export default Navbar;

