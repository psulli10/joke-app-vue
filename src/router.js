import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import General from '@/views/General'
import Knock_knock from '@/views/Knock_knock'
import Programming from '@/views/Programming'
import Favourites from '@/views/Favourites'


Vue.use(Router)

const router = new Router ({
  routes:[
  {
    name: 'home',
    path: '',
    component: Home
  },
  {
    name: 'general',
    path: '/general',
    component: General
  },
  {
    name: 'knock_knock',
    path: '/knock_knock',
    component: Knock_knock
  },
  {
    name: 'programming',
    path: '/programming',
    component: Programming
  },
  {
    name: 'favourites',
    path: '/favourites',
    component: Favourites
  },
  ]
})

export default router;
