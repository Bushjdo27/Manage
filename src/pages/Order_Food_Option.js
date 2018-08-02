import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminTable from '../components/AdminTable';
import AdminControl from '../components/AdminControl'
import Header from '../components/Header';
import SideNav from '../components/SideNav'
import { getOrderFoodOption } from '../actions/orderFoodOptionActions';
import CreateForm from '../components/Forms/Order_Food_Options/Create'
import {pagination} from '../utils/index'

class OrderFoodOptionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showCreate: false,
            search: "",
            currentPage: 1,
        }
    }
    componentDidMount() {
        this.props.dispatch(getOrderFoodOption())
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
            const data = this.props.Order_Foods_Options.filter((item) => {
                return item.name.includes(search)
            });
            console.log(data)
            //this.setState(()=>({data})) Menu Item 1
            return data;
        }
        return pagination(this.props.Order_Foods_Options , currentPage , 5)
        //return this.props.Order_Foods_Options
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
                                this.state.showCreate ? <CreateForm /> : <AdminTable next={this.handleNext} prev={this.handlePrev} type="Order_Food_Option" titleTable={['name', "type", "updated", "photo"]} data={this.data()} />
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
        Order_Foods_Options: state.Order_Foods_Options
    }
}

export default connect(mapStateToProps)(OrderFoodOptionPage)