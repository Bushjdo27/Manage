import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminTable from '../components/AdminTable';
import AdminControl from '../components/AdminControl'
import Header from '../components/Header';
import SideNav from '../components/SideNav'
import { getOrderFood } from '../actions/orderFoodAction';
import CreateForm from '../components/Forms/Order_Foods/Create'
import { pagination } from '../utils/index'

class OrderFoodPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showCreate: false,
            search: "",
            currentPage: 1,
        }
    }
    componentDidMount() {
        this.props.dispatch(getOrderFood())
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
            const data = this.props.Order_Foods.filter((item) => {
                return item.name.toLowerCase().includes(search.toLowerCase())
            });
            console.log(data)
            //this.setState(()=>({data})) Menu Item 1
            return data;
        }
        return pagination(this.props.Order_Foods, currentPage, 5)
        //return this.props.Order_Foods
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
                            <AdminControl showCreate={this.renderCreateForm} back={this.handleBack} isShowBack={this.state.showCreate} query={this.handleSearch} searchFor={"name"} />
                            {
                                this.state.showCreate ? <CreateForm /> : <AdminTable canNext={this.state.currentPage === Math.ceil(this.props.Order_Foods.length / 5)} canPrev={this.state.currentPage === 1} next={this.handleNext} prev={this.handlePrev} type="Order_Food" titleTable={["Food ID", "amount", "price", "create"]} data={this.data()} />
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
        Order_Foods: state.Order_Foods
    }
}

export default connect(mapStateToProps)(OrderFoodPage)