<template>
  <div>

    <v-card>
      <v-card-title>Orders</v-card-title>
      <v-card-text>
        <!-- Table -->
        <v-data-table
          :headers="headers"
          :items="orders"
          :items-per-page="15"
          class="elevation-1"
        >
          
          <template v-slot:item.actions="{ item }">
            <v-row>
              <v-btn text x-small color="green">
                <v-icon color="green" small @click="toDetails(item.id)"
                  >mdi-details</v-icon
                >
              </v-btn>

              <v-btn text x-small color="red">
                <v-icon small color="red" @click="localDeleteOrder(item.id)"
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
import { mapActions, mapState } from "vuex";
import header from "@/constants/headers/orders.header.js";


export default {

  data() {
    return {
      headers: header,
    }
  },

  computed: {
        ...mapState("order", ["orders"]),
  },

  mounted() {
    this.getOrders()
  },

  methods: {
        ...mapActions("order", ["deleteOrder", "getOrders", "addOrder"]),

        async localDeleteOrder(id) {
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
                this.deleteOrder(id);
              }
            },
          });
        },


    toDetails(id) {
      this.$router.push("/orders/" + id.toString());
    },


  }

}
</script>

<style>

</style>