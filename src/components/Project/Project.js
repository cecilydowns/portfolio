import React, { Component } from 'react';
import styles from './Project.scss';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { Link } from 'react-router-dom';

class Project extends Component {

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

    return (
      <div className="content-container">
        <h2>{this.state.item.name}</h2>
        <p className={styles.description}>{this.state.item.description}</p>
        <div className={styles.buttons}>
            {this.state.item.video ?
            <Link to={`/portfolio/${this.state.item.slug}/video`} className={styles.button}>Video Walkthrough</Link>
            : ''
            }
            <a href={this.state.item.github} className={styles.button}>GitHub</a>
            <a href={this.state.item.demo} className={styles.button}>Live Site</a>
            <Link to="/portfolio" className={styles.button}>Back to Portfolio</Link>
        </div>
        
        <div className={styles.flexContainer}>
            <div className={styles.side}>
                <img src={this.state.item.img_url} className={styles.mainImage} alt={this.state.item.name} /> 
                <div className={styles.tags}>
                {this.state.item.technologies ? 
                        this.state.item.technologies.map(tag => {
                            return <div key={tag.id} className={styles.tag}><span className={styles.dot}></span>{tag.name}</div>
                        })
                    : ''
                }
                </div>
            </div>

            <div className={styles.highlights}>
                    <h3>Highlights</h3>
                    <ul>
                        {this.state.item.highlights ? 
                            this.state.item.highlights.map(item => {
                                return <li key={item.id}>{item.text}</li>
                            })    
                        :
                        ''}
                    </ul>
            </div>
        </div>


        {this.state.item.content ?
            <div className={styles.content}>
                    <h3>Details</h3>
                    {ReactHtmlParser(this.state.item.content)}
            </div>
        :
            ''
        }
        
      </div>
    );
  }
}

export default Project;
