<template>
  <header>
    <ul>
      <li class="icon-menu" @click="openMenu">
        <img src="/images/icon-menu.svg" alt="menu" />
      </li>
      <li class="logo"><img src="/images/logo.svg" alt="logo" /></li>
      <li class="menus">Collections</li>
      <li class="menus">Men</li>
      <li class="menus">Women</li>
      <li class="menus">About</li>
      <li class="menus menu">Contact</li>
      <li class="shopping-cart">
        <img src="/images/icon-cart.svg" alt="cart" @click="showCart" />
        <span v-show="this.$store.getters.cartLength > 0">{{$store.getters.cartQuantity}}</span>
      </li>
      <li class="image-avatar">
        <img src="/images/image-avatar.png" alt="avatar" /> 
      </li>
    </ul>
    <div class="wrapper" v-show="show">
      <!--Top menu -->
      <div class="sidebar">
        <ul>
          <li>
            <img src="/images/icon-close.svg" alt="close" @click="closeMenu" />
          </li>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      
        </div>
        <div class="cart-wrapper" v-show="cartvisible  && this.$store.getters.cartLength > 0">
        <div class="cart"  v-for="(product, ix) in products" :key="ix">
          <h3>Cart</h3>
          <div 
            style="
              display: flex;
              padding: 0rem 1.4rem;
              align-items: center;
              justify-content: space-between;
            "
          >
            <img
              class="img-thumb"
              src="/images/image-product-1-thumbnail.jpg"
              alt="thumbnail"
            />
            <div style="">
              <p style="margin: 0">{{product.title}}</p>
              <p style="margin: 0">${{product.discounted_price}}.00 x {{product.quantity}} <b>${{total}}.00</b></p>
            </div>
            <img src="/images/icon-delete.svg" alt="delete" style="height: 17px" @click="removeProduct(product)" />
          </div>
          <div class="checkout-button" style="padding: 1.4rem 1.4rem 0">
            <button style="width: 100%">Checkout</button>
          </div>
      </div>
    </div>
     <div class="cart-wrapper" v-show="cartvisible && this.$store.getters.cartLength < 1">
        <div class="cart" style="height:172px">
          <h3>Cart</h3>
          <div 
            style=    "display: flex; 
    align-items: center;
    justify-content: center;
    height: 95px;
    font-weight: 900;"

          >
            
            <div style="">
              <p style="margin: 0">Your cart is empty</p>
            </div>
          </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "topmenu",
  data() {
    return {
      show: false,
      cartvisible: false,
    };
  },
  computed:{
   
    products(){
      return this.$store.getters.cartProducts
    },
    total(){
      return this.$store.getters.cartTotal
    }
  },
  methods: {
    openMenu() {
      this.show = true;
    },
    closeMenu() {
      this.show = false;
    },
    showCart() {
      if (this.cartvisible == true) {
        this.cartvisible = false;
      } else {
        this.cartvisible = true;
      }
    },
    removeProduct(product){
        this.$store.getters.cartProducts.forEach((i, index) => {
            if (i.id == product.id) {
             this.$store.state.cart.splice(index, 1)            
            }
        })
    }
  }
}
</script>
<style>
</style>