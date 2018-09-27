import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
// 全局守卫
// router.beforeEach((to,from,next) => {
//   if(to.path === '/login' || to.path === '/register'){
//     console.log(to)
//     next() 
//   }else{
//     alert('还没有登录，请先登录')
//     next('./login')
//   }
// })
//后置钩子
// router.afterEach((to,from) => {
//   alert('确定要离开吗')
// })
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
