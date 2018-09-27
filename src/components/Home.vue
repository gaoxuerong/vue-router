<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>欢迎大家品尝pizza</h1>
        <h2>这里有你非常喜欢的披萨</h2>
        <button @click="gotoMenu" class="btn btn-success">欢迎订购</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    gotoMenu() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
  #home {
    background: url("http://p0.meituan.net/deal/e0d7f7ba0d20cb342138414442117e63174917.jpg@440w_250h_1e_1c");
    height: 85vh;
    padding: 10%;
  }
  h1,h2{
    margin: 6%;
  }
  .background{
    background-color: #eee;
    opacity: 0.8;
    max-width: 70vw;
    margin: 0 auto;
    padding: 20px 0;
  }
</style>

