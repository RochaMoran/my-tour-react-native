export interface appState {
    interfaceItemRoute: {
        name: string,
        component: any
    },
    interfaceRoutes: {
        auth: Array<appState["interfaceItemRoute"]>,
        root: Array<appState["interfaceItemRoute"]>
    },
    interfaceContextAuth: {
        children: JSX.Element
    },
    interfaceSite: {
        title: string,
        children: any,
        [x: string]: any,
    },
    interfaceHeaderView: {
        title: string,
        create?: boolean
    },
    interfaceSiteCreate: {
        name?: string,
        country?: string,
        vaccineCovid?: boolean,
        faceMask?: boolean,
        statusOpen?: boolean,
        openTimes?: string,
        closeTimes?: string
    },
    interfaceSwitchControl: {
        title: string,
        conditional?: boolean,
        name: string,
        site: appState["interfaceSiteCreate"],
        setSite: any
    },
    interfaceTimeControl: {
        title: string,
        [x: string]: any,
    },
    interfaceTimePicker: {
        show: {
            open: boolean,
            close: boolean
        },
        updateOpen: any,
        updateClose: any
    }
}