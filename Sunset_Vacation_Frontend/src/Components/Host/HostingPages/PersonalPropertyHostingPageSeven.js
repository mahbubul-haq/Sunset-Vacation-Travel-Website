import axios from "axios";
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { baseUrl } from "../../MainComponent";


import "../../../cssFiles/PersonalPropertyHostingPageSeven.css";
import "../../../cssFiles/propertyHostingBase.css"; //base should be imported first
import ImageIcon from "../../../images/imageIcon.png";

class PersonalPropertyHostingPageSeven extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // images: [],
    };
  }

  componentDidMount() {
    this.changeStyle();
  }

  handleImageChange(files) {
    this.setState({ image: files[0] }, () => {
      this.changeStyle();
    });
    let formData = new FormData();
    formData.append("image", files[0], files[0].name);
    // formData.append('title', files[0].name);
    console.log(files[0].name);
    console.log(files[0]);
    console.log(formData.get("image"));
    let url = baseUrl + "users/photo-upload/";
    axios
      .post(url, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.status === 201) return res.data;
        else {
          let err = new Error("Error " + res.status + ": " + res.statusText);
          err.res = res;
          throw err;
        }
        // console.log(res.data);
        // console.log(res);
      })
      .then((response) => {
        // console.log(response);
        let currentImages = this.props.images;

        currentImages.push({
          src: "http://127.0.0.1:8000" + response.uploaded_photo.image,
        });
        this.props.selectImage(currentImages);
        // console.log(this.state);
      })
      .catch((err) => alert(err));

    var element = document.getElementById("imgIconContainer7");
    element.style.display = "flex";
  }
  changeStyle() {
    var element = document.getElementById("dummy7");
    console.log(this.props.images.length);
    if (this.props.images.length > 0) {
      var element1 = document.getElementById("imgIconContainer7");
      if (element1 != null) element1.style.display = "flex";
      if (element != null) element.style.height = "0px";
    } else {
      if (element != null) element.style.height = "150px";
      var element1 = document.getElementById("imgIconContainer7");
      if (element1 != null) element1.style.display = "none";
    }
  }
  nextButton() {
    if (this.props.images.length >= 5) {
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

  deleteImage(src) {
    this.props.deleteImage(src);
    this.changeStyle();
  }

  renderPage() {
    let nextButton = this.nextButton();

    return (
      <div id="body">
        <div id="container">
          <div id="left">Let’s add some photos of your place.</div>
          <div id="right">
            <div id="top">
              {/* <button id="saveAndExit" onClick={()=>{this.props.saveAndExit()}}>Save and Exit</button> */}
              
              <Link to="/host/home"><button id="saveAndExit">Exit</button></Link>
            </div>

            <div id="middle7">
              <div id="animation7">
                <div id="addPhoto7">
                  <div id="dummy7"></div>
                  <div id="upper7">
                    <div id="dragPhoto7">Upload your photos</div>

                    <div id="smallText7">Add at least 5 photos</div>
                    <label
                      for="uploadPhoto7"
                      id="labelUploadPhoto7"
                      class="btn"
                    >
                      Upload Image
                    </label>
                    <input
                      style={{ visibility: "hidden", display: "none" }}
                      type="file"
                      id="uploadPhoto7"
                      accept="image/png, image/jpeg"
                      onChange={(event) => {
                        this.handleImageChange(event.target.files);
                        this.changeStyle();
                      }}
                    />
                  </div>

                  <div id="imageContainer7">
                    {this.props.images.map((image) => {
                      this.changeStyle();

                      return (
                        <div id="imageWrap7">
                          <span
                            id="close7"
                            onClick={() => {
                              console.log("d: " + image.src);
                              this.deleteImage(image.src);
                              this.changeStyle();
                            }}
                          >
                            &times;
                          </span>
                          <img id="img7" src={image.src} alt="new" />
                        </div>
                      );
                    })}
                    <label for="uploadPhoto7" id="imgIconContainer7">
                      <img id="imageIcon7" src={ImageIcon} alt="Image Icon" />
                    </label>
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

export default PersonalPropertyHostingPageSeven;
