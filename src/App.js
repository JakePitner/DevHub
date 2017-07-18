import React, { Component } from 'react';
import uvalogo from './UvaLogo.png';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className='cool-header'>
          <div>
            <img style={{width: 324, height: 35 }} src={uvalogo}/>
          </div>
         <ul id="menu">
          <li><a href="">Getting Started</a>
            <ul>
              <li><a href="">Apple</a></li>
              <li><a href="">Android</a></li>
            </ul>
          </li>
          <li><a href="">Dev Resources</a>
            <ul>
              <li><a href="">API References</a></li>
              <li><a href="">Demo Apps</a></li>
              <li><a href="">External Resources</a></li>
              <li><a href="">Videos</a></li>
            </ul>
          </li>
          <li><a href="">Community</a>
            <ul>
              <li><a href="">Blog</a></li>
              <li><a href="">Student Apps and Projects</a></li>
            </ul>
          </li>
          <li><a href="">Signup / Login</a></li>
        </ul>
        </div>
    );
  }
}

export default App;
