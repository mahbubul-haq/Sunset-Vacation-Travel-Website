import React, {Component} from 'react';
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import {  NavLink, Link } from "react-router-dom";
import './mainsection.css';
import '../../App.css';

import MainSection from './MainSection';
import Cards from './Cards';
import ExpCards from './ExpCards';
import HostingQues from './HostingQues';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
          loggedIn: false
        }
        this.NavBar = this.NavBar.bind(this);
        this.renderpage=this.renderpage.bind(this);
    }
    componentDidMount(){
      this.setState({loggedIn: this.props.loggedIn});
    }
    NavBar() {
        // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
        const isLoggedIn = sessionStorage.getItem('isLoggedIn');
        let btn = null;
        if(this.state.loggedIn){
          btn = (<Nav.Link as={Link} to={"/host/home"} style={{marginLeft: 95}}>Switch to hosting</Nav.Link>);
        }
        else{
          btn = (<Nav.Link as={Link} to={"/login"}  style={{marginLeft: 200}}>login</Nav.Link>);
        }
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <NavLink to="/home" style={{ textDecoration: 'none' }}><Navbar.Brand >Sunset Vacations</Navbar.Brand></NavLink>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" style={{marginLeft: 850}}>
                  {btn}
                  {/* <Nav.Link as={Link} to={"/host/home"}>Switch to hosting</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="http://localhost:3000/login">Log in</NavDropdown.Item>
                   
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
      }
      
    //   render(<NavDropdownExample />);
    renderpage(){
      const x=this.NavBar();
      return(
        
        <React.Fragment>
          {x}
         <MainSection/>
         <Cards/>
         <ExpCards/>
        <HostingQues/>
        </React.Fragment>
      
        
      );
    }
    render(){
        const x = this.renderpage();
        return (
          <React.Fragment>
          {x}
      </React.Fragment>
        );
          
    }
}

export default Home;