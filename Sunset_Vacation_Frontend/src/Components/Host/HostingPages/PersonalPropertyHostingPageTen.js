import React, { Component } from "react";
import { baseUrl } from "../../MainComponent";
import {Link} from 'react-router-dom';


import "../../../cssFiles/propertyHostingBase.css"; //base should be imported first
import "../../../cssFiles/PersonalPropertyHostingPageTen.css";

class PersonalPropertyHostingPageTen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderPage = this.renderPage.bind(this);
    this.nextButton = this.nextButton.bind(this);
    this.changeWidth = this.changeWidth.bind(this);
  }

  componentDidMount() {
    this.changeWidth(String(this.props.pricePerNight()).length);
  }

  nextButton() {
    if (this.props.pricePerNight() > 0) {
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

  changeWidth(value) {
    console.log("val: " + value);
    var element = document.getElementById("priceValue10");
    value = (value + 2) * 20;
    element.style.width = value + "px";

    console.log("Pp: " + this.props.partialPayAllowed());
    if (this.props.partialPayAllowed() == 1) {
      document.getElementById("partialPayCheck10").checked = true;
    } else document.getElementById("partialPayCheck10").checked = false;
    if (this.props.hostPermission() == 1) {
      document.getElementById("hostPermission10").checked = true;
    } else document.getElementById("hostPermission10").checked = false;
  }

  renderPage() {
    let nextButton = this.nextButton();
    return (
      <div id="body">
        <div id="container">
          <div id="left">The fun part - set your price.</div>
          <div id="right">
            <div id="top">
              {/* <button id="saveAndExit" onClick={()=>{this.props.saveAndExit()}}>Save and Exit</button> */}
              
              <Link to="/host/home"><button id="saveAndExit">Exit</button></Link>
            </div>

            <div id="middle10">
              <div id="animation10">
                <div id="price10">
                  <button
                    className="circular10"
                    onClick={() => {
                      this.props.setPricePerNight("", false);
                      this.changeWidth(
                        String(this.props.pricePerNight()).length
                      );
                    }}
                  >
                    -
                  </button>
                  <label id="priceBox10" for="priceValue10">
                    $
                    <input
                      placeholder="00"
                      type="number"
                      id="priceValue10"
                      name="quantity"
                      min="1"
                      max="500000000"
                      value={this.props.pricePerNight()}
                      onChange={(e) => {
                        this.props.setPricePerNightExact(e.target.value);
                        this.changeWidth(e.target.value.length);
                      }}
                    />
                  </label>
                  <button
                    className="circular10"
                    onClick={() => {
                      this.props.setPricePerNight("", true);
                      this.changeWidth(
                        String(this.props.pricePerNight()).length
                      );
                    }}
                  >
                    +
                  </button>
                </div>
                <div id="perNight10">per night</div>
                <div id="partialPermission10">
                  <input
                    id="partialPayCheck10"
                    type="checkbox"
                    name="partialPay10"
                    onClick={() => {
                      this.props.changePartialPay();
                    }}
                  />
                  <label for="partialPayCheck10">Partial pay allowed</label>
                  <br />
                  <input
                    id="hostPermission10"
                    type="checkbox"
                    name="hostPermission10"
                    onClick={() => {
                      this.props.changeHostPermission();
                    }}
                  />
                  <label for="hostPermission10">Host permission required</label>
                </div>
                <div id="instruction10">Cancellation policy:</div>
                <div id="cancellationPolicy10">
                  <div id="alignText10">
                    <div id="cancellationText10">
                      Maximum number of days before arrival to cancel
                      reservation with 50% refund
                    </div>
                  </div>
                  <div id="alignRight10">
                    <button
                      className="circular10small"
                      onClick={() => {
                        this.props.setMaxRefundDays(false);
                      }}
                    >
                      -
                    </button>
                    <div id="count10">{this.props.maxRefundDays()}</div>
                    <button
                      className="circular10small"
                      onClick={() => {
                        this.props.setMaxRefundDays(true);
                      }}
                    >
                      +
                    </button>
                  </div>
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

export default PersonalPropertyHostingPageTen;
