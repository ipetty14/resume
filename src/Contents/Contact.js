import React, { Component } from 'react';
import Social from '../Components/Social';

class Contact extends Component {
    render() {
        return (
            <div className="condiv">
                <h2 className="subtopic">Contact Me</h2>
                <h3>Email: mattrapp25@gmail.com</h3>
                <h3>Phone: 702.417.8655</h3>
                <Social />
            </div>
        )
    }
}
export default Contact;