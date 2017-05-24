<template>
  <div class="bannel">
    <transition-group tag='ul' class="slide" name='image'>
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
        	src:"../static/img/free.png",
        	title:'展示图片'
          },
          {
            src:require("@/assets/img/free.png"),
        	title:'展示图片'
          }, 
          {  
            src:"../static/img/free.png",
        	title:'展示图片'
          },
          {
            src:require("@/assets/img/test.png"),
        	title:'展示图片'
          },
          {
            src:require("@/assets/img/teach.png"),
        	title:'展示图片'
          }          
        ]                       
    }  
  },  
  created() {
  	this.play()
  },
  methods:{
  	change(i){  
      this.mark = i      
  	},
  	autoPlay() {
  	  this.mark++
  	  if (this.mark === 5) {
  	  	this.mark = 0
  	  	return
  	  }	
  	},
  	play() {
  		setInterval(this.autoPlay,3000)
  	}
  },  
  computed: {      
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
@import "./bannel.scss"
</style>