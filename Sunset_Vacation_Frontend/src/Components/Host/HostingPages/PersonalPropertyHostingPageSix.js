// import React, { Component } from "react";
// import { baseUrl } from "../../MainComponent";

// import "../../../cssFiles/propertyHostingBase.css"; //base should be imported first
// import "../../../cssFiles/PersonalPropertyHostingPageSix.css";

// const dummyFacilites = [
//   { facility_id: 1, facility_name: "Pool", facility_type: "Amenities" },
//   { facility_id: 2, facility_name: "Hot tub", facility_type: "Amenities" },
//   { facility_id: 3, facility_name: "Smoke alarm", facility_type: "Safety item" },
//   { facility_id: 4, facility_name: "First aid kit", facility_type: "Safety item" },
//   { facility_id: 5, facility_name: "Wifi", facility_type: "Guests favourite" },
//   { facility_id: 6, facility_name: "TV", facility_type: "Guests favourite" },
//   { facility_id: 6, facility_name: "Computer", facility_type: "Guests favourite" }
// ]

// class PersonalPropertyHostingPageSix extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       facilities: null,
//     };
//   }

//   componentDidMount(){
//     fetch(baseUrl + "hostings/facilities/", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => {
//         if (response.ok) {
//           return response;
//         } else {
//           let err = new Error(
//             "Error " + response.status + ": " + response.statusText
//           );
//           err.response = response;
//           throw err;
//         }
//       })
//       .then((response) => response.json())
//       .then((response) => {
//         if (response.success) {
//           // this.setState({ facilities: response.facilities });
//           console.log(response.facilities);
//         } else {
//           let err = new Error(response.error);
//           err.response = response;
//           throw err;
//         }
//       })
//       .catch((err) => {
//         // alert(err.message);
//       });
//   }

//   renderPage() {
//     let amenities;
//     let guestFavs;
//     let safetyItems;
//     if(this.state.facilities !== null){
//       amenities = this.state.facilities.filter(facility => facility.facility_type === "Amenities")
//       .map((facility) => {
//         return(
//           <div className="facilityItem6" onClick={()=>{this.props.setFacilities(facility.facility_id)}}>{facility.facility_name}</div>
//         );
//       });

//       safetyItems = this.state.facilities.filter(facility => facility.facility_type === "Safety item")
//       .map((facility) => {
//         return(
//           <div className="facilityItem6" onClick={()=>{this.props.setFacilities(facility.facility_id)}}>{facility.facility_name}</div>
//         );
//       });

//       guestFavs = this.state.facilities.filter(facility => facility.facility_type === "Guests favourite")
//       .map((facility) => {
//         return(
//           <div className="facilityItem6" onClick={()=>{this.props.setFacilities(facility.facility_id)}}>{facility.facility_name}</div>
//         );
//       });
//     }

//     else{
//       amenities = dummyFacilites.filter(facility => facility.facility_type === "Amenities")
//       .map((facility) => {
//         return(
//           <div className="facilityItem6" onClick={()=>{this.props.setFacilities(facility.facility_id)}}>{facility.facility_name}</div>
//         );
//       })

//       safetyItems = dummyFacilites.filter(facility => facility.facility_type === "Safety item")
//       .map((facility) => {
//         return(
//           <div className="facilityItem6" onClick={()=>{this.props.setFacilities(facility.facility_id)}}>{facility.facility_name}</div>
//         );
//       });

//       guestFavs = dummyFacilites.filter(facility => facility.facility_type === "Guests favourite")
//       .map((facility) => {
//         return(
//           <div className="facilityItem6" onClick={()=>{this.props.setFacilities(facility.facility_id)}}>{facility.facility_name}</div>
//         );
//       });
//     }
//     return (
//       <div id="body">
//         <div id="container">
//           <div id="left">Do you offer any of these facilities?</div>
//           <div id="right">
//             <div id="top">
//               <button id="saveAndExit">Save and Exit</button>
//             </div>

//             <div id="middle6">
//               <div id="animation6">
//                 <header>Amenities:</header>
//                 {amenities}
//                 <header>Guest Favourites</header>
//                 {guestFavs}
//                 <header>Safety items</header>
//                 {safetyItems}
//                 {/* <div className="facilityItem6">Free parking on premises</div>
//                 <div className="facilityItem6">Pool</div>
//                 <div className="facilityItem6">Pool</div>
//                 <div className="facilityItem6">Pool</div>
//                 <div className="facilityItem6">Pool</div>
//                 <div className="facilityItem6">Pool</div>
//                 <div className="facilityItem6">Pool</div>
//                 <div className="facilityItem6">Pool</div>
//                 <div className="facilityItem6">Pool</div>
//                 <div className="facilityItem6">Pool</div>
//                 <div className="facilityItem6">Pool</div>
//                 <div className="facilityItem6">Pool</div>
//                 <div className="facilityItem6">Pool</div>
//                 <div className="facilityItem6">Pool</div>
//                 <div className="facilityItem6">Pool</div>
//                 <div className="facilityItem6">Pool</div> */}
//               </div>
//             </div>

//             <div id="bottom">
//               <button id="backButton" onClick={() => this.props.previous()}>
//                 Back
//               </button>
//               <button id="nextButton" onClick={() => this.props.next()}>
//                 Next
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );

//   }
//   render() {
//     const rPage = this.renderPage();
//     return <React.Fragment>{rPage}</React.Fragment>;
//   }
// }

// export default PersonalPropertyHostingPageSix;

import React, { Component } from "react";
import { baseUrl } from "../../MainComponent";
import {Link} from 'react-router-dom';


import "../../../cssFiles/propertyHostingBase.css"; //base should be imported first
import "../../../cssFiles/PersonalPropertyHostingPageSix.css";

const dummyFacilites = [
  { facility_id: 1, facility_name: "Pool", facility_type: "Amenities" },
  { facility_id: 2, facility_name: "Hot tub", facility_type: "Amenities" },
  {
    facility_id: 3,
    facility_name: "Smoke alarm",
    facility_type: "Safety item",
  },
  {
    facility_id: 4,
    facility_name: "First aid kit",
    facility_type: "Safety item",
  },
  { facility_id: 5, facility_name: "Wifi", facility_type: "Guests favourite" },
  { facility_id: 6, facility_name: "TV", facility_type: "Guests favourite" },
  {
    facility_id: 7,
    facility_name: "Computer",
    facility_type: "Guests favourite",
  },
];

class PersonalPropertyHostingPageSix extends Component {
  constructor(props) {
    super(props);
    this.state = {
      facilities: [],
      listOfIds: [],
    };
  }

  componentDidMount() {
    this.state.listOfIds = [];
    fetch(baseUrl + "hostings/facilities/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          let err = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          err.response = response;
          throw err;
        }
      })
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          this.setState({ facilities: response.facilities }, () => {
            this.state.facilities.map((facility) => {
              if (
                this.props.selectedFacilities().includes(facility.facility_id)
              ) {
                this.state.listOfIds.push(facility.facility_id);
              }
            });
            console.log("list of ids: ", this.state.listOfIds);
            this.changeStyle();
          });
          console.log(response.facilities);
        } else {
          let err = new Error(response.error);
          err.response = response;
          throw err;
        }
      })
      .catch((err) => {
        alert(err.message);
      });

    // console.log("inside compnenet did mountttttt");
  }

  addFacilityId(id) {
    if (this.state.listOfIds.includes(id)) {
      this.state.listOfIds = this.state.listOfIds.filter(
        (idOld) => idOld != id
      );
    } else this.state.listOfIds.push(id);
    this.changeStyle();
  }

  changeStyle() {
    console.log(this.props.selectedFacilities());
    // console.log(this.state.listOfIds);
    this.state.facilities.map((facility) => {
      var element = document.getElementById(facility.facility_id);

      if (this.state.listOfIds.includes(facility.facility_id)) {
        element.style.backgroundColor = "rgb(201 212 231)";
        element.style.border = "1px solid black";
      } else {
        element.style.backgroundColor = "#FFFFFF";
        element.style.border = "1px solid rgb(197, 197, 197)";
      }
    });
  }

  renderPage() {
    let amenities;
    let guestFavs;
    let safetyItems;
    if (this.state.facilities !== null && this.state.facilities.length > 0) {
      console.log(this.state.facilities);
      amenities = this.state.facilities
        .filter((facility) => facility.facility_type === "Amenities")
        .map((facility) => {
          return (
            <div
              onClick={() => {
                this.props.selectFacility(
                  facility.facility_id,
                  facility.facility_name
                );

                this.addFacilityId(facility.facility_id);
              }}
              id={facility.facility_id}
              className="facilityItem6"
            >
              {facility.facility_name}
            </div>
          );
        });

      safetyItems = this.state.facilities
        .filter((facility) => facility.facility_type === "Safety item")
        .map((facility) => {
          return (
            <div
              onClick={() => {
                this.props.selectFacility(
                  facility.facility_id,
                  facility.facility_name
                );

                this.addFacilityId(facility.facility_id);
              }}
              id={facility.facility_id}
              className="facilityItem6"
            >
              {facility.facility_name}
            </div>
          );
        });

      guestFavs = this.state.facilities
        .filter((facility) => facility.facility_type === "Guests favourite")
        .map((facility) => {
          return (
            <div
              onClick={() => {
                this.props.selectFacility(
                  facility.facility_id,
                  facility.facility_name
                );

                this.addFacilityId(facility.facility_id);
              }}
              id={facility.facility_id}
              className="facilityItem6"
            >
              {facility.facility_name}
            </div>
          );
        });
    } else {
      amenities = dummyFacilites
        .filter((facility) => facility.facility_type === "Amenities")
        .map((facility) => {
          return (
            <div
              onClick={() => {
                this.props.selectFacility(
                  facility.facility_id,
                  facility.facility_name
                );

                this.addFacilityId(facility.facility_id);
              }}
              id={facility.facility_id}
              className="facilityItem6"
            >
              {facility.facility_name}
            </div>
          );
        });

      safetyItems = dummyFacilites
        .filter((facility) => facility.facility_type === "Safety item")
        .map((facility) => {
          return (
            <div
              onClick={() => {
                this.props.selectFacility(
                  facility.facility_id,
                  facility.facility_name
                );

                this.addFacilityId(facility.facility_id);
              }}
              id={facility.facility_id}
              className="facilityItem6"
            >
              {facility.facility_name}
            </div>
          );
        });

      guestFavs = dummyFacilites
        .filter((facility) => facility.facility_type === "Guests favourite")
        .map((facility) => {
          return (
            <div
              onClick={() => {
                this.props.selectFacility(
                  facility.facility_id,
                  facility.facility_name
                );

                this.addFacilityId(facility.facility_id);
              }}
              id={facility.facility_id}
              className="facilityItem6"
            >
              {facility.facility_name}
            </div>
          );
        });
    }
    return (
      <div id="body">
        <div id="container">
          <div id="left">Do you offer any of these facilities?</div>
          <div id="right">
            <div id="top">
              {/* <button id="saveAndExit" onClick={()=>{this.props.saveAndExit()}}>Save and Exit</button> */}
              
              <Link to="/host/home"><button id="saveAndExit">Exit</button></Link>
            </div>

            <div id="middle6">
              <div id="animation6">
                <h4 id="facilityHeader6">
                  Do you have any of these facilities?
                </h4>
                {amenities}
                <h4 id="facilityHeader6">What about these guest favorites?</h4>
                {guestFavs}
                <h4 id="facilityHeader6">Have any of these safeyty items?</h4>
                {safetyItems}
              </div>
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

export default PersonalPropertyHostingPageSix;
