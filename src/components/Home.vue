<template>
  <div class="home">
    <Bannel></Bannel>
    <Connect></Connect>
    <Selective_finance></Selective_finance>
    <Insurance></Insurance>
  </div>
</template>

<script>
import Bannel from './template/Bannel'
// import bb from './template/bb'
import Connect from './template/Connect'
import Selective_finance from './template/Selective_finance'
import Insurance from './template/Insurance'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgurl: '../static/img/free.png'
    }
  },
  components: { 
    Bannel,
    Connect,
    Selective_finance,
    Insurance
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  width: 100%;
  padding: 0;
  margin: 0;
}


</style>
