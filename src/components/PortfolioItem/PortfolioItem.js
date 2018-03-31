import React, { Component } from 'react';
import styles from './PortfolioItem.scss';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class PortfolioItem extends Component {

    constructor(){
        super()
        this.state = {
            item: {}
        }
    }

   componentDidMount = () => {
    fetch(`/api/projects/${this.props.match.params.slug}`)
    .then(response => response.json())
    // .then(response => {
    //     console.log(response)
    //     return response
    // })
    .then(response => {
        this.setState({
            item: response
        })
    })
    .catch(error => console.log(error))
   }

  render() {

    console.log(this.props.match.params.slug)
    return (
      <div className="content-container">
        <h2>{this.state.item.name}</h2>

        <p>
            Include: name; github; demo; full description text.
        </p>

        {ReactHtmlParser(this.state.item.content)}
        
      </div>
    );
  }
}

export default PortfolioItem;
