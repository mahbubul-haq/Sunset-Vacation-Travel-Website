import React, { Component } from "react";
import { baseUrl } from "../../MainComponent";
import {Link} from 'react-router-dom';


import CheckBeforePublishingCard from "./CheckBeforePublishingCard";
import FarmHouse from "../../Home/homePageImages/farmhouse.jpg";

import "../../../cssFiles/propertyHostingBase.css"; //base should be imported first
import "../../../cssFiles/PersonalPropertyHostingPageEleven.css";

class PersonalPropertyHostingPageTen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("fff: " + this.props.selectedFacilityNames);
  }

  renderPage() {
    return (
      <div id="body">
        <div id="container">
          <div id="left">Check your listing before publishing!</div>
          <div id="right">
            <div id="top">
              {/* <button id="saveAndExit" onClick={this.props.saveAndExit()}>Save and Exit</button> */}
              
              <Link to="/host/home"><button id="saveAndExit">Exit</button></Link>
            </div>

            <div id="middle11">
              <div id="animation11">
                <div classname="card11">
                  <CheckBeforePublishingCard
                    img={this.props.selectedImages[0].src}
                    numOfGuests={this.props.guestCount}
                    beds={this.props.bedCount}
                    bedrooms={this.props.bedRoomCount}
                    baths={this.props.bathRoomCount}
                    label={this.props.title}
                    owner={sessionStorage.getItem('firstname') + ' ' + sessionStorage.getItem('lastname')}
                    description={this.props.description}
                    facilities={this.props.selectedFacilityNames}
                    location={
                      this.props.latLong.label
                    }
                  />
                </div>
              </div>
            </div>

            <div id="bottom">
              <button id="backButton" onClick={() => this.props.previous()}>
                Back
              </button>
              <button
                id="nextButton"
                onClick={() => {
                  this.props.publishProperty();
                }}
              >
                Publish your listing
              </button>
            </div>
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

export default PersonalPropertyHostingPageTen;
