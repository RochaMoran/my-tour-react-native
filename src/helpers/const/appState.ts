export interface appState {
    itemRoute: {
        name: string,
        component: any
    },
    routes: {
        auth: Array<appState["itemRoute"]>,
        root: Array<appState["itemRoute"]>
    },
    context: {
        children: JSX.Element
    },
    interfaceSite: {
        title: string;
        children: any;
        [x: string]: any;
    }
}