<template>
  <div class="mainview">
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-text-field
            label="Order Code"
            v-model="order_details.product_code"
            required
            dense
            outlined
            disabled
          ></v-text-field>
        </v-col>

        <v-col cols="6">
          <v-text-field
            label="Customer Name"
            v-model="order_details.customer_name"
            required
            dense
            outlined
            disabled
          ></v-text-field>
        </v-col>

        <v-col cols="6">
          <v-text-field
            label="Phone Number"
            v-model="order_details.customer_phonenum"
            required
            dense
            outlined
            disabled
          ></v-text-field>
        </v-col>

        <v-col cols="6">
          <v-text-field
            label="Customer address"
            v-model="order_details.customer_address"
            required
            dense
            outlined
            disabled
          ></v-text-field>
        </v-col>

        <v-col cols="6">
          <v-text-field
            label="Customer City"
            v-model="order_details.customer_city"
            required
            dense
            outlined
            disabled
          ></v-text-field>
        </v-col>

        <v-col cols="6">
          <v-text-field
            label="Discount Code"
            v-model="order_details.discount_code"
            required
            dense
            outlined
            disabled
          ></v-text-field>
        </v-col>

        <v-col cols="6">
          <v-text-field
            label="Total Cost"
            v-model="order_details.total_cost"
            required
            dense
            outlined
            disabled
          ></v-text-field>
        </v-col>

        <!-- {{ order_details.products }} -->
      </v-row>


      <div class="products">
        <v-card-title> Products </v-card-title>

        <v-row>
          <v-card
            v-for="product in order_details.products"
            :key="product.id"
            class="mr-10 ml-10 my-12"
            max-width="250"
          >
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img
              height="150"
              :src="'http://localhost:3000/' + product.images"
            ></v-img>

            <v-card-subtitle> 
              {{ product.name }}   <br />
              Price:  {{ product.price }}$   <br />
             Quantity:  {{ product.quantity }}
            </v-card-subtitle>
           
            <v-divider class="mx-4"></v-divider>

            <v-card-actions>
              <v-btn color="deep-purple lighten-2" text> View Details </v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState("order", ["order_details"]),
  },
  mounted() {
    this.initDetails();
  },
  methods: {
    ...mapActions("order", ["getOrderDetails"]),

    async initDetails() {
      await this.getOrderDetails(this.$route.params.id);
      var products = [];
      var temp_products = JSON.parse(
        this.$store.state.order.order_details.products
      );
      for (var i in temp_products) {
        var produc_details = await this.$store.dispatch(
          "products/getProductDetails",
          temp_products[i].id
        );
        if (produc_details.images != "") {
          produc_details.images = produc_details.images
            .toString()
            .split(";")[0];
        }
        produc_details.quantity = temp_products[i].quantity;
        products.push(produc_details);
      }
      this.$store.commit("order/updateProductsInOrder", products);
    },
  },
};
</script>

<style>
</style>