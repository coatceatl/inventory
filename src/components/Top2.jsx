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
        <Container>
          <Row>
            <Col>
              <Button>
                Добавить предмет
              </Button>
              <div className='layout-buttons'>
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
              {/*
                <Navbar color="inverse" light expand="md">
                  <NavbarBrand href="#">
                    <img src='src/img/logo.png' alt='logo' />
                  </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#">Предметы</NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink href="#">Места</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Люди</NavLink>
                            </NavItem>
                        </Nav>
                        <a className='user col' href='#'>
                       <div className='user-name'>Людмила Андропова</div>
                       <img className='avatar' src='src/img/ava.png' alt='logo' />
                      <img src='src/img/arrow.png' alt='logo' />
                      </a>
                    </Collapse>
                </Navbar>
                */}
                {/*
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col>
                                <h1>Welcome to React</h1>
                                <p>
                                    <Button
                                        tag="a"
                                        color="success"
                                        size="large"
                                        href="http://reactstrap.github.io"
                                        target="_blank"
                                    >
                                        View Reactstrap Docs
                                    </Button>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                */}
            </div>
        );
    }
}

export default Top2;

