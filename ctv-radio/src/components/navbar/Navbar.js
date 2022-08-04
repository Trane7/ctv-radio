import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import '../navbar/Navbar.css'





const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => setNav(!nav)


  return (
      <div name='top' className='navbar'>
          <div className="container">
              <div className="logo">
                  <h1>CTV <span>Radio</span></h1>
              </div>

              <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/catalog'>Catalog</Link> </li>
                  <li><Link to='#footer'>Contact</Link></li>
                  <a href='https://beacons.ai/bestllc?fbclid=IwAR14xZXSDflVzS6z-65QLScEMg_-z2Zi8FS-XoOg5g4ySY3sJrCj7542Pxo'>
                  <button>Sign Up</button>  
                  </a>
              </ul>
              <div className="hamburger" onClick={handleNav}>
                  {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
              </div>
          </div>
      </div>
  )
}

export default Navbar
