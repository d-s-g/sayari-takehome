import { UserController } from "./controller/UserController"
import { IndexController } from "./controller/IndexController"

const GET = "get"
const POST = "post"
const DELETE = "delete"

export const Routes = [
{
    method: GET,
    route: "/",
    controller: IndexController,
    action: "home"
},
{
    method: GET,
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: GET,
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: POST,
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: DELETE,
    route: "/users/:id",
    controller: UserController,
    action: "remove"
}]