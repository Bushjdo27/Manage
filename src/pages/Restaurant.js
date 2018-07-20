import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminTable from '../components/AdminTable';
import AdminControl from '../components/AdminControl'
import Header from '../components/Header';
import SideNav from '../components/SideNav'
import { getListRestaurant } from '../actions/resActions';


class RestaurantPage extends Component {
    componentDidMount() {
        console.log("Calling didMount")
        getListRestaurant().then(result => {
            console.log(result)
            this.props.dispatch(result)
        })
    }
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <SideNav />
                    <div className="content">
                        <div className="admin">
                            <AdminControl />
                            <AdminTable titleTable={[]} data={[]} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        Restaurants: state.Restaurants
    }
}

export default connect(mapStateToProps)(RestaurantPage)