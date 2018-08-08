import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminTable from '../components/AdminTable';
import AdminControl from '../components/AdminControl'
import Header from '../components/Header';
import SideNav from '../components/SideNav'
import { getListRestaurant } from '../actions/resActions';
import CreateForm from '../components/Forms/Restaurant/Create'
import { pagination, isLogin } from '../utils/index'

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
        if (isLogin()) {
            //this.props.dispatch(getListRestaurant())
        } else {
            this.props.history.push('/login')
        }

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
    hideCreateForm = () => {
        this.setState(() => ({ showCreate: false }))
    }

    data = () => {
        const { search, currentPage } = this.state;
        if (search.length > 0) {
            const data = this.props.Restaurants.filter((item) => {
                return item.name.toLowerCase().includes(search.toLowerCase())
            });
            console.log(data)
            //this.setState(()=>({data})) Menu Item 1
            return data;
        }
        return pagination(this.props.Restaurants, currentPage, 5)
        //return this.props.Restaurants
    }

    renderCreateForm = () => {
        this.setState(() => ({ showCreate: true }))
    }
    handleBack = () => {
        this.setState(() => ({ showCreate: false }))
    }
    backToTable = () => {
        console.log("submit done")
    }
    render() {
        console.log(this.props.Restaurants);
        console.log(this.state.currentPage)
        return (
            <div>
                <Header name="Restaurant" />
                <div className="container">
                    <SideNav redirect={() => { this.props.history.push('/login') }} />
                    <div className="content">
                        <div className="admin">
                            <AdminControl showCreate={this.renderCreateForm} back={this.handleBack} isShowBack={this.state.showCreate} query={this.handleSearch} searchFor={"name"} />
                            {
                                this.state.showCreate ? <CreateForm hideCreate={this.hideCreateForm} back={this.backToTable} /> : <AdminTable canNext={this.state.currentPage >= Math.ceil(this.props.Restaurants.length / 5)} canPrev={this.state.currentPage === 1} next={this.handleNext} prev={this.handlePrev} type="Restaurant" titleTable={['name', "address", "phone", "updated"]} data={this.data()} />
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