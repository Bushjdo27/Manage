import {
    AUTH_SIGN_IN,
    AUTH_SIGN_OUT
} from './constantType';
import { signIn, getUser, signOut } from '../utils'

export const authSignIn = async (req) => {
    //const userData = await axios.post('')
    const data = await signIn(req.email, req.password);
    //console.log(`${data.headers}`)
    const user = {
        headers: data.headers,
        email: data.data.data.email,
        uid: data.data.data.uid
    }
    //console.log(data)
    //console.log(user)
    return {
        type: AUTH_SIGN_IN,
        payload: user
    }
}


export const SignOut = () => {
    signOut();
    return {
        type: AUTH_SIGN_OUT
    }
}


export const isLogin = () => {
    const user = getUser();
    if (user != null) {
        return {
            type: AUTH_SIGN_IN,
            payload: user
        }
    } else {
        return {
            type: AUTH_SIGN_IN,
            payload: {}
        }
    }
}


//======= Order =======
