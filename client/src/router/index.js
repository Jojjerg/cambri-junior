import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'CambriJunior - онлайн курс для дошкольников',
      }
    },
    {
      path: '/adminpanel',
      name: 'Adminpanel',
      component: () => import('../views/Adminpanel.vue'),
      meta: {
        title: 'Панель администратора',
        requiresAdmin: true
      }
    },
    {
      path: '/lessons',
      name: 'Lessons',
      component: () => import('../views/Lessons.vue'),
      meta: {
        title: 'CambriJunior - практический материал',
        requiresAuth: true
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/Register.vue'),
      meta: {
        title: 'Регистрация пользователя',
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue'),
      meta: {
        title: 'Авторизация пользователя',
        //requiresGuest: true
      },
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/Profile.vue'),
      meta: {
        title: 'Личный кабинет',
        requiresAuth: true
      }
    },
    {
      path: '/adminpanel',
      name: 'Admin',
      component: () => import('../views/Adminpanel.vue'),
      meta: {
        title: 'Панель администратора',
        requiresAuth: true
      }
    },
    {
      path: '/logout',
      name: 'Logout',
      component: () => import('../views/Logout.vue'),
    },
    {
      path: '/profile',
      name: 'ChangeCredit',
      component: () => import('../views/Profile.vue'),
      meta: {
        requiresAuth: true
      }
    },
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
//Перенаправление на страницу входа
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})
export default router

