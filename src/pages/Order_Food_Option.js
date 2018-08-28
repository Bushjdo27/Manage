import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminTable from '../components/AdminTable';
import AdminControl from '../components/AdminControl'
import Header from '../components/Header';
import SideNav from '../components/SideNav'
import { getOrderFoodOption } from '../actions/orderFoodOptionActions';
import CreateForm from '../components/Forms/Order_Food_Options/Create'
import { pagination, isLogin } from '../utils/index'

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

        if (isLogin()) {
            this.props.dispatch(getOrderFoodOption())
        } else {
            this.props.history.push('/login')
        }
    }
    handleSearch = (search) => {
        //console.log(search)
        this.setState(() => ({ search }))
    }
    handleNext = () => {
        //console.log()
        this.setState((prevState) => ({ currentPage: prevState.currentPage + 1 }))
    }
    hideCreateForm = () => {
        this.setState(() => ({ showCreate: false }))
    }

    handlePrev = () => {
        //console.log()
        this.setState((prevState) => ({ currentPage: prevState.currentPage - 1 }))
    }

    data = () => {
        const { search, currentPage } = this.state;
        if (search.length > 0) {
            const data = this.props.Order_Foods_Options.filter((item) => {
                return item.name.toLowerCase().includes(search.toLowerCase())
            });
            //console.log(data)
            //this.setState(()=>({data})) Menu Item 1
            return data;
        }
        return pagination(this.props.Order_Foods_Options, currentPage, 5)
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
                <Header name="Order Food Option" />
                <div className="container">
                    <SideNav redirect={() => { this.props.history.push('/login') }} />
                    <div className="content">
                        <div className="admin">
                            <AdminControl showCreate={this.renderCreateForm} back={this.handleBack} isShowBack={this.state.showCreate} query={this.handleSearch} searchFor={"name"} />
                            {
                                this.state.showCreate ? <CreateForm hideCreate={this.hideCreateForm} /> : <AdminTable canNext={this.state.currentPage === Math.ceil(this.props.Order_Foods_Options.length / 5)} canPrev={this.state.currentPage === 1} next={this.handleNext} prev={this.handlePrev} type="Order_Food_Option" titleTable={['name', "type", "updated", "photo"]} data={this.data()} />
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