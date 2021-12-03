import orderService from "../services/order.service"
import { info } from '../services/logger.service'

export default {
    namespaced: true,

    state: {
        orders: [],
        order_details: {},
    },

    mutations: {
       setOrders(state, payload){
           state.orders = payload;
       },
       setOrderDetails(state, payload){
        state.order_details = payload
       },
       updateProductsInOrder(state, products){
           state.order_details.products = products
       }
    },

    getters: {

    },

    actions: {
        
        async getOrders(context){
            await orderService.getOrders().then( (res) => {
                console.log(res)
                        context.commit('setOrders', res.data)
                    })
        },

        async getOrderDetails(context, id){
            await orderService.getOrderDetails(id).then( (res) => {
                        context.commit('setOrderDetails', res.data)
                    })
        },

        async addOrder(context, data){
            
            await orderService.addOrder(data).then( (res) => {
                info(res.data)
            })
            await orderService.getOrders().then( (res) => {
                context.commit('setOrders', res.data)
            })
        },

        async deleteOrder(context, id){
            await orderService.deleteOrder(id).then( (res) => {
                res
                info(`Successfully deleted product with id ${id}`)
            })
            await orderService.getOrders().then( (res) => {
                context.commit('setOrders', res.data)
            })
        }

    }
}