<template>
<!--  -->
    <v-container>
        <productsList />
    </v-container>
</template>

<script>
import productsList from "./products/productsList.vue"
export default {
    components: {
        productsList
    }
}
</script>

<style scoped>

.product {
    height: 95vh;
    text-align: start;
}

</style>