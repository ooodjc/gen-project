import { createRouter,createWebHistory} from "vue-router";
import getRoute from '@/utils/getRoute'
/* Layout */
import Layout from '@/layout/index.vue'

//侧边栏路由必须含有children
const routes = [
    {
		path: '/',
		redirect: '/index',
	},
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        children: [
            {
                path: "/index",
                name: "index",
                component: () => import('@/view/index/index.vue'),
                meta: { title: '首页', icon: 'Document'}
            },
            {
                path: "/mine",
                name: "Mine",
                component: () => import('@/view/mine/index.vue'),
                meta: { title: 'UserInfo', icon: 'Document', hidden: true }
            },

        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/view/login/index.vue'),
    },
]

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})

//路由守卫
router.beforeEach((to, from, next) => {
    /* if(router.getRoutes().findIndex(item => item.path === to.path) !== -1){
        next()
        return
    }else{
        let r = getRoute(to.path)
        r.component = () => import(`../view/${r.componentstr}/index.vue`)
        router.addRoute('Layout', r)
        next(r)
    } */
    next()
});

export default router