import React, { Component } from 'react'
import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Nav,
  NavItem,
  NavbarToggler,
  NavbarBrand,
  DropdownToggle
} from 'reactstrap'
import noImg from './../../img/noImg.jpg'

class Header extends Component {
  state = {
    dropdownOpen: false
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  sidebarToggle(e) {
    e.preventDefault()
    document.body.classList.toggle('sidebar-hidden')
  }

  sidebarMinimize(e) {
    e.preventDefault()
    document.body.classList.toggle('sidebar-minimized')
  }

  mobileSidebarToggle(e) {
    e.preventDefault()
    document.body.classList.toggle('sidebar-mobile-show')
  }

  asideToggle(e) {
    e.preventDefault()
    document.body.classList.toggle('aside-menu-hidden')
  }

  render() {
    return (
      <header className="app-header navbar">
        <NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>
          &#9776;
        </NavbarToggler>
        <NavbarBrand href="http://www.caspel.com" />
        <NavbarToggler className="d-md-down-none mr-auto" onClick={this.sidebarToggle}>
          &#9776;
        </NavbarToggler>
        <Nav className="ml-auto mr-3" navbar>
          <NavItem>
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle className="nav-link dropdown-toggle">
                <img src={noImg} className="img-avatar" alt="" />
                <span className="d-md-down-none">admin</span>
              </DropdownToggle>
              <DropdownMenu right className={this.state.dropdownOpen ? 'show' : ''}>
                <DropdownItem>
                  <i className="fa fa-user" /> Profile
                </DropdownItem>
                <DropdownItem>
                  <i className="fa fa-lock" /> Logout
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavItem>
        </Nav>
      </header>
    )
  }
}

export default Header
