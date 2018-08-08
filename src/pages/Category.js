import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminTable from '../components/AdminTable';
import AdminControl from '../components/AdminControl'
import Header from '../components/Header';
import SideNav from '../components/SideNav'
import { getCategories } from '../actions/categoriesActions';
import CreateForm from '../components/Forms/Categories/Create'
import { pagination, isLogin } from '../utils/index'

class CategoryPage extends Component {

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
            this.props.dispatch(getCategories())
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
            const data = this.props.Categories.filter((item) => {
                return item.name.toLowerCase().includes(search.toLowerCase())
            });
            console.log(data)
            //this.setState(()=>({data})) Menu Item 1
            return data;
        }

        return pagination(this.props.Categories, currentPage, 5)
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
                <Header name="Category" />
                <div className="container">
                    <SideNav redirect={() => { this.props.history.push('/login') }} />
                    <div className="content">
                        <div className="admin">
                            <AdminControl showCreate={this.renderCreateForm} back={this.handleBack} isShowBack={this.state.showCreate} query={this.handleSearch} searchFor={"name"} />
                            {
                                this.state.showCreate ? <CreateForm hideCreate={this.hideCreateForm} /> : <AdminTable canNext={this.state.currentPage >= Math.ceil(this.props.Categories.length / 5)} canPrev={this.state.currentPage === 1} next={this.handleNext} prev={this.handlePrev} search={this.state.search} type="Category" titleTable={['name', "type", "updated", "photo"]} data={this.data()} />
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
        Categories: state.Categories
    }
}

export default connect(mapStateToProps)(CategoryPage)