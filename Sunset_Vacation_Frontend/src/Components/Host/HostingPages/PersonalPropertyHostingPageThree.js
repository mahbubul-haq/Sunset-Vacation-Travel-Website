import React, { Component } from "react";
import { baseUrl } from "../../MainComponent";
import {Link} from 'react-router-dom';
import "../../../cssFiles/propertyHostingBase.css"; //base should be imported first
import "../../../cssFiles/PersonalPropertyHostingPageThree.css";

class PersonalPropertyHostingPageThree extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.renderPage = this.renderPage.bind(this);
  }

  componentDidMount() {
    this.changeStyle(this.props.entirePrivateOrSharedRoom());
  }

  changeStyle(type) {
    const propertyType = ["entire", "shared", "private"];
    console.log(type);
    for (var i = 0; i < 3; i++) {
      var element = document.getElementsByClassName(propertyType[i]);
      if (propertyType[i] == type) {
        element[0].style.backgroundColor = "rgb(201 212 231)";
        element[0].style.border = "1px solid black";
      } else {
        element[0].style.backgroundColor = "#FFFFFF";
        element[0].style.border = "1px solid rgb(197, 197, 197)";
      }
    }
  }

  nextButton() {
    if (this.props.entirePrivateOrSharedRoom() !== null) {
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
    let nextButton = this.nextButton();
    return (
      <div id="body">
        <div id="container">
          <div id="left">Which of these best describe your place?</div>
          <div id="right">
            <div id="top">
              {/* <button id="saveAndExit" onClick={()=>{this.props.saveAndExit()}}>Save and Exit</button> */}
              <Link to="/host/home"><button id="saveAndExit">Exit</button></Link>
            </div>

            <div id="middle3">
              <table>
                <tr
                  onClick={() => {
                    this.props.selectEntirePrivateOrSharedRoom("entire");

                    this.changeStyle("entire");
                  }}
                >
                  <td className="entire">An entire place</td>
                </tr>
                <tr
                  onClick={() => {
                    this.props.selectEntirePrivateOrSharedRoom("private");
                    this.changeStyle("private");
                  }}
                >
                  <td className="private">A private room</td>
                </tr>
                <tr
                  onClick={() => {
                    this.props.selectEntirePrivateOrSharedRoom("shared");
                    this.changeStyle("shared");
                  }}
                >
                  <td className="shared">A shared room</td>
                </tr>
              </table>
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

export default PersonalPropertyHostingPageThree;
