<template>
  <div class="secure" @touchstart="touchbegin($event)" @touchmove="touchmo($event)" @touchend="thouchen($event)">
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
    <div class="item">
      <img src="../assets/img/insure4.png" alt="">
      <div class="item_content">
        <h3>出行意外保障</h3>
        <p>乘坐飞机|火车|汽车|轮船安全保障</p>
        <p class="belong">众安保险</p>
        <h5 class="value">免费</h5>
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
   <!--  <div class="load">加载更多</div> -->
  </div>
</template>

<script>
export default {
	data(){
		return {
			startY:0,
			endY:0,
			pagey3:0,
      ht:0,
      vh:0,
      st:0,
			tm:[]
		}
	},
	methods:{
    gg: function() {
      alert("success")
    },
    // 获取可视区域高度
    getVisibleHeight: function(element) {
      if (element) {
        return element.clientHeight
      } else {
        return document.documentElement.clientHeight
      }
    },
    // 获取滚动区域高度
    getScrollHeight: function(element) {
      if (element) {
        return element.scrollHeight
      } else {
        return document.documentElement.scrollHeight
      }
    },
    // 获取滚动位置信息
    getScrollTop: function(element) {
      if (element) {
        return element.scrollTop
      } else {
        return document.documentElement.scrollTop
      }
    }, 
    // touchstart
		touchbegin:function(event){
      var me = this
			// let touch = event.targetTouches[0];
			let py1 = event.targetTouches[0].pageY;
			me.startY = py1; 
      me.ht = me.$el.offsetHeight - me.getVisibleHeight(me.element)
      me.vh = me.getVisibleHeight(me.element)
      me.st = me.getScrollHeight(me.element)
		},
    // touchmove
		touchmo: function(event){
      var me = this
			// let touch = event.targetTouches[0];
			let py2 = event.targetTouches[0].pageY;
			this.endY = py2;
		},
		thouchen: function(event){
      var me = this
			let py3 = (me.startY - me.endY);
			me.pagey3 = py3;
      let h1 = me.ht + me.vh + 5.6 * (html.getBoundingClientRect().width / 25)
      let h2 = me.st
      if (me.pagey3>10&&h1>h2) {
        me.do()
      }

      else if(me.pagey3<-10&&me.$el.scrollTop<=10){
        alert('hello')
      }
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
		},
    
    
	},

	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import "../assets/style/secure.scss"
</style>