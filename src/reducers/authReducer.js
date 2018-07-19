import {AUTH_SIGN_IN, AUTH_SIGN_OUT} from '../actions/constantType';


export const Auth = (state = {} , action)=>{
    switch(action.type){
        case AUTH_SIGN_IN:
            return action.payload
        case AUTH_SIGN_OUT:
            return {}
        default:
            return state
    }
}