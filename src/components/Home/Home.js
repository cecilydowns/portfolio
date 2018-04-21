import React, { Component } from 'react';
import styles from './Home.scss';
import Post from './Post'

class Home extends Component {

  constructor(){
    super()
    this.state = {
      posts: []
    }
  }

  componentDidMount = () => {
    fetch('https://cecilycodes.com/ghost/api/v0.1/posts/?client_id=ghost-frontend&client_secret=fb5f778bab0e&include=tags&limit=5')
    .then(response => response.json())
    .then(response => {
        this.setState({
            posts: response.posts
        })
    })
    .catch(error => console.log(error))

  }

  render() {

    const posts = this.state.posts.map((post, key) => {
        return <Post key={key} title={post.title} url={post.url} tags={post.tags} date={post.created_at} />
    })

    return (
      <div className="content-container" id={styles.homeContainer}>
          <div id={styles.message}>
            <h2>I'm a full-stack web developer based in Seattle.</h2>
            <p>I love creating beautiful and functional web apps
              using the latest technologies. Currently seeking new 
              opportunities.</p>
              <p>Check out my <a href="http://github.com/cecilydowns">GitHub</a>, 
              visit my <a href="https://www.linkedin.com/in/cecily-downs/">LinkedIn</a>,
              or follow me on <a href="https://twitter.com/papercecily">Twitter</a>.</p>
          </div>
          <div id={styles.side}>
            <h3>Recent Blog Posts</h3>
            {posts}
          </div>
      </div>
    );
  }
}

export default Home;
