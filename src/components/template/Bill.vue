<!-- Bill.vue -->
<template>
  <div class="bill">
    <div class="back">
    	<router-link to="/"><p>&lt; &nbsp;&nbsp;&nbsp;&nbsp;记账本</p></router-link>
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
    				<div id="box1" class="pie"></div>
    			</div>
    			<div id="tra" class="hold">
    				<div id="box2" class="pie"></div>
    			</div>
    			<div id="stu" class="hold">
    				<div id="box3" class="pie"></div>
    			</div>
    			<div id="spt" class="hold">
    				<div id="box4" class="pie"></div>
    			</div>
    			<div id="oth" class="hold">
    				<div id="box5" class="pie"></div>
    			</div>
    		</div>
    		<div class="detail">
    			<div class="eat">食品{{foot}}</div>
    			<div class="tra">交通{{tra}}</div>
    			<div class="stu">学习{{stu}}</div>
    			<div class="spt">运动{{spt}}</div>
    			<div class="oth">其他{{oth}}</div>
          <div>总计： {{count}}</div>
    		</div>
    	</div>
<!--     	<div class="tree" id="tree" style="width:10rem;">
        <p>ratfoot{{ratfoot}}</p>
        <p @click="trans('box1')">测试计算</p>
        <p>{{spt}}</p>
        <p>{{count}}</p>
    	</div> -->

    </div>
    <div class="foot">
    	<router-link to="/Put">
        <div class="take">
    		  <p>记一笔</p>
    	  </div>
      </router-link>  
    </div>    
  </div>
</template>
	
<script>
import {mapGetters} from 'vuex'
export default {
  name: 'bill',
  data() {
  	return {
      ratfoot:0,
      rattra:0,
      ratstu:0,
      ratspt:0,
      ratoth:0,
      ratio:[]
  	}
  },
  // components: { 
  //   Put
  // },
  methods: {
    trans: function() {
      let arr0 = [];
      let arr1 = [];
      let arr2 = [];
      for(let i=0;i<4;i++){
        arr0[i] = Math.floor(this.ratio[i]*360)
        console.log(arr0[i])
      }
      arr0[4] = 360 - arr0[0] -arr0[1] -arr0[2] -arr0[3]
      console.log(arr0)
      arr1[0] = 0;
      arr1[1] = arr0[0];
      arr1[2] = arr0[0] + arr0[1]
      arr1[3] = arr0[0] + arr0[1] + arr0[2]
      arr1[4] = arr0[0] + arr0[1] + arr0[2] + arr0[3]
      console.log(arr1)
      
      let pien = document.getElementsByClassName('pie')
      let holdn = document.getElementsByClassName('hold')
      for(var j = pien.length-1;j>=0;j--){
        holdn[j].style.transform = 'rotate(' + arr1[j] + 'deg)'
        pien[j].style.transform = 'rotate(' + arr0[j] + 'deg)'
      }
    },
    calraito: function(){
      this.ratfoot = this.foot/this.count
      this.ratio.push(this.ratfoot)
      this.rattra = this.tra/this.count
      this.ratio.push(this.rattra)
      this.ratstu = this.stu/this.count
      this.ratio.push(this.ratstu)
      this.ratspt = this.spt/this.count
      this.ratio.push(this.ratspt)
      this.ratoth = this.oth/this.count
      this.ratio.push(this.ratoth)

    }

  },
  computed: {
  	count: function(){
  		return this.foot + this.tra + this.stu + this.spt + this.oth;
  	},
    ...mapGetters([   
    'doubleCount',
    'foot',
    'tra',
    'stu',
    'spt',
    'oth'
    ])
  },
  created(){

  },
  mounted() {
	  // this.sty(),
    this.calraito()
    this.trans()
	}
}
</script>

<style lang="sass">
@import "../../assets/style/bill.scss"
</style>