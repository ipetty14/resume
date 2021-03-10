import React, { Component } from 'react';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myskills: ['HTML', 'CSS', 'JS', 'PHP', 'REACT JS', 'FIREBASE', 'MIT APP']
        };
    }

    render() {
        return (
            <div className="condiv skills">
                <h2 className="subtopic">About Me</h2>
                <ul>
                    {this.state.myskills.map(skill => {
                        return <li key={skill}>{skill}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Skills;