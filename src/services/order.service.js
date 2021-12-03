import axios from "./api.service";
import { error, info } from './logger.service'

export default {
  getOrders: async function() {
    try {
      let response = await axios.get(`orders`).catch(function(error) {
        console.log(error);
        info(error)
      });
      return response;
    } catch (e) {
      error(e)
    }
  },

  getOrderDetails: async function(id) {
    try {
      let response = await axios.get(`orders/` + id).catch(function(error) {
        console.log(error);
        info(error);
      });
      return response;
    } catch (e) {
      error(e);
    }
  },

  addOrder: async function(product) {
    return await axios.post("orders", product);
  },
  deleteOrder: async function (id) {
    return await axios.delete("orders/" + id.toString()+'/')
  }
}
