import React, {Component} from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';


import Home from './Home/HomeComponent';
import HostHomePageHandler from './Host/HomePageHandler';
import LoginPage from './LoginComponent'
import PersonalPropertyHostingPageOne from './Host/HostingPages/PersonalPropertHostingPageOne';
import PersonalPropertyHostingPageTwo from './Host/HostingPages/PersonalPropertyHostingPageTwo';
import PersonalPropertyHostingPageThree from './Host/HostingPages/PersonalPropertyHostingPageThree';
import PersonalPropertyHostingPageFour from './Host/HostingPages/PersonalPropertyHostingPageFour';
import PersonalPropertyHostingPageFive from './Host/HostingPages/PersonalPropertyHostingPageFive';
import PersonalPropertyHostingPageSix from './Host/HostingPages/PersonalPropertyHostingPageSix';
import PersonalPropertyHostingPageSeven from './Host/HostingPages/PersonalPropertyHostingPageSeven';
import PersonalPropertyHostingPageEight from './Host/HostingPages/PersonalPropertyHostingPageEight';
import PersonalPropertyHostingPageNine from './Host/HostingPages/PersonalPropertyHostingPageNine';
import PersonalPropertyHostingPageTen from './Host/HostingPages/PersonalPropertyHostingPageTen';
import PersonalPropertyHostingPageEleven from './Host/HostingPages/PersonalPropertyHostingPageEleven';
import PersonalPropertyHostingPageTwelve from './Host/HostingPages/PersonalPropertyHostingPageTwelve';
import HostingPages from './Host/HostingPage';
import HostLogin from './Host/HostLogin';
import HomePage from './Host/HomePage';
import HostedItemPage from './Host/HostingPages/HostedItemPage';

export const baseUrl = 'http://127.0.0.1:8000/'


const dummyFunc = ({match}) => {
    console.log(match.params.hostId);
    return <HostedItemPage selectedProp={match.params.hostId}/>
}

class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            loggedIn: false,
            selectProp: -1,
        }
        
        this.setLoggedIn = this.setLoggedIn.bind(this);
    }

    setSelectedProp(val){
        this.setState({selectProp: val})
    }
    setLoggedIn(val){
        this.setState({loggedIn: val});
    }

    HostedItem({match}){
        return <HostedItemPage  selectedProp={match.params.hostid}/>
    }
    render(){
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/home">
                        <Home loggedIn = {this.state.loggedIn}  setLoggedIn={(val) => {this.setLoggedIn(val)}}/>
                    </Route>
                    <Route path="/host/home">
                        <HostHomePageHandler />
                    </Route>
                    <Route path="/host/homepage" setSelectedProp = {(val) => {this.setSelectedProp(val)}} selectedProp={this.state.selectProp}>
                        <HomePage />
                    </Route>
                    <Route path="/login">
                        <LoginPage loggedIn = {this.state.loggedIn}  setLoggedIn={(val) => {this.setLoggedIn(val)}}/>
                    </Route>
                    <Route path="/host/login">
                        <HostLogin />
                    </Route>
                    {/* <Route exact path="/host/personalproperthostpage/1">
                        <PersonalPropertyHostingPageOne />
                    </Route>
                    <Route exact path="/host/personalproperthostpage/2">
                        <PersonalPropertyHostingPageTwo />
                    </Route>
                    <Route exact path="/host/personalproperthostpage/3">
                        <PersonalPropertyHostingPageThree />
                    </Route>
                    <Route exact path="/host/personalproperthostpage/4">
                        <PersonalPropertyHostingPageFour />
                    </Route>
                    <Route exact path="/host/personalproperthostpage/5">
                        <PersonalPropertyHostingPageFive />
                    </Route>
                    <Route exact path="/host/personalproperthostpage/6">
                        <PersonalPropertyHostingPageSix />
                    </Route>
                    <Route exact path="/host/personalproperthostpage/7">
                        <PersonalPropertyHostingPageSeven />
                    </Route>
                    <Route exact path="/host/personalproperthostpage/8">
                        <PersonalPropertyHostingPageEight />
                    </Route>
                    <Route exact path="/host/personalproperthostpage/9">
                        <PersonalPropertyHostingPageNine />
                    </Route>
                    <Route exact path="/host/personalproperthostpage/10">
                        <PersonalPropertyHostingPageTen />
                    </Route>
                    <Route exact path="/host/personalproperthostpage/11">
                        <PersonalPropertyHostingPageEleven />
                    </Route>
                    <Route exact path="/host/personalproperthostpage/12">
                        <PersonalPropertyHostingPageTwelve />
                    </Route> */}
                    <Route exact path="/host/hosting">
                        <HostingPages />
                    </Route>
                    <Route exact path="/host/hosting/hosteditem/:hostId" component={dummyFunc}/>
                    <Redirect to="/home" />
                </Switch>
            </React.Fragment>
        );
    }
}

export default withRouter(Main);