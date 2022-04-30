import Tabs from '../components/moleculs/tabs';
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
    ],
    auth: [
        {
            name: "Tabs",
            component: Tabs, 
        }
    ]
}