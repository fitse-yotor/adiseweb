import supplierService from "../services/supplier.service"
import { info } from '../services/logger.service'

export default {
    namespaced: true,
    state: {
        suppliers: []
    },

    mutations: {
        setSuppliers(state, payload){
            state.suppliers = payload
        }
    },

    getters: {
        getSuppliers: (state) => {return state.suppliers }
    },

    actions: {
        
        async getSuppliers(context){
            await supplierService.getSuppliers().then( (res) => {
                        context.commit('setSuppliers', res.data)
                    })
        },

        async addSuppliers(context, data){
            
            await supplierService.addSuppliers(data).then( (res) => {
                info(res.data)
            })
            await supplierService.getSuppliers().then( (res) => {
                context.commit('setSuppliers', res.data)
            })
        },

        async updateSupplier(context, data){
            await supplierService.updateSupplier(data).then( (res) => {
                info(res.data)
            })
            await supplierService.getSuppliers().then( (res) => {
                context.commit('setSuppliers', res.data)
            })
        },

        async deleteSupplier(context, id){
            await supplierService.deleteSupplier(id).then( (res) => {
                res
                info(`Successfully deleted supplier with id ${id}`)
            })
            await supplierService.getSuppliers().then( (res) => {
                context.commit('setSuppliers', res.data)
            })
        }
    }
}