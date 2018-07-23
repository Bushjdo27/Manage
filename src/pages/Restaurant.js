import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminTable from '../components/AdminTable';
import AdminControl from '../components/AdminControl'
import Header from '../components/Header';
import SideNav from '../components/SideNav'
import { getListRestaurant } from '../actions/resActions';
import CreateForm from '../components/Forms/Restaurant/Create'


class RestaurantPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showCreate: false,
        }
    }
    componentDidMount() {
        console.log("Calling didMount")
        // getListRestaurant().then(result => {
        //     console.log(result)
        //     this.props.dispatch(result)
        // })
        this.props.dispatch(getListRestaurant())
    }

    renderCreateForm = () => {
        this.setState(() => ({ showCreate: true }))
    }
    handleBack = () => {
        this.setState(() => ({ showCreate: false }))
    }
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <SideNav />
                    <div className="content">
                        <div className="admin">
                            <AdminControl showCreate={this.renderCreateForm} back={this.handleBack} isShowBack={this.state.showCreate} />
                            {
                                this.state.showCreate ? <CreateForm /> : <AdminTable titleTable={['name', "address", "phone", "updated"]} data={this.props.Restaurants} />
                            }

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