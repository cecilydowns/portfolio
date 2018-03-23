import React, { Component } from 'react';
import './Home.css';
import Post from './Post'

class Home extends Component {

  constructor(){
    super()
    this.state = {
      posts: []
    }
  }

  componentDidMount = () => {
    fetch('http://cecilycodes.com/ghost/api/v0.1/posts?client_id=ghost-frontend&client_secret=fb5f778bab0e&include=tags&limit=5')
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
        return <Post key={key} title={post.title} url={post.url} tags={post.tags} />
    })

    return (
      <div id="home-container">
          <div id="message">
            <p className='subhead'>I'm a full-stack web developer based in Seattle.</p>
            <p>I love creating beautiful and functional web apps
              using the latest technologies. Currently seeking new 
              opportunities.</p>
          </div>
          <div id="side">
            <h2>Recent Blog Posts</h2>
            {posts}

          </div>
      </div>
    );
  }
}

export default Home;
