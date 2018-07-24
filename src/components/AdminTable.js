import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {deleteRestaurant} from '../actions/resActions'
import {deleteCategory} from '../actions/categoriesActions'
class AdminTable extends Component {
    renderTableHead = () => {
        //this.props.titleTable
        return this.props.titleTable.map((item, index) => {
            return (
                <td key={index}>{item}</td>
            )
        })
    }

    typeRestaurant = ()=>{
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
                        <td onClick={this.handleRemove}>Delete</td>
                    </tr>
                )
            })
        }
    }

    typeCategory = ()=>{
        if (this.props.data.length > 0) {
            return this.props.data.map((res) => {
                return (
                    <tr key={res.id}>
                        <td>{res.name}</td>
                        <td>{res.type}</td>
                        <td>{res.updated_at}</td>
                        <td>{res.photo.photo_url}</td>
                        <td>
                            <Link to={`/restaurant/${res.id}/`}>
                                Edit
                            </Link>
                        </td>
                        <td onClick={this.handleRemove}>Delete</td>
                    </tr>
                )
            })
        }
    }
    renderTableBody = () => {
        //this.props.data
        const {type} = this.props;

        switch(type){
            case 'Restaurant':
                return typeRestaurant()
            case 'Category':
                return typeCategory()

            default:
                return []

        }
    }

    handleRemove = ()=>{
        const {type} = this.props;

        switch(type){
            case 'Restaurant':
                return typeRestaurant()
            case 'Category':
                return typeCategory()

            default:
                return []

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


export default AdminTable;