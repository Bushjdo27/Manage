import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminTable from '../components/AdminTable';
import AdminControl from '../components/AdminControl'
import Header from '../components/Header';
import SideNav from '../components/SideNav'
import { getListRestaurantEmail } from '../actions/restaurantEmailActions';
import CreateForm from '../components/Forms/Restaurant_Email/Create'
import { pagination } from '../utils/index'

class RestaurantEmailPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showCreate: false,
            search: "",
            currentPage: 1,
        }
    }
    componentDidMount() {
        this.props.dispatch(getListRestaurantEmail())
    }

    handleNext = () => {
        //console.log()
        this.setState((prevState) => ({ currentPage: prevState.currentPage + 1 }))
    }

    handlePrev = () => {
        //console.log()
        this.setState((prevState) => ({ currentPage: prevState.currentPage - 1 }))
    }
    handleSearch = (search) => {
        console.log(search)
        this.setState(() => ({ search }))
    }

    data = () => {
        const { search, currentPage } = this.state;
        if (search.length > 0) {
            const data = this.props.Restaurant_Email.filter((item) => {
                return item.email.toLowerCase().includes(search.toLowerCase())
            });
            console.log(data)
            //this.setState(()=>({data})) Menu Item 1
            return data;
        }
        return pagination(this.props.Restaurant_Email, currentPage, 5)
        //return this.props.Restaurant_Email
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
                            <AdminControl showCreate={this.renderCreateForm} back={this.handleBack} isShowBack={this.state.showCreate} query={this.handleSearch} searchFor={"email"} />
                            {
                                this.state.showCreate ? <CreateForm /> : <AdminTable canNext={this.state.currentPage === Math.ceil(this.props.Restaurant_Email.length / 5)} canPrev={this.state.currentPage === 1} next={this.handleNext} prev={this.handlePrev} type="Restaurant_Email" titleTable={['email', "restaurant id", "updated"]} data={this.data()} />
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
        Restaurant_Email: state.Restaurant_Email
    }
}

export default connect(mapStateToProps)(RestaurantEmailPage)