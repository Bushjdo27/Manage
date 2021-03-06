import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminTable from '../components/AdminTable';
import AdminControl from '../components/AdminControl'
import Header from '../components/Header';
import SideNav from '../components/SideNav'
//import { getListOrder } from '../actions/orderActions';
import CreateForm from '../components/Forms/Restaurant/Create'
import { pagination, isLogin } from '../utils/index'
// lam viec voi action

class OrderPage extends Component {

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
            //this.props.dispatch(getListOrder())
        } else {
            this.props.history.push('/login')
        }
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
        //console.log(search)
        this.setState(() => ({ search }))
    }
    hideCreateForm = () => {
        this.setState(() => ({ showCreate: false }))
    }

    data = () => {
        const { search, currentPage } = this.state;
        if (search.length > 0) {
            const data = this.props.Orders.filter((item) => {
                return item.email.toLowerCase().includes(search.toLowerCase())
            });
            //console.log(data)
            //this.setState(()=>({data})) Menu Item 1
            return data;
        }
        return pagination(this.props.Orders, currentPage, 5)
        //return this.props.Orders
    }

    renderCreateForm = () => {
        //this.setState(() => ({ showCreate: true }))
    }
    handleBack = () => {
        this.setState(() => ({ showCreate: false }))
    }
    render() {
        return (
            <div>
                <Header name="Order" />
                <div className="container">
                    <SideNav redirect={() => { this.props.history.push('/login') }} />
                    <div className="content">
                        <div className="admin">
                            <AdminControl showCreate={this.renderCreateForm} back={this.handleBack} isShowBack={this.state.showCreate} query={this.handleSearch} searchFor={"Email"} />
                            {
                                this.state.showCreate ? <CreateForm hideCreate={this.hideCreateForm} /> : <AdminTable canNext={this.state.currentPage >= Math.ceil(this.props.Orders.length / 5)} canPrev={this.state.currentPage === 1} next={this.handleNext} prev={this.handlePrev} type="Order" titleTable={['Email', "Name", "Infor", "Food", "Option", "Total"]} data={this.data()} />
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
        Orders: state.Orders
    }
}

export default connect(mapStateToProps)(OrderPage)