import React, { Component } from "react";
import { baseUrl } from "../../MainComponent";
import {Link} from 'react-router-dom'

import "../../../cssFiles/propertyHostingBase.css"; //base should be imported first
import "../../../cssFiles/PersonalPropertyHostingPageTwelve.css";

class PersonalPropertyHostingPageThirteen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderPage() {
    return (
      <div id="body12">
        <div id="container12">
          <div id="center12">
            <h3 id="header12">Couldn't publish your property</h3>
            <p id="para12">We are sorry!!</p>
            <Link to={'/host/home'}><button id="butt12">Home Page</button></Link>
          </div>
        </div>
      </div>
    );
  }
  render() {
    const rPage = this.renderPage();
    return <React.Fragment>{rPage}</React.Fragment>;
  }
}

export default PersonalPropertyHostingPageThirteen;
