import React, { Component } from 'react';

class MenuBtn extends Component {

    openMenu = () => {
        let menuBtn = document.getElementById('menuBtn');
        this.props.open(menuBtn);
    }

    // <p id="menuBtn" className='menubtn' onClick={this.openMenu}><i className="fas fa-bars"></i></p>
    render() {
        return (
            <p id="menuBtn" className='menubtn' onClick={this.openMenu}>
                <i className="fas fa-bars"></i>
            </p>
        )
    }
}

export default MenuBtn;