<template>
    <main>
        <div class="image-box">
            <img src="/images/icon-previous.svg" alt="" class="previous" @click="plusSlides(-1)">
            <img src="/images/image-product-1.jpg" alt="" class="slides">
            <img src="/images/image-product-2.jpg" alt="" class="slides">
            <img src="/images/image-product-3.jpg" alt="" class="slides">
            <img src="/images/image-product-4.jpg" alt="" class="slides">
             <img src="/images/icon-next.svg" alt="" class="next" @click="plusSlides(1)">
            <div class="thumbnail-wrapper">
                <div class="thumbnails" @click="currentSlide(1)"><img src="/images/image-product-1-thumbnail.jpg" alt=""></div>
                <div class="thumbnails" @click="currentSlide(2)"><img src="/images/image-product-2-thumbnail.jpg" alt=""></div>
                <div class="thumbnails" @click="currentSlide(3)"><img src="/images/image-product-3-thumbnail.jpg" alt=""></div>
                <div class="thumbnails" @click="currentSlide(4)"><img src="/images/image-product-4-thumbnail.jpg" alt=""></div>
            </div>
        </div>
        <div class="description-wrapper">
            <div class="description-info">
                <p class="header">Sneaker Company</p>
                <h1>Fall Limited Edition Sneakers</h1>
                <p>These low-profile sneakers are your perfect casual wear companion.
                    Featuring a durable rubber outer sole, they'll withstand everything the weather can offer</p>
            </div>
            <div class="description-price">
                <div style="">
                    <h1>$125.00</h1>
                    <p>50%</p>
                </div>
                
                <s>$250.00</s>
            </div>
            
            
            <div class="description-action-wrapper">
                <div class="description-action" style="">
                   
                    <p> <img src="/images/icon-minus.svg" alt=""></p>
                    <p> 0 </p>
                    <p> <img src="/images/icon-plus.svg" alt=""></p>
                    <!-- <p></p> -->
                </div>
                <div class="description-button" style="">
                    <button style=""><img src="/images/icon-cart-white.svg"> Add to cart</button>
                </div>
            </div>
            
        </div>
        <!-- <div class="slider-wrapper" >
            <div class="slider">
                <img src="/images/image-product-1.jpg"  alt="">
                <div>
                    <div class="slider-image" > <img src="/images/image-product-1.jpg" alt=""></div>
                    <div class="slider-image" style="display:none"> <img src="/images/image-product-2.jpg" alt=""></div>
                    <div class="slider-image" style="display:none"> <img src="/images/image-product-3.jpg" alt=""></div>
                    <div class="slider-image" style="display:none"> <img src="/images/image-product-4.jpg" alt=""></div>
                </div>
                    
            
               
                    <div class="thumbnail-wrapper">
                        <div class="thumbnails"><img src="/images/image-product-1-thumbnail.jpg" alt=""></div>
                        <div class="thumbnails"><img src="/images/image-product-2-thumbnail.jpg" alt=""></div>
                        <div class="thumbnails"><img src="/images/image-product-3-thumbnail.jpg" alt=""></div>
                        <div class="thumbnails"><img src="/images/image-product-4-thumbnail.jpg" alt=""></div>
                    </div>
            </div>
        </div> -->
    </main>
</template>

<script>
export default {
    name: 'MainMenu',
    data (){
        return {
            slideIndex: 1
        }
    },
    methods: {
        plusSlides(n){
            this.showSlides(this.slideIndex += n);
        },
        currentSlide(n){
            this.showSlides(this.slideIndex = n);
        },
        showSlides(n){
          let i;
          let slides = document.getElementsByClassName("slides");
          let dots = document.getElementsByClassName("thumbnails");
        //   let captionText = document.getElementById("caption");
          if (n > slides.length) {this.slideIndex = 1}
          if (n < 1) {this.slideIndex = slides.length}
          console.log(this.slideIndex);

          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";
              // slides[i].style.display = "inline";
          }
          for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[this.slideIndex-1].style.display = "block";
          // slides[slideIndex-1].style.display = "inline";
          dots[this.slideIndex-1].className += " active";
        //   captionText.innerHTML = dots[this.slideIndex-1].alt;
        }
    },
    mounted() {
         this.showSlides(this.slideIndex);
    }
//     var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("slides");
//   var dots = document.getElementsByClassName("slide-thumbnail");
//   var captionText = document.getElementById("caption");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   console.log(slideIndex);

//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//       // slides[i].style.display = "inline";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   // slides[slideIndex-1].style.display = "inline";
//   dots[slideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideIndex-1].alt;
// }
}
</script>
<style scoped>
    body {
  font-family: Arial;
  margin: 0;
}

* {
  box-sizing: border-box;
}

img {
  vertical-align: middle;
}

.container {
  background: red;
    position: fixed;
    /* top: 70px;
    left: -150px; */
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
    padding: 20px 0;
    transition: all 0.5s ease;
  
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

/* .holder {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
} */

.holder::-webkit-scrollbar {
  display: none;
}

/* Hide the images by default */
.slides {
  display: none;
  /* max-width: 1000px; */
  /* width: 100%;
  flex-shrink: 0;
  height: 100%; */
}

.slides img {
   width: 30%;
    height: auto;
    border-radius: 5px;
}

/* Smartphones (portrait and landscape) ----------- */
@media only screen and (max-width: 600px) {
  .prevContainer,
  .nextContainer {
    display: none;
    visibility: hidden;
  }
}

.prevContainer,
.nextContainer {
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 50%;
  transform: translate(0, calc(-50% - 54px));
  height: 54px;
  width: 54px;
  cursor: pointer;
}

.prevContainer {
  margin-left: 26px;
  left: 0;
  border-radius: 30px 0 0 30px;
}

.prev {
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
  height: 34px;
  width: 32px;
  float: left;
  margin-left: 12px
}

.prev svg,
.next svg {
  fill: white;
}

.nextContainer {
  margin-right: 26px;
  right: 0;
  border-radius: 0 30px 30px 0;
}

/* .next {
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
  height: 34px;
  width: 32px;
  float: right;
  margin-right: 12px;
} */

/* Container for image text */
.caption-container {
  text-align: left;
  background-color: #222;
  padding: 2px 16px;
  color: white;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Six columns side by side */
.column {
  /* float: left; */
  width: 25%;
}

/* Add a transparency effect for thumbnail images */
.slide-thumbnail {
  width: 100%;
    display:grid; 
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-content: center;
    gap: 20px;
    opacity: 0.6;
}


.thumbnails:hover {
  /* opacity: 0.6; */
}
.active.thumbnails{
    opacity: 0.4;
}
.active.thumbnails img{
    /* opacity: 0.4; */
    border: 2px solid hsl(26, 97%, 50%)
;
}
</style>