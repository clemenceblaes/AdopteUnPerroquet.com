import Home from './pages/Home.vue';
import Register from './pages/Register.vue';
import Login from './pages/Login.vue';
import ParrotMenu from './pages/ParrotMenu.vue';
import ParrotSubmenu from './pages/ParrotSubmenu.vue';
import Guide from './pages/Guide.vue';

export default [
    {
        path: '/',
        component: Home,
        name: "Home",
    },
    {
        path: '/register',
        component: Register,
        name: "Register",
    },
    {
        path: '/login',
        component: Login,
        name: "Login",
    },
    {
        path: '/parrots',
        component: ParrotMenu,
        name: "ParrotMenu",
    },
    {
        path: '/parrotSubmenu',
        component: ParrotSubmenu,
        name: "ParrotSubmenu",
    },
    {
        path: '/guide',
        component: Guide,
        name: "Guide",
    }
]
