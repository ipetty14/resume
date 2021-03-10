import React, { Component } from 'react';
import Widecard from '../Components/Widecard'

class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h2 className="subtopic">My Education</h2>
                <Widecard title="M.Tech Software Engineering" where="VIT University" from="July 2017" to="Present"/>
                <Widecard title="SSLC | HSC" where="Islamiah Higher Secondary School" from="2011" to="2017"/>
            </div>

        )
    }
}

export default Education;