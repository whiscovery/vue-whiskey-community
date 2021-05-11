import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/List.vue'
import Input from '../views/Input.vue'
import Detail from '../views/Detail.vue'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
