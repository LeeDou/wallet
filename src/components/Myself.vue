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
			<p>￥{{gassets}}</p>
		</div>
		<div class="income">
			<p>昨日收益</p>
			<p>￥{{gtearnings}}</p>
		</div>
		<div class="sum_inc">
			<p>累计收益</p>
			<p>￥{{gyearnings}}</p>
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
      message: [],

      title:0
    }
  },
  methods: {
  	
  	// do :function(){
  	// 	alert(this.name)
  	// },
  	...mapActions([
  	'cnno',
  	'cnname',
  	'ince',

  	'addfoot',
  	'addtra',
  	'addstu',
  	'addspt',
  	'addoth'
  	])
  },
  mounted() {

  },
  computed:{ 
  
  	...mapGetters([
  	'name',
  	'no',
  	'gassets',
  	'gtearnings',
  	'gyearnings',
  	
  	'doubleCount',
  	'foot',
  	'tra',
  	'stu',
  	'spt',
  	'oth'
  	])
  },
  created () {
    // this.loadData()
    // this.do()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import "../assets/style/myself.scss"
</style>