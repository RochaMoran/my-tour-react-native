import { appState } from '../helpers/const/appState'
import {Welcome, Register, Login, Home} from './index';

export const Routes:appState["routes"] = {
    root: [
        {
            name: "Welcome",
            component: Welcome, 
        },
        {
            name: "Register",
            component: Register, 
        },
        {
            name: "Login",
            component: Login, 
        },
        {
            name: "Home",
            component: Home, 
        },
    ],
    auth: [
        {
            name: "Home",
            component: Home, 
        },
    ]
}