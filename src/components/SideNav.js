import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SideNav extends Component {
    render() {
        return (
            <nav className="navigation">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <Link to="" className="navigation__link">Restaurant</Link></li>
                    <li className="navigation__item">
                        <Link to="" className="navigation__link">Order</Link>
                    </li>
                    <li className="navigation__item">
                        <Link to="" className="navigation__link">Foods</Link>
                    </li>
                    <li className="navigation__item">
                        <Link to="" className="navigation__link">Food Options</Link>
                    </li>
                    <li className="navigation__item">
                        <Link to="" className="navigation__link">User</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default SideNav;