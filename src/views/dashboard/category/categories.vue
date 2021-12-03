<template>
  <div>
    <!-- Dialog start -->
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn outlined small color="primary" dark v-bind="attrs" v-on="on">
            Add Category
          </v-btn>
        </template>
        <v-card >
          <v-card-title>
            <span class="text-h5">Add Category</span>
          </v-card-title>
          <v-card-text>
            <!-- something -->
            <v-container>
              <v-row>
                <v-col cols="12" >
                  <v-text-field
                    label="Category name*"
                    required
                    v-model="category.name"
                  ></v-text-field>
                </v-col>
                
                <v-col cols="12">
                  <v-text-field v-model="category.description" label="Description" required></v-text-field>
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
            <v-btn color="blue darken-1" text @click="localaddcategory()">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    <!-- Dialog end -->

    <!-- Table -->
    <v-container>
      <v-data-table
      :headers="headers"
      :items="categories"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:item.active="{ item }">
        <v-chip :color="getColor(item.active)" dark small>
          <b> {{ item.active }} </b>
        </v-chip>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-row>
          <v-btn text x-small color="green">
            <v-icon color="green" small>mdi-details</v-icon>
          </v-btn>

          <v-btn text x-small color="red">
            <v-icon small color="red" @click="localDeleteProduct(item.id)">mdi-delete</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-data-table>
    </v-container>
    <!-- End table -->

  </div>
</template>


<script>
import header from "@/constants/headers/category.header.js";
import { mapActions, mapState } from "vuex";

export default {
  name: "categoriesList",

  computed: {
    ...mapState("categories", ["categories"]),
  },
  mounted() {
    this.getCategory();
  },
  methods: {
    ...mapActions("categories", ["getCategory","addCategory","deleteCategory"]),

    getColor(value) {
      return value ? "green" : "red";
    },

    localaddcategory(){
      this.addCategory(this.category)
    },

    async localDeleteProduct(id){
       this.$confirm(
        {
          message: `Are you sure you want to delete this product?`,
          button: {
            no: 'No',
            yes: 'Yes'
          },
          callback: confirm => {
            if (confirm) {
              // ... do something
              console.log("Yes")
              this.deleteCategory(id)
            }
          }
        }
      )

    }
  },
  data() {
    return {
      headers: header,
      dialog: false,
      desserts: [],
      category: {
        name: "",
        description: "",
        active: false,
      }
    };
  },
};
</script>