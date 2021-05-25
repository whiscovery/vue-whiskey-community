import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/List.vue'
import Input from '../views/Input.vue'
import Detail from '../views/Detail.vue'
import Study from '../views/Study.vue'
import MyWorld from '../views/MyWorld.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import store from '../store'
Vue.use(VueRouter)

const requireAuth = () => (to, from, next) => {
  if (store.getters.isAuthenticated) return next()
  next('/login?returnPath=myworld')
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: List
  },
  {
    path: '/list',
    name: 'list',
    component: List
  },
  {
    path: '/input',
    name: 'Input',
    component: Input
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/study',
    name: 'Study',
    component: Study
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/myworld',
    name: 'MyWorld',
    component: MyWorld,
    beforeEnter: requireAuth()
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
