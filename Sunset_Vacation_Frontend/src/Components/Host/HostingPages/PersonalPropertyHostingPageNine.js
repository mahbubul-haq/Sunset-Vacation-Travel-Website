import React, { Component } from "react";
import { baseUrl } from "../../MainComponent";
import {Link} from 'react-router-dom';


import "../../../cssFiles/propertyHostingBase.css"; //base should be imported first
import "../../../cssFiles/PersonalPropertyHostingPageNine.css";

class PersonalPropertyHostingPageNine extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.nextButton = this.nextButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  nextButton() {
    if (this.props.title() !== null && this.props.title() !== "") {
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
    if (this.props.title() !== null && this.props.title() !== "") {
      return this.props.title();
    } else return "";
  }

  handleChange(event) {
    this.props.setTitle(event.target.value);
  }

  renderPage() {
    let nextButton = this.nextButton();
    let titleVal = this.getValue();
    return (
      <div id="body">
        <div id="container">
          <div id="left">Give a nice title for your place.</div>
          <div id="right">
            <div id="top">
              {/* <button id="saveAndExit" onClick={()=>{this.props.saveAndExit()}}>Save and Exit</button> */}
              
              <Link to="/host/home"><button id="saveAndExit">Exit</button></Link>
            </div>

            <div id="middle9">
              <div id="animation9">
                <div id="addDescription9">
                  <div id="descriptionInstruction9">Create your title</div>
                  <textarea
                    maxLength={50}
                    id="descriptionBox9"
                    placeholder="Lovely 1-bedroom rental unit with pool."
                    onChange={(event) => {
                      this.handleChange(event);
                    }}
                    value={titleVal}
                  ></textarea>
                  <div id="charCount9">{titleVal.length}/50</div>
                </div>
              </div>
            </div>

            <div id="bottom">
              <button id="backButton" onClick={() => this.props.previous()}>
                Back
              </button>
              {/* <button id="nextButton" onClick={() => this.props.next()}>
                Next
              </button> */}
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

export default PersonalPropertyHostingPageNine;
