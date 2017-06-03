<template>
  <div class="put">
	<!-- <button @click='addtra' value="1" id="retra">tra++</button>
	<label for="retra">交通</label><br> -->
	<div class="back">
    	<router-link to="/Bill"><p>&lt; &nbsp;&nbsp;&nbsp;&nbsp;记账本</p></router-link>
    </div>
	<div class="take">
		<label for="refoot">食物</label>
		<input id="refoot" type="number">
		<button  @touchend='addfoot(tagval("refoot"))'>提交</button>
		<br>

		
		<label for="retra">交通</label>
		<input id="retra" type="number">
		<button @touchend='addtra(tagval("retra"))'>提交</button>
		<br>

		<label for="restu">学习</label>
		<input id="restu" type="number">
		<button @touchend='addstu(tagval("restu"))'>提交</button>
		<br>

		<label for="respt">运动</label>
		<input id="respt" type="number">
		<button @touchend='addspt(tagval("respt"))'>提交</button>
		<br>

		<label for="reoth">其他</label>
		<input id="reoth" type="number">
		<button @touchend='addoth(tagval("reoth"))'>提交</button>
		<br>
	</div>
  </div>
</template>

<script>
import axios from 'axios'
import {mapGetters,mapActions} from 'vuex'

export default {
  data() {
    return {
    	// foot:0
    	message:0
    }
  },
  methods: {
  	tagval:function(tag) { 	
  	console.log(tag)	
  		let val = document.getElementById(tag).value
  		let r = /^-?\\d+$/
  		if (r.test(val)) {
  			val =0
  			alert('输入数字！');
  			return val
  		} 
  		else if (val == '') {
  			val = 0
  			return val
  		}
  		else {
  			return val
  		}
  		
  	},
  	...mapActions([
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
  	'doubleCount',
  	'foot',
  	'tra',
  	'stu',
  	'spt',
  	'oth'
  	])
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import "../../assets/style/put.scss"
</style>