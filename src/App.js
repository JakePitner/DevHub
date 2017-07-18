import React, { Component, TouchableHighlight } from "react";
import "./App.css";


class HomePageHero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apple: false,
      android: false,
      react: false,
    }
  }

  changeApple() {
    this.setState({apple: true})
    this.setState({android: false})
    this.setState({react: false})
  }

  changeAndroid() {
    this.setState({apple: false})
    this.setState({android: true})
    this.setState({react: false})
  }

  changeReact() {
    this.setState({apple: false})
    this.setState({android: false})
    this.setState({react: true})
  }

  render() {
    return (
      <div className="page-container">
        <div className="title-and-toggles">
          <h1 className="tools-header"> Tools For Each Development Platform </h1>
          <div className="toggle-options">
            <p>
              <div className="link" style={this.state.apple ? {backgroundColor: 'gray'} : {backgroundColor: 'lightgray'}} onClick={this.changeApple.bind(this)}>Apple</div>
            </p>
            <p>
              <div className="link" style={this.state.android ? {backgroundColor: 'gray'} : {backgroundColor: 'lightgray'}} onClick={this.changeAndroid.bind(this)}>Android</div>
            </p>
            <p>
              <div className="link" style={this.state.react ? {backgroundColor: 'gray'} : {backgroundColor: 'lightgray'}} onClick={this.changeReact.bind(this)}>React Native</div>
            </p>
          </div>
        </div>
        <div>
          <div className="links-and-image">
          <div>
            <div className="links">
              <div className="more-links">
                Create Your First App
              </div>
              <div className="link-description">
                Get started writing your first iPhone App
              </div>
            </div>
            <div className="links">
              <div className="more-links">
                Guides
              </div>
              <div className="link-description">
                Find guides to help make more complex apps.
              </div>
            </div>
            <div className="links">
              <div className="more-links">
                UVA Resources
              </div>
              <div className="link-description">
                Access UVA related APIs to help push your App further.
              </div>
            </div>
          </div>

        <div className="program-image">
          <img src="https://i.ytimg.com/vi/M2l4MpWTNew/maxresdefault.jpg" width="600" height="400"/>
        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default HomePageHero;
