import React from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavElement'
const Navbar = () => {
  return (
    <>
      <PrimaryNav>
        <Hamburger />
        <Menu>
          <MenuLink to="/home" activeStyle>
            Home
          </MenuLink>
          <MenuLink to="/about" activeStyle>
            Slots
          </MenuLink>
          <MenuLink to="/products" activeStyle>
          Appointment
          </MenuLink>
          <MenuLink to="/blog" activeStyle>
          About
          </MenuLink>
        </Menu>
      </PrimaryNav>
    </>
  )
}
export default Navbar;