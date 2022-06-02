import Tabs from '../components/moleculs/tabs';
import { appState } from '../helpers/const/appState'
import {Welcome, Register, Login, SeeSite, VerifiedAccount} from './index';

export const Routes:appState["interfaceRoutes"] = {
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
            name: "VerifiedAccount",
            component: VerifiedAccount
        }
    ],
    auth: [
        {
            name: "Tabs",
            component: Tabs, 
        }
    ]
}