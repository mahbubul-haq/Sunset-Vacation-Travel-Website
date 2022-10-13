import React, { Component } from "react";
import { baseUrl } from "../../MainComponent";
import {Link} from 'react-router-dom';


import "../../../cssFiles/propertyHostingBase.css"; //base should be imported first
import "../../../cssFiles/PersonalPropertyHostingPageEight.css";

class PersonalPropertyHostingPageEight extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.nextButton = this.nextButton.bind(this);
    this.getValue = this.getValue.bind(this);
  }

  nextButton() {
    if (this.props.description() !== null && this.props.description() !== "") {
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

  getValue() {
    if (this.props.description() !== null && this.props.description() !== "") {
      return this.props.description();
    } else return "";
  }

  handleChange(event) {
    this.props.setDescription(event.target.value);
  }

  renderPage() {
    let nextButton = this.nextButton();
    let descValue = this.getValue();
    return (
      <div id="body">
        <div id="container">
          <div id="left">What else guests need to know about your place?</div>
          <div id="right">
            <div id="top">
              {/* <button id="saveAndExit" onClick={()=>{this.props.saveAndExit()}}>Save and Exit</button> */}
              
              <Link to="/host/home"><button id="saveAndExit">Exit</button></Link>
            </div>

            <div id="middle8">
              <div id="animation8">
                <div id="addDescription8">
                  <div id="descriptionInstruction8">
                    Write a short description about your place. Mention dos and
                    don’ts for your guests.
                  </div>
                  <textarea
                    id="descriptionBox8"
                    placeholder="Write the description here..."
                    onChange={(event) => {
                      this.handleChange(event);
                    }}
                    value={descValue}
                  ></textarea>
                </div>
              </div>
            </div>

            <div id="bottom">
              <button id="backButton" onClick={() => this.props.previous()}>
                Back
              </button>

              {nextButton}
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

export default PersonalPropertyHostingPageEight;
