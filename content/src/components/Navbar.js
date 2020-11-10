import { Link } from 'gatsby'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/news'>News</Link>
        </li>
        <li>
          <Link to='/example'>Exmaple</Link>
        </li>
      </ul>

    </nav>

)
}

export default Navbar
