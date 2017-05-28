<template>
  <div class="myself">
  	<div class="head">
	  <div class="person">
	    <img src="../assets/img/personimg.png" alt="个人图片">
	  </div>
	  <div class="nickname">
	    <h1 class="name">{{name}}</h1>
	    <p class="tel">{{no}}</p>	
	  </div>
	  <div class="arrow">></div>
	  <div class="sun">
		<div class="assets">
			<p>总资产</p>
			<p>***** <span>{{gassets}}</span></p>
		</div>
		<div class="income">
			<p>昨日收益</p>
			<p>￥0.0 <span>{{gtearnings}}</span></p>
		</div>
		<div class="sum_inc">
			<p>累计收益</p>
			<p>￥0.0 <span>{{gyearnings}}</span></p>
		</div>
	</div>
	</div>
	
  
	<div class="message_list">
	  <div class="message_item it_one">
	  	<p>我的理财<span>0 ></span></p>
	  	
	  </div>
	  <div class="message_item it_two">
	  	<p>我的保单<span>0 ></span></p>
	  	
	  </div>
	  <div class="message_item it_three">
	  	<p>更多<span>></span></p>
	  	
	  </div>
	  <div>
	  	<p>name is {{name}}</p>
	  	<p>no is {{no}}</p>
		<button @click='cnname'>change name</button>
		<button @click='cnno'>change no</button>
	  </div>  
	</div>
  </div>
</template>

<script>
import axios from 'axios'
import {mapGetters,mapActions} from 'vuex'

export default {
  data() {
    return {
      person: {},
      message: []
    }
  },
  // methods: {
  //   loadData () {
  //     console.log("hello")	
  //     let that = this
  //     this.$ajax.get("./static/test.json").then(function(data){
  //     	that.message.push(data.data);
  //     	console.log(that.message);
  //     }).catch(e=>{
  //     	console.log(e)
  //     })
  //     that.message.push({name:'lee',age:'11'})
      
  //   }
  // },
  methods: mapActions([
  	'cnno',
  	'cnname'
  	]),
  mounted() {
  	
  },
  computed: mapGetters([
  	'name',
  	'no',
  	'gassets',
  	'gtearnings',
  	'gyearnings'
  	]),
  created () {
    // this.loadData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import "../assets/style/myself.scss"
</style>