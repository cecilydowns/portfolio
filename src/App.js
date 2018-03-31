import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js';

import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, BrowserRouter, withRouter, Switch } from 'react-router-dom';

import Home from './components/Home/Home'
import Portfolio from './components/Portfolio/Portfolio'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import PortfolioItem from './components/PortfolioItem/PortfolioItem'

import ContactTemp from './components/ContactTemp/Contact'

import RouterTransitions from './RouterTransitions.scss'

import Navbar from './components/Navbar/Navbar'

class App extends Component {
  render() {
    return (
      <div>
        <Route render={({ location }) => (
          <div className='container'>
          <Navbar />
          <div>
            <TransitionGroup>
              <CSSTransition
                  key={location.key}
                  classNames={{
                            appear: RouterTransitions.appear,
                            appearActive: RouterTransitions.appearActive,
                            enter: RouterTransitions.enter,
                            enterActive: RouterTransitions.enterActive,
                            exit: RouterTransitions.exit,
                            exitActive: RouterTransitions.exitActive
                        }}
                  timeout={250}>
                <Switch location={location}>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/portfolio' component={Portfolio} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={ContactTemp} />
                    <Route exact path='/contactform' component={Contact} />
                    <Route path='/portfolio/:slug' component={PortfolioItem}  />
                </Switch>         
              </CSSTransition>
            </TransitionGroup>
          </div>

        </div>

        )}
        />
                
          <Particles 
              className="particles" params={{
                particles: {
                  number: {
                    value: 7,
                    density: {
                      enable: true,
                      value_area: 1000
                    }
                  },
                  color: {
                    value: ["#ffa500","#ffff00"]
                  },
                  shape: {
                    type: "circle",
                    stroke: {
                      width: 0,
                      color: "#ffffff"
                    },
                    polygon: {
                      "nb_sides": 0
                    },
                    image: {
                      src: "img/github.svg",
                      width: 100,
                      height: 100
                    }
                  },
                  opacity: {
                    value: 0.4,
                    random: true,
                    anim: {
                      enable: true,
                      speed: 0.2,
                      opacity_min: 0.05,
                      sync: false
                    }
                  },
                  "size": {
                    "value": 12,
                    "random": true,
                    "anim": {
                      "enable": true,
                      "speed": 0.5,
                      "size_min": 0.1,
                      "sync": false
                    }
                  },
                  "line_linked": {
                    "enable": false,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.1,
                    "width": 1
                  },
                  "move": {
                    "enable": true,
                    "speed": 0.2,
                    "direction": "top",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200
                    }
                  }
                },
                "interactivity": {
                  "detect_on": "canvas",
                  "events": {
                    "onhover": {
                      "enable": false,
                      "mode": "repulse"
                    },
                    "onclick": {
                      "enable": false,
                      "mode": "push"
                    },
                    "resize": true
                  },
                  "modes": {
                    "grab": {
                      "distance": 400,
                      "line_linked": {
                        "opacity": 1
                      }
                    },
                    "bubble": {
                      "distance": 400,
                      "size": 40,
                      "duration": 2,
                      "opacity": 8,
                      "speed": 3
                    },
                    "repulse": {
                      "distance": 200,
                      "duration": 0.4
                    },
                    "push": {
                      "particles_nb": 4
                    },
                    "remove": {
                      "particles_nb": 2
                    }
                  }
                },
                "retina_detect": true
            	}}
            />

      </div>
             
    );
  }
}

export default App;
