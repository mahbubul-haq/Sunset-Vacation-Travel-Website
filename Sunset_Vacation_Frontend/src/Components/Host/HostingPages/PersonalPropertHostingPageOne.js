import React, { Component } from "react";
import { baseUrl } from "../../MainComponent";
import {Link} from 'react-router-dom';
import "../../../cssFiles/propertyHostingBase.css"; //base should be imported first
import "../../../cssFiles/PersonalPropertyHostingPageOne.css";

class PersonalPropertyHostingPageOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCategories: [],
      selectedIdx: 0,
    };

    this.nextButton = this.nextButton.bind(this);
  }

  componentDidMount() {
    fetch(baseUrl + "hostings/categories/", {
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
          this.setState({ allCategories: response.categories }, () => {
            this.state.allCategories.map((category, id) => {
              if (category == this.props.selectedCategory()) {
                this.selectedIdx = id;
              }
            });
            this.changeStyle(this.selectedIdx);
          });
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
    if (this.props.selectedCategory() !== null) {
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
    this.state.allCategories.map((category, id) => {
      var tableRow = "tr" + id;
      var element = document.getElementsByClassName(tableRow);

      if (id === idx) {
        element[0].style.backgroundColor = "rgb(201 212 231)";
        element[0].style.border = "1px solid black";
      } else {
        element[0].style.backgroundColor = "#FFFFFF";
        element[0].style.border = "1px solid rgb(197, 197, 197)";
      }
    });
  }

  renderPage() {
    let rows = this.state.allCategories;
    let idx = 0;
    let nextButton = this.nextButton();
    if (rows !== null) {
      return (
        <div id="body">
          <div id="container">
            <div id="left">What kind of place will you host?</div>
            <div id="right">
              <div id="top">
                {/* <Link to="/host/home"><button id="saveAndExit" onClick={()=>{this.props.saveAndExit()}}>Save and Exit</button></Link> */}
                <Link to="/host/home"><button id="saveAndExit">Exit</button></Link>
              </div>

              <div id="middle">
                <table>
                  {rows.map((category, id) => {
                    idx = idx + 1;

                    return (
                      <tr
                        key={idx}
                        onClick={() => {
                          this.props.selectCategory(category);
                          this.selectedIdx = id;
                          this.changeStyle(id);
                        }}
                      >
                        <td className={"tr" + id}>{category}</td>
                      </tr>
                    );
                  })}
                </table>
              </div>

              <div id="bottom">
                <button id="backButton">Back</button>

                {nextButton}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <header>Hello</header>;
    }
  }
  render() {
    const rPage = this.renderPage();
    return <React.Fragment>{rPage}</React.Fragment>;
  }
}

export default PersonalPropertyHostingPageOne;
