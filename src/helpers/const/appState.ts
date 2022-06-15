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
        children?: any,
        [x: string]: any,
    },
    interfaceHeaderView: {
        title: string,
        create?: boolean,
        action?: any,
        image?: string
    },
    interfaceSiteCreate: {
        _id?: number,
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
        updateShow: any,
        updateOpen: any,
        updateClose: any
    },
    interfaceSiteHome: {
        id?: number,
        name?: string,
        country?: string,
        imgUrl?: any,
        type: string
    },
    interfaceContainerSite: {
        type: string,
        title: string,
        sites: any,
        redirectSite?: any,
        getMoreSites?: any
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
        stylesHeader?:any,
        addStyles?: any,
        children?: JSX.Element
    },
    interfaceOneSite: {
        name: string,
        description: string,
        imgUrl: string,
        country: string,
        covidMeasures: {
            vaccineCovid: boolean,
            faceMask: boolean,
            statusOpen: boolean,
        },
        attentionSchedules: {
            open: string,
            close: string
        },
        location: {
            latitude: number,
            longitude: number,
            latitudeDelta: number,
            longitudeDelta: number
        },
        _id: number,
        created_by: number,
        createdAt: Date,
        updateAt: Date
    },
    interfaceSiteContext: {
        all: Array<appState["interfaceOneSite"]>,
        user: Array<appState["interfaceOneSite"]>,
        page: number,
        totalPages: number
    }
}