import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
} from 'reactstrap';

import '../scss/_top.scss';

class Top extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color='inverse' light expand='md'>
          <NavbarBrand href='#'>
            <img src='src/img/logo.png' alt='logo' />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='mx-auto' navbar>
              <NavItem>
                <NavLink href='#'>
                  <img src='src/img/stat.png' alt='logo' />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#'>Предметы</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#'>Места</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#'>Люди</NavLink>
              </NavItem>
            </Nav>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href='#'>Людмила Андропова
                  <img src='src/img/ava.png' alt='logo' />
                  <img src='src/img/arrow.png' alt='logo' />
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Top

