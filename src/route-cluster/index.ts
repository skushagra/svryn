

export class BaseRoute {

    constructor(){}

    get<T, R=void>(callback: (arg0: T) => (R)) {}
    post<T, R=void>(callback: (arg0: T) => (R)) {}
    put<T, R=void>(callback: (arg0: T) => (R)) {}
    patch<T, R=void>(callback: (arg0: T) => (R)) {}
    delete<T, R=void>(callback: (arg0: T) => (R)) {}
}


export class RouteCluster {    

}