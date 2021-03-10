import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilePicture from '../Images/matt-profile.JPG';
import Social from '../Components/Social';

class Home extends Component {
    imageStyle = {
        backgroundImage: `url(${profilePicture})`,
        height: '150px',
        width: '150px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        borderRadius: '100%',
        margin: '0 auto'
    }

    render() {
        return (
            <div className="condiv home">
                <div className="image--div" style={this.imageStyle}></div>
                {/* <img src={profilePicture} className="profilePic" id="profilePic"></img> */}
                <ReactTypingEffect
                    className="typingeffect"
                    text={['Matthew Rapp | Web Full Stack Developer']}
                    speed={100}
                    eraseDelay={700}
                    cursorRenderer={cursor => <h2 className="animatedtype">{cursor}</h2>}
                    displayTextRenderer={(text) => {
                        return (
                            <h2 className="animatedtype">{text}</h2>
                        )
                    }}
                />
                <Social />
            </div>
        )
    }
}

export default Home;