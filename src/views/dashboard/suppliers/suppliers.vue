<template>
  <div>
    <!-- Dialog start -->
    <v-dialog v-model="dialog" persistent max-width="50%">
      <template v-slot:activator="{ on, attrs }">
        <v-btn outlined small color="primary" dark v-bind="attrs" v-on="on">
          Add Supplier
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Add Supplier</span>
        </v-card-title>
        <v-card-text>
          <!-- something -->
          <v-container>
            <v-row>
              <v-text-field
                style="margin-right: 100px"
                label="Supplier First Name*"
                required
                v-model="supplier.fname"
              ></v-text-field>

              <v-text-field
                v-model="supplier.lname"
                label="Supplier Last Name"
                required
              ></v-text-field>

              <v-col cols="12">
                <v-text-field
                  v-model="supplier.code"
                  label="Supplier Code"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  v-model="supplier.email"
                  label="Email"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  v-model="supplier.address"
                  label="Address"
                  required
                ></v-text-field>
              </v-col>

              <v-text-field
                style="margin-right: 100px"
                v-model="supplier.country"
                label="Country"
                required
              ></v-text-field>

              <v-text-field
                v-model="supplier.city"
                label="City"
                required
              ></v-text-field>

              <v-col cols="12">
                <v-text-field
                  v-model="supplier.phonenum"
                  label="Phone number"
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
          <v-btn color="blue darken-1" text @click="localaddsupplier()">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Dialog end -->

    <!-- Table -->
    <v-main>
      <v-container>
        <v-data-table
      :headers="headers"
      :items="suppliers"
      :items-per-page="5"
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
            <v-icon color="green" small>mdi-details</v-icon>
          </v-btn>

          <v-btn text x-small color="red">
            <v-icon small color="red" @click="localDeleteProduct(item.id)"
              >mdi-delete</v-icon
            >
          </v-btn>
        </v-row>
      </template>
    </v-data-table>
      </v-container>
    </v-main>
    <!-- End table -->
  </div>
</template>


<script>
import header from "@/constants/headers/supplier.header.js";
import { mapActions, mapState } from "vuex";

export default {
  name: "productsList",

  computed: {
    ...mapState("suppliers", ["suppliers"]),
  },
  mounted() {
    this.getSuppliers();
  },
  methods: {
    ...mapActions("suppliers", [
      "getSuppliers",
      "addSuppliers",
      "deleteSupplier",
    ]),

    getColor(value) {
      return value ? "green" : "red";
    },

    localaddsupplier() {
      this.addSuppliers(this.supplier);
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
            this.deleteSupplier(id);
          }
        },
      });
    },
  },
  data() {
    return {
      headers: header,
      dialog: false,
      desserts: [],
      supplier: {},
    };
  },
};
</script>