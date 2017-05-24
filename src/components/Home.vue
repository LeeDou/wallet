<template>
  <div class="home">
    <Bannel></Bannel>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>    
    <h2>Ecosystem</h2>
    <h1>hahahahahah</h1>
    <h1>hahahahahah</h1>
    <h1>hahahahahah</h1>
    <h1>hahahahahah</h1>
    <h1>hahahahahah</h1>
    <h1>hahahahahah</h1>
    <img width="100%" :src="imgurl" alt="free">
    <div class="box">
      <div class="content">
        hello word!
      </div>
    </div>
  
  </div>
</template>

<script>
import Bannel from './template/Bannel'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgurl: '../static/img/free.png'
    }
  },
  components: { Bannel }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
h1{
  width: 100%;
  background-color: green;
}

.box{
  width: 100%;
  height: 15rem;
  background-color: yellow;
}
.content{
  width: 90%;
  height: 4rem;
  margin: 0 5% 0;
  background-color: red;
}

</style>
