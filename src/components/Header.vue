<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="py-2" href="#">
            <img src="https://cdn.dribbble.com/assets/ball-2x-9e3e54dfc28eb6d5851a1f1c9f724109a3991b61e499cc6b1bf41960d4196027.png">
          </a>
           <a href="/" class="navbar-brand">Pizza点餐系统</a>
            <ul class="navbar-nav">
              <li><router-link to="/home" class="nav-link">主页</router-link></li>
              <li><router-link to="/menu" class="nav-link">菜单</router-link></li>
              <li><router-link to="/admin" class="nav-link">管理</router-link></li>
              <li><router-link to="/about" class="nav-link">关于我们</router-link></li>
            </ul>
            <ul class="navbar-nav ml-auto">
              <li><router-link to="/login" class="nav-link">登陆</router-link></li>
              <li><router-link to="/register" class="nav-link">注册</router-link></li>
            </ul>
        </nav>
    </header>
</template>
<script>
  // export default{
  //   data() {
  //     return {
  //       homeLink: '/'
  //     }
  //   }
  // }
</script>
<style scoped>
  .py-2 img{
    padding: 8px;
    width: 35px;
    height: 38px;
  }
</style>

