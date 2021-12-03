import categoryService from "../services/category.service"
import { info } from '../services/logger.service'

export default {
    namespaced: true,

    state: {
        categories: []
    },

    mutations: {
       setCategories(state, payload){
           state.categories = payload;
       }
    },

    getters: {

    },

    actions: {
        
        async getCategory(context){
            await categoryService.getCategory().then( (res) => {
                console.log(res)
                        context.commit('setCategories', res.data)
                    })
        },

        async addCategory(context, data){
            
            await categoryService.addCategory(data).then( (res) => {
                info(res.data)
            })
            await categoryService.getCategory().then( (res) => {
                context.commit('setCategories', res.data)
            })
        },

        async deleteCategory(context, id){
            await categoryService.deleteCategory(id).then( (res) => {
                res
                info(`Successfully deleted product with id ${id}`)
            })
            await categoryService.getCategory().then( (res) => {
                context.commit('setCategories', res.data)
            })
        }

    }
}