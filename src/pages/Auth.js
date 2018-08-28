import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authSignIn } from '../actions/authAction';
import Spinner from '../components/Spinner';
import { isLogin } from '../utils'
class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            username: '',
            processing: false,
            error: false
        }
    }

    componentDidMount() {
        if (isLogin()) {
            this.props.history.push('/')
        }
    }

    handleEmailChange = (e) => {
        let value = e.target.value;
        let email = value.trim()
        this.setState(() => ({ email, error: false }))
    }

    handlePassChange = (e) => {
        let value = e.target.value;
        let password = value.trim()
        this.setState(() => ({ password, error: false }))
    }


    handleSignIn = (e) => {
        e.preventDefault()
        if (this.state.email.length > 0 && this.state.password > 0) {
            this.setState(() => ({ processing: true }))
            authSignIn({ email: this.state.email, password: this.state.password }).then((result) => {
                //this.props.dispatch(order())
                this.props.dispatch(result);
                //console.log(this.props);
                this.props.history.push('/')
            }).catch(() => {
                this.setState(() => ({ processing: false, error: true }))
            })
        }

    }

    renderSignInForm = () => {
        return (
            <div>
                <form action="Post" className="form__auth" onSubmit={this.handleSignIn}>
                    <input type="email" placeholder="Email" onChange={this.handleEmailChange} value={this.state.email} />
                    <input type="password" placeholder="Password" onChange={this.handlePassChange} value={this.state.password} />
                    {this.state.error && <p className="error-warn">Login Fails , please check again</p>}
                    {this.state.processing ? <Spinner /> : <button className="btn__auth__in">Sign In</button>}
                </form>
            </div>

        )
    }

    render() {
        return (
            <div className="login">
                <div className="login__content">
                    <h3>{'Sign In'}</h3>

                    {this.state.showSignUp ? this.renderSignUpForm() : this.renderSignInForm()}
                </div>
            </div>
        )

    }
}


const mapStateToProps = (state) => {
    return {
        User: state.Auth
    }
}



export default connect(mapStateToProps)(Auth);