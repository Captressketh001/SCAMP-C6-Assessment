<template>
  <nav>
    <div>
        <img src="/images/icon-menu.svg" alt="menu" style="display:none"/>
        <img src="/images/logo.svg" alt="logo" />
    </div>
    <ul>
      <li class="menus">Collections</li>
      <li class="menus">Men</li>
      <li class="menus">Women</li>
      <li class="menus">About</li>
      <li class="menus">Contact</li>
    </ul>
    <div>
        <img src="/images/icon-cart.svg" alt="cart" @click="showCart" />
        <img src="/images/image-avatar.png" alt="avatar" class="image"/>
    </div>
  </nav>
</template>
<style scoped>
nav{
    display: flex;
    width:80%;
    justify-content: space-around;
    height: auto;
    background: red;
    align-items: center;
    margin: 0 auto;
    flex-wrap: wrap;
}
nav ul{
    margin: 0;
    display: flex;
    list-style: none;
    flex: 1;
}
nav ul li{
     padding-right: 5px;
}
nav ul li.menus:hover{
    border-bottom: 5px solid #fff;
   
}
.image{
    height: 30px; 
    width:30px;
}
@media screen and(max-width:768px){
    nav ul{
        display:none;
    }
}

</style>