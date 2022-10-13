import React, { Component } from "react";
import { baseUrl } from "../../MainComponent";
import {Link} from 'react-router-dom';


import "../../../cssFiles/propertyHostingBase.css"; //base should be imported first
import "../../../cssFiles/PersonalPropertyHostingPageFive.css";

class PersonalPropertyHostingPageFive extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.renderPage = this.renderPage.bind(this);
  }

  // setCount(stateName, increament){
  //   if(stateName === "guestCount" && increament === true){
  //     this.setState({guestCount: this.state.guestCount+1});
  //   }
  //   else if(stateName === "guestCount" && increament === false && this.state.guestCount>1){
  //     this.setState({guestCount: this.state.guestCount-1});
  //   }
  //   else if(stateName === "bedCount" && increament === true){
  //     this.setState({bedCount: this.state.bedCount+1});
  //   }
  //   else if(stateName === "bedCount" && increament === false && this.state.bedCount > 1){
  //     this.setState({bedCount: this.state.bedCount-1});
  //   }

  //   else if(stateName === "bedRoomCount" && increament === true){
  //     this.setState({bedRoomCount: this.state.bedRoomCount+1});
  //   }
  //   else if(stateName === "bedRoomCount" && increament === false && this.state.bedRoomCount > 1){
  //     this.setState({bedRoomCount: this.state.bedRoomCount-1});
  //   }
  //   else if(stateName === "bathRoomCount" && increament === true){
  //     this.setState({bathRoomCount: this.state.bathRoomCount + 1});
  //   }

  //   else if(stateName === "bathRoomCount" && increament === false && this.state.bathRoomCount > 1){
  //     this.setState({bathRoomCount: this.state.bathRoomCount - 1});
  //   }
    
  // }

  renderPage() {
    return (
      <div id="body">
        <div id="container">
          <div id="left">How many guests would you like to welcome?</div>
          <div id="right">
            <div id="top">
              {/* <button id="saveAndExit" onClick={()=>{this.props.saveAndExit()}}>Save and Exit</button> */}
              
              <Link to="/host/home"><button id="saveAndExit">Exit</button></Link>
            </div>

            <div id="middle5">
              <table>
                <tbody>
                  <tr>
                    <td>
                      Guests
                      <div className="increment5">
                        <button className="circular5" onClick={()=>{this.props.setCount("guestCount", false)}}>-</button>
                        <div id="count5">{this.props.guestCount}</div>
                        <button className="circular5" onClick={()=>{this.props.setCount("guestCount", true)}}>+</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Beds
                      <div className="increment5">
                        <button className="circular5" onClick={()=>{this.props.setCount("bedCount", false)}}>-</button>
                        <div id="count5">{this.props.bedCount}</div>
                        <button className="circular5" onClick={()=>{this.props.setCount("bedCount", true)}}>+</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Bedrooms
                      <div className="increment5">
                        <button className="circular5" onClick={()=>{this.props.setCount("bedRoomCount", false)}}>-</button>
                        <div id="count5">{this.props.bedRoomCount}</div>
                        <button className="circular5" onClick={()=>{this.props.setCount("bedRoomCount", true)}}>+</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Bathrooms
                      <div className="increment5">
                        <button className="circular5" onClick={()=>{this.props.setCount("bathRoomCount", false)}}>-</button>
                        <div id="count5">{this.props.bathRoomCount}</div>
                        <button className="circular5" onClick={()=>{this.props.setCount("bathRoomCount", true)}}>+</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div id="bottom">
              <button id="backButton" onClick={() => this.props.previous()}>
                Back
              </button>
              <button id="nextButton" onClick={() => this.props.next()}>
                Next
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

export default PersonalPropertyHostingPageFive;
