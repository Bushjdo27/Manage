import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authSignIn } from '../actions/authAction';
import Spinner from '../components/Spinner';
import { isLogin } from '../utils'
class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'super_admin@example.com',
            password: '12345678',
            username: '',
            processing: false
        }
    }

    componentDidMount(){
        if(isLogin()){
            this.props.history.push('/')
        }
    }

    handleEmailChange = (e) => {
        //let email = e.target.value;

        //this.setState(() => ({ email }))
    }

    handlePassChange = (e) => {
        //let password = e.target.value;

        //this.setState(() => ({ password }))
    }


    handleSignIn = (e) => {
        e.preventDefault()
        //console.log("Sign In")
        //this.props.dispatch()
        if (this.state.email.length > 0 && this.state.password > 0) {
            this.setState(() => ({ processing: true }))
            authSignIn({ email: this.state.email, password: this.state.password }).then((result) => {
                //this.props.dispatch(order())
                this.props.dispatch(result);
                //console.log(this.props);
                this.props.history.push('/')
            })
        }

    }

    renderSignInForm = () => {
        return (
            <div>
                <form action="Post" className="form__auth" onSubmit={this.handleSignIn}>
                    <input type="email" placeholder="Email : super_admin@example.com" onChange={this.handleEmailChange} value={this.state.email} />
                    <input type="password" placeholder="Password : 12345678" onChange={this.handlePassChange} value={this.state.password} />
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