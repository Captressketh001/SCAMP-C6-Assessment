import { createStore } from "vuex";

import shop from '@/api/shop'

// Vue.use(Vuex)

export default createStore ({
    state: {
        products: [],
        cart:[],
        counter: 0
    },
    getters:{
        cartProducts(state){
            return state.cart.map(cartItem =>{
                const product = state.products.find(product => product.id === cartItem.id)
                return {
                    title: product.title,
                    discounted_price: product.discounted_price,
                    quantity: cartItem.quantity
                }
            })
        },
        cartTotal(state,getters){
            // let total = 0
                
            // getters.cartProducts.forEach(product => {
                
            //   total  += product.price * product.quantity
            // })
            // return total
            return getters.cartProducts.reduce((total, product) => total + product.discounted_price * product.quantity, 0)
        },
        cartLength(state, getters){
            return getters.cartProducts.length
        },
        cartQuantity(state,getters){
            let qty = 0
            getters.cartProducts.forEach(product => {
                
                  qty =  product.quantity
                })
            return qty
        }
    },
    actions: {
        fetchProducts(context){
            return new Promise((resolve) =>{
                shop.getProducts(products => {
                    context.commit('setProducts', products)
                    resolve()
                })
            } )
        },
        increaseItem(context){
            context.commit('increaseCounter')
        },
        decreaseItem(context){
            context.commit('decreaseCounter')
        },
        addProductToCart(context, product){
            const cartItem = context.state.cart.find(item => item.id === product.id)
            if(!cartItem){
                context.commit('pushProductToCart', product.id)
            } else{
                context.commit('increaseItemQuantity', cartItem)
            }
        }
    },
    mutations:{
        setProducts(state, products){
            state.products = products
        },
        increaseCounter(state){
            state.counter += 1
        },
        decreaseCounter(state){
            state.counter -= 1
        },
        pushProductToCart(state, productId){
            state.cart.push({
                id:productId,
                quantity:1
            })
        },
        increaseItemQuantity(state, cartItem){
                cartItem.quantity++
        }
    },
})