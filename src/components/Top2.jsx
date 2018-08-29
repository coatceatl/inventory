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
    Jumbotron,
    Button
} from 'reactstrap';
//import Button from 'Button.jsx';

class Top2 extends Component {
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
        <Container fluid>
          <Row>
            <Col className='d-flex'>
              <Button>
                Добавить предмет
              </Button>
              <div className='layout-buttons d-flex'>
                <NavLink href='#' className='active icon icon-table'>
                  <img src='src/img/icon.png' alt='logo' />
                </NavLink>
                <NavLink href='#' className='active icon icon-list'>
                  <img src='src/img/icon2.png' alt='logo' />
                </NavLink>
                <NavLink href='#' className='active icon icon'>
                  <img src='src/img/icon3.png' alt='logo' />
                </NavLink>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Top2;

