<template>
  <div>
    
    <div class="slideshow-container">
      
      <!-- Full-width images with number and caption text -->
      <!-- <div class="mySlides fade">
        <div class="numbertext">1 / 3</div>
        <img class="mySlides-image" src="./img1.jpg">
        <div class="text">Caption Text</div>
      </div>

      <div class="mySlides fade">
        <div class="numbertext">2 / 3</div>
        <img class="mySlides-image" src="./img2.jpg">
        <div class="text">Caption Text</div>
      </div>
      
      <div class="mySlides fade">
        <div class="numbertext">3 / 3</div>
        <img class="mySlides-image" src="./img3.jpg">
        <div class="text">Caption Text</div>
      </div> -->
      
      <div  v-for="item in slides" :key="item.id" class="mySlides fade" :class="{showSlide : (item.id == slideIndex)}" @mouseout="restart" @mouseover="pause">
        <div class="numbertext">{{ item.id }} / {{ slides.length }}</div>
        <img class="mySlides-image" :src="item.img">
        <div class="text">{{ item.text }}</div>
      </div> 

      <p class="prev" @click="plusSlides(-1)">&#10094;</p>
      <p class="next" @click="plusSlides(1)">&#10095;</p>

    </div>
    <br>
    
    <!-- the dots -->
    <div class="dots">
      <!-- <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span> -->
      <span v-for="item in slides" 
            :key="item.id" 
            class="dot" 
            :class="{ active : (item.id == slideIndex) }"
            @click="gotoSlides(item.id)">
      </span>
    </div>




  </div>
</template>

<script>
  export default {
    data(){
      return{
        slides: [
          { id: 1, img: "/static/img1.jpg", text:"Caption one"},
          { id: 2, img: "/static/img2.jpg", text:"Caption two"},
          { id: 3, img: "/static/img3.jpg", text:"Caption three"},
          { id: 4, img: "/static/img2.jpg", text:"Caption four"},
        ],
        slideIndex : 1,
        intervalid: ''
      }
    },
    methods:{
      plusSlides(n){
        this.slideIndex += n
        if(this.slideIndex > this.slides.length){
          this.slideIndex = 1
        }
        if(this.slideIndex < 1){
          this.slideIndex = this.slides.length
        }

      },
      gotoSlides(n){
        this.slideIndex = n
      },
      pause(){
        console.log("clearInterval")
        clearInterval(this.intervalid)
      },
      restart(){
        console.log("restart")
        // this.intervalid = setInterval(()=>{
        //   this.plusSlides(1)
        // }, 3500)
        this.setIntervalFunction()
      },
      setIntervalFunction(){
        this.intervalid = setInterval(()=>{
          this.plusSlides(1)
        }, 3500)
      }
    },
    mounted(){
      // this.intervalid = setInterval(()=>{
      //   this.plusSlides(1)
      // }, 3500)
      this.setIntervalFunction()
    }
    
  }
</script>

<style scoped>
* {
  /* border: 1px solid black; */
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.slideshow-container{
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* hide the images by default */
.mySlides{
  display: none;
}

.mySlides .mySlides-image{
  width: 100%;

}

/* previous & next buttons */
.prev, .next{
  cursor: pointer;
  color: white;
  
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: auto;
  padding: 16px;
  /* font-weight: bold; */
  font-size: 18px;
  transition: 1s ease;
  border-radius: 0 5px 5px 0;
  /* margin-top: -22px; */
}

/* position the "next button" to the right */
.next{
  right: 0;
  border-radius: 5px 0 0 5px;
}

/* on hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover{
  background-color: rgba(0,0,0,0.8);
}

/* caption text */
.text {
  position: absolute;
  bottom: 4px;
  width: 100%;
  color: #f2f2f2;
  font-size: 15px;
  padding: 12px;
  text-align: center;
  background-color: rgba(0,0,0,0.6);
  overflow: hidden;
}

/* number text */
.numbertext{
  position: absolute;
  top: 0;
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
}


/* the dots/bullets/indicators */
.dots{
  text-align: center;
}
.dot{
  height: 15px;
  width: 15px;
  display: inline-block;
  border-radius: 50%;
  cursor: pointer;
  background-color: #bbb;
  transition: background-color 0.6s ease;
  margin: 0 2px;
}

.active, .dot:hover{
  background-color: #717171;
}

.showSlide{
  display: block;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}


@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}



</style>
