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
           <li class="shopping-cart"><img src="/images/icon-cart.svg" alt=""></li>
           <li class="image-avatar"><img src="/images/image-avatar.png" alt=""></li>
       </ul>
        <div class="wrapper" v-show="show == true" >
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
    </header>
    
</template>
<script>
export default {
    name: 'topmenu',
    data (){
        return{
            show: false
        }
    },
    methods: {
        openMenu(){
            this.show = true
        },
        closeMenu(){
             this.show = false
        }
    }
}
</script>
<style>

</style>