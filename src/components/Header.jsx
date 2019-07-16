import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

class Header extends Component {
  state = {
    isOpen: false,
  }

  toggleNav = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    const { isOpen } = this.state;

    return (
      <Navbar color="light" light expand="md">
        <Link
          to="/"
          className="navbar-brand"
        >
          react-boilerplate
        </Link>
        <NavbarToggler onClick={this.toggleNav} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link
                to="/some-page"
                className="nav-link"
              >
                404 Page
              </Link>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/thedanielforum/react-boilerplate">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Header;
