<template>
    <div class="card text-dark bg-light mb-3">
    <div class="card-header">联系我们</div>
    <div class="card-body">
      <h4 class="card-title">联系我们</h4>
      <p class="card-text">1991403547@qq.com</p>
      <router-link to="/about/contact/phone">电话</router-link>
      <router-link to="/about/contact/personName">联系人</router-link>
      <router-view></router-view>
    </div>
   </div>
</template>
