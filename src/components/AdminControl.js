import React, { Component } from 'react';

class AdminControl extends Component {
    render() {
        return (
            <div className="admin__control">
                <div className="admin__control__text">
                    <span>All</span>
                    <span>Create</span>
                </div>
                <div className="admin__control__search">
                    <input type="text" placeholder="Search for title" />
                    <button>Search</button>
                </div>
            </div>
        )
    }
}


export default AdminControl;