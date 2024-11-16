import http from "http";
import { BaseRoute, RouteCluster } from "./route-cluster";

class Server extends BaseRoute{

    private server: http.Server;

    constructor() {
        super();
        this.server = http.createServer();
    }


    listen(port: number = 8000) {
        this.server.listen(port)
    }

}

export default Server;