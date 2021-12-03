<template>
  <div class="mainacontainer">
    <v-container>

      <div class="mainrow">
            <div v-for="image in this.productImages" :key="image">
              <!-- {{ "http://localhost:3000/" + image}} -->
                <v-img class="productimage" :lazy-src="'http://localhost:3000/' + image"></v-img>
            </div>
          </div>

      <template>
          <div class="container" style="margin: 3vh;">
              <label>
                <input type="file" @change="handleFileUpload( $event )"/>
              </label>
          </div>
        </template>

      <v-row>
        <v-col cols="4">
          <v-combobox
            v-model="supplier"
            :items="this.suppliers"
            item-text="fname"
            item-value="id"
            label="Pick a supplier"
            @change="supplierSelected"
            chips
          >
            <template v-slot:selection="data">
              <v-chip
                :key="JSON.stringify(data.item)"
                v-bind="data.attrs"
                :input-value="data.selected"
                :disabled="data.disabled"
                @click:close="data.parent.selectItem(data.item)"
              >
                <v-avatar
                  class="accent white--text"
                  left
                  v-text="data.item.fname.slice(0, 1).toUpperCase()"
                ></v-avatar>
                {{ data.item.fname + " " + data.item.lname }}
              </v-chip>
            </template>
          </v-combobox>
        </v-col>

        <v-col cols="4">
          <v-combobox
            v-model="category"
            :items="this.categories"
            item-text="name"
            item-value="id"
            label="Pick a category"
            chips
          >
            <template v-slot:selection="data">
              <v-chip
                :key="JSON.stringify(data.item)"
                v-bind="data.attrs"
                :input-value="data.selected"
                :disabled="data.disabled"
                @click:close="data.parent.selectItem(data.item)"
              >
                <v-avatar
                  class="accent white--text"
                  left
                  v-text="data.item.name.slice(0, 1).toUpperCase()"
                ></v-avatar>
                {{ data.item.name }}
              </v-chip>
            </template>
          </v-combobox>
        </v-col>

          <v-col cols="6">
            <v-text-field
              label="Product name*"
              v-model="name"
              required
              dense
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="6">
            <v-text-field
              v-model="description"
              label="Description"
              required
              dense
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="6">
            <v-text-field
              v-model="code"
              label="Product Code"
              required
              dense
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              type="number"
              v-model="price"
              label="Price"
              required
              dense
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="6">
            <v-text-field
              type="number"
              v-model="stock"
              label="Stock"
              required
              dense
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="6">
            <v-text-field
              type="text"
              v-model="uom"
              label="Unit of Measure"
              required
              dense
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="6">
          <v-switch
            v-model="available"
            :label="`Available`"
          ></v-switch>
     </v-col>
     
      </v-row>

      <!-- <v-col cols="4"> -->
      <v-btn
        @click="localUpdate()"
        class="primary"
        style="width: 50%; margin-top: 5%"
      >
        Update
      </v-btn>
      <!-- </v-col> -->
    <br />

    </v-container>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState("products", ["product"]),
    ...mapState("suppliers", ["suppliers"]),
    ...mapState("categories", ["categories"]),

    price: {
      get() {
        return this.$store.state.products.product.price;
      },
      set(value) {
        this.$store.commit("products/setProductPrice", value);
      },
    },

    productImages: {
      get() {
        return this.$store.state.products.productImages;
      },

    },

    name: {
      get() {
        return this.$store.state.products.product.name;
      },
      set(value) {
        this.$store.commit("products/setProductName", value);
      },
    },
    uom: {
      get() {
        return this.$store.state.products.product.uom;
      },
      set(value) {
        this.$store.commit("products/setProductUOM", value);
      },
    },
    stock: {
      get() {
        return this.$store.state.products.product.stock;
      },
      set(value) {
        this.$store.commit("products/setProductStock", value);
      },
    },
    category: {
      get() {
        return this.$store.state.products.product.Category;
      },
      set(value) {
        this.$store.commit("products/setProductCategory", value);
      },
    },
    description: {
      get() {
        return this.$store.state.products.product.description;
      },
      set(value) {
        this.$store.commit("products/setProductDescription", value);
      },
    },
    code: {
      get() {
        return this.$store.state.products.product.code;
      },
      set(value) {
        this.$store.commit("products/setProductCode", value);
      },
    },
    available: {
      get() {
        return this.$store.state.products.product.available;
      },
      set(value) {
        this.$store.commit("products/setProductAvailable", value);
      },
    },
    supplier: {
      get() {
        return this.$store.state.products.product.Supplier;
      },
      set(value) {
        this.oldsupplier = this.$store.state.products.product.Supplier
        this.$store.commit("products/setProductSupplier", value);
      },
    },

    baseurl: {
      get() {
          return process.env.VUE_APP_BASE_URL
      }
    }
  },

  data() {
    return {
      files: [],
      file: "",
      oldsupplier: undefined
    };
  },
  mounted() {
    this.getProductDetails(this.$route.params.id);
    this.getSuppliers();
    this.getCategory();
  },
  methods: {
    ...mapActions("products", ["getProductDetails", "updateProduct", "productImageUpload"]),
    ...mapActions("suppliers", ["getSuppliers", "updateSupplier"]),
    ...mapActions("categories", ["getCategory"]),

    async supplierSelected(){
      await this.localUpdate()
    },

    handleFileUpload( event ){
      this.file = event.target.files[0];
      console.log("File choosen")
      this.submitFile()
    },

    submitFile(){
      console.log("Submiting")

        let formData = new FormData();
        formData.append('avatar', this.file);
        this.productImageUpload({
          file: formData,
          id: this.product.id,
        })
    },

    async localUpdate() {
      //  console.log(this.product)
      
      await this.updateProduct(this.product);
      // await this.getProductDetails(this.$route.params.id);
    },
  },
};
</script>


<style>
.productimage {
  background-color: white;
  width: 35vh;
  height: 35vh;
  border-radius: 2vh;
  margin-right: 5vw;
}

.mainrow {
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: auto;
  margin-bottom: 5vh;
}
</style>