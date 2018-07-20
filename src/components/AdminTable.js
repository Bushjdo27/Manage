import React, { Component } from 'react';

class AdminControl extends Component {
    renderTableHead = () => {
        //this.props.titleTable
    }

    renderTableBody = () => {
        //this.props.data
    }
    render() {
        return (
            <div className="admin__data">
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>title</td>
                            <td>description</td>
                            <td>date</td>
                            <td colSpan="2">Control</td>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <td colSpan="6">Copyright Taste Baguette</td>
                        </tr>
                    </tfoot>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Bushjdo Restaurant</td>
                            <td>Best Restaurant in the world</td>
                            <td>27/2/1997</td>
                            <td>Remove</td>
                            <td>Delete</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Joker Restaurant</td>
                            <td>Best Restaurant in the USA</td>
                            <td>28/2/1997</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Lucifer</td>
                            <td>Best Restaurant in the Asian</td>
                            <td>29/2/1997</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Lucifer</td>
                            <td>Best Restaurant in the Asian</td>
                            <td>29/2/1997</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Lucifer</td>
                            <td>Best Restaurant in the Asian</td>
                            <td>29/2/1997</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}


export default AdminControl;