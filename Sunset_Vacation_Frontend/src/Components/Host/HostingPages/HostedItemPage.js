import React, {Component} from "react";
import {
    Navbar,
    Container,
    Nav,
    CardGroup,
    Card,
    Carousel,
    Row,
    Col,
    Badge,
    ListGroup,
    Accordion,
    Offcanvas,
    useState,

    Button
} from "react-bootstrap";
import { NavLink, Link, Redirect } from "react-router-dom";
import dummyImg from '../../../images/beach_house.jpg';
import { baseUrl } from "../../MainComponent";
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import {OpenStreetMapProvider, GeoSearchControl, SearchControl} from 'leaflet-geosearch'


class HostedItemPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: 1,
            category_name: 1,
            per_night_cost: 1,
            entire_private_or_shared: 1,
            highest_guest_no: 1,
            beds: 1,
            bathrooms: 1,
            private_bathroom_available: 1,
            need_host_confirmation: 1,
            partial_pay_allowed: 1,
            images: null,
            lat: null,
            lng: null,
            facilityNames: [],
        }

        this.renderPage = this.renderPage.bind(this);
        this.Navbar = this.NavBar.bind(this);
    }


    componentDidMount(){
        console.log(this.props.hostId);
        fetch(baseUrl + "hostings/properties/"+this.props.selectedProp+"/"  , {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => {
              if (response.ok) {
                return response;
              } else {
                let err = new Error(
                  "Error " + response.status + ": " + response.statusText
                );
                err.response = response;
                throw err;
              }
            })
            .then((response) => response.json())
            .then((response) => {
              console.log(response);
            //   if (response.success) {
                
            //   } else {
            //     let err = new Error(response.error);
            //     err.response = response;
            //     throw err;
            //   }
                this.setState({title: response.hosting.tite})
                this.setState({category_name: response.property.category_id})
                this.setState({per_night_cost: response.property.per_night_cost})
                this.setState({entire_private_or_shared: response.property.entire_private_or_shared})
                this.setState({highest_guest_no: response.property.highest_guest_no})
                this.setState({beds: response.property.beds});
                this.setState({bathrooms: response.property.bathrooms});
                this.setState({private_bathroom_available: response.property.private_bathroom_available})
                this.setState({need_host_confirmation: response.property.need_host_confirmation});
                this.setState({partial_pay_allowed: response.property.partial_pay_allowed});
                this.setState({images: response.images});
                this.setState({lat: response.location.latitude, lng: response.location.longitude})
                this.setState({facilityNames: response.facility_names})
            })
            .catch((err) => {
              alert(err.message);
            });
    }
    NavBar(){
        return (
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container>
                    <NavLink to="/home" style={{ textDecoration: 'none' }}><Navbar.Brand >Sunset Vacations</Navbar.Brand></NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto" style={{marginLeft: 820}}>
                                <Nav.Link as={Link} to={"/home"}>Switch to client</Nav.Link>
                                <Nav.Link as={Link} to={"/host/hosting"}>Create new listing</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>

                    </Container>
                </Navbar>
            {/* <Container style={{marginTop: 20, marginLeft: 1140}}>
                <Button variant="outline-secondary">Create new listing</Button>
            </Container> */}
          </div>
        );
    }

    LoadTitle(){
        return(
            <div>
                <center>
                <h1>
                    {this.state.title}
                </h1>
                </center>
            </div>
        );
    }

    LoadImages(){
        return(
            <div className="container">
                <Row xs={1} md={3} className="g-4">
                {/* {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                    <Card>
                        <Card.Img variant="top" src={dummyImg} />
                    </Card>
                    </Col>
                ))} */}
                {this.state.images !== null && this.state.images.map((img)=>{
                    return(
                        <Col>
                        <Card>
                            <Card.Img variant="top" src={img.link} />
                        </Card>
                        </Col>
                    );
                })}
                </Row>
            </div>
        );
    }

    PropertyDetails(){
        console.log(this.state.need_host_confirmation);
        let hostConf = "";
        if(this.state.need_host_confirmation) hostConf = "Required";
        else hostConf = "Not required";

        let partPay = "";
        if(this.state.partial_pay_allowed) partPay = "Required";
        else partPay = "Not required";
        return(
            <Col>
                <h3>
                    Property Details
                </h3>
                <ListGroup as="ol" numbered>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Category</div>
                    </div>
                    <h4><Badge variant="secondary" pill>
                    {this.state.category_name}
                    </Badge></h4>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Per Night Cost</div>
                    </div>
                    <h4><Badge variant="secondary" pill>
                    {this.state.per_night_cost}
                    </Badge></h4>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Entire Private Or Shared</div>
                    </div>
                    <h4><Badge variant="secondary" pill>
                    {this.state.entire_private_or_shared}
                    </Badge></h4>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Highest Guest No</div>
                    </div>
                    <h4><Badge variant="secondary" pill>
                    {this.state.highest_guest_no}
                    </Badge></h4>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">No of Beds</div>
                    </div>
                    <h4><Badge variant="secondary" pill>
                    {this.state.beds}
                    </Badge></h4>
                </ListGroup.Item>
                {/* <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">No of Beds</div>
                    </div>
                    <h4><Badge variant="secondary" pill>
                    {this.state.beds}
                    </Badge></h4>
                </ListGroup.Item> */}
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">No of Bathrooms</div>
                    </div>
                    <h4><Badge variant="secondary" pill>
                    {this.state.bathrooms}
                    </Badge></h4>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Private Bathroom Available</div>
                    </div>
                    <h4><Badge variant="secondary" pill>
                    {this.state.private_bathroom_available}
                    </Badge></h4>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Need Host Confirmation</div>
                    </div>
                    <h4><Badge variant="secondary" pill>
                    {hostConf}
                    </Badge></h4>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Partial Pay Allowed</div>
                    </div>
                    <h4><Badge variant="secondary" pill>
                    {partPay}
                    </Badge></h4>
                </ListGroup.Item>
                </ListGroup>
            </Col>
        );
    }

    Facilities(){
        return(
            <Col>
                <h3>
                    What the Place Offers
                </h3>
                <ListGroup as="ol" numbered>
                {this.state.facilityNames.map((facility_name) => {
                    return(
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                            <div className="fw-bold">{facility_name}</div>
                            </div>
                            
                        </ListGroup.Item>
                    );
                })}
                {/* <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Facility 1</div>
                    </div>
                    <h4><Badge variant="secondary" pill>
                    Facility1
                    </Badge></h4>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Facility 2</div>
                    </div>
                    <h4><Badge variant="secondary" pill>
                    Facility2
                    </Badge></h4>
                </ListGroup.Item> */}
                </ListGroup>
            </Col>
        );
    }

    WhatThePlaceOffers(){
        // const dummy1 = this.Facilities();
        const dummy1 = this.PropertyDetails();
        const dummy2 = this.Facilities();
        return(
            <div className="container">
                <Row xs={1} md={2} className="g-4">
                {dummy1}
                {dummy2}
                </Row>
            </div>
        );
    }

    Location(){
        let center = [this.state.lat, this.state.lng];
        return(
            // <div className="container">
            //     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.581632387694!2d90.38609185067685!3d23.72662979552499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8db5185c0dd%3A0xfe1ba7c1b37e1b74!2sElectrical%20and%20Computer%20Engineering%20Building%2C%20West%20Palashi%20Campus%2C%20BUET%2C%20Pilkhana%20Rd%2C%20Dhaka%201000!5e0!3m2!1sen!2sbd!4v1645112260054!5m2!1sen!2sbd" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            // </div>
            // <MapContainer center={center} zoom={13}>
            //     {/* {search && <SearchField  setLatLong={(val) => props.setLatLong(val)}/>} */}
            //     <TileLayer
            //         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            //     />
                
            // {/* <DraggableMarker /> */}
            // </MapContainer>
            
            <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={center}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                </Marker>
            </MapContainer>
            
        );
    }

    HostDetails(){
        return(
            <div className="container">
                <h3>
                    Hosted By Kawshik Kumar Paul
                </h3>
                <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>About Kawshik</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Disclaimer about staying here</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
            </div>
        );

    }

    ThinksToKnow(){
        return(
            <div className="container">
                <h3>
                    Things to Know
                </h3>
                <ListGroup as="ol" numbered>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Checkin Time</div>
                    After 2:00pm
                    </div>
                    <h4><Badge variant="secondary" pill>
                    14
                    </Badge></h4>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Checkout Time</div>
                    Before 11:00pm
                    </div>
                    <h4><Badge variant="secondary" pill>
                    14
                    </Badge></h4>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">No smoking</div>
                    Smoking is injurious to health
                    </div>
                    <h4><Badge variant="secondary" pill>
                    14
                    </Badge></h4>
                </ListGroup.Item>
                </ListGroup>
            </div>
        );
    }


    ContactHost(){
        return(
            <div className="container">
                <h3>
                    Contact Host
                </h3>
                <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Click Here For Contact Details</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>If Anything more needed</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
            </div>
        );
    }


    renderPage(){
        const navBar = this.NavBar();
        const title = this.LoadTitle();
        const images = this.LoadImages();
        // const propertyDetails = this.PropertyDetails();
        const whatThePlaceOffers = this.WhatThePlaceOffers();
        const location = this.Location();
        const hostDetails = this.HostDetails();
        const thingToKnow = this.ThinksToKnow();
        const contactHost = this.ContactHost();
        return(
            <div>
                {navBar}
                <br></br>
                {title}
                {images}
                {/* {location} */}
                {/* <br></br>
                <br></br>
                {propertyDetails} */}
                <br></br>
                <br></br>
                {whatThePlaceOffers}
                <br></br>
                <br></br>
                {/* {location} */}
                {/* {hostDetails} */}
                {/* <br></br>
                <br></br>
                {thingToKnow} */}
                {/* <br></br>
                <br></br>
                {contactHost} */}
            </div>
        );
    }
    
    render(){
        const rPage = this.renderPage();
        return(
            <React.Fragment>
                {rPage}
            </React.Fragment>
        );
    }
}

export default HostedItemPage;