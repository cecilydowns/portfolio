import React, { Component } from "react";
import ReactDOM from "react-dom";
import styles from "./Portfolio.scss";
import PortfolioItem from "./PortfolioItem";
import FlipMove from "react-flip-move";
import arrow from "./arrow.png";
import { Link } from "react-router-dom";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount = () => {
    fetch("/api/projects")
      .then(response => response.json())
      // .then(response => {
      //     console.log(response)
      //     return response
      // })
      .then(response => {
        this.setState({
          items: response,
          filter: ""
        });
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const portfolioItems = this.state.items
      .filter(item => {
        if (this.state.filter !== "") {
          return item.technologies.find(t => t.name === this.state.filter);
        } else {
          return true;
        }
      })
      .map(item => {
        const tags = item.technologies.map(tag => {
          return (
            <div key={tag.id} className={styles.tag}>
              <span className={styles.dot} />
              {tag.name}
            </div>
          );
        });
        const detailsButton =
          item.highlights.length !== 0 ? (
            <Link to={`/portfolio/${item.slug}`} className={styles.button}>
              Details
            </Link>
          ) : (
            ""
          );
        const videoButton = item.video ? (
          <Link to={`/portfolio/${item.slug}/video`} className={styles.button}>
            Video
          </Link>
        ) : (
          ""
        );
        const githubButton = item.github ? (
          <a href={item.github} className={styles.button}>
            Github
          </a>
        ) : (
          ""
        );
        const demoButton = item.demo ? (
          <a href={item.demo} className={styles.button}>
            Live Site
          </a>
        ) : (
          ""
        );

        return (
          <div key={item.id} className={styles.portfolioItem}>
            <div className={styles.portfolioInner}>
              <div className={styles.portfolioItemLabel}>{item.name}</div>

              <div
                style={{ backgroundImage: `url(${item.img_url})` }}
                className={styles.portfolioBackground}
              />

              <div className={styles.portfolioItemInfo}>
                <div className={styles.portfolioItemDescription}>
                  {item.description}
                  <div className={styles.buttons}>
                    {detailsButton}
                    {videoButton}
                    {githubButton}
                    {demoButton}
                  </div>
                </div>
                <div className={styles.portfolioItemTags}>{tags}</div>
              </div>
            </div>
          </div>
        );
      });

    return (
      <div className="content-container">
        <div className={styles.categoryPickerOuter}>
          <span>Filter projects:</span>
          <div
            className={styles.categoryPicker}
            style={{ backgroundImage: `url(${arrow})` }}
          >
            <select value={this.state.filter} onChange={this.handleChange}>
              <option value="">Everything</option>
              <option value="Rails">Rails</option>
              <option value="JavaScript">JavaScript</option>
              <option value="React">React</option>
            </select>
          </div>
        </div>

        <div>
          <FlipMove
            id={styles.portfolioGridContainer}
            duration={400}
            staggerDurationBy="150"
          >
            {portfolioItems}
          </FlipMove>
        </div>
      </div>
    );
  }
}

export default Portfolio;
