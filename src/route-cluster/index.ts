

export class Route {

    constructor(){}

    get<T, R=void>(callback: (arg0: T) => (R)) {}
    post<T, R=void>(callback: (arg0: T) => (R)) {}
    put<T, R=void>(callback: (arg0: T) => (R)) {}
    patch<T, R=void>(callback: (arg0: T) => (R)) {}
    delete<T, R=void>(callback: (arg0: T) => (R)) {}
}


export class RouteCluster {

    private cluster: Route[];

    constructor() {
        this.cluster = [];
    }

    add(route: Route) {
        this.cluster.push(route);
    }

}