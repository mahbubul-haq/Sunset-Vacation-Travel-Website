import React, { Component } from "react";
import { baseUrl } from "../../MainComponent";

import "../../../cssFiles/propertyHostingBase.css"; //base should be imported first
import "../../../cssFiles/PersonalPropertyHostingPageTwelve.css";
import { Link } from "react-router-dom";

class PersonalPropertyHostingPageTwelve extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderPage() {
    return (
      <div id="body12">
        <div id="container12">
          <div id="center12">
            <h3 id="header12">Your hosting is complete!</h3>
            <p id="para12">Check your listing in your home page.</p>
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

export default PersonalPropertyHostingPageTwelve;
