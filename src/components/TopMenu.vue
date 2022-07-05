<template>
    <header>
       <ul>
           <li class="icon-menu" @click="openMenu"><img src="/images/icon-menu.svg" alt=""></li>
           <li class="logo"><img src="/images/logo.svg" alt=""></li>
           <li class="menus">Collections</li>
           <li class="menus">Men</li>
           <li class="menus">Women</li>
           <li class="menus">About</li>
           <li class="menus menu">Contact</li>
           <li class="shopping-cart " ><img src="/images/icon-cart.svg" alt="" @click="showCart"></li>
           <li class="image-avatar"><img src="/images/image-avatar.png" alt=""></li>
       </ul>
        <div class="wrapper" v-show="show == true">
        <!--Top menu -->
            <div class="sidebar">
                <ul>
                    <li><img src="/images/icon-close.svg" alt="" @click="closeMenu"></li>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
    </div>
    <div class="cart-wrapper" v-show="cartvisible == true">
        <div class="cart">
            <h3>Cart</h3>
            <div style="display: flex;padding: 0rem 1.4rem;align-items: center;justify-content: space-between;" >
               <img class="img-thumb" src="/images/image-product-1-thumbnail.jpg" alt="">
               <div style="">
                   <p style="margin:0">Autumn Limited Edition...</p>
                   <p style="margin:0">$125.00 x 3 <b>$375.00</b></p>
               </div>
               <img src="/images/icon-delete.svg" alt="" style="height:17px">
            </div>
            <div class="checkout-button" style="padding: 1.4rem 1.4rem 0">
               <button style="width:100%; "> Checkout</button> 
            </div>
            
        </div>
    </div>
    </header>

    
</template>
<script>
export default {
    name: 'topmenu',
    data (){
        return{
            show: false,
            cartvisible: false
        }
    },
    methods: {
        openMenu(){
            this.show = true
        },
        closeMenu(){
             this.show = false
        },
        showCart(){
            if(this.cartvisible == true){
                this.cartvisible = false
            }
            else{
                this.cartvisible = true
            }

            
        },
    }
}
</script>
<style>

</style>