import productService from "../services/product.service"
import { info } from '../services/logger.service'

export default {
    namespaced: true,
    state: {
        products: [],
        product: {},
        productImages: []
    },

    mutations: {
        setProducts(state, payload){
            state.products = payload
        },
        setProduct(state, payload){
            state.productImages = payload.images.toString().split(';')
            state.product = payload
        },
        setProductCategory(state, payload){
            state.product.Category = payload
            state.product.CategoryId = payload.id
        },
        setProductSupplier(state, payload){
            state.product.Supplier = payload
            state.product.SupplierId = payload.id
        },
        setProductPrice(state, payload){
            state.product.price = payload
        },
        setProductDescription(state, payload){
            state.product.description = payload
        },
        setProductAvailable(state, payload){
            state.product.available = payload
        },
        setProductName(state, payload){
            state.product.name = payload
        },
        setProductStock(state, payload){
            state.product.stock = payload
        },
        setProductUOM(state, payload){
            state.product.uom = payload
        },
        setProductCode(state, payload){
            state.product.code = payload
        },
    },

    getters: {
        getProducts: (state) => {return state.products }
    },

    actions: {
        
        async getProducts(context, filter){
            await productService.getProducts(filter).then( (res) => {
                console.log(res)
                        context.commit('setProducts', res.data)
                    })
        },

        async getProductDetails(context, id){
            var response = await productService.getProductDetails(id)
            context.commit('setProduct', response.data)
            return response.data;
        },

        async addProduct(context, data){
            
            await productService.addProducts(data).then( (res) => {
                info(res.data)
            })
            await productService.getProducts().then( (res) => {
                context.commit('setProducts', res.data)
            })
        },

        async updateProduct(context, data){
            delete data['Category']
            delete data['Supplier']

            await productService.updateProducts(data).then( (res) => {
                info(res.data)
            })
            await productService.getProductDetails(data.id).then( (res) => {
                        context.commit('setProduct', res.data)
                    })
        },

        async deleteProduct(context, id){
            await productService.deleteProduct(id).then( (res) => {
                res
                info(`Successfully deleted product with id ${id}`)
            })
            await productService.getProducts().then( (res) => {
                context.commit('setProducts', res.data)
            })
        },


        async productImageUpload(context, data){

            await productService.imageUpload(data);
        }
    }
}