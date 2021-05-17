import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/List.vue'
import Input from '../views/Input.vue'
import Detail from '../views/Detail.vue'
import Study from '../views/Study.vue'
import MyWorld from '../views/MyWorld.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
Vue.use(VueRouter)

const routes = [
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
    path: '/myworld',
    name: 'MyWorld',
    component: MyWorld
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
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
