import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/List.vue'
import Input from '../views/Input.vue'
import Detail from '../views/Detail.vue'
import Study from '../views/Study.vue'
import MyWorld from '../views/MyWorld.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import Info from '../views/Info.vue'
import InfoList from '@/components/Info/InfoList'
import InfoInsert from '@/components/Info/InfoInsert'
import store from '../store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'list',
    component: List
  },
  {
    path: '/info',
    name: 'Info',
    component: Info,
    children: [
      { path: 'list', name: 'InfoList', component: InfoList },
      { path: 'insert', name: 'InfoInsert', component: InfoInsert }
    ]
  },
  {
    path: '/input',
    name: 'Input',
    component: Input
  },
  {
    path: '/detail/:postId',
    name: 'Detail',
    component: Detail,
    props: true
  },
  {
    path: '/study',
    name: 'Study',
    component: Study
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/myworld',
    name: 'MyWorld',
    component: MyWorld,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      requiresGuest: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // 이동시 스크롤 제일 위로
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      // Redirect to the Login Page
      next('/login')
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (store.getters.isLoggedIn) {
      // Redirect to the Login Page
      next('/myworld')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
