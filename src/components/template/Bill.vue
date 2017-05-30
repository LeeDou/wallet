<!-- Bill.vue -->

<template>
  <div class="bill">
    <div class="back">
    	<router-link to="/"><p>< &nbsp;&nbsp;&nbsp;&nbsp;记账本</p></router-link>
    </div>
    <div class="tab">
    	<div class="lk">
    		<ul>
    			<li>报表</li>
    			<li>明细</li>
    		</ul>
    	</div>
    	<div class="chart">    	 
    		<div class="can">
    			<div id="eat" class="hold">
    				<div class="pie"></div>
    			</div>
    			<div id="tra" class="hold">
    				<div class="pie"></div>
    			</div>
    			<div id="stu" class="hold">
    				<div class="pie"></div>
    			</div>
    			<div id="spt" class="hold">
    				<div class="pie"></div>
    			</div>
    			<div id="oth" class="hold">
    				<div class="pie"></div>
    			</div>
    		</div>
    		<div class="detail">
    			<div class="eat">食品</div>
    			<div class="tra">交通</div>
    			<div class="stu">学习</div>
    			<div class="spt">运动</div>
    			<div class="oth">其他</div>
    		</div>
    	</div>
    	<div class="tree" id="tree" style="width:10rem;">
    		<p>this is a test</p>
    	</div>

    </div> 
    <div class="foot">
    	<div class="take">
    		<p>记一笔</p>
    	</div>
    </div>
    
    
  </div>
</template>
	
<script>
export default {
  name: 'bill',
  data() {
  	return {
  		food:50,
  		tra:30,
  		stu:80,
  		spt:20,
  		oth:20,
  		rot:40
  		// count:0
  	}
  },
  methods: {
  	sty: function(){
	  	let p = document.getElementById('tree');
	  	p.style.background = 'red';
	  	let rot1 = this.rot;
	  	console.log(rot1);
	  	p.style.transform = 'rotate(' + rot1 + 'deg)';
	  	console.log('hello')
	  	console.log(this.count)
	} 
  },
  computed: {
  	count: function(){
  		return this.food + this.tra + this.stu + this.spt + this.oth;
  	}
  },
  created(){

  },
  mounted() {
	this.sty()
	}
}
</script>

<style lang="sass">
@import "../../assets/style/bill.scss"
</style>