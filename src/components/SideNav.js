import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { SignOutUser } from '../actions/authAction';
import { connect } from 'react-redux'
class SideNav extends Component {

    handleSignOut = () => {
        console.log(this.props)
        this.props.dispatch(SignOutUser());
        this.props.redirect()

    }
    render() {
        return (
            <nav className="navigation">
                <ul className="navigation__list">
                    
                    <li className="navigation__item">
                        <NavLink exact activeClassName="active-item" to="/" className="navigation__link">Categories</NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink exact activeClassName="active-item" to="/foods" className="navigation__link">Foods</NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink exact activeClassName="active-item" to="/food_options" className="navigation__link">Food Options</NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink exact activeClassName="active-item" to="/order" className="navigation__link">Orders</NavLink>
                    </li>

                    <li className="navigation__item">
                        <NavLink exact activeClassName="active-item" to="/payment" className="navigation__link">Payment</NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink exact activeClassName="active-item" to="/restaurants" className="navigation__link">Restaurant</NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink exact activeClassName="active-item" to="/restaurant_users" className="navigation__link">Restaurant Users</NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink exact activeClassName="active-item" to="/restaurant_emails" className="navigation__link">Restaurant Emails</NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink exact activeClassName="active-item" to="/users" className="navigation__link">Users</NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink exact activeClassName="active-item" to="/notification" className="navigation__link">Notification</NavLink>
                    </li>
                    <li className="navigation__item">
                        <button className="btn" onClick={this.handleSignOut}>LogOut</button>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default connect()(SideNav);

/*

<li className="navigation__item">
<NavLink exact activeClassName="active-item" to="/order_food_option" className="navigation__link">Order Food Options</NavLink>
</li>
<li className="navigation__item">
<NavLink exact activeClassName="active-item" to="/order_food" className="navigation__link">Order Foods </NavLink>
</li>

*/