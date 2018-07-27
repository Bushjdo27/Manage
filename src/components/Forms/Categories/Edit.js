import React from 'react';
import { connect } from 'react-redux';
import Form from './Create';
import Header from '../../Header'

class EditCategories extends Component {
    render() {
        return (
            <div>
                <Header />
                <Form type="edit" res={this.props.Restaurant} />
            </div>
        )
    }
}


const mapStateToProps = (state, props) => {
    return {
        Category: state.Categories.find(item => parseInt(item.id === props.match.params.id))
    }
}

export default connect(mapStateToProps)(EditCategories)