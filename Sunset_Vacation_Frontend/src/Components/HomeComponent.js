import React, {Component} from 'react';
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

class Home extends Component{
    constructor(props){
        super(props);
        this.NavBar = this.NavBar.bind(this);
    }

    NavBar() {
        // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
      
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <NavLink to="/home" style={{ textDecoration: 'none' }}><Navbar.Brand >Sunset Vacations</Navbar.Brand></NavLink>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" style={{marginLeft: 850}}>
                  <Nav.Link as={Link} to={"/host/home"}>Switch to hosting</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="http://localhost:3000/login">Log in</NavDropdown.Item>
                   
                    {/* <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
      }
      
    //   render(<NavDropdownExample />);

    render(){
        const x = this.NavBar();
        return (
            <>
                {x}
            </>
        );
    }
}

export default Home;