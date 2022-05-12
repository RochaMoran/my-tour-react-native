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
        id?: number,
        name?: string,
        imgUrl: any,
        country?: string,
        vaccineCovid?: boolean,
        faceMask?: boolean,
        statusOpen?: boolean,
        openTimes?: string,
        closeTimes?: string,
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
    },
    interfaceSiteHome: {
        id?: number,
        name?: string,
        country?: string,
        imgUrl?: any,
        type: string,
        redirectSite?: any
    },
    interfaceContainerSite: {
        type: string,
        title: string,
        sites: any,
        redirectSite?: any,
    },
    interfaceMySites: {
        site: appState["interfaceSiteCreate"],
        destroy?:any,
        update?:any
    },
    headerHome: {
        imgUrl?: string,
        title?: string,
        subTitle: string,
        stylesHeader?:any
    }
}