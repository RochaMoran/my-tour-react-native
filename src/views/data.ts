import { appState } from '../helpers/const/appState'
import {Welcome, Register, Login} from './index';

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
    ],
    auth: [
        {
            name: "Welcome",
            component: Welcome, 
        },
    ]
}