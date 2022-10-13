import React, {Component, useState} from "react"
import {Navbar, Container, NavLink, Nav, Form, Button, Row, Col} from "react-bootstrap";
import {Link, Redirect, withRouter} from "react-router-dom";
import { baseUrl } from "../MainComponent";
import loginIcon from '../../images/user.png';
import uiImg from '../../images/login.svg';
import '../login.css'


class HostLoginPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.renderPage = this.renderPage.bind(this);
        this.renderNavBar = this.renderNavBar.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.setEmail = this.setEmail.bind(this);
    }


    handleSubmit(){
        let creds = { 'email': this.state.email, 'password': this.state.password };
        let responseOk = true;;
        fetch(baseUrl + 'user/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(creds)
        })
            .then((response) => {
                if (response.ok) {
                    return response;
                }
                else {
                    responseOk=false;
                    console.log(response);
                    let err = new Error('Error ' + response.status + ': ' + response.statusText);
                    err.response = response;
                    throw err;
                }
            })
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                if (response.success) {
                    sessionStorage.setItem('isLoggedIn', true);
                    sessionStorage.setItem('userId', response.user);
                    sessionStorage.setItem('isHost', response.host);
                    sessionStorage.setItem('unpublishedHosting', response.unpublishedHosting);
                }
                else {
                    responseOk=false;
                    let err = new Error(response.error);
                    err.response = response;
                    throw err;
                }
            })
            .catch((err) => {
                alert(err.message);
            });

        if(responseOk){
            this.props.history.push('/host/homepage');
        }
        
    }

    setEmail(val){
        this.setState({email: val});
    }
    setPassword(pass){
        this.setState({password: pass})
    }
    
    renderNavBar(){
        return(
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                        <Container>
                        <NavLink to="/home" style={{ textDecoration: 'none' }}><Navbar.Brand >Sunset Vacations</Navbar.Brand></NavLink>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto" style={{marginLeft: 820}}>
                                    <Nav.Link as={Link} to={"/home"}>Switch to client</Nav.Link>
                                    <Nav.Link as={Link} to={"/home"}>Create new listing</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
            </div>
        );
    }

    renderPage(){
        const navbar = this.renderNavBar();
        return(
            <div>
                {navbar}
                <Container className="mt-5">
                    <Row>
                    <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
                        <img className="icon-img" src={loginIcon} alt="icon" />
                    <Form onSubmit={this.handleSubmit} >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            
                            <Form.Control type="email" placeholder="Enter email" onBlur={(event) => this.setEmail(event.target.value)}/>

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            
                            <Form.Control type="password" placeholder="Password" onChange={(event) => this.setPassword(event.target.value)} />
                        </Form.Group>
   
                        <Button variant="primary btn-block" type="submit" >
                            Login
                        </Button>
                        <div className="text-left mt-3">
                            <a href="#"><small className="reset">Forgot Password</small></a>
                        </div>
                    </Form>
                    </Col>
                    
                    <Col lg={8} md={6} sm={12}>
                        <img className="w-100" src={uiImg} alt="" />
                    </Col>
                    
                    </Row>
                    
                    </Container>
              </div>
        );
    }


    render(){
        const v = this.renderPage();
        return(
            <React.Fragment>
                {v}
            </React.Fragment>
        );
    }
}

export default withRouter(HostLoginPage);