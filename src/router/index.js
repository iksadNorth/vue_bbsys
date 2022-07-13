import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home_Insta.vue"
import Login from "../components/Login_Insta.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/account/login",
        name: "Login",
        component: Login,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;