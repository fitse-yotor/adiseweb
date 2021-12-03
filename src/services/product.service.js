import axios from "./api.service";
import { error, info } from "./logger.service";

export default {
  getProducts: async function(filter) {
    
    try {
      let data = {
        params: filter,
      }
    console.log(data)

      let response = await axios
        .get(`products`, data)
        .catch(function(error) {
          console.log(error);
          info(error);
        });
      return response;
    } catch (e) {
      error(e);
    }
  },

  imageUpload: async function(data) {
    console.log("Uploading");

    axios.post("products/" + data.id + "/upload-avatar", data.file, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  getProductDetails: async function(id) {
    try {
      let response = await axios.get(`products/` + id).catch(function(error) {
        console.log(error);
        info(error);
      });
      return response;
    } catch (e) {
      error(e);
    }
  },

  addProducts: async function(product) {
    return await axios.post("products", product);
  },
  updateProducts: async function(product) {
    return await axios.put("products/" + product.id, product);
  },
  deleteProduct: async function(id) {
    return await axios.delete("products/" + id.toString() + "/");
  },
};
