import React, { Component } from 'react';


class Header extends Component {

    render() {
        return (
            <header className="header">
                <h3 className="header__title">{this.props.name}</h3>
                <h5 className="header__subtitle">{this.props.sub ? this.props.sub : 'Change everything you want'}</h5>
            </header>
        )
    }
}


export default Header;