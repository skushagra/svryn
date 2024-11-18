# Svryn | Payload-Type Driven API's

This repository is a wrapper over the Node http module, which allows user to create web servers which are independent from `API endpoint based routing`. In theory, this means that routes will truly respond to the type of inputs given to them, rather than the response based on clustering over an API endpoint.

```
Based on the HTTP module available in the Node JS docs(https://nodejs.org/api/http.html)
```

# Documentation

The following three form the core of any Svryn Server

1. Route Clusters
2. Service Methods
3. Serialization Schema


## Route Clusters
Unlike classical server the routing in Svyrn happens using payload types. Once the server is created, you can use the router functions to define a request response cycle. 
```typescript
server.post<T>(service_callback) // this is not recommended
```
Whenever the server encounters a post request and the type of the payload matches T, the `server_callback` will be executed. We can create a router cluster and register multiple routes under a common name.

```typescript
class StudentCluster implements RouteCluster {

  post<T>(request)
}
```

For example, lets take a classic API route `/api/v1/student`, we can group this route under the route cluster called `Student` which can have its own router functions. This will have not effect on the working of the http server but make your code more redable and maintainable, since the Route Cluster is independent of the Server class, it can be defined seperately and independently of the server.

## Service Methods
Svryn has two implementations for service methods, it has compatibility for express like service/controller functions but it also has custom implementation for the service layer.
