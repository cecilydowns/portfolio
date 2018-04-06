import React, { Component } from 'react';
import styles from './Video.scss';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { Link } from 'react-router-dom';

class Video extends Component {

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
        <h2>Video Walkthrough: &ldquo;{this.state.item.name}&rdquo;</h2>
        <p className={styles.description}>{this.state.item.description}</p>
        <Link to={`/portfolio/${this.state.item.slug}`} className={styles.button}>Project Details</Link>
        <a href={this.state.item.github} className={styles.button}>GitHub</a>
        <a href={this.state.item.demo} className={styles.button}>Live Site</a>
        <Link to="/portfolio" className={styles.button}>Back to Portfolio</Link>

        <div className={styles.videoWrapper}>
            {this.state.item.video ?
                <iframe title={this.state.item.name} width="560" height="315" src={this.state.item.video} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                : <div>No video available.</div>
            }
        </div>
      </div>
    );
  }
}

export default Video;
