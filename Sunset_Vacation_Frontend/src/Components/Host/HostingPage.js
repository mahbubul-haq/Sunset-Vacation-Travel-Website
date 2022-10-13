// import React, { Component } from "react";

// import PersonalPropertyHostingPageOne from "./HostingPages/PersonalPropertHostingPageOne";
// import PersonalPropertyHostingPageTwo from "./HostingPages/PersonalPropertyHostingPageTwo";
// import PersonalPropertyHostingPageThree from "./HostingPages/PersonalPropertyHostingPageThree";
// import PersonalPropertyHostingPageFour from "./HostingPages/PersonalPropertyHostingPageFour";
// import PersonalPropertyHostingPageFive from "./HostingPages/PersonalPropertyHostingPageFive";
// import PersonalPropertyHostingPageSix from "./HostingPages/PersonalPropertyHostingPageSix";
// import PersonalPropertyHostingPageSeven from "./HostingPages/PersonalPropertyHostingPageSeven";
// import PersonalPropertyHostingPageEight from "./HostingPages/PersonalPropertyHostingPageEight";
// import PersonalPropertyHostingPageNine from "./HostingPages/PersonalPropertyHostingPageNine";
// import PersonalPropertyHostingPageTen from "./HostingPages/PersonalPropertyHostingPageTen";
// import PersonalPropertyHostingPageEleven from "./HostingPages/PersonalPropertyHostingPageEleven";

// class HostingPages extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       pageNo: 1,
//       selectedCategory: null,
//       selectedSubCategory: null,
//       entirePrivateOrSharedRoom: null,
//       guestCount: 4,
//       bedCount: 4,
//       bedRoomCount: 4,
//       bathRoomCount: 4,
//       description: null,
//       title: null,
//       pricePerNight: 20,
//       maxRefundDays: 4,
//       facilities: [],
//     };

//     this.nextPage = this.nextPage.bind(this);
//     this.renderPageOne = this.renderPageOne.bind(this);
//     this.renderPageTwo = this.renderPageTwo.bind(this);
//     this.renderPageThree = this.renderPageThree.bind(this);
//     this.renderPageFour = this.renderPageFour.bind(this);
//     this.selectCategory = this.selectCategory.bind(this);
//     this.selectSubCategory = this.selectSubCategory.bind(this);
//     this.selectEntirePrivateOrSharedRoom = this.selectEntirePrivateOrSharedRoom.bind(this);
//     this.setCount = this.setCount.bind(this);
//     this.setTitle = this.setTitle.bind(this);
//     this.setPricePerNight = this.setPricePerNight.bind(this);
//     this.setMaxRefundDays = this.setMaxRefundDays.bind(this);
//     this.setFacilities = this.setFacilities.bind(this);
//   }

//   selectSubCategory(val) {
//     this.setState({ selectedSubCategory: val });
//     console.log(this.state.selectedSubCategory);
//   }
//   selectCategory(val) {
//     this.setState({ selectedCategory: val });
//     console.log(this.state.selectedCategory);
//   }

//   selectEntirePrivateOrSharedRoom(val) {
//     this.setState({ entirePrivateOrSharedRoom: val });
//     console.log(this.state.entirePrivateOrSharedRoom);
//   }

//   nextPage() {
//     console.log(this.state);
//     const next = this.state.pageNo + 1;
//     this.setState({ pageNo: next });
//   }
//   previousPage() {
//     // console.log(this.state);
//     const prev = this.state.pageNo - 1;
//     this.setState({ pageNo: prev });
//   }

//   setFacilities(facilityId){
//     let facilityAlreadyInList = false;
//     let facilityList = this.state.facilities;
//     for(let i=0; i< this.state.facilities.length; i++){
//       if(facilityList[i] === facilityId){
//         facilityAlreadyInList = true;
//         break;
//       }
//     }

//     if(!facilityAlreadyInList){
//       facilityList.push(facilityId);
//       this.setState({facilities: facilityList});
//     }

//     else{
//       let listAfterfacilityRemoved = facilityList.filter(id => id !== facilityId);
//       this.setState({facilities: listAfterfacilityRemoved});
//     }
//     console.log(this.state.facilities);
//   }

//   setCount(stateName, increament) {
//     if (stateName === "guestCount" && increament === true) {
//       this.setState({ guestCount: this.state.guestCount + 1 });
//     } else if (
//       stateName === "guestCount" &&
//       increament === false &&
//       this.state.guestCount > 1
//     ) {
//       this.setState({ guestCount: this.state.guestCount - 1 });
//     } else if (stateName === "bedCount" && increament === true) {
//       this.setState({ bedCount: this.state.bedCount + 1 });
//     } else if (
//       stateName === "bedCount" &&
//       increament === false &&
//       this.state.bedCount > 1
//     ) {
//       this.setState({ bedCount: this.state.bedCount - 1 });
//     } else if (stateName === "bedRoomCount" && increament === true) {
//       this.setState({ bedRoomCount: this.state.bedRoomCount + 1 });
//     } else if (
//       stateName === "bedRoomCount" &&
//       increament === false &&
//       this.state.bedRoomCount > 1
//     ) {
//       this.setState({ bedRoomCount: this.state.bedRoomCount - 1 });
//     } else if (stateName === "bathRoomCount" && increament === true) {
//       this.setState({ bathRoomCount: this.state.bathRoomCount + 1 });
//     } else if (
//       stateName === "bathRoomCount" &&
//       increament === false &&
//       this.state.bathRoomCount > 1
//     ) {
//       this.setState({ bathRoomCount: this.state.bathRoomCount - 1 });
//     }
//   }

//   setDescription(val) {
//     this.setState({ description: val });
//     console.log(this.state.description);
//   }

//   setTitle(val) {
//     this.setState({ title: val });
//     console.log(this.state.title);
//   }

//   setPricePerNight(val, increament) {
//     console.log(this.state.pricePerNight);
//     if (increament === true) {
//       this.setState({
//         pricePerNight: parseFloat(this.state.pricePerNight) + 1,
//       });
//     } else if (increament === false && this.state.pricePerNight > 1) {
//       this.setState({ pricePerNight: this.state.pricePerNight - 1 });
//     }
//   }
//   setPricePerNightExact(val) {
//     if (val >= 0) {
//       this.setState({ pricePerNight: val });
//     } else this.setState({ pricePerNight: 0 });
//   }

//   setMaxRefundDays(increament) {
//     // this.setState({maxRefundDays: val});
//     if (increament === true) {
//       this.setState({ maxRefundDays: this.state.maxRefundDays + 1 });
//     } else if (increament === false && this.state.maxRefundDays > 1) {
//       this.setState({ maxRefundDays: this.state.maxRefundDays - 1 });
//     }
//   }
//   renderPageOne() {
//     return (
//       <PersonalPropertyHostingPageOne
//         next={() => {
//           this.nextPage();
//         }}
//         selectCategory={(val) => {
//           this.selectCategory(val);
//         }}
//         selectedCategory={() => this.state.selectedCategory}
//       />
//     );
//   }
//   renderPageTwo() {
//     return (
//       <div>
//         <PersonalPropertyHostingPageTwo
//           previous={() => {
//             this.previousPage();
//           }}
//           next={() => {
//             this.nextPage();
//           }}
//           selectedCategory={() => this.state.selectedCategory}
//           selectedSubCategory={() => this.state.selectedSubCategory}
//           selectSubCategory={(val) => {
//             this.selectSubCategory(val);
//           }}
//         />
//       </div>
//     );
//   }

//   renderPageThree() {
//     return (
//       <PersonalPropertyHostingPageThree
//         previous={() => {
//           this.previousPage();
//         }}
//         next={() => {
//           this.nextPage();
//         }}
//         entirePrivateOrSharedRoom={() => this.state.entirePrivateOrSharedRoom}
//         selectEntirePrivateOrSharedRoom={(val) =>
//           this.selectEntirePrivateOrSharedRoom(val)
//         }
//       />
//     );
//   }

//   renderPageFour() {
//     return (
//       <PersonalPropertyHostingPageFour
//         previous={() => {
//           this.previousPage();
//         }}
//         next={() => {
//           this.nextPage();
//         }}
//       />
//     );
//   }

//   renderPageFive() {
//     return (
//       <PersonalPropertyHostingPageFive
//         previous={() => {
//           this.previousPage();
//         }}
//         next={() => {
//           this.nextPage();
//         }}
//         guestCount={this.state.guestCount}
//         bedCount={this.state.bedCount}
//         bedRoomCount={this.state.bedRoomCount}
//         bathRoomCount={this.state.bathRoomCount}
//         setCount={(stateName, increament) => {
//           this.setCount(stateName, increament);
//         }}
//       />
//     );
//   }
//   renderPageSix() {
//     return (
//       <PersonalPropertyHostingPageSix
//         previous={() => {
//           this.previousPage();
//         }}
//         next={() => {
//           this.nextPage();
//         }}
//         setFacilities = {(id) => {this.setFacilities(id)}}
//       />
//     );
//   }
//   renderPageSeven() {
//     return (
//       <PersonalPropertyHostingPageSeven
//         previous={() => {
//           this.previousPage();
//         }}
//         next={() => {
//           this.nextPage();
//         }}
//       />
//     );
//   }
//   renderPageEight() {
//     return (
//       <PersonalPropertyHostingPageEight
//         previous={() => {
//           this.previousPage();
//         }}
//         next={() => {
//           this.nextPage();
//         }}
//         description={() => this.state.description}
//         setDescription={(val) => {
//           this.setDescription(val);
//         }}
//       />
//     );
//   }
//   renderPageNine() {
//     return (
//       <PersonalPropertyHostingPageNine
//         previous={() => {
//           this.previousPage();
//         }}
//         next={() => {
//           this.nextPage();
//         }}
//         title={() => this.state.title}
//         setTitle={(val) => {
//           this.setTitle(val);
//         }}
//       />
//     );
//   }
//   renderPageTen() {
//     return (
//       <PersonalPropertyHostingPageTen
//         previous={() => {
//           this.previousPage();
//         }}
//         next={() => {
//           this.nextPage();
//         }}
//         pricePerNight={() => this.state.pricePerNight}
//         setPricePerNight={(val, increament) => {
//           this.setPricePerNight(val, increament);
//         }}
//         setPricePerNightExact={(val) => {
//           this.setPricePerNightExact(val);
//         }}
//         maxRefundDays={() => this.state.maxRefundDays}
//         setMaxRefundDays={(increament) => this.setMaxRefundDays(increament)}
//       />
//     );
//   }
//   renderPageEleven() {
//     return (
//       <PersonalPropertyHostingPageEleven
//         previous={() => {
//           this.previousPage();
//         }}
//         next={() => {
//           this.nextPage();
//         }}
//         selectCategory={this.state.selectedCategory}
//         selectedSubCategory={this.state.selectedSubCategory}
//         entirePrivateOrSharedRoom={this.state.entirePrivateOrSharedRoom}
//         guestCount={this.state.guestCount}
//         bedCount={this.state.bedCount}
//         bedRoomCount={this.state.bedRoomCount}
//         bathRoomCount={this.state.bathRoomCount}
//         description={this.state.description}
//         title={this.state.title}
//         pricePerNight={this.state.pricePerNight}
//         maxRefundDays={this.state.maxRefundDays}
//       />
//     );
//   }

//   renderPage() {
//     let page = this.state.pageNo;
//     if (page === 1) {
//       return this.renderPageOne();
//     } else if (page === 2) {
//       return this.renderPageTwo();
//     } else if (page == 3) {
//       return this.renderPageThree();
//     } else if (page == 4) {
//       return this.renderPageFour();
//     } else if (page === 5) {
//       return this.renderPageFive();
//     } else if (page == 6) {
//       return this.renderPageSix();
//     } else if (page === 7) {
//       return this.renderPageSeven();
//     } else if (page === 8) {
//       return this.renderPageEight();
//     } else if (page === 9) {
//       return this.renderPageNine();
//     } else if (page === 10) {
//       return this.renderPageTen();
//     } else if (page === 11) {
//       return this.renderPageEleven();
//     }
//   }

//   render() {
//     const rPage = this.renderPage();
//     return <React.Fragment>{rPage}</React.Fragment>;
//   }
// }

// export default HostingPages;

import React, { Component } from "react";

import PersonalPropertyHostingPageOne from "./HostingPages/PersonalPropertHostingPageOne";
import PersonalPropertyHostingPageTwo from "./HostingPages/PersonalPropertyHostingPageTwo";
import PersonalPropertyHostingPageThree from "./HostingPages/PersonalPropertyHostingPageThree";
import PersonalPropertyHostingPageFour from "./HostingPages/PersonalPropertyHostingPageFour";
import PersonalPropertyHostingPageFive from "./HostingPages/PersonalPropertyHostingPageFive";
import PersonalPropertyHostingPageSix from "./HostingPages/PersonalPropertyHostingPageSix";
import PersonalPropertyHostingPageSeven from "./HostingPages/PersonalPropertyHostingPageSeven";
import PersonalPropertyHostingPageEight from "./HostingPages/PersonalPropertyHostingPageEight";
import PersonalPropertyHostingPageNine from "./HostingPages/PersonalPropertyHostingPageNine";
import PersonalPropertyHostingPageTen from "./HostingPages/PersonalPropertyHostingPageTen";
import PersonalPropertyHostingPageEleven from "./HostingPages/PersonalPropertyHostingPageEleven";
import PersonalPropertyHostingPageTwelve from "./HostingPages/PersonalPropertyHostingPageTwelve";
import { baseUrl } from "../MainComponent";
import PersonalPropertyHostingPageThirteen from "./HostingPages/PersonalPropertyHostingPageThirteen";

class HostingPages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNo: 1,
      selectedCategory: null,
      selectedSubCategory: null,
      entirePrivateOrSharedRoom: null,
      guestCount: 4,
      bedCount: 4,
      bedRoomCount: 4,
      bathRoomCount: 4,
      description: null,
      title: null,
      pricePerNight: 20,
      maxRefundDays: 1,
      selectedFacilities: [],
      latLong: null,
      selectedFacilityNames: [],
      selectedImages: [],
      hostPermission: 0,
      partialPayAllowed: 0,
    };

    this.nextPage = this.nextPage.bind(this);
    this.renderPageOne = this.renderPageOne.bind(this);
    this.renderPageTwo = this.renderPageTwo.bind(this);
    this.renderPageThree = this.renderPageThree.bind(this);
    this.renderPageFour = this.renderPageFour.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
    this.selectSubCategory = this.selectSubCategory.bind(this);
    this.selectEntirePrivateOrSharedRoom =
      this.selectEntirePrivateOrSharedRoom.bind(this);
    this.setCount = this.setCount.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.setPricePerNight = this.setPricePerNight.bind(this);
    this.setMaxRefundDays = this.setMaxRefundDays.bind(this);
    this.selectFacility = this.selectFacility.bind(this);
    this.saveAndExit = this.saveAndExit.bind(this);
  }
  changePartialPay() {
    if (this.state.partialPayAllowed == 0) this.state.partialPayAllowed = 1;
    else this.state.partialPayAllowed = 0;
  }
  changeHostPermission() {
    if (this.state.hostPermission == 0) this.state.hostPermission = 1;
    else this.state.hostPermission = 0;
  }


  saveAndExit(){
    let body = {};
    
    if(this.state.selectedSubCategory !== null) {
      body['category_id'] = this.state.selectedSubCategory;
    }

    if(this.state.title !== null){
      body['title'] = this.state.title;
    }

    if(this.state.description !== null){
      body['description'] = this.state.description;
    }
    body['max_days_refund'] = this.state.maxRefundDays;
    body['published'] = false;
    body['owner_id'] = parseInt(sessionStorage.getItem("userId"));
    body['per_night_cost'] = this.state.pricePerNight;
    if(this.state.entirePrivateOrSharedRoom !== null){
      body['entire_private_or_shared'] = this.state.entirePrivateOrSharedRoom;
    }
    body['highest_guest_no'] = this.state.guestCount;
    body['beds'] = this.state.bedCount;
    body['bedrooms'] = this.state.bedRoomCount;
    body['bathrooms'] = this.state.bathRoomCount;
    body['private_bathroom_available'] = 1;
    if(this.state.hostPermission === 1) body['need_host_confirmation'] = true;
    else body['need_host_confirmation'] = false;

    if(this.state.partialPayAllowed === 1) body['partial_pay_allowed'] = true;
    else body['partial_pay_allowed'] = true;

    body['facilities'] = this.state.selectedFacilities;
    body['images'] = this.state.selectedImages;

    if(this.state.latLong !== null){

      body['latitude']= this.state.latLong['y']
      body['longitude'] = this.state.latLong['x']
      body['address'] = this.state.latLong['label'];
    }
    console.log("hello2");

    console.log(body);

    // let unpublishedHostingId = sessionStorage.getItem("unpublishedHostingId");
    // console.log(unpublishedHostingId);

    // let unpublished = sessionStorage.getItem("unpublishedHosting");
    // if(unpublishedHostingId){
    //   body["hosting_id"] = unpublishedHostingId;
    //   console.log("hello world");
    // }


    // if(!unpublishedHostingId){
    //   console.log( body["hosting_id"]);
    //   fetch(baseUrl + "hostings/properties/", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(body),
    //   })
    //     .then((response) => {
    //       if (response.ok) {
    //         return response;
    //       } else {
    //         console.log(response);
    //         let err = new Error(
    //           "Error " + response.status + ": " + response.statusText
    //         );
    //         err.response = response;
    //         throw err;
    //       }
    //     })
    //     .then((response) => response.json())
    //     .then((response) => {
    //       console.log(response);
    //       if (response.success) {
    //         // this.setState({pageNo: 12})
    //         console.log(response);
    //       } else {
    //         // this.setState({pageNo: 13})
    //         console.log(response);
    //       }
    //     })
    //     .catch((err) => {
    //       alert(err.message);
    //     });
    // }
    
    // else{
    //   fetch(baseUrl + "hostings/properties/", {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(body),
    //   })
    //     .then((response) => {
    //       if (response.ok) {
    //         return response;
    //       } else {
    //         console.log(response);
    //         let err = new Error(
    //           "Error " + response.status + ": " + response.statusText
    //         );
    //         err.response = response;
    //         throw err;
    //       }
    //     })
    //     .then((response) => response.json())
    //     .then((response) => {
    //       console.log(response);
    //       if (response.success) {
    //         // this.setState({pageNo: 12})
    //         console.log(response);
    //       } else {
    //         // this.setState({pageNo: 13})
    //         console.log(response);
    //       }
    //     })
    //     .catch((err) => {
    //       alert(err.message);
    //     });
    // }
    

  }

  publishProperty() {
    let date = new Date();
    let body = {
      title: this.state.title,
      description: this.state.description,
      max_days_refund: this.state.maxRefundDays,
      owner_id: parseInt(sessionStorage.getItem("userId")),
      hosting_start_date:
        date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate(),
      published: true,
      per_night_cost: this.state.pricePerNight,
      entire_private_or_shared: this.state.entirePrivateOrSharedRoom,
      highest_guest_no: this.state.guestCount,
      beds: this.state.bedCount,
      bedrooms: this.state.bedRoomCount,
      bathrooms: this.state.bathRoomCount,
      private_bathroom_available: 1,
      need_host_confirmation: this.state.hostPermission === 1 ? true:false,
      partial_pay_allowed: this.state.partialPayAllowed === 1 ? true:false,
      category_id: this.state.selectedSubCategory,
      facilities: this.state.selectedFacilities,
      images: this.state.selectedImages,
      latitude: this.state.latLong['y'],
      longitude: this.state.latLong['x'],
      address: this.state.latLong['label']
    };

    console.log(body);
    fetch(baseUrl + "hostings/properties/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          console.log(response);
          let err = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          err.response = response;
          throw err;
        }
      })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.success) {
          this.setState({pageNo: 12})
        } else {
          this.setState({pageNo: 13})
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  setLatLong(val){
    this.setState({latLong: val})
  }



  selectImage(image) {
    this.setState({ selectedImages: image });
  }

  deleteImage(src) {
    console.log("im: " + this.state.selectedImages);
    this.state.selectedImages = this.state.selectedImages.filter(
      (image) => image.src != src
    );
    var temp = this.state.selectedImages;
    this.setState({ selectedImages: temp });

    console.log(this.state.selectedImages);
  }

  selectFacility(val, name) {
    if (this.state.selectedFacilities.includes(val)) {
      this.state.selectedFacilities = this.state.selectedFacilities.filter(
        (value) => value != val
      );
      this.state.selectedFacilityNames =
        this.state.selectedFacilityNames.filter((value) => value != name);
      console.log("hh: " + this.state.selectedFacilities);
    } else {
      this.state.selectedFacilities.push(val);
      this.state.selectedFacilityNames.push(name);
      console.log("HH: " + this.state.selectedFacilityNames);
    }
  }

  selectSubCategory(val) {
    this.setState({ selectedSubCategory: val });
    console.log(this.state.selectedSubCategory);
  }
  selectCategory(val) {
    this.setState({ selectedCategory: val });
    console.log(this.state.selectedCategory);
  }

  selectEntirePrivateOrSharedRoom(val) {
    this.setState({ entirePrivateOrSharedRoom: val });
    console.log(this.state.entirePrivateOrSharedRoom);
  }

  nextPage() {
    console.log(this.state);
    const next = this.state.pageNo + 1;
    this.setState({ pageNo: next });
  }
  previousPage() {
    // console.log(this.state);
    const prev = this.state.pageNo - 1;
    this.setState({ pageNo: prev });
  }

  setCount(stateName, increament) {
    if (stateName === "guestCount" && increament === true) {
      this.setState({ guestCount: this.state.guestCount + 1 });
    } else if (
      stateName === "guestCount" &&
      increament === false &&
      this.state.guestCount > 1
    ) {
      this.setState({ guestCount: this.state.guestCount - 1 });
    } else if (stateName === "bedCount" && increament === true) {
      this.setState({ bedCount: this.state.bedCount + 1 });
    } else if (
      stateName === "bedCount" &&
      increament === false &&
      this.state.bedCount > 1
    ) {
      this.setState({ bedCount: this.state.bedCount - 1 });
    } else if (stateName === "bedRoomCount" && increament === true) {
      this.setState({ bedRoomCount: this.state.bedRoomCount + 1 });
    } else if (
      stateName === "bedRoomCount" &&
      increament === false &&
      this.state.bedRoomCount > 1
    ) {
      this.setState({ bedRoomCount: this.state.bedRoomCount - 1 });
    } else if (stateName === "bathRoomCount" && increament === true) {
      this.setState({ bathRoomCount: this.state.bathRoomCount + 1 });
    } else if (
      stateName === "bathRoomCount" &&
      increament === false &&
      this.state.bathRoomCount > 1
    ) {
      this.setState({ bathRoomCount: this.state.bathRoomCount - 1 });
    }
  }

  setDescription(val) {
    this.setState({ description: val });
    console.log(this.state.description);
  }

  setTitle(val) {
    this.setState({ title: val });
    console.log(this.state.title);
  }

  setPricePerNight(val, increament) {
    console.log(this.state.pricePerNight);
    if (increament === true) {
      this.setState({
        pricePerNight: parseFloat(this.state.pricePerNight) + 1,
      });
    } else if (increament === false && this.state.pricePerNight > 1) {
      this.setState({ pricePerNight: this.state.pricePerNight - 1 });
    }
  }
  setPricePerNightExact(val) {
    if (val >= 0) {
      this.setState({ pricePerNight: val });
    } else this.setState({ pricePerNight: 0 });
  }

  setMaxRefundDays(increament) {
    // this.setState({maxRefundDays: val});
    if (increament === true) {
      this.setState({ maxRefundDays: this.state.maxRefundDays + 1 });
    } else if (increament === false && this.state.maxRefundDays > 1) {
      this.setState({ maxRefundDays: this.state.maxRefundDays - 1 });
    }
  }
  renderPageOne() {
    return (
      <PersonalPropertyHostingPageOne
        next={() => {
          this.nextPage();
        }}
        selectCategory={(val) => {
          this.selectCategory(val);
        }}
        selectedCategory={() => this.state.selectedCategory}
        saveAndExit = {() => {this.saveAndExit()}}
      />
    );
  }
  renderPageTwo() {
    return (
      <div>
        <PersonalPropertyHostingPageTwo
          previous={() => {
            this.previousPage();
          }}
          next={() => {
            this.nextPage();
          }}
          selectedCategory={() => this.state.selectedCategory}
          selectedSubCategory={() => this.state.selectedSubCategory}
          selectSubCategory={(val) => {
            this.selectSubCategory(val);
          }}
          saveAndExit = {() => {this.saveAndExit()}}
        />
      </div>
    );
  }

  renderPageThree() {
    return (
      <PersonalPropertyHostingPageThree
        previous={() => {
          this.previousPage();
        }}
        next={() => {
          this.nextPage();
        }}
        entirePrivateOrSharedRoom={() => this.state.entirePrivateOrSharedRoom}
        selectEntirePrivateOrSharedRoom={(val) =>
          this.selectEntirePrivateOrSharedRoom(val)
        }
        saveAndExit = {() => {this.saveAndExit()}}
      />
    );
  }

  renderPageFour() {
    return (
      <PersonalPropertyHostingPageFour
        previous={() => {
          this.previousPage();
        }}
        next={() => {
          this.nextPage();
        }}
        setLatLong = {(val)=>{this.setLatLong(val)}}
        latLong = {this.state.latLong}
        saveAndExit = {() => {this.saveAndExit()}}
      />
    );
  }

  renderPageFive() {
    return (
      <PersonalPropertyHostingPageFive
        previous={() => {
          this.previousPage();
        }}
        next={() => {
          this.nextPage();
        }}
        guestCount={this.state.guestCount}
        bedCount={this.state.bedCount}
        bedRoomCount={this.state.bedRoomCount}
        bathRoomCount={this.state.bathRoomCount}
        setCount={(stateName, increament) => {
          this.setCount(stateName, increament);
        }}
        saveAndExit = {() => {this.saveAndExit()}}
      />
    );
  }
  renderPageSix() {
    return (
      <PersonalPropertyHostingPageSix
        previous={() => {
          this.previousPage();
        }}
        next={() => {
          this.nextPage();
        }}
        selectFacility={(val, name) => {
          this.selectFacility(val, name);
        }}
        selectedFacilities={() => this.state.selectedFacilities}
        selectedFacilityNames={() => this.state.selectedFacilityNames}
        saveAndExit = {() => {this.saveAndExit()}}
      />
    );
  }
  renderPageSeven() {
    return (
      <PersonalPropertyHostingPageSeven
        previous={() => {
          this.previousPage();
        }}
        next={() => {
          this.nextPage();
        }}
        images={this.state.selectedImages}
        selectImage={(image) => {
          this.selectImage(image);
        }}
        deleteImage={(src) => {
          this.deleteImage(src);
        }}
        saveAndExit = {() => {this.saveAndExit()}}
      />
    );
  }
  renderPageEight() {
    return (
      <PersonalPropertyHostingPageEight
        previous={() => {
          this.previousPage();
        }}
        next={() => {
          this.nextPage();
        }}
        description={() => this.state.description}
        setDescription={(val) => {
          this.setDescription(val);
        }}
        saveAndExit = {() => {this.saveAndExit()}}
      />
    );
  }
  renderPageNine() {
    return (
      <PersonalPropertyHostingPageNine
        previous={() => {
          this.previousPage();
        }}
        next={() => {
          this.nextPage();
        }}
        title={() => this.state.title}
        setTitle={(val) => {
          this.setTitle(val);
        }}
        saveAndExit = {() => {this.saveAndExit()}}
      />
    );
  }
  renderPageTen() {
    return (
      <PersonalPropertyHostingPageTen
        previous={() => {
          this.previousPage();
        }}
        next={() => {
          this.nextPage();
        }}
        pricePerNight={() => this.state.pricePerNight}
        setPricePerNight={(val, increament) => {
          this.setPricePerNight(val, increament);
        }}
        setPricePerNightExact={(val) => {
          this.setPricePerNightExact(val);
        }}
        maxRefundDays={() => this.state.maxRefundDays}
        setMaxRefundDays={(increament) => this.setMaxRefundDays(increament)}
        partialPayAllowed={() => this.state.partialPayAllowed}
        changePartialPay={() => this.changePartialPay()}
        hostPermission={() => this.state.hostPermission}
        changeHostPermission={() => this.changeHostPermission()}
        saveAndExit = {() => {this.saveAndExit()}}
      />
    );
  }
  renderPageEleven() {
    return (
      <PersonalPropertyHostingPageEleven
        previous={() => {
          this.previousPage();
        }}
        next={() => {
          this.nextPage();
        }}
        selectCategory={this.state.selectedCategory}
        selectedSubCategory={this.state.selectedSubCategory}
        entirePrivateOrSharedRoom={this.state.entirePrivateOrSharedRoom}
        guestCount={this.state.guestCount}
        bedCount={this.state.bedCount}
        bedRoomCount={this.state.bedRoomCount}
        bathRoomCount={this.state.bathRoomCount}
        description={this.state.description}
        title={this.state.title}
        pricePerNight={this.state.pricePerNight}
        maxRefundDays={this.state.maxRefundDays}
        selectedFacilityNames={this.state.selectedFacilityNames}
        selectedImages={this.state.selectedImages}
        publishProperty={() => {
          this.publishProperty();
        }}
        saveAndExit = {() => {this.saveAndExit()}}
        latLong = {this.state.latLong}
      />
    );
  }
  renderPageTwelve() {
    return <PersonalPropertyHostingPageTwelve />;
  }

  renderPageThirteen(){
    return <PersonalPropertyHostingPageThirteen />
  }
  renderPage() {
    let page = this.state.pageNo;
    if (page === 1) {
      return this.renderPageOne();
    } else if (page === 2) {
      return this.renderPageTwo();
    } else if (page == 3) {
      return this.renderPageThree();
    } else if (page == 4) {
      return this.renderPageFour();
    } else if (page === 5) {
      return this.renderPageFive();
    } else if (page == 6) {
      return this.renderPageSix();
    } else if (page === 7) {
      return this.renderPageSeven();
    } else if (page === 8) {
      return this.renderPageEight();
    } else if (page === 9) {
      return this.renderPageNine();
    } else if (page === 10) {
      return this.renderPageTen();
    } else if (page === 11) {
      return this.renderPageEleven();
    } else if (page === 12) {
      return this.renderPageTwelve();
    } else if( page === 13){
      return this.renderPageThirteen();
    }
  }

  render() {
    const rPage = this.renderPage();
    return <React.Fragment>{rPage}</React.Fragment>;
  }
}

export default HostingPages;
