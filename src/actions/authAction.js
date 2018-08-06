import {
    AUTH_SIGN_IN,
    AUTH_SIGN_OUT
} from './constantType';
import { signIn, signOut } from '../utils'

export const authSignIn = async (req) => {
    //const userData = await axios.post('')
    const res = await signIn(req.email, req.password);
    //console.log(`${data.headers}`)
    const user = {
        email: res.data.email,
        uid: res.data.uid
    }
    //console.log(data)
    //console.log(user)
    return {
        type: AUTH_SIGN_IN,
        payload: user
    }
}


export const SignOutUser = () => {
    signOut();
    return {
        type: AUTH_SIGN_OUT
    }
}



//======= Order =======
