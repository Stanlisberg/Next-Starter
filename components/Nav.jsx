import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <div className='nav'>
        <ul>
          <li><Link className='link' href='/'>Home</Link></li>
          <li><Link className='link' href='/about'>About</Link></li>
          <li><Link className='link' href='/contact'>Contact</Link></li>
          <li><Link className='link' href='/contact/market'>Market</Link></li>
        </ul>
   </div>
  )
}

export default Nav
