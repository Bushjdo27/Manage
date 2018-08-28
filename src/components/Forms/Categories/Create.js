import React, { Component } from 'react';
import { createCategory, updateCategory } from '../../../actions/categoriesActions';
import { connect } from 'react-redux';
import Spinner from '../../Spinner';
import { checkDataRequest, removetDataEdit } from '../../../utils'
import { EDIT_CATEGORIES } from '../../../actions/constantType'
//checked
class CreateCategories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.data ? props.data.name : "",
            category_type: props.data ? props.data.category_type : "",
            restaurant_id: props.data ? props.data.restaurant_id : 0,
            loading: false,
            clickSumit: false,
            error: false,
            reqFail: false
        }
    }

    componentDidMount() {
        if (this.props.type === "edit" && !this.props.data) {
            this.props.navigate("/caterogy")
        }
    }

    handleChangeName = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }))
    }

    handleChangeType = (e) => {
        const category_type = e.target.value;
        this.setState(() => ({ category_type }))
    }

    handleChangeResId = (e) => {
        const restaurant_id = e.target.value;
        this.setState(() => ({ restaurant_id }))
    }

    // renderOptions = () => {
    //     if (this.props.data_food.length > 0) {
    //         return this.props.data_food.map((item, index) => {
    //             return <option key={index} value={item.category_id}>{item.category.name}</option>
    //         })
    //     }
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log("Submiting..");
        const { name, category_type, restaurant_id } = this.state;

        this.setState(() => ({ clickSumit: true, error: false }))
        if (this.props.data) {
            //this.props.dispatch(updateCategory(this.props.data.id, this.state)).then(() => { this.props.history.goBack() })
            const data = { name, category_type, restaurant_id }
            if (!checkDataRequest(data)) {

                this.props.dispatch(updateCategory(this.props.data.id, data)).then(() => {
                    removetDataEdit(EDIT_CATEGORIES)
                    this.props.back()
                }).catch(() => {
                    this.setState(() => ({ reqFail: true, clickSumit: false }))
                })
                //return
            } else {
                this.setState(() => ({ clickSumit: false, error: true }))
            }
        } else {
            const data = { name, category_type, restaurant_id, files: e.target.elements.photo.files[0] }

            if (!checkDataRequest(data)) {

                this.props.dispatch(createCategory(data)).then(() => {
                    this.props.hideCreate()
                }).catch(() => {
                    this.setState(() => ({ reqFail: true, clickSumit: false }))
                })
                //return
            } else {
                this.setState(() => ({ clickSumit: false, error: true }))
            }
            //this.setState(() => { this.setState(() => ({ clickSumit: true })) })

        }

    }
    renderOptions = () => {
        if (this.props.Restaurants.length > 0) {
            return this.props.Restaurants.map((item, index) => {
                return <option key={index} value={item.id}>{item.name}</option>
            })
        }
    }
    render() {
        const { name, category_type, clickSumit, error, reqFail } = this.state;
        return (
            <div className="container-form">
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form__group">
                        <label><span>Name </span> <span style={{ color: 'red' }}>* :</span></label>
                        <input onChange={this.handleChangeName} className="input" value={name} name="name" type="text" placeholder="Category name" />
                    </div>
                    <div className="form__group">
                        <label><span> Category Type   </span><span style={{ color: 'red' }}>* :</span> </label>
                        <input onChange={this.handleChangeType} className="input" value={category_type} name="category_type" type="text" placeholder="Category Type only menu or catering" />
                    </div>
                    <div className="form__group">
                        <label><span> Restaurant </span><span style={{ color: 'red' }}>* :</span> </label>


                        <select className="input" onChange={this.handleChangeResId}>
                            <option value="">Select Restaurant</option>
                            {this.renderOptions()}
                        </select>
                    </div>

                    {!this.props.data &&
                        <div className="form__group">
                            <label><span>Photo</span> <span style={{ color: 'red' }}>* :</span></label>
                            <input className="input" name="photo" type="file" />
                        </div>
                    }
                    {error && <p className="error-label">You must enter all field have asterisk</p>}
                    {reqFail && <p className="error-label">Something went wrong with server, please try later</p>}
                    {
                        clickSumit ? <Spinner /> : <button type="submit" >{this.props.data ? 'Edit Category' : 'Create Category'}</button>
                    }

                </form>
            </div>

        )
    }

}

const mapStateToProps = (state) => {
    return {
        Restaurants: state.Restaurants
    }
}

export default connect(mapStateToProps)(CreateCategories)