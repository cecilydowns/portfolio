import React, { Component } from 'react';

const PortfolioItem = (props) => {

    const tags = props.tags.map(tag => {
        return <div key={tag.id} className="tag"><span className="dot"></span>{tag.name}</div>
    })

    return (
        <div className="portfolio-item" style={{ backgroundImage: `url(${props.img})` }}>
            <div className="portfolio-item-label">
                <h3>{props.name}</h3>
                <div className="portfolio-item-description">
                    {props.description}
                    <div className="buttons">
                        <a href="/" className="button">Read More</a>
                        <a href="/" className="button">Live Demo</a>
                        <a href="/" className="button">Walkthrough</a>
                        <a href="/" className="button">Github</a>
                    </div>
                </div>

            </div>

            <div className="portfolio-item-tags">
                {tags}                    
            </div>
        </div>
    );
}

export default PortfolioItem;