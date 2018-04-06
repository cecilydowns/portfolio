import React, { Component } from 'react';

class NotFound extends Component {



  render() {

    console.log(this.props.match.params.slug)
    return (
      <div className="content-container">
        <h2>There isn't anything here!</h2>
        <p>
            Would you like to return to the <a href="/">index page</a>?
        </p>
      </div>
    );
  }
}

export default NotFound;
