import React, { Component } from "react";
import { baseUrl } from "../../MainComponent";
import MyMap from "./Map/Map";
import {Link} from 'react-router-dom';


import "../../../cssFiles/propertyHostingBase.css"; //base should be imported first
import "../../../cssFiles/PersonalPropertyHostingPageFour.css";
// import DraggableMarkerExample from "./Map/Map";

class PersonalPropertyHostingPageFour extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  nextButton() {
    if (this.props.latLong !== null) {
      return (
        <button id="nextButton" onClick={() => this.props.next()}>
          Next
        </button>
      );
    } else {
      return (
        <div id="disabledButtonWrapper">
          <button id="disabledNextButton" onClick={() => this.props.next()}>
            Next
          </button>
        </div>
      );
    }
  }
  renderPage() {
    let next = this.nextButton();
    return (
      <div id="body">
        <div id="container">
          <div id="left">Where is the location of your property?</div>
          <div id="right">
            <div id="top">
              {/* <button id="saveAndExit" onClick={()=>{this.props.saveAndExit()}}>Save and Exit</button> */}
              
              <Link to="/host/home"><button id="saveAndExit">Exit</button></Link>
            </div>

            <div id="middle4">
              {/* <DraggableMarkerExample /> */}
              <MyMap
                setLatLong = {(val)=>{this.props.setLatLong(val)}}
                latLong = {this.props.latLong}
              />
            </div>

            <div id="bottom">
              <button id="backButton" onClick={() => this.props.previous()}>
                Back
              </button>
              {/* <button id="nextButton" onClick={() => this.props.next()}>
                Next
              </button> */}
              {next}
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

export default PersonalPropertyHostingPageFour;
