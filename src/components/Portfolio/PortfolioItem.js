import React, { Component } from 'react';
import styles from './Portfolio.scss';

class PortfolioItem extends Component {

    constructor(props){
        super(props)
    }

    render(){

        const tags = this.props.tags.map(tag => {
            return <div key={tag.id} className={styles.tag}><span className={styles.dot}></span>{tag.name}</div>
        })

        return (
            <div className={styles.portfolioItem} style={{ backgroundImage: `url(${this.props.img})` }}>
                <div className={styles.portfolioItemLabel}>
                    <h3>{this.props.name}</h3>
                    <div className={styles.portfolioItemDescription}>
                        {this.props.description}
                        <div className={styles.buttons}>
                            <a href="/" className={styles.button}>Read More</a>
                            <a href="/" className={styles.button}>Live Demo</a>
                            <a href="/" className={styles.button}>Walkthrough</a>
                            <a href="/" className={styles.button}>Github</a>
                        </div>
                    </div>
    
                </div>
    
                <div className={styles.portfolioItemTags}>
                    {tags}                    
                </div>
            </div>
        );
    }

}

export default PortfolioItem;