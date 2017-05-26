<template>
  <div class="bannel" v-on:touchenter="stop" @touchleave="go" @mouseenter="stop" @mouseleave="go">
    <transition-group  tag='ul' class="slide" name='image'>
      <li v-for='(image,index) in img' :key='index' v-show='index===mark'>
        <a><img :src="image.src"></a>
      </li>
    </transition-group>
    <div class="bullet">
      <span v-for='(item,index) in img.length' :class="{'active':index===mark}" @click='change(index)'></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {  
    return {  
      mark: 0,
      timer: null,
        img: [
          {
        	src:"./static/img/free.png",
        	title:'展示图片'
          },
          {
            src:"./static/img/all.png",
        	title:'展示图片'
          }, 
          {  
            src:"./static/img/teach.png",
        	title:'展示图片'
          },
          {
            src:"./static/img/test.png",
        	title:'展示图片'
          },
          {
            src:"./static/img/travail.png",
        	title:'展示图片'
          }          
        ]                       
    }  
  },  
  created() {
  	this.$nextTick(() => {
      this.timer = setInterval(() =>{this.autoPlay()},3000)
    })
      // this.play()
    
  },
  methods: {
    go() {
      this.timer = setInterval(()=>{this.autoPlay()},3000)
    },
    stop() {
      clearInterval(this.timer)
      this.timer = null
      console.log('aaa')
    },
    change(i){  
      this.mark = i      
    },
    autoPlay() {
      this.mark++
      if (this.mark === 5) {
        this.mark = 0
        return
      } 
    }
    // play() {
    //   this.timmer = setInterval(this.autoPlay,3000)
    // }
  },
  // methods:{
  	// stop() {
  	// 	clearInterval(this.timer)
  	// 	this.timer = null;
  	// 	console.log(this.timer)
  	// },
  	// change(i){  
   //    this.mark = i      
  	// },
  	// autoPlay() {
  	//   this.mark++
  	//   if (this.mark === 5) {
  	//   	this.mark = 0
  	//   	return
  	//   }	
  	// },
  	// play() {
  	// 	this.timmer = setInterval(this.autoPlay,3000)
  	// }
  // },  
  computed: {      
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
@import "../../assets/style/bannel.scss"
</style>