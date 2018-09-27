import Vue from 'vue'
import Router from 'vue-router'
import About from './components/about/About'
import Home from './components/Home'
import Login from './components/Login'
import Menu from './components/Menu'
import Register from './components/Register'
import Admin from './components/Admin'
//二级路由
import Express from './components/about/Express'
import Order from './components/about/Order'
import Contact from './components/about/Contact'
import History from './components/about/History'
//三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
     return { x:0,y:100 }
  },
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'homeLink',
      components: {
        default: Home,
        'orderLink': Order,
        'expressLink': Express,
        'historyLink': History
      }
    },
    {
      path: '/about',
      name: 'aboutLink',
      component: About,
      redirect: '/about/history',
      children: [{
          path: '/about/history',
          name: 'historyLink',
          component: History
        },
        {
          path: '/about/order',
          name: 'orderLink',
          component: Order
        },
        {
          path: '/about/express',
          name: 'expressLink',
          component: Express
        },
        {
          path: '/about/contact',
          name: 'contactLink',
          component: Contact,
          redirect: '/about/contact/phone',
          children: [
            {
              path: '/about/contact/phone',
              name: 'phoneNumber',
              component: Phone
            },
            {
              path: '/about/contact/personname',
              name: 'personName',
              component: PersonName
            },
          ]
        },
      ]
    },
    {
      path: '/login',
      name: 'loginLink',
      component: Login
    },
    {
      path: '/register',
      name: 'registerLink',
      component: Register
    },
    {
      path: '/menu',
      name: 'menuLink',
      component: Menu
    },
    {
      path: '/admin',
      name: 'adminLink',
      component: Admin
      // beforeEnter: (to,from,next) =>{
      //   alert('非登录状态禁止访问')
      // }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})