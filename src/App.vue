<template>
  <div id="app">
    <div class="nav">
      <ul>
        <li ><router-link to="/" class="active">钱包</router-link></li>
        <li><router-link to="/Finacing">理财</router-link></li>
        <li><router-link to="/Secure">保险</router-link></li>
        <li><router-link to="/Myself">我的</router-link></li>
      </ul>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body{
  width: 100%;
  background-color: #F2F2F2;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.nav{
  position:fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 4rem;
  text-align: center;
  background-color: #e5eaf0;
}
.nav ul{
  width: 100%;
  list-style: none;
  font-size: 1.2rem;
}
.nav ul li{
  display: inline-block;
  width: 20%;
  height: 4rem;
  line-height: 4rem;
}
a{
  color: #5e5f61;
  text-decoration: none;
}
a:hover,a:active{
  cursor: text;
}
.active{
  color: red;/*#d13a27;*/
}
.main{
  width: 100%;
  margin-top: 4rem;
}
</style>
