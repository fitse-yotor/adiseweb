import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/dashboard/dashboard.vue')
      },
      {
        path: '/products',
        name: 'products',
        component: () => import('../views/dashboard/productView.vue'),
      },
      {
        path: '/suppliers',
        name: 'suppliers',
        component: () => import('../views/dashboard/suppliers/suppliers.vue')
      },
      {
        path: '/categories',
        name: 'categories',
        component: () => import('../views/dashboard/category/categories.vue')
      },
      {
        path: '/products/:id',
        name: 'ProductDetails',
        props: true,
        component: () => import('../views/dashboard/products/product_details.vue')
      },
      {
        path: '/orders',
        name: 'orders',
        props: true,
        component: () => import('../views/dashboard/orders/ordersList.vue')
      },

      {
        path: '/orders/:id',
        name: 'orderDetails',
        props: true,
        component: () => import('../views/dashboard/orders/orderDetails.vue')
      },

    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
