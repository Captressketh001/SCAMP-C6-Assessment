<template>
    <main>
        <div class="image-box">
            <img src="/images/image-product-1.jpg" alt="">
            <div class="thumbnail-wrapper">
                <div class="thumbnails"><img src="/images/image-product-1-thumbnail.jpg" alt=""></div>
                <div class="thumbnails"><img src="/images/image-product-2-thumbnail.jpg" alt=""></div>
                <div class="thumbnails"><img src="/images/image-product-3-thumbnail.jpg" alt=""></div>
                <div class="thumbnails"><img src="/images/image-product-4-thumbnail.jpg" alt=""></div>
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
                    <button style="">Add to cart</button>
                </div>
            </div>
            
        </div>
    </main>
</template>

<script>
export default {
    name: 'MainMenu',
}
</script>