import { baseUrl } from "../MainComponent";
import React, {Component} from "react";
import {
    Navbar,
    Container,
    Nav,
    CardGroup,
    Card,
    Button,
    Row,
    Col
} from "react-bootstrap";
import { NavLink, Link, Redirect } from "react-router-dom";
import dummyImg from '../../images/beach_house.jpg';

class HomePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            hostingList: [],
            image: []
        }

        this.renderPage = this.renderPage.bind(this);
        this.Navbar = this.NavBar.bind(this);
    }

    componentDidMount(){
        let body = {"id":sessionStorage.getItem('userId')};

        fetch(baseUrl + 'hostings/gethosteditem/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then((response) => {
                if (response.ok) {
                    // console.log("hello1");
                    return response;
                }
                else {
                    // console.log("hello4");
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
                    // console.log(response.user);
                    // console.log(response.property_list);
                    // console.log(response)
                    this.setState({hostingList: response.hostingList});
                    this.setState({image: response.images});
                }
                else {
                    // console.log("hello3");
                    let err = new Error(response.error);
                    err.response = response;
                    throw err;
                }
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
    ConfirmationDetails()
    {
        return(
            <div class="card text-white bg-secondary mb-3">
                <Container>
                <div class="card-body">
                    <h5 class="card-title"><b>Today</b><br></br></h5>
                    <button type="button" class="btn btn-light"><b>Confirm important details</b><br></br>Required to publish</button>
                    
                </div>
                </Container>
            </div>
        );
    }

    showProperty(val){
        this.props.setSelectedProp(val);
        this.props.history.push('/host/hosting/hosteditem')
    }

    PropertyList()
    {
        let idx = -1;
        return(
          
            <Container>
            <center><h1>Your Properties</h1></center>
            <div className="container">
            <CardGroup>
            <Row xs={1} md={2} className="g-4">

                {this.state.hostingList.map((listItem) => {
                    idx++;
                    if(this.state.image[0]){
                        console.log(this.state.image[0][0].link)
                    }
                    // onClick={()=>{this.showProperty(listItem.hosting_id)}}
                    return(
                        <Col >
                        <Link to={`/host/hosting/hosteditem/${listItem.hosting_id}`} activeClassName="active">
                            <Card className="mx-3 my-3"  key={idx}>
                            <Card.Img variant="top" src={this.state.image[0] && this.state.image[idx][0].link}  />
                            <Card.Body>
                            <Card.Title >{listItem.title}</Card.Title>
                            <Card.Text>
                                {listItem.description}
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">{listItem.hosting_start_date}</small>
                            </Card.Footer>
                        </Card>
                        </Link>
                        </Col>
                    );
                    
                })}
                {/* <Card className="mx-3 my-3">
                    <Card.Img variant="top" src={dummyImg} />
                    <Card.Body>
                    <Card.Title>Beach House</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Available From 01-01-20 to 03-01-20</small>
                    </Card.Footer>
                </Card>
                <Card className="mx-3 my-3">
                    <Card.Img variant="top" src={dummyImg} />
                    <Card.Body>
                    <Card.Title>Beach House</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Available From 01-01-20 to 03-01-20</small>
                    </Card.Footer>
                </Card>
                <Card className="mx-3 my-3">
                    <Card.Img variant="top" src={dummyImg} />
                    <Card.Body>
                    <Card.Title>Beach House</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Available From 01-01-20 to 03-01-20</small>
                    </Card.Footer>
                </Card> */}
                </Row>
            </CardGroup>
            </div>
            </Container>
        );
    }

    renderPage(){
        const navBar = this.NavBar();
        // const confirm_details=this. ConfirmationDetails();
        const property_list=this.PropertyList();
        return(
            <div>
                {navBar}
                {/* {confirm_details} */}
                <br></br>
                <br></br>
                {property_list}
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

export default HomePage;