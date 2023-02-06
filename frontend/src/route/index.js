import { createRouter,createWebHashHistory} from "vue-router";

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
        ]
    },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

//路由守卫
router.beforeEach((to, from, next) => {
    next()
});

export default router