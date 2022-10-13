import React, {Component} from 'react';
import { NavLink, Link, Redirect } from "react-router-dom";


class HostHomePageHandler extends Component{
    constructor(props){
        super(props);
        this.state={

        }
        this.renderPage = this.renderPage.bind(this);
    }

      renderPage(){
        const isLoggedIn = sessionStorage.getItem('isLoggedIn');
        console.log(sessionStorage.getItem('unpublishedHostingId'));
        if(isLoggedIn){
            return(<Redirect to="/host/homepage"/>);
        }
        else{
            return(<Redirect to="/host/login"/>);
        }
        // return(<Redirect to="/host/homepage"/>);
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

export default HostHomePageHandler