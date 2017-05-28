<template>
  <div class="secure" @touchstart="touchbegin" @touchmove="touchmo" @touchend="thouchen">
    <div class="item">
      <img src="../assets/img/insure1.png" alt="">
      <div class="item_content">
        <h3>碎屏保</h3>
        <p>魅族原装屏保障，碎屏免费维修</p>
        <p class="belong">众安保险</p>
        <h5 class="value">￥69 <span>/年</span></h5>
      </div>
    </div>
    <div class="item">
      <img src="../assets/img/insure2.png" alt="">
      <div class="item_content">
        <h3>魅族手机延保服务</h3>
        <p>故障免费维修，安心用更久</p>
        <p class="belong">魅族官方</p>
        <h5 class="value">￥39 <span>/年</span></h5>
      </div>
    </div>
    <div class="item">
      <img src="../assets/img/insure3.png" alt="">
      <div class="item_content">
        <h3>步步保</h3>
        <p>每天5000步，免费获取10万元重疾保障</p>
        <p class="belong">众安保险</p>
        <h5 class="value">免费</h5>
      </div>
    </div>
    <div class="item">
      <img src="../assets/img/insure4.png" alt="">
      <div class="item_content">
        <h3>出行意外保障</h3>
        <p>乘坐飞机|火车|汽车|轮船安全保障</p>
        <p class="belong">众安保险</p>
        <h5 class="value">免费</h5>
      </div>
    </div>
    <div class="item">
      <img src="../assets/img/insure1.png" alt="">
      <div class="item_content">
        <h3>碎屏保</h3>
        <p>魅族原装屏保障，碎屏免费维修</p>
        <p class="belong">众安保险</p>
        <h5 class="value">￥69 <span>/年</span></h5>
      </div>
    </div>
    <div class="item">
      <img src="../assets/img/insure2.png" alt="">
      <div class="item_content">
        <h3>碎屏保</h3>
        <p>魅族原装屏保障，碎屏免费维修</p>
        <p class="belong">众安保险</p>
        <h5 class="value">￥69 <span>/年</span></h5>
      </div>
    </div>
    <div class="item" v-for="ts in tm">
    	<img width="20" height="100" :src="ts.src">
    	<div class="item_content">
    	  <h3>{{ts.htit}}</h3>
          <p>{{ts.pcon}}</p>
          <p class="belong">{{ts.ptit}}</p>
          <h5 class="value">￥69 <span>/年</span></h5>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
	data(){
		return {
			pagey1:0,
			pagey2:0,
			pagey3:0,
			tm:[
				// {src:'./static/img/insure2.png',
				// htit:'nihoa',
				// pcon:'zheyang',
				// ptit:'mianfei'}
			]
		}
	},
	methods:{
		touchbegin:function(event){
			let touch = event.targetTouches[0];
			let py1 = touch.pageY;
			this.pagey1 = py1;
			console.log(py1)
		},
		touchmo: function(event){
			let touch = event.targetTouches[0];
			let py2 = touch.pageY;
			this.pagey2 = py2;
		},
		thouchen: function(event){
			let py3 = Math.abs(this.pagey1 - this.pagey2);
			this.pagey3 = py3;
			console.log(py3);
      if (this.pagey3>10) {
        this.do()
      }
      console.log(this.tm);
		},
		do: function(){
      let that = this;

      this.$ajax.get("./static/secure.json").then(function(response){
        console.log(response);
        let list = response.data;
        for(let j = list.length-1;j>=0;j--){
          that.tm.push(list[j])
        }
        
      }).catch(e=>{console.log(e)})
			console.log(this.tm);		
		}		
	},
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import "../assets/style/secure.scss"
</style>