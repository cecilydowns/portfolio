import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {

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
                <form onSubmit={this.handleSubmit}>

                    {this.state.submitted ? <h2 className="subhead">Submitted!</h2> :
                    <div>
                      <h2 className="subhead">I'd love to hear from you!</h2>
                      <div className="input-field">
                        <input type="text" name="name" value={this.state.name} onChange={this.handleInput} placeholder="Name" />
                        <div className="label">Name</div>
                        <div className="dot"></div>
                      </div>

                    <div className="input-field">
                      <input type="text" name="email" value={this.state.email} onChange={this.handleInput} placeholder="Email" />
                      <div className="label">Email</div>
                      <div className="dot"></div>
                    </div>

                    <div className="input-field">
                      <textarea name="body" value={this.state.body} onChange={this.handleInput} placeholder="Message" rows="6" />
                      <div className="label">Message</div>
                      <div className="dot"></div>
                    </div>

                      <input type="submit" className="button" />
                    </div>
                    }
                </form>
      </div>
    );
  }
}

export default Contact;
