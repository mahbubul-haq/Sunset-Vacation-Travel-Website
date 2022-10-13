import React, { Component } from "react";
import { baseUrl } from "../../MainComponent";
import { Table } from "react-bootstrap";
import {Link} from 'react-router-dom';

import "../../../cssFiles/propertyHostingBase.css"; //base should be imported first
import "../../../cssFiles/PersonalPropertyHostingPageTwo.css";

class PersonalPropertyHostingPageTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subCategory: null,
      selectedIdx: 0,
    };

    this.renderPage = this.renderPage.bind(this);
    this.nextButton = this.nextButton.bind(this);
    this.renderPage = this.renderPage.bind(this);
  }

  componentDidMount() {
    let category = { category: this.props.selectedCategory() };
    fetch(baseUrl + "hostings/subcategories/" + this.props.selectedCategory() + '/', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(category),
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
          this.setState({ subCategory: response.subcategories }, () => {
            this.state.subCategory.map((subCategory, id) => {
              if (
                subCategory.category_id == this.props.selectedSubCategory()
              ) {
                this.selectedIdx = id;
              }
            });
            this.changeStyle(this.selectedIdx);
          });
          console.log(response.subcategories);
        } else {
          let err = new Error(response.error);
          err.response = response;
          throw err;
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  nextButton() {
    if (this.props.selectedSubCategory() !== null) {
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

  changeStyle(idx) {
    console.log("idx: " + idx);
    this.state.subCategory.map((subCategory, id) => {
      var tableRow = "tr" + id;
      var element = document.getElementsByClassName(tableRow);

      if (id == idx) {
        element[0].style.backgroundColor = "rgb(201 212 231)";
        element[0].style.border = "1px solid black";
      } else {
        element[0].style.backgroundColor = "#FFFFFF";
        element[0].style.border = "1px solid rgb(197, 197, 197)";
      }
    });
  }

  renderPage() {
    let rows = this.state.subCategory;
    let nextButton = this.nextButton();
    if (rows !== null) {
      return (
        <div id="body">
          <div id="container">
            <div id="left">Which of these best describes your place?</div>
            <div id="right">
              <div id="top">
                {/* <button id="saveAndExit" onClick={()=>{this.props.saveAndExit()}}>Save and Exit</button> */}
                <Link to="/host/home"><button id="saveAndExit">Exit</button></Link>
              </div>

              <div id="middle2">
                <table>
                  {rows.map((subcategory, id) => {
                    return (
                      <tr
                        key={subcategory.category_id}
                        onClick={() => {
                          this.props.selectSubCategory(
                            subcategory.category_id
                          );
                          this.selectedIdx = id;
                          this.changeStyle(id);
                        }}
                      >
                        <td className={"tr" + id}>
                          {subcategory.subcategory_name}
                          <div className="subcategoryDescription2">
                            {subcategory.description}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
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
    } else {
      return <header></header>;
    }
  }
  render() {
    const rPage = this.renderPage();
    return <React.Fragment>{rPage}</React.Fragment>;
  }
}

export default PersonalPropertyHostingPageTwo;
