import store from "@/store";
var r = null

export default function getRoute(path) {
    const routes = store.state.userRoutes;
    extractRoute(routes, path)
    return r
}

function extractRoute(routes, path) {
    return routes.map((item) => {
        if (item.path === path) {
            r = item;
        }
        if (item.children && item.children.length > 0) {
            extractRoute(item.children, path);
        }
    })
}