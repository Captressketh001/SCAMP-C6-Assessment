const _products = [
    {"id": 1, "title":"Autumn Limited Edition...", "price": 250.00, "discounted_price": 125.00, "image":"images/image-product-1-thumbnail.jpg"}
]
export default {
    getProducts(cb){
        setTimeout(() => cb(_products),100)
    },
    buyProducts(products, cb, errorCb){
        setTimeout(() => {
            (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
            ?cb()
            :errorCb

        }, 100)
    }
}