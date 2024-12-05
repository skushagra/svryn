import http from "http";
import { Route, RouteCluster } from "./route-cluster";

class Server {

    private server: http.Server;
    private getRoutes: {type: any, route: Route}[];
    private postRoutes: Route[];

    constructor() {
        this.server = http.createServer();
        this.getRoutes = [];
        this.postRoutes = [];
    }

    post(route: Route) {

        type routePOSTParameterType = Parameters<typeof route.get>[0];
        type routePOSTReturnType = ReturnType<typeof route.get>;

    }


    listen(port: number = 8000) {
        this.server.listen(port)
    }

}

export default Server;