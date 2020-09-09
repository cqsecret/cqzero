import Vue from 'vue'
import VueRouter from 'vue-router'
import Loading from '@/views/sign/Loading'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'loading',
    component: Loading,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('views/sign/Login')
      },
      {
        path: '/signup',
        name: 'signup',
        component: () => import('views/sign/Signup')
      }
    ]
  },
  {
    path: '/gender',
    name: 'gender',
    component: () => import('views/home/Gender'),
    children: [
      {
        path: 'category/:id',
        name: 'category',
        component: () => import('views/home/Category'),
      }
    ]
  },
  {
    path: '/products/:id',
    name: 'products',
    component: () => import('views/products/Products'),
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('views/products/Detail')
  },
  {
    path: '/cart',
    name: 'cat',
    component: () => import('views/cart/Cart')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('views/checkout/Checkout'),
    children: [
      {
        path: '/checkout',
        redirect: '/checkout/addresses'
      },
      {
        path: '/checkout/addresses',
        name: 'addresses',
        component: () => import('views/checkout/Addresses'),
        meta: { requireAuth: true, keepAlive: true },
      },
      {
        path: '/checkout/shipping',
        name: 'shipping',
        component: () => import('views/checkout/Shipping'),
        meta: { requireAuth: true, keepAlive: true },
      },
      {
        path: '/checkout/pay',
        name: 'pay',
        component: () => import('views/checkout/Pay'),
        meta: { requireAuth: true, keepAlive: true },
      }
    ]
  }

]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
