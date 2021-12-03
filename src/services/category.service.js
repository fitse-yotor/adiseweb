import axios from "./api.service";
import { error, info } from './logger.service'

export default {
  getCategory: async function() {
    try {
      let response = await axios.get(`category`).catch(function(error) {
        console.log(error);
        info(error)
      });
      return response;
    } catch (e) {
      error(e)
    }
  },

  addCategory: async function(product) {
    return await axios.post("category", product);
  },
  deleteCategory: async function (id) {
    return await axios.delete("category/" + id.toString()+'/')
  }
}
