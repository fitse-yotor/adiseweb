<template>
  <div>
    <!-- Dialog start -->
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn outlined small color="primary" dark v-bind="attrs" v-on="on">
          Add producy
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Add product</span>
        </v-card-title>
        <v-card-text>
          <!-- something -->
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Product name*"
                  required
                  v-model="product.name"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  v-model="product.description"
                  label="Description"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="product.code"
                  label="Product Code"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  type="number"
                  v-model="product.price"
                  label="Product Price in birr"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="localaddproduct()">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Dialog end -->

    <v-card>
      <v-card-title>Products</v-card-title>
      <v-card-subtitle>
        <v-row>
          <v-col cols="4">
            <v-text-field
              label="Search"
              required
              v-model="search"
              dense
              @input="searching"
            ></v-text-field>
          </v-col>

          <v-col cols="4">
            <v-combobox
              v-model="supplier"
              :items="this.suppliers"
              item-text="fname"
              item-value="id"
              label="Pick a supplier"
              @change="suppliersearching"
              dense
              clearable
            />
          </v-col>

          <v-col cols="4">
            <v-combobox
              v-model="category"
              :items="this.categories"
              item-text="name"
              item-value="id"
              label="Pick a category"
              @change="categorysearching"
              dense
              clearable
            />
          </v-col>
        </v-row>
      </v-card-subtitle>
      <v-card-text>
        <!-- Table -->
        <v-data-table
          :headers="headers"
          :items="products"
          :items-per-page="15"
          class="elevation-1"
        >
          <template v-slot:item.available="{ item }">
            <v-chip :color="getColor(item.available)" dark small>
              <b> {{ item.available }} </b>
            </v-chip>
          </template>

          <template v-slot:item.actions="{ item }">
            <v-row>
              <v-btn text x-small color="green">
                <v-icon color="green" @click="toDetails(item.id)" small
                  >mdi-details</v-icon
                >
              </v-btn>

              <v-btn text x-small color="red">
                <v-icon small color="red" @click="localDeleteProduct(item.id)"
                  >mdi-delete</v-icon
                >
              </v-btn>
            </v-row>
          </template>
        </v-data-table>
        <!-- End table -->
      </v-card-text>
    </v-card>
  </div>
</template>


<script>
import header from "@/constants/headers/product.header.js";
import { mapActions, mapState } from "vuex";

export default {
  name: "productsList",

  computed: {
    ...mapState("products", ["products"]),
    ...mapState("suppliers", ["suppliers"]),
    ...mapState("categories", ["categories"]),

    supplier: {
      get() {
        return this.$store.state.products.product.supplier;
      },
      set(value) {
        this.oldsupplier = this.$store.state.products.product.supplier
        this.$store.commit("products/setProductSupplier", value);
      },
    },

    category: {
      get() {
        return this.$store.state.products.product.category;
      },
      set(value) {
        this.$store.commit("products/setProductCategory", value);
      },
    },
  },
  mounted() {
    this.getProducts();
    this.getSuppliers();
    this.getCategory();
  },
  methods: {
    ...mapActions("products", ["getProducts", "addProduct", "deleteProduct"]),
    ...mapActions("suppliers", ["getSuppliers"]),
    ...mapActions("categories", ["getCategory"]),

    toDetails(id) {
      this.$router.push("/products/" + id.toString());
    },

    getColor(value) {
      return value ? "green" : "red";
    },

    localaddproduct() {
      this.addProduct(this.product);
    },

    suppliersearching(val){
        if(val != null){
          this.filter.filters.SupplierId = val.id
        } else {
          delete this.filter.filters.SupplierId
        }
        console.log(this.filter.filters)
      this.getProducts(this.filter);

    },

    categorysearching(val){
        if(val != null){
          this.filter.filters.CategoryId = val.id
        } else {
          delete this.filter.filters.CategoryId
        }
        console.log(this.filter.filters)
      this.getProducts(this.filter);

    },

    async localDeleteProduct(id) {
      this.$confirm({
        message: `Are you sure you want to delete this product?`,
        button: {
          no: "No",
          yes: "Yes",
        },
        callback: (confirm) => {
          if (confirm) {
            // ... do something
            console.log("Yes");
            this.deleteProduct(id);
          }
        },
      });
    },


    async searching(){
      this.filter.filters.name.$regex = this.search
      // console.log(this.filter)
      this.getProducts(this.filter);
    }
  },
  data() {
    return {
      headers: header,
      dialog: false,
      filter: {
        filters: {
          // name: {
          //   $regex: "",
          // },
          // CategoryId: "",
          // SupplierId: "",
        },
      },
      search: "",
      desserts: [],
      product: {
        name: "",
        code: "",
        description: "",
        available: false,
        viewprevprice: false,
      },
    };
  },
};
</script>