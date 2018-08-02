import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminTable from '../components/AdminTable';
import AdminControl from '../components/AdminControl'
import Header from '../components/Header';
import SideNav from '../components/SideNav'
import { getListRestaurant } from '../actions/resActions';
import CreateForm from '../components/Forms/Restaurant/Create'
import {pagination} from '../utils/index'

class RestaurantPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showCreate: false,
            search: "",
            currentPage: 1,
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
    handleSearch = (search) => {
        console.log(search)
        this.setState(() => ({ search }))
    }

    handleNext = () => {
        //console.log()
        this.setState((prevState) => ({ currentPage: prevState.currentPage + 1 }))
    }

    handlePrev = () => {
        //console.log()
        this.setState((prevState) => ({ currentPage: prevState.currentPage - 1 }))
    }

    data = () => {
        const { search } = this.state;
        if (search.length > 0) {
            const data = this.props.Restaurants.filter((item) => {
                return item.name.includes(search)
            });
            console.log(data)
            //this.setState(()=>({data})) Menu Item 1
            return data;
        }
        return pagination(this.props.Restaurants , currentPage , 5)
        //return this.props.Restaurants
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
                                this.state.showCreate ? <CreateForm /> : <AdminTable next={this.handleNext} prev={this.handlePrev} type="Restaurant" titleTable={['name', "address", "phone", "updated"]} data={this.data()} />
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