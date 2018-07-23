import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class AdminControl extends Component {
    renderTableHead = () => {
        //this.props.titleTable
        return this.props.titleTable.map((item, index) => {
            return (
                <td key={index}>{item}</td>
            )
        })
    }

    renderTableBody = () => {
        //this.props.data
        if (this.props.data.length > 0) {
            return this.props.data.map((res) => {
                return (
                    <tr key={res.id}>
                        <td>{res.name}</td>
                        <td>{res.address.address}</td>
                        <td>{res.phone}</td>
                        <td>{res.updated_at}</td>
                        <td>
                            <Link to={`/restaurant/${res.id}/`}>
                                Edit
                                </Link>
                        </td>
                        <td>Delete</td>
                    </tr>
                )
            })
        }
    }
    render() {
        console.log(this.props.data)
        return (
            <div className="admin__data">
                <table>
                    <thead>
                        <tr>
                            {this.renderTableHead()}
                            <td colSpan="2">Control</td>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <td colSpan="6">Copyright Taste Baguette</td>
                        </tr>
                    </tfoot>
                    <tbody>
                        {this.renderTableBody()}
                    </tbody>
                </table>
            </div>
        )
    }
}


export default AdminControl;