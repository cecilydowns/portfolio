import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './Portfolio.css';
import PortfolioItem from './PortfolioItem'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class Portfolio extends Component {

    constructor(props){
        super(props)
        this.state = {
            items: []
        }
    }

  componentDidMount = () => {
    fetch('/api/projects')
    .then(response => response.json())
    // .then(response => {
    //     console.log(response)
    //     return response
    // })
    .then(response => {
        this.setState({
            items: response,
            filter: ''
        })
    })
    .catch(error => console.log(error))
  }

  handleChange = (event) => {
    this.setState({filter: event.target.value});
  }

  render() {

    const portfolioItems = this.state.items
        .filter(item => {
            if(this.state.filter !== ''){
                return item.technologies.find(t => t.name === this.state.filter)
            } else {
                return true
            }
        })
        .map(item => {
            return (
                <CSSTransition
                    timeout={1000}
                    classNames="portfolio-item"
                    key={item.id}
                >
                    <PortfolioItem
                        key={item.id}
                        id={item.id} 
                        name={item.name} 
                        description={item.description} 
                        github={item.github} 
                        demo={item.demo} 
                        img={item.img_url} 
                        tags={item.technologies}
                    />
                </CSSTransition>
            )
        })

    return (
      <div id="portfolio-container">
          <p>Here's a portfolio.
              In this introduction section, I'll want to describe it a bit,
              and include a dropdown to filter.
          </p>

          <div className="category-picker">
            <select value={this.state.filter} onChange={this.handleChange}>
                <option value="">Everything</option>
                <option value="Rails">Rails</option>
                <option value="JavaScript">JavaScript</option>
                <option value="React">React</option>
            </select>
          </div>

          <p>
              Tags: grey text at bottom of portfolio item, with color coded dots so that
              all tags that are the same have the same color?
          </p>
        <TransitionGroup id="portfolio-grid-container">
            {portfolioItems}
        </TransitionGroup>
      </div>
    );
  }
}

export default Portfolio;
