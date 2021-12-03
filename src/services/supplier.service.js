import axios from "./api.service";
import { error, info } from './logger.service'

export default {
  getSuppliers: async function() {
    try {
      let response = await axios.get(`supplier`).catch(function(error) {
        console.log(error);
        info(error)
      });
      return response;
    } catch (e) {
      error(e)
    }
  },

  updateSupplier: async function(supplier) {
    return await axios.put("supplier/" + supplier.id, supplier);
  },

  addSuppliers: async function(supplier) {
    console.log(supplier)

    return await axios.post("supplier", supplier);
  },
  deleteSupplier: async function (id) {
    return await axios.delete("supplier/" + id.toString())
  }
}
