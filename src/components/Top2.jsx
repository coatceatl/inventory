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
  Button,
  Form,
  FormGroup,
  Label,
  Input,
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
            <Col>
              <Form>
                <FormGroup>
                  <NavLink href='#'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-3"><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg>
                    <Input type="search" name="search" id="exampleSearch" placeholder="Введите название для поиска" />
                  </NavLink>
                </FormGroup>
              </Form>
            </Col>
            <Col>
              <Form>
                <FormGroup>
                  <Label for="exampleSelect">Select</Label>
                  <Input type="select" name="select" id="exampleSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Top2;

