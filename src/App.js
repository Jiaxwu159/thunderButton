import React, { Component } from 'react';
import './App.css';
import Thunderbutton from './components/Thunderbutton/Thunderbutton';
import Instructions from './components/Instructions/Instructions'
import 'tachyons';
import Particles from 'react-particles-js';


const particlesOptions = {
            		particles: {
            		number:{
            			value: 50,
            		density: {
            			enable: true,
            			}
            		}
            	}
            }

class App extends Component {
  render() {
    return (
      <div className='App'>
      <Instructions />
        <Thunderbutton  />
      	 <Particles className='particles'
              params={particlesOptions} />
      </div>
    );
  }
}




export default App;
