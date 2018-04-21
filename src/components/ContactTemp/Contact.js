import React, { Component } from 'react';
import './Contact.css';

class ContactTemp extends Component {

  constructor(props) {
    super(props)
    this.state = {
        name: '',
        email: '',
        body: '',
        submitted: false
        }
  }

  handleInput = (event) => {
      const { name, value } = event.target
      this.setState({
          [name]: value
      })
  }

  handleSubmit = (event) => {
      event.preventDefault()

      fetch('/api/contact',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: {
            name: this.state.name,
            email: this.state.email,
            body: this.state.body
          }
        })
      })
      // .then(response => response.json())
      .then(response => {
          console.log(response)
          return response
      })
      .then(response => {
        this.setState({
          name: '',
          email: '',
          body: '',
          submitted: true
        })
      })
      .catch(error => console.log(error))


      // SUBMIT TO RAILS BACKEND HERE


  }

  render() {
    return (
      <div className="content-container" id="contact-container">
          <h2>I'd love to hear from you!</h2>
          <p>Please email cecily.downs@gmail.com while I get my 
            contact form set up.</p>
      </div>
    );
  }
}

export default ContactTemp;
