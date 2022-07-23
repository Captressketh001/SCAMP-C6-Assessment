<template>
    <main>
        <div class="image-box">
            <img src="/images/icon-previous.svg" alt="prev" class="previous" @click="plusSlides(-1)">
            <img src="/images/image-product-1.jpg" alt="product-1" class="slides">
            <img src="/images/image-product-2.jpg" alt="product-2" class="slides">
            <img src="/images/image-product-3.jpg" alt="product-3" class="slides">
            <img src="/images/image-product-4.jpg" alt="product-4" class="slides">
             <img src="/images/icon-next.svg" alt="next" class="next" @click="plusSlides(1)">
            <div class="thumbnail-wrapper">
                <div class="thumbnails" @click="currentSlide(1)"><img src="/images/image-product-1-thumbnail.jpg" alt="thumbnail-1"></div>
                <div class="thumbnails" @click="currentSlide(2)"><img src="/images/image-product-2-thumbnail.jpg" alt="thumbnail-2"></div>
                <div class="thumbnails" @click="currentSlide(3)"><img src="/images/image-product-3-thumbnail.jpg" alt="thumbnail-3"></div>
                <div class="thumbnails" @click="currentSlide(4)"><img src="/images/image-product-4-thumbnail.jpg" alt="thumbnail-4"></div>
            </div>
        </div>
        <div class="description-wrapper" v-for="(product,ix) in products" :key="ix">
            <div class="description-info">
                <p class="header">Sneaker Company</p>
                <h1>Fall Edition Limited Sneakers</h1>
                <p>These low-profile sneakers are your perfect casual wear companion.
                    Featuring a durable rubber outer sole, they'll withstand everything the weather can offer</p>
            </div>
            <div class="description-price">
                <div style="">
                    <h1>${{product.discounted_price}}.00</h1>
                    <p>50%</p>
                </div>
                
                <s>${{product.price}}.00</s>
            </div>
            
            
            <div class="description-action-wrapper">
                <div class="description-action" style="">
                   
                    <p  @click="decreaseItem"> <img src="/images/icon-minus.svg" alt="minus-icon"></p>
                    <p > {{ counter }} </p>
                    <p @click="increaseItem"> <img src="/images/icon-plus.svg" alt="plus-icon"></p>
                </div>
                <div class="description-button" style="">
                    <button style="" @click="addProductToCart(product)"><img src="/images/icon-cart-white.svg" alt="cart"> Add to cart</button>
                </div>
            </div>
            
        </div>
        
    </main>
</template>

<script>
export default {
    name: 'MainMenu',
    data (){
        return {
            slideIndex: 1,
        }
    },
    computed:{
        products(){
         return this.$store.state.products
        },
        counter(){
          return this.$store.state.counter
        },
    },
    methods: {
      increaseItem(){
        this.$store.dispatch('increaseItem')
      },
       decreaseItem(){
        this.$store.dispatch('decreaseItem')
      },
      addProductToCart(products){
        this.$store.dispatch('addProductToCart', products)
      },
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
          if (n > slides.length) {this.slideIndex = 1}
          if (n < 1) {this.slideIndex = slides.length}
          console.log(this.slideIndex);

          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";
          }
          for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[this.slideIndex-1].style.display = "block";
          dots[this.slideIndex-1].className += " active";
        }
    },
    mounted() {
         this.showSlides(this.slideIndex);
    },
    created(){
      this.$store.dispatch('fetchProducts')
    }
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
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
    padding: 20px 0;
    transition: all 0.5s ease;
  
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}
.holder::-webkit-scrollbar {
  display: none;
}

/* Hide the images by default */
.slides {
  display: none;
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
.thumbnails:hover{
  cursor: pointer;
  opacity: 0.5;
}
.active.thumbnails{
    opacity: 0.3;
}
.active.thumbnails img{
    border: 2px solid hsl(26, 97%, 50%)
;
}
</style>